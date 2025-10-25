import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm() {
    // In a real application, you would send this data to a server
    console.log('Form submitted:', this.contact);
    alert('Thank you for your message! I will get back to you soon.');
    this.contact = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}