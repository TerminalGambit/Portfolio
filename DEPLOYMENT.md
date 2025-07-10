# Portfolio Deployment Guide

## GitHub Pages Deployment

This guide will help you deploy your Angular portfolio to GitHub Pages.

### Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. The portfolio project (already completed)

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `portfolio` (or any name you prefer)
4. Make sure it's set to **Public** (required for free GitHub Pages)
5. Do **NOT** initialize with README, .gitignore, or license (since we already have a local repository)
6. Click "Create repository"

### Step 2: Connect Your Local Repository to GitHub

Run these commands in your portfolio directory:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Deploy to GitHub Pages

Once your code is pushed to GitHub, run:

```bash
npm run deploy
```

This command will:
1. Build your portfolio for production with static output
2. Create a `gh-pages` branch
3. Deploy the built files to GitHub Pages

### Step 4: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select `gh-pages` branch and `/ (root)` folder
6. Click "Save"

### Step 5: Access Your Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

It may take a few minutes for the deployment to complete and the site to be accessible.

### Update and Redeploy

Whenever you make changes to your portfolio:

1. Make your changes
2. Commit them: `git add . && git commit -m "Your commit message"`
3. Push to main branch: `git push origin main`
4. Deploy: `npm run deploy`

### Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production (SSR)
- `npm run build:gh-pages` - Build for GitHub Pages (static)
- `npm run deploy` - Build and deploy to GitHub Pages

### Troubleshooting

**Issue: 404 errors when navigating directly to routes**

GitHub Pages doesn't support client-side routing by default. The current setup should work, but if you encounter issues, you may need to add a 404.html file that redirects to index.html.

**Issue: Assets not loading**

Make sure your repository name matches the base href in the build command. If your repo is named differently than "portfolio", update the `build:gh-pages` script in package.json.

**Issue: Build fails**

Check the GitHub Actions tab in your repository for detailed error logs. The most common issues are:
- CSS bundle size limits (already configured)
- Missing dependencies
- TypeScript errors

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the base href in the deployment script

### Security Note

Since this is a static site deployment, the contact form is non-functional. Consider integrating with services like:
- Formspree
- Netlify Forms
- EmailJS

The portfolio includes placeholder text indicating this limitation.
