import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: string;
  gradient: string;
  images: string[];
}

@Component({
  selector: 'app-project-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="project-showcase" class="py-20 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4 text-center">Project Showcase</h2>
        <p class="text-gray-400 text-center mb-12">Explore my featured projects in an interactive gallery</p>
        
        <div class="showcase-container">
          <!-- Project carousel -->
          <div class="carousel-container" #carousel>
            <div class="carousel-wrapper" [style.transform]="'translateX(' + (-currentIndex * 100) + '%)'">
              <div class="carousel-slide" *ngFor="let project of projects; let i = index">
                <div class="project-card-3d">
                  <div class="project-header" [ngStyle]="{'background': 'linear-gradient(135deg, ' + getGradientColors(project.gradient) + ')'}">
                    <i class="fas {{ project.icon }} text-5xl"></i>
                    <div class="project-category">{{ project.category }}</div>
                  </div>
                  <div class="project-content">
                    <h3 class="text-2xl font-bold mb-3">{{ project.title }}</h3>
                    <p class="text-gray-300 mb-4">{{ project.description }}</p>
                    
                    <div class="tech-tags">
                      <span 
                        *ngFor="let tech of project.technologies"
                        class="tech-tag"
                      >
                        {{ tech }}
                      </span>
                    </div>
                    
                    <div class="project-actions mt-6">
                      <button class="btn btn-secondary mr-3">
                        <i class="fab fa-github mr-2"></i> View Code
                      </button>
                      <button class="btn btn-primary">
                        <i class="fas fa-external-link-alt mr-2"></i> Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Navigation controls -->
          <div class="carousel-controls">
            <button class="nav-btn prev-btn" (click)="prevProject()">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="nav-btn next-btn" (click)="nextProject()">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <!-- Project indicators -->
          <div class="project-indicators">
            <span 
              *ngFor="let project of projects; let i = index"
              class="indicator"
              [class.active]="i === currentIndex"
              (click)="goToProject(i)"
            ></span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .showcase-container {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
      perspective: 1000px;
    }
    
    .carousel-container {
      overflow: hidden;
      border-radius: 1rem;
      height: 500px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    .carousel-wrapper {
      display: flex;
      transition: transform 0.5s ease;
      height: 100%;
    }
    
    .carousel-slide {
      min-width: 100%;
      height: 100%;
    }
    
    .project-card-3d {
      display: flex;
      height: 100%;
      background: linear-gradient(135deg, #1f2937, #111827);
      border-radius: 1rem;
      overflow: hidden;
    }
    
    .project-header {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    
    .project-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
    }
    
    .project-category {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.875rem;
    }
    
    .project-content {
      flex: 1;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .tech-tag {
      background: rgba(59, 130, 246, 0.2);
      color: #93c5fd;
      padding: 0.25rem 0.75rem;
      border-radius: 2rem;
      font-size: 0.875rem;
    }
    
    .carousel-controls {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      pointer-events: none;
    }
    
    .nav-btn {
      background: rgba(17, 24, 39, 0.8);
      border: 1px solid rgba(96, 165, 250, 0.3);
      color: #93c5fd;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      pointer-events: all;
      transition: all 0.3s ease;
    }
    
    .nav-btn:hover {
      background: rgba(59, 130, 246, 0.8);
      transform: scale(1.1);
    }
    
    .project-indicators {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 2rem;
    }
    
    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(156, 163, 175, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .indicator.active {
      background: #3b82f6;
      transform: scale(1.2);
    }
    
    @media (max-width: 768px) {
      .project-card-3d {
        flex-direction: column;
      }
      
      .project-header {
        height: 200px;
      }
      
      .carousel-container {
        height: auto;
      }
    }
  `]
})
export class ProjectShowcaseComponent implements OnInit {
  currentIndex = 0;
  projects: Project[] = [
    {
      id: 1,
      title: 'MoveTrip.ma – Caravan Reservation Platform',
      description: 'Full-stack web application that allows users to browse, book, and manage caravan reservations. Features a secure admin dashboard for managing users, bookings, and caravan listings, with a RESTful API to handle reservation workflows.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      category: 'Travel',
      icon: 'fa-caravan',
      gradient: 'from-blue-700 to-purple-800',
      images: []
    },
    {
      id: 2,
      title: 'ConstructionXpert Services Solution',
      description: 'Web application for planning, tracking, and managing construction projects, tasks, and resources.',
      technologies: ['Java EE', 'MySQL', 'HTML', 'CSS'],
      category: 'Construction',
      icon: 'fa-hammer',
      gradient: 'from-green-700 to-teal-800',
      images: []
    },
    {
      id: 3,
      title: 'EventEase – Event Ticket Booking Platform',
      description: 'Web application to browse, filter, and book events, with an admin interface for managing users and events.',
      technologies: ['Angular', 'Angular Material', 'Docker', 'Spring Boot'],
      category: 'Events',
      icon: 'fa-calendar-alt',
      gradient: 'from-purple-700 to-pink-800',
      images: []
    }
  ];

  ngOnInit() {
    // Auto-rotate projects
    setInterval(() => {
      this.nextProject();
    }, 5000);
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  prevProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  goToProject(index: number) {
    this.currentIndex = index;
  }

  getGradientColors(gradient: string): string {
    // Convert gradient class to actual colors
    if (gradient.includes('blue-700') && gradient.includes('purple-800')) {
      return '#1d4ed8, #6b21a8';
    } else if (gradient.includes('green-700') && gradient.includes('teal-800')) {
      return '#15803d, #115e59';
    } else if (gradient.includes('purple-700') && gradient.includes('pink-800')) {
      return '#7e22ce, #be185d';
    }
    return '#3b82f6, #8b5cf6';
  }
}