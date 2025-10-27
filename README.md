# Job Post Template Landing Page

A modern one-page website with email capture functionality, designed to match the provided design screenshots.

## Features

- ✅ Beautiful landing page with modal popup
- ✅ Responsive design (desktop & mobile)
- ✅ Form submission handling via Vercel serverless functions
- ✅ Email notification system (configurable)
- ✅ Smooth animations and user-friendly interface

## Setup & Deployment

### 1. Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy the project**:
   ```bash
   vercel
   ```
   
   Or simply connect your GitHub repo to Vercel for automatic deployments.

### 2. Configure Email Service

You need to choose ONE of the following email service options:

#### Option A: Resend (Recommended - Easiest)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY` - Your Resend API key
   - `RECIPIENT_EMAIL` - Your email address to receive submissions

#### Option B: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Verify a sender email
4. Add environment variables in Vercel dashboard:
   - `SENDGRID_API_KEY` - Your SendGrid API key
   - `SENDGRID_VERIFIED_SENDER` - Your verified sender email
   - `RECIPIENT_EMAIL` - Your email address to receive submissions

#### Option C: ConvertKit
1. Sign up at [convertkit.com](https://convertkit.com)
2. Create a form and get the form ID
3. Get your API key
4. Add environment variables in Vercel dashboard:
   - `CONVERTKIT_API_KEY` - Your ConvertKit API key
   - `CONVERTKIT_FORM_ID` - Your form ID
   - `RECIPIENT_EMAIL` - Your email address to receive submissions

### 3. Enable Email Integration

After choosing an email service, you need to:

1. Open `api/submit-form.js`
2. Uncomment the code block for your chosen email service
3. Install necessary packages if needed:
   
   For SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```
   
   For ConvertKit/Resend: No extra packages needed (uses native fetch)

4. Redeploy to Vercel

### 4. Configure Domain (Optional)

If you want to use a custom domain:
1. Add your domain in Vercel project settings
2. Follow DNS configuration instructions
3. Update any hardcoded URLs if needed

## Environment Variables

Add these in your Vercel project settings under "Settings" → "Environment Variables":

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | (Resend only) Your Resend API key |
| `SENDGRID_API_KEY` | (SendGrid only) Your SendGrid API key |
| `SENDGRID_VERIFIED_SENDER` | (SendGrid only) Your verified sender email |
| `CONVERTKIT_API_KEY` | (ConvertKit only) Your ConvertKit API key |
| `CONVERTKIT_FORM_ID` | (ConvertKit only) Your form ID |
| `RECIPIENT_EMAIL` | Email address where you'll receive form submissions |

## Local Development

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run development server:
   ```bash
   vercel dev
   ```

3. Open http://localhost:3000

## Project Structure

```
.
├── index.html              # Main landing page
├── api/
│   └── submit-form.js     # Serverless function for form submission
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## Customization

### Update Images

Replace the placeholder images in `index.html`:
- Background image (line ~23): Update the Unsplash URL or use your own image
- Modal image (line ~170): Update the Unsplash URL or use your own image

### Update Colors

The main accent color is green (`bg-green-600`). To change it:
- Search and replace all instances of `green-600` with your desired color
- In Tailwind: `blue-600`, `purple-600`, `red-600`, etc.

### Update Text Content

- Main heading and content in `index.html`
- Modal title and form text

## Testing

1. Click the "CLICK HERE" button
2. Fill out the form with test data
3. Check your email for the submission

## Support

For issues or questions, contact [your-email].

