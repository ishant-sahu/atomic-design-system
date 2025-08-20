# GitHub Pages Deployment Guide

This project is configured to automatically deploy your React app to GitHub Pages whenever you push to the main branch.

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

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already configured and will:

- Trigger on pushes to `main` or `master` branch
- Build your React app using `npm run build`
- Deploy the built files to GitHub Pages
- Use the latest GitHub Actions for optimal performance

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Add your custom domain in the GitHub Pages settings
2. Update the `homepage` field in `package.json`
3. Add a `CNAME` file in your repository root with your domain

## How It Works

1. **Push to main branch** → Triggers the workflow
2. **Build phase** → Installs dependencies and builds your React app
3. **Deploy phase** → Uploads built files to GitHub Pages
4. **Automatic deployment** → Your React app is live at `https://ishant-sahu.github.io/atomic-design-system`

## Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Then manually upload the dist folder to GitHub Pages
```

## Troubleshooting

- **Build fails**: Check the Actions tab for error logs
- **Pages not updating**: Wait a few minutes, GitHub Pages can take time to propagate
- **Permission errors**: Ensure the repository has Pages write permissions enabled

## Notes

- The workflow uses Node.js 18 for compatibility
- Your React app is built to the `dist` directory
- Only pushes to main/master trigger deployment (PRs only build for testing)
- The workflow includes proper concurrency controls to prevent conflicts
