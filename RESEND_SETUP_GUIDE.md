# Resend Email Setup Guide

## Quick Setup Checklist

### 1. Get Your Guide Ready
- [ ] Create your job post template (PDF, DOC, etc.)
- [ ] Upload it somewhere accessible online

### 2. Host Your File (Choose One)

#### Option A: Upload to Your Website
1. Put your guide in a public folder (e.g., `/public/job-template.pdf`)
2. Your link will be: `https://yourdomain.com/job-template.pdf`

#### Option B: Use Google Drive
1. Upload file to Google Drive
2. Right-click → Get link → Change to "Anyone with the link"
3. Copy the link
4. Change the end of the link:
   - From: `id=FILE_ID`
   - To: `export=download&id=FILE_ID`
   
**Example:**
```
https://drive.google.com/file/d/1ABC123XYZ/view?usp=sharing
```
**Becomes:**
```
https://drive.google.com/uc?export=download&id=1ABC123XYZ
```

#### Option C: Use Dropbox
1. Upload file to Dropbox
2. Get shareable link
3. Change `dl=0` to `dl=1` at the end

**Example:**
```
https://www.dropbox.com/s/abc123/template.pdf?dl=0
```
**Becomes:**
```
https://www.dropbox.com/s/abc123/template.pdf?dl=1
```

#### Option D: Use File Hosting Service
- Use services like Scribd, DocDroid, or WeTransfer

### 3. Update the Email Template

Open `api/submit-form.js` and find line 89:

```javascript
<a href="YOUR-GUIDE-DOWNLOAD-LINK-HERE" style="...">
```

Replace `YOUR-GUIDE-DOWNLOAD-LINK-HERE` with your actual link.

**Example:**
```javascript
<a href="https://drive.google.com/uc?export=download&id=1ABC123XYZ" style="...">
```

### 4. Deploy and Test

1. Deploy to Vercel
2. Add environment variables:
   - `RESEND_API_KEY` = `re_X7b8ZSAB_Ktvx9bdJNRyhD8zLUKjUFu6Q`
   - `RECIPIENT_EMAIL` = your email
3. Test the form submission
4. Check that the email delivers correctly

## Customizing the Email Content

### Change the Email Subject

Line 70 in `api/submit-form.js`:
```javascript
subject: 'Your Ultimate Job Post Template - Ana Mills',
```

### Change the Personal Greeting

Line 78:
```javascript
<h2>Hey ${name}!</h2>
```

### Customize the Message

Lines 80-86 - Edit the text:
```javascript
<p>Your custom message here...</p>
```

### Change the Branding Colors

The main color is green (`#10b981`). To change it:

**Find and replace in lines 73 and 88:**
```javascript
background-color: #10b981;  // Change this to your brand color
```

Popular colors:
- Blue: `#3b82f6`
- Purple: `#8b5cf6`
- Red: `#ef4444`
- Orange: `#f97316`

### Remove "Built with ConvertKit" Footer

Lines 107-110 - Delete or comment out:
```javascript
// <div style="background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280;">
//   <p>BUILT WITH</p>
//   <p style="margin-top: 10px;">ConvertKit</p>
// </div>
```

## Advanced: Using Your Own Email Domain

### Step 1: Verify Your Domain in Resend

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click "Add Domain"
3. Add your domain (e.g., `anamills.com`)
4. Add the DNS records they provide

### Step 2: Update the "From" Email

In `api/submit-form.js` line 68, change:
```javascript
from: 'onboarding@resend.dev',
```

To:
```javascript
from: 'noreply@yourdomain.com',
```

Do this in BOTH places (lines 40 and 68).

## Troubleshooting

### Email not sending?
- Check Vercel logs in the dashboard
- Verify environment variables are set
- Check your Resend API key is valid
- Make sure the email isn't going to spam

### Link not working?
- Test the link in your browser first
- Make sure the file hosting allows public downloads
- Check for typos in the URL

### Need help?
Check the Resend documentation: https://resend.com/docs

