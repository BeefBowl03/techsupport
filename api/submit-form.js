// Vercel Serverless Function to handle form submissions

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email } = req.body;

    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Using Resend for email delivery
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL; // Your email to receive submissions
    
    if (!RESEND_API_KEY || !RECIPIENT_EMAIL) {
      console.error('Missing Resend credentials');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    // Send email notification to you (admin)
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: RECIPIENT_EMAIL,
        reply_to: email,
        subject: 'New Job Post Template Request',
        html: `
          <h2 style="color: #333;">New Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 14px;">This is a notification from your landing page form.</p>
        `,
      }),
    });

    if (!adminEmailResponse.ok) {
      const adminError = await adminEmailResponse.text();
      console.error('Failed to send admin email:', adminError);
      return res.status(500).json({ error: 'Failed to send email notification' });
    }

    // Send automated email to the user with the guide
    try {
      const userEmailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: email,
          subject: 'Your Ultimate Job Post Template',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #10b981; padding: 20px; text-align: center;">
                <span style="color: white; font-weight: bold; font-size: 18px;">ANA MILLS</span>
              </div>
              
              <div style="padding: 40px 20px; background-color: #ffffff;">
                <h2 style="color: #1f2937; margin-bottom: 20px;">Hey ${name}!</h2>
                
                <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
                  Thank you for requesting The Ultimate Job Post Template!
                </p>
                
                <p style="color: #4b5563; line-height: 1.6; margin-bottom: 30px;">
                  I'm excited to help you find your dream team member. This template is designed to save you time and help you hire the right candidate with ease.
                </p>
                
                <div style="background-color: #10b981; padding: 15px; margin: 30px 0; text-align: center; border-radius: 5px;">
                  <a href="YOUR-GUIDE-DOWNLOAD-LINK-HERE" style="color: white; text-decoration: none; font-weight: bold;">
                    DOWNLOAD YOUR FREE GUIDE
                  </a>
                </div>
                
                <p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin-top: 30px;">
                  <strong>What's Inside:</strong><br>
                  ✓ A proven job post template that attracts top talent<br>
                  ✓ Tips for writing compelling job descriptions<br>
                  ✓ Time-saving strategies to streamline your hiring process<br>
                  ✓ Best practices to help you hire the right candidate
                </p>
                
                <p style="color: #9ca3af; font-size: 12px; margin-top: 40px; text-align: center;">
                  We respect your privacy. You can unsubscribe at any time.
                </p>
              </div>
              
              <div style="background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280;">
                <p>BUILT WITH</p>
                <p style="margin-top: 10px;">ConvertKit</p>
              </div>
            </div>
          `,
        }),
      });

      if (!userEmailResponse.ok) {
        const userError = await userEmailResponse.text();
        console.error('Failed to send user email:', userError);
        console.error('Status:', userEmailResponse.status);
      } else {
        const userEmailData = await userEmailResponse.json();
        console.log('Customer email sent successfully:', userEmailData);
      }
    } catch (emailError) {
      console.error('Error sending customer email:', emailError.message);
    }

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}

