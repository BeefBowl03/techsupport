# Deploy to Vercel

## Quick Deploy Using Vercel Dashboard

1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Enter or select: `https://github.com/BeefBowl03/techsupport`
4. Click "Import"

## Configure Settings

### Environment Variables

In the "Environment Variables" section, add:

**Variable 1:**
- Name: `RESEND_API_KEY`
- Value: `re_X7b8ZSAB_Ktvx9bdJNRyhD8zLUKjUFu6Q`
- Check all environments (Production, Preview, Development)

**Variable 2:**
- Name: `RECIPIENT_EMAIL`
- Value: (Your email address where you want to receive submissions)
- Check all environments

### Build Settings

- Framework Preset: "Other"
- Build Command: (leave empty)
- Output Directory: (leave empty)

## Deploy

1. Click "Deploy"
2. Wait for deployment to complete
3. Your site will be live at: `https://techsupport-[random].vercel.app`

## After Deployment

### Update the Download Link

1. Get your guide file ready and upload it somewhere (Google Drive, Dropbox, etc.)
2. Go to your Vercel project
3. Click "Settings" → "Git" → "Deploy Hooks" or use the Vercel editor
4. Edit `api/submit-form.js` line 89
5. Replace `YOUR-GUIDE-DOWNLOAD-LINK-HERE` with your actual download link
6. Commit changes - Vercel will auto-deploy

### Test Your Form

1. Visit your live URL
2. Click "CLICK HERE"
3. Fill out the form
4. Check your email inbox!

## Update Code Without Git

You can edit files directly in Vercel:

1. Go to your project in Vercel dashboard
2. Click on "Files" tab or use "Edit Project" → "Source"
3. Make your edits
4. Vercel will automatically redeploy

## Need to Change Something?

All your project files are in the GitHub repo:
https://github.com/BeefBowl03/techsupport

Changes you make on GitHub will automatically trigger a new deployment on Vercel!

