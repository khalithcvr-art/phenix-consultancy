# Phenix Consultancy - Auto-Deploy Setup Guide

## Current Deployment Status ✅

- **Live URL:** https://superlative-baklava-ca94f8.netlify.app
- **Site ID:** 7b259824-d3de-4172-b58b-8c1b9b0cf789
- **Build Status:** Working
- **Build Command:** `npm run build`
- **Publish Directory:** `dist/public`

---

## Setting Up Auto-Deploys with GitHub

Auto-deploys will automatically build and deploy your site whenever you push code to GitHub.

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **New Repository** (top right corner)
3. Name it: `phenix-consultancy` (or your preferred name)
4. Description: "Phenix Consultancy - Precious Metal Refinery Consulting"
5. Choose **Public** or **Private** (your preference)
6. Click **Create Repository**

### Step 2: Push Code to GitHub

From your terminal in the Phenix-main directory:

```bash
cd /Users/expedia/CLAUDE\ CODE/Phenix-main

# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/phenix-consultancy.git

# Create initial commit
git add .
git commit -m "Initial commit: Phenix Consultancy website with 6 service pages"

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

### Step 3: Connect GitHub to Netlify

1. Go to your Netlify site dashboard:
   https://app.netlify.com/projects/superlative-baklava-ca94f8/

2. Click **Site Settings** → **Build & Deploy** → **Repository**

3. Click **Connect Repository**

4. Select **GitHub** as the provider

5. Search for and select `phenix-consultancy` (or your repo name)

6. Configure build settings:
   - **Base Directory:** Leave empty (root)
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist/public`
   - **Environment Variables:** None needed (optional)

7. Click **Deploy Site**

### Step 4: Verify Auto-Deploy Setup

Once connected:
- Every time you push to GitHub, Netlify automatically builds and deploys
- You can see deployment status in Netlify dashboard
- Failed builds will notify you via email

---

## Making Updates Going Forward

### To update the website:

```bash
# Make your changes locally
cd /Users/expedia/CLAUDE\ CODE/Phenix-main

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Your descriptive commit message"
git push origin main

# Netlify automatically deploys!
```

---

## Useful Netlify Dashboard Links

- **Main Dashboard:** https://app.netlify.com/projects/superlative-baklava-ca94f8/
- **Deploy History:** https://app.netlify.com/projects/superlative-baklava-ca94f8/deploys
- **Build Logs:** https://app.netlify.com/projects/superlative-baklava-ca94f8/deploys
- **Site Settings:** https://app.netlify.com/projects/superlative-baklava-ca94f8/settings

---

## Optional: Custom Domain Setup

1. Go to Netlify **Site Settings** → **Domain Management**
2. Click **Add Custom Domain**
3. Enter your domain (e.g., `phenix-consultancy.com`)
4. Follow DNS configuration instructions
5. Update your domain registrar's nameservers or DNS records

---

## Troubleshooting

### Build fails after push
- Check build logs: https://app.netlify.com/projects/superlative-baklava-ca94f8/deploys
- Common issues:
  - Missing dependencies: Run `npm install` locally and commit `package-lock.json`
  - Wrong build command: Should be `npm run build`
  - Environment variables: Check if `.env` is needed

### Site still showing old version
- Clear Netlify cache: Site Settings → Deploys → Clear Cache
- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

---

## Files Modified for Deployment

Created/Updated files:
- `netlify.toml` - Build and deployment configuration
- `NETLIFY_SETUP_GUIDE.md` - This file
- `.netlify/state.json` - Netlify site linking (auto-generated)

---

**Need help?** Contact your development team or consult Netlify's documentation:
- https://docs.netlify.com/
- https://docs.netlify.com/integrations/github/
