# Portfolio Customization Guide

This guide will help you customize your Java & Angular developer portfolio to make it your own.

## 1. Personal Information

### Hero Component
File: `src/app/components/hero/hero.component.ts`

Update the following properties:
```typescript
name = 'Your Name';
title = 'Your Title (e.g., Java & Angular Specialist)';
description = 'Your professional description';
```

### About Component
File: `src/app/components/about/about.component.html`

Replace the text content in the `<p>` tags with your personal and professional background.

Update the skills array in `src/app/components/about/about.component.ts`:
```typescript
skills = [
  'Your Skill 1',
  'Your Skill 2',
  'Your Skill 3',
  // Add more skills as needed
];
```

## 2. Skills Section

File: `src/app/components/skills/skills.component.ts`

Update the `skillCategories` array with your actual skills:

```typescript
skillCategories: SkillCategory[] = [
  {
    name: 'Your Category Name',
    icon: 'fab fa-java text-red-500', // Choose appropriate icon
    skills: [
      { name: 'Skill Name', level: 95 }, // Update skill name and level (0-100)
      // Add more skills
    ]
  },
  // Add more categories
];
```

## 3. Projects Section

File: `src/app/components/projects/projects.component.ts`

Update the `projects` array with your actual projects:

```typescript
projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Detailed description of your project',
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
    category: 'Project Category',
    icon: 'fa-shopping-cart', // Choose appropriate Font Awesome icon
    gradient: 'from-blue-700 to-purple-800' // Choose gradient colors
  },
  // Add more projects
];
```

## 4. Contact Information

File: `src/app/components/contact/contact.component.html`

Update the contact details:
- Email address
- Phone number
- Location
- Social media links

## 5. Footer Information

File: `src/app/components/footer/footer.component.html`

Update the copyright text and any other footer content.

## 6. CV/Resume

Replace the existing CV file:
1. Delete `src/assets/OumaymaSAIDI-CV.pdf`
2. Add your own CV as `src/assets/your-name-cv.pdf`
3. Update the download link in `src/app/components/hero/hero.component.html`

## 7. Profile Images

Replace the emoji profile images with your own:
1. Add your profile image to `src/assets/`
2. Update the image source in:
   - `src/app/components/hero/hero.component.html`
   - `src/app/components/about/about.component.html`

## 8. Color Scheme

The portfolio uses a dark theme with blue accents. To change the color scheme:

1. Update gradient colors in component HTML files
2. Modify Tailwind classes for consistent coloring
3. Update the accent colors in component CSS files

## 9. Social Media Links

Update social media links in:
- `src/app/components/contact/contact.component.html`
- `src/app/components/header/header.component.html` (if you add social links to header)

## 10. Additional Customizations

### Adding New Sections
1. Create a new component in `src/app/components/`
2. Register the component in `src/app/app.ts`
3. Add the component tag to `src/app/app.html`

### Adding New Pages
1. Create new component files
2. Add route configuration in `src/app/app.routes.ts`
3. Update navigation links

### Adding Animations
1. Use Angular's animation API
2. Add animation definitions to component files
3. Apply animations to elements using [@triggerName] syntax

## 11. Testing Your Changes

1. Run the development server: `npm start`
2. Open your browser to `http://localhost:4200`
3. Verify all changes appear correctly
4. Test on different screen sizes
5. Check all navigation links work properly

## 12. Building for Production

Run the build command:
```bash
npm run build
```

The optimized production files will be in the `dist/` directory.

## 13. Deployment

Deploy the contents of the `dist/` directory to your preferred hosting platform:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- AWS S3
- Any static hosting service

## Need Help?

If you need assistance with customization:
1. Check the Angular documentation: https://angular.io/docs
2. Review Tailwind CSS documentation: https://tailwindcss.com/docs
3. Consult Font Awesome icons: https://fontawesome.com/icons
4. Reach out to the development community for support

Remember to regularly backup your customized portfolio files before making significant changes.