# Theme Toggle Implementation

This document explains how the theme toggle feature works in the portfolio.

## Overview

The theme toggle allows users to switch between dark and light modes. The implementation uses CSS variables and a service to manage the theme state.

## How It Works

### 1. Theme Service

The `ThemeService` manages the theme state and applies the appropriate CSS classes to the document root.

Key methods:
- `toggleTheme()`: Switches between dark and light modes
- `setDarkMode()`: Sets the theme to dark mode
- `setLightMode()`: Sets the theme to light mode
- `isDarkTheme()`: Returns the current theme state

### 2. CSS Variables

The theme uses CSS variables defined in `app.css`:

```css
/* Dark theme (default) */
:root.dark {
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --bg-tertiary: #374151;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-tertiary: #9ca3af;
  --border-color: #374151;
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;
}

/* Light theme */
:root.light {
  --bg-primary: #f9fafb;
  --bg-secondary: #f3f4f6;
  --bg-tertiary: #e5e7eb;
  --text-primary: #111827;
  --text-secondary: #374151;
  --text-tertiary: #6b7280;
  --border-color: #d1d5db;
  --accent-primary: #2563eb;
  --accent-secondary: #7c3aed;
}
```

### 3. Theme Toggle Component

The `ThemeToggleComponent` provides a button that toggles the theme when clicked. It uses Font Awesome icons to indicate the current theme:
- Moon icon for dark mode
- Sun icon for light mode

### 4. Integration

The theme toggle is integrated into the header component and uses the ThemeService to manage state.

## Customization

To customize the theme colors:

1. Modify the CSS variables in `app.css`
2. Update the color values to match your preferred palette
3. The changes will automatically apply to all components that use the theme variables

## Persistence

The current implementation does not persist the theme preference across sessions. To add persistence:

1. Use localStorage to save the theme preference
2. Check the saved preference on app initialization
3. Apply the saved theme on page load

Example modification to ThemeService:

```typescript
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = true;

  constructor() {
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }
}
```