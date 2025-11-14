# Quick Start Guide

Get your Java & Angular developer portfolio up and running in minutes!

## Prerequisites

Make sure you have these installed:
- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd Portfolio/Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser to:**
   ```
   http://localhost:4200
   ```

## Customization Checklist

Quickly personalize your portfolio:

- [ ] Update your name and title in `src/app/components/hero/hero.component.ts`
- [ ] Replace the profile image in `src/app/components/hero/hero.component.html`
- [ ] Update your professional description in `src/app/components/about/about.component.html`
- [ ] Customize your skills in `src/app/components/skills/skills.component.ts`
- [ ] Add your projects to `src/app/components/projects/projects.component.ts`
- [ ] Update contact information in `src/app/components/contact/contact.component.html`
- [ ] Replace the CV with your own in `src/assets/`
- [ ] Update the download link in `src/app/components/hero/hero.component.html`

## Deployment

To deploy your portfolio:

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Upload the contents of the `dist/` directory to your hosting provider**

Popular hosting options:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Need Help?

Refer to these detailed guides:
- `README.md` - Project overview
- `CUSTOMIZATION.md` - Detailed customization instructions
- `DEVELOPMENT.md` - Development and building guide
- `SUMMARY.md` - Project summary and features

## Support

If you encounter issues:
1. Check that all prerequisites are installed
2. Ensure you're in the correct directory
3. Try clearing npm cache: `npm cache clean --force`
4. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

Your portfolio is now ready to showcase your Java & Angular development skills!