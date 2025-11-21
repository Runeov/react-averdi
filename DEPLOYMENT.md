# GitHub Pages Deployment Guide

This document explains how to deploy the Averdi React application to GitHub Pages.

## Prerequisites

- GitHub repository created at `username/react-averdi`
- GitHub Pages enabled in repository settings
- Node.js and npm installed locally for testing

## Automatic Deployment (GitHub Actions)

The project is configured for automatic deployment using GitHub Actions.

### Setup Steps

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in repository settings:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Deployment will trigger automatically:**
   - Every push to the `main` branch triggers a deployment
   - You can also manually trigger deployment from the **Actions** tab
   - Click on **Deploy to GitHub Pages** workflow
   - Click **Run workflow**

### Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) performs these steps:

1. **Build Job:**
   - Checks out the code
   - Sets up Node.js 20
   - Installs dependencies with `npm ci`
   - Builds the project with `npm run build`
   - Uploads the `dist` folder as an artifact

2. **Deploy Job:**
   - Deploys the artifact to GitHub Pages
   - Makes the site available at `https://username.github.io/react-averdi/`

### Monitoring Deployments

- View deployment status in the **Actions** tab
- Each deployment shows:
  - Build logs
  - Deployment status
  - Live site URL
- Failed deployments will show error details

## Configuration Details

### Base Path

The application is configured with base path `/react-averdi/` in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/react-averdi/',
  // ... other config
})
```

This ensures all assets (JS, CSS, images) load correctly from the subdirectory.

### Asset Handling

- **Static assets** in `/public` folder are automatically copied to the build
- **Imported assets** (images, fonts) are processed by Vite with correct paths
- **Logo and favicon** references in `index.html` use root-relative paths

## Local Testing

Test the production build locally before deploying:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

The preview server will show how the site works with the base path configuration.

## Troubleshooting

### Assets Not Loading

If assets don't load after deployment:
- Verify the `base` path in `vite.config.ts` matches your repository name
- Check that asset paths in code use Vite's import system
- Ensure `index.html` uses root-relative paths (starting with `/`)

### Deployment Fails

If GitHub Actions workflow fails:
- Check the Actions tab for error logs
- Verify `package.json` scripts are correct
- Ensure all dependencies are listed in `package.json`
- Check that Node.js version in workflow matches your local version

### 404 Errors

If you get 404 errors on page refresh:
- GitHub Pages serves static files only
- For client-side routing, the workflow includes a 404.html fallback
- Alternatively, use hash-based routing in React Router

### Permissions Issues

If deployment fails with permissions error:
- Go to **Settings** → **Actions** → **General**
- Under **Workflow permissions**, select **Read and write permissions**
- Save and re-run the workflow

## Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the `/public` folder:
   ```
   yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   - Add a CNAME record pointing to `username.github.io`
   - Or add A records pointing to GitHub's IP addresses

3. Enable custom domain in repository settings:
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   - Enable **Enforce HTTPS**

## Deployment Checklist

Before deploying to production:

- [ ] Test build locally with `npm run build && npm run preview`
- [ ] Verify all assets load correctly
- [ ] Check responsive design on different screen sizes
- [ ] Test all interactive features
- [ ] Verify SEO meta tags in `index.html`
- [ ] Check browser console for errors
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify accessibility with screen readers
- [ ] Check performance with Lighthouse

## Updating the Site

To update the deployed site:

1. Make your changes locally
2. Test thoroughly
3. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
4. GitHub Actions will automatically build and deploy

## Rollback

To rollback to a previous version:

1. Go to the **Actions** tab
2. Find the successful deployment you want to restore
3. Click **Re-run all jobs**

Or use Git to revert:
```bash
git revert <commit-hash>
git push origin main
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment Guide](https://react.dev/learn/start-a-new-react-project#deploying-to-production)