# Email Setup Guide

This guide explains how to implement email functionality for the contact form in your portfolio.

## Current Implementation

The contact form currently shows an alert when submitted. To implement actual email functionality, you have several options:

## Option 1: EmailJS (Recommended for simplicity)

EmailJS is a service that allows you to send emails directly from the client-side without exposing your email credentials.

### Steps:

1. Sign up at https://www.emailjs.com/
2. Create a new email template
3. Get your Service ID, Template ID, and Public Key
4. Install the EmailJS SDK:
   ```bash
   npm install @emailjs/browser
   ```
5. Update the contact.component.ts file:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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
    
    const form = event.target as HTMLFormElement;
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  }
}
```

## Option 2: Formspree

Formspree is a form backend that emails you form submissions.

### Steps:

1. Sign up at https://formspree.io/
2. Create a new form endpoint
3. Update the contact.component.html form tag:

```html
<form class="space-y-6" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Option 3: Netlify Forms (If deploying to Netlify)

Netlify provides built-in form handling.

### Steps:

1. Add a `netlify` attribute to your form:
```html
<form class="space-y-6" name="contact" netlify>
```

2. Add a hidden input for the form name:
```html
<input type="hidden" name="form-name" value="contact" />
```

3. Netlify will automatically handle form submissions.

## Option 4: Custom Backend Service

Create your own backend service to handle form submissions.

### Example with Node.js and Express:

1. Create a new Node.js project:
```bash
npm init -y
npm install express nodemailer cors
```

2. Create server.js:
```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Configure your email transport
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password'
    }
  });
  
  const mailOptions = {
    from: email,
    to: 'oumaymasaidi908@gmail.com',
    subject: `Portfolio Contact: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

3. Update contact.component.ts to send data to your backend:
```typescript
onSubmit(event: Event) {
  event.preventDefault();
  
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  
  fetch('http://localhost:3000/send-email', {
    method: 'POST',
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert('Message sent successfully!');
    form.reset();
  })
  .catch(error => {
    alert('Failed to send message. Please try again.');
  });
}
```

## Recommendation

For simplicity and quick setup, we recommend using EmailJS or Formspree. They require minimal setup and don't need you to maintain a backend server.