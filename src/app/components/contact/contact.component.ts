import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    
    // To implement email functionality, you have a few options:
    // 1. Use a backend service (Node.js, PHP, etc.) to send emails
    // 2. Use a third-party service like EmailJS, Formspree, or SendGrid
    // 3. Use Netlify Forms if you're deploying to Netlify
    
    // For now, we'll show an alert with instructions
    alert('To implement email functionality:\n\n' +
          '1. Create a backend service to handle form submissions\n' +
          '2. Use a service like EmailJS or Formspree\n' +
          '3. Or use Netlify Forms if deploying to Netlify\n\n' +
          'Form data would be sent to: oumaymasaidi908@gmail.com');
    
    // Reset form
    const form = event.target as HTMLFormElement;
    form.reset();
  }
}