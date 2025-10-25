import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: string;
  gradient: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'MoveTrip.ma – Caravan Reservation Platform',
      description: 'Full-stack web application that allows users to browse, book, and manage caravan reservations. Features a secure admin dashboard for managing users, bookings, and caravan listings, with a RESTful API to handle reservation workflows.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      category: 'Travel',
      icon: 'fa-caravan',
      gradient: 'from-blue-700 to-purple-800'
    },
    {
      id: 2,
      title: 'ConstructionXpert Services Solution',
      description: 'Web application for planning, tracking, and managing construction projects, tasks, and resources.',
      technologies: ['Java EE', 'MySQL', 'HTML', 'CSS'],
      category: 'Construction',
      icon: 'fa-hammer',
      gradient: 'from-green-700 to-teal-800'
    },
    {
      id: 3,
      title: 'EventEase – Event Ticket Booking Platform',
      description: 'Web application to browse, filter, and book events, with an admin interface for managing users and events.',
      technologies: ['Angular', 'Angular Material', 'Docker', 'Spring Boot'],
      category: 'Events',
      icon: 'fa-calendar-alt',
      gradient: 'from-purple-700 to-pink-800'
    }
  ];
}