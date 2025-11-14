# Development Guide

This guide provides instructions for setting up and developing the portfolio locally.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Setup

1. Clone or download the portfolio repository
2. Navigate to the project directory:
   ```bash
   cd Portfolio/Portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development Server

To start the development server:
```bash
npm start
```

Or alternatively:
```bash
ng serve
```

The application will be available at `http://localhost:4200`.

The development server includes:
- Live reload on file changes
- Hot module replacement
- Detailed error messages

## Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── projects/
│   │   │   └── skills/
│   │   ├── app.html
│   │   ├── app.ts
│   │   └── app.css
│   ├── assets/
│   ├── styles.css
│   └── index.html
├── package.json
├── angular.json
├── tsconfig.json
└── README.md
```

## Component Development

Each component follows the Angular standalone component pattern:
- `component.ts`: Component logic and TypeScript code
- `component.html`: Template/HTML structure
- `component.css`: Component-specific styles

### Creating New Components

1. Create a new directory in `src/app/components/`
2. Create the three component files (ts, html, css)
3. Import the component in `src/app/app.ts`
4. Add the component to the imports array
5. Use the component selector in templates

### Component Communication

Components communicate through:
- Input properties (`@Input()`)
- Output events (`@Output()`)
- Services (for complex state management)
- Template references (for direct child access)

## Styling

The portfolio uses Tailwind CSS for styling:
- Utility classes for rapid development
- Responsive design with breakpoint prefixes
- Custom styles in component CSS files

To customize the styling:
1. Modify Tailwind classes directly in HTML templates
2. Add custom CSS in component style files
3. Update global styles in `src/styles.css`

## Assets

Static assets (images, documents) are stored in `src/assets/`:
- Images: `src/assets/images/`
- Documents: `src/assets/documents/`
- Icons: `src/assets/icons/`

Reference assets in components using relative paths:
```html
<img src="assets/images/profile.jpg" alt="Profile Image">
<a href="assets/documents/resume.pdf">Download Resume</a>
```

## Building for Production

To create a production build:
```bash
npm run build
```

Or alternatively:
```bash
ng build
```

The optimized build will be in the `dist/` directory.

### Production Build Options

For different deployment scenarios:

1. **Development build**:
   ```bash
   ng build
   ```

2. **Production build**:
   ```bash
   ng build --prod
   ```

3. **Build with base href** (for subdirectory deployment):
   ```bash
   ng build --base-href /portfolio/
   ```

## Testing

Run unit tests:
```bash
npm test
```

Or alternatively:
```bash
ng test
```

Run end-to-end tests:
```bash
npm run e2e
```

Or alternatively:
```bash
ng e2e
```

## Code Quality

Maintain code quality with:

1. **Linting**:
   ```bash
   npm run lint
   ```

2. **Formatting**:
   ```bash
   npm run format
   ```

## Deployment

### GitHub Pages

1. Install Angular CLI gh-pages package:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build with base href:
   ```bash
   ng build --base-href="/your-repo-name/"
   ```

3. Deploy:
   ```bash
   ngh
   ```

### Other Hosting Platforms

1. Build the application:
   ```bash
   npm run build
   ```

2. Upload the contents of `dist/` to your hosting provider

## Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   ng serve --port 4201
   ```

2. **Missing dependencies**:
   ```bash
   npm install
   ```

3. **Build errors**:
   - Check TypeScript errors in terminal
   - Verify component selectors match usage
   - Ensure all imports are correct

### Getting Help

1. Angular Documentation: https://angular.io/docs
2. Tailwind CSS Documentation: https://tailwindcss.com/docs
3. Stack Overflow: https://stackoverflow.com/questions/tagged/angular
4. Angular Community: https://discord.gg/angular

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
5. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.