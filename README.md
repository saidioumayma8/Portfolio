# Java & Angular Developer Portfolio

A modern, responsive portfolio website for Java & Angular developers built with Angular 20 and Tailwind CSS.

## Features

- **Modern UI Design**: Clean, professional design with dark/light theme toggle
- **Responsive Layout**: Works on all device sizes (mobile, tablet, desktop)
- **Component-Based Architecture**: Built with Angular standalone components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Interactive Elements**: Smooth animations and transitions
- **Performance Optimized**: Fast loading and optimized for SEO
- **Theme Toggle**: Switch between dark and light modes
- **Contact Form**: Collect visitor messages (requires backend implementation)

## Technologies Used

- **Angular 20**: Latest version of the Angular framework
- **TypeScript**: Strongly typed programming language for Angular
- **Tailwind CSS**: Utility-first CSS framework
- **HTML5 & CSS3**: Modern web standards
- **Font Awesome**: Icon library for vector icons

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── skills/
│   │   └── projects/
│   ├── services/
│   │   └── theme.service.ts
│   ├── app.html
│   ├── app.ts
│   └── app.css
├── assets/
│   └── OumaymaSAIDI-CV.pdf
├── styles.css
└── index.html
```

## Components

1. **Header Component**: Navigation bar with responsive mobile menu and theme toggle
2. **Hero Component**: Main introduction section with profile and call-to-action buttons
3. **About Section**: Personal introduction with profile picture
4. **Skills Component**: Display of technical skills as tags (similar to projects section)
5. **Projects Component**: Showcase of projects with descriptions and technologies used
6. **Contact Section**: Contact information and form (requires backend for email functionality)
7. **Footer Component**: Copyright and additional information

## Development

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`.

### Building for Production

To build the application for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

To customize this portfolio for your own use:

1. Update personal information in the component files
2. Replace profile images and project screenshots in the `assets/` folder
3. Modify the skills section to reflect your actual skills
4. Update the projects with your own work
5. Change contact information to your own details
6. Update social media links
7. Replace the CV PDF with your own

## Implementing Email Functionality

The contact form currently shows an alert when submitted. To implement actual email functionality, you have several options:

### Option 1: Backend Service
Create a backend service (Node.js, PHP, etc.) to handle form submissions and send emails.

### Option 2: Third-Party Services
Use services like:
- **EmailJS**: https://www.emailjs.com/
- **Formspree**: https://formspree.io/
- **Netlify Forms**: If deploying to Netlify

### Option 3: Firebase Functions
Use Firebase Cloud Functions to handle form submissions.

## Theme Toggle

The portfolio includes a theme toggle in the header that allows users to switch between dark and light modes. The theme preference is stored in the user's browser.

## Deployment

This portfolio can be deployed to any static hosting service such as:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- AWS S3

## License

This project is licensed under the MIT License.

## Author

John Developer - Java & Angular Specialist