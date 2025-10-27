# Quick Setup Guide

## Step 1: Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project folder**:
   ```bash
   cd d:\anamils
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Press Enter to deploy
   - Press Enter to confirm (overwrite existing if needed)
   - The deployment will give you a URL like `https://your-project.vercel.app`

## Step 2: Add Environment Variables in Vercel

1. Go to your Vercel dashboard: https://vercel.com
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:

### Variable 1:
- **Key**: `RESEND_API_KEY`
- **Value**: `re_X7b8ZSAB_Ktvx9bdJNRyhD8zLUKjUFu6Q`
- **Environments**: Production, Preview, Development (check all)

### Variable 2:
- **Key**: `RECIPIENT_EMAIL`
- **Value**: Your email address (e.g., `ana@anamills.com`)
- **Environments**: Production, Preview, Development (check all)

5. Click **Save**

## Step 3: Redeploy

After adding environment variables, you need to redeploy:

1. Go to **Deployments** tab
2. Click the three dots (...) on the latest deployment
3. Click **Redeploy**

OR

Just make a small change to any file and push again, or run:
```bash
vercel --prod
```

## Step 4: Test Your Form

1. Visit your deployed URL
2. Click "CLICK HERE" button
3. Fill out the form with your name and email
4. Click "SEND ME THE GUIDE"
5. Check your inbox for the automated email!

## What Happens When Someone Submits the Form?

1. **You receive an email** with the person's name and email
2. **The user receives an automated email** thanking them (you can customize this in `api/submit-form.js`)
3. The modal shows a success message and closes after 3 seconds

## Customization

### Change the "From" Email Address

In `api/submit-form.js`, find these lines:
```javascript
from: 'onboarding@resend.dev',
```

You can keep using `onboarding@resend.dev` for testing, but to send from your own domain:
1. Verify your domain in Resend dashboard
2. Change `onboarding@resend.dev` to `noreply@yourdomain.com`

### Add a Download Link

In the automated email template (around line 88-92), replace the `href="#"` with your actual guide download link:
```javascript
<a href="https://your-website.com/path-to-your-guide.pdf" style="color: white; text-decoration: none; font-weight: bold;">
  DOWNLOAD YOUR FREE GUIDE
</a>
```

### Customize Images

In `index.html`, you can replace the placeholder images:
- Line ~23: Background image
- Line ~170: Image in the modal

### Change Colors

Search for `green-600` in `index.html` and replace with your preferred Tailwind color.

## Troubleshooting

### Emails not sending?

1. Check that environment variables are set in Vercel
2. Check Vercel function logs: Go to Deployments → Click deployment → View Function Logs
3. Make sure RESEND_API_KEY is correct
4. Make sure RECIPIENT_EMAIL is your actual email

### Need to test locally?

```bash
vercel dev
```

This will run the project locally on `http://localhost:3000`

## Support

If you run into issues, check:
- Vercel deployment logs
- Resend dashboard for email delivery status
- Browser console for frontend errors

