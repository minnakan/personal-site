# Vite Migration Plan

**Date:** 2026-01-10
**Type:** Build Tool Migration
**Approach:** Incremental migration with in-place conversion (Option A)

## Overview

Migrate personal portfolio site from Create React App (react-scripts 5.0.1) to Vite for faster development experience, better production builds, and modern actively-maintained tooling.

**Current Stack:**
- React 18.3.1
- react-scripts 5.0.1 (Create React App)
- Sass 1.81.0
- React Router 6.28.0
- FontAwesome icons
- Deployed to GitHub Pages (minnakan.com)

**Target Stack:**
- React 18.3.1 (no change)
- Vite (latest)
- All other dependencies remain the same

## Goals

- 10-50x faster development server
- 30-50% faster production builds
- Smaller bundle sizes
- Modern tooling with active maintenance
- Maintain GitHub Pages deployment
- Preserve all functionality

## Migration Strategy

**Approach:** Clean slate migration in same repo, same branch
- Add Vite configs alongside CRA temporarily
- Both setups coexist during transition
- Switch package.json scripts to Vite
- Test thoroughly
- Delete CRA files when confirmed working

## Implementation Tasks

### Task 1: Install Vite Dependencies

**Steps:**
1. Install Vite and React plugin:
   ```bash
   npm install --save-dev vite @vitejs/plugin-react
   ```
2. Verify installation in package.json devDependencies

**Verification:**
- Check `node_modules/vite` exists
- Verify versions in package.json

---

### Task 2: Create Vite Configuration

**Steps:**
1. Create `vite.config.js` in project root with:
   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     build: {
       outDir: 'build', // Match CRA output directory
     },
     base: '/', // For custom domain on GitHub Pages
     server: {
       port: 3000, // Match CRA default
       open: true,
     },
   });
   ```

**Verification:**
- File created at project root
- Syntax is valid JavaScript

---

### Task 3: Relocate and Update index.html

**Steps:**
1. Copy `public/index.html` to project root `index.html`
2. Update the new root `index.html`:
   - Add `<script type="module" src="/src/index.js"></script>` before `</body>`
   - Replace all `%PUBLIC_URL%` with `/` (e.g., `%PUBLIC_URL%/images/favicon.png` → `/images/favicon.png`)
   - Keep Google Analytics scripts intact (lines 4-12)
   - Keep SPA redirect scripts intact (lines 13-60)
3. Keep original `public/index.html` for now (don't delete yet)

**Verification:**
- New `index.html` exists at project root
- Module script tag is present
- All `%PUBLIC_URL%` replaced
- Analytics and redirect scripts preserved

---

### Task 4: Update Environment Variables

**Steps:**
1. Update `.env` file:
   - Change `REACT_APP_GA_TRACKING_ID` to `VITE_GA_TRACKING_ID`
2. Find and update code references:
   - Search for `process.env.REACT_APP` in codebase
   - Replace with `import.meta.env.VITE_`
3. Update `.github/workflows/github-pages.yml` line 73:
   - Change `REACT_APP_GA_TRACKING_ID` to `VITE_GA_TRACKING_ID`

**Verification:**
- `.env` uses `VITE_` prefix
- No `process.env.REACT_APP` references remain in src/
- GitHub workflow updated

---

### Task 5: Update package.json Scripts

**Steps:**
1. Update scripts section in package.json:
   ```json
   {
     "start": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "analyze": "npm run build && source-map-explorer build/static/js/*.chunk.js",
     "lint": "eslint \"**/*.js\"",
     "predeploy": "npm run build",
     "test": "npx jest"
   }
   ```
2. Keep other scripts unchanged

**Verification:**
- Scripts updated in package.json
- Lint and test scripts unchanged

---

### Task 6: Test Development Server

**Steps:**
1. Run `npm start`
2. Verify server starts quickly (1-3 seconds)
3. Check all pages load:
   - Home page (/)
   - About
   - Resume
   - Projects
   - Playground
   - Contact
   - Stats
4. Test navigation works
5. Verify Sass styles are applied
6. Check FontAwesome icons render
7. Test hot module replacement:
   - Make a small change to a component
   - Verify instant update without full reload

**Verification:**
- Dev server starts successfully
- All routes accessible
- Styles and icons working
- HMR works

---

### Task 7: Test Production Build

**Steps:**
1. Run `npm run build`
2. Verify `build/` directory created
3. Check build output for errors/warnings
4. Run `npm run preview` to test production build locally
5. Test all routes in preview mode
6. Verify production bundle includes:
   - index.html
   - JavaScript bundles
   - CSS files
   - Assets from public/

**Verification:**
- Build completes successfully
- `build/` folder populated
- Preview server works
- All routes accessible in preview

---

### Task 8: Update GitHub Actions

**Steps:**
1. The environment variable already updated in Task 4
2. Verify workflow will work:
   - Build command is `npm run predeploy` (which calls `npm run build`)
   - Output directory is still `build/`
   - Both should work without further changes

**Verification:**
- Workflow references correct env var name
- Upload path is `build` (line 79 of github-pages.yml)

---

### Task 9: Remove CRA Dependencies

**Steps:**
1. Remove react-scripts:
   ```bash
   npm uninstall react-scripts
   ```
2. Delete unused config files:
   - `babel.config.js` (Vite uses esbuild for JSX)
   - Remove `browserslist` section from package.json (optional, can keep for reference)
3. Delete `public/index.html` (we moved it to root)

**Verification:**
- `react-scripts` not in package.json
- Config files removed
- Old public/index.html deleted

---

### Task 10: Final Verification and Commit

**Steps:**
1. Run full test suite: `npm test`
2. Run lint: `npm run lint`
3. Build again: `npm run build`
4. Preview again: `npm run preview`
5. Test all functionality one more time
6. Create git commit:
   ```bash
   git add .
   git commit -m "Migrate from Create React App to Vite

   - Replace react-scripts with Vite build tool
   - Update environment variables to use VITE_ prefix
   - Relocate index.html to project root
   - Update GitHub Actions workflow
   - Remove CRA-specific configurations

   Benefits:
   - 10-50x faster development server
   - 30-50% faster production builds
   - Smaller bundle sizes
   - Modern actively-maintained tooling

   Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
   ```

**Verification:**
- All tests pass
- Lint passes
- Build successful
- Git commit created

---

### Task 11: Deploy and Monitor

**Steps:**
1. Push to GitHub: `git push origin main`
2. Monitor GitHub Actions workflow
3. Verify deployment succeeds
4. Check live site at minnakan.com:
   - All pages load
   - Navigation works
   - Analytics tracking works
   - No console errors

**Verification:**
- GitHub Actions passes
- Site deployed successfully
- Live site fully functional

## Rollback Plan

If issues arise:
1. Revert git commit: `git revert HEAD`
2. Reinstall react-scripts: `npm install react-scripts@5.0.1`
3. Restore old scripts in package.json
4. Restore public/index.html
5. Push revert to GitHub

## Success Criteria

- [ ] Development server starts in <3 seconds
- [ ] Hot module replacement works instantly
- [ ] Production build completes successfully
- [ ] All pages and routes work in development
- [ ] All pages and routes work in production preview
- [ ] GitHub Actions deployment succeeds
- [ ] Live site fully functional at minnakan.com
- [ ] No console errors in production
- [ ] Bundle size same or smaller than CRA

## Post-Migration Opportunities

After successful migration, consider:
- Add TypeScript for type safety
- Implement code splitting with React.lazy
- Add vite-plugin-compression for gzip
- Use vite-plugin-imagemin for image optimization
- Consider PWA features with vite-plugin-pwa
