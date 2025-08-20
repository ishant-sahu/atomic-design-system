# Dual Deployment Guide

This project is configured to deploy your React app to both GitHub Pages and production environments with different configurations.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Repository Settings

Make sure your repository has the following settings:

- **Repository visibility**: Public (required for free GitHub Pages)
- **Branch protection**: Consider protecting your main branch

### 3. Workflow Configuration

**GitHub Pages Deployment** (`.github/workflows/deploy.yml`):

- Trigger on pushes to `main` or `master` branch
- Builds your React app using `npm run build:github-pages`
- Deploys to GitHub Pages with base path `/atomic-design-system/`
- Automatically handles GitHub Pages routing

**Production Deployment** (`.github/workflows/deploy-production.yml`):

- Trigger on pushes to `production` branch or version tags
- Builds your React app using `npm run build:production`
- Creates build artifacts for production deployment
- Can be triggered manually with environment selection

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Add your custom domain in the GitHub Pages settings
2. Update the `homepage` field in `package.json`
3. Add a `CNAME` file in your repository root with your domain

## How It Works

### GitHub Pages Deployment:

1. **Push to main branch** → Triggers GitHub Pages workflow
2. **Build phase** → Installs dependencies and builds app for GitHub Pages
3. **Deploy phase** → Uploads built files to GitHub Pages
4. **Result** → Your app is live at `https://ishant-sahu.github.io/atomic-design-system`

### Production Deployment:

1. **Push to production branch or tag** → Triggers production workflow
2. **Build phase** → Installs dependencies and builds app for production
3. **Artifact creation** → Build files are uploaded as artifacts
4. **Deployment** → Add your production deployment logic (CDN, hosting service, etc.)

## Manual Deployment

### GitHub Pages:

```bash
npm run build:github-pages
# Then manually upload the dist folder to GitHub Pages
```

### Production:

```bash
npm run build:production
# Then deploy the dist folder to your production environment
```

## Troubleshooting

- **Build fails**: Check the Actions tab for error logs
- **Pages not updating**: Wait a few minutes, GitHub Pages can take time to propagate
- **Permission errors**: Ensure the repository has Pages write permissions enabled

## Notes

- The workflow uses Node.js 18 for compatibility
- Your React app is built to the `dist` directory
- **GitHub Pages**: Uses base path `/atomic-design-system/` for proper asset loading
- **Production**: Uses base path `/` for standard production deployment
- **Build Scripts**:
  - `npm run build:github-pages` - For GitHub Pages deployment
  - `npm run build:production` - For production deployment
- **Dual Workflows**: Separate workflows for GitHub Pages and production
- Only pushes to main/master trigger GitHub Pages deployment
- Production deployment triggers on production branch or version tags
