import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'certification';
  icon: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="timeline" class="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl top-20 right-10 floating-orb"></div>
        <div class="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-20 left-10 floating-orb" style="animation-delay: 1.5s;"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">My Journey</h2>
        <p class="text-gray-400 text-center mb-10 text-sm">Explore my professional and educational background</p>
        
        <div class="timeline-container">
          <!-- Interactive timeline -->
          <div class="timeline-wrapper">
            <div class="timeline-line"></div>
            
            <div 
              *ngFor="let event of timelineEvents; let i = index" 
              class="timeline-item"
              [class.even]="i % 2 === 0"
              [class.odd]="i % 2 !== 0"
            >
              <div class="timeline-marker" [ngClass]="event.type">
                <i class="fas {{ event.icon }}"></i>
              </div>
              
              <div class="timeline-content">
                <div class="timeline-card">
                  <div class="card-header">
                    <h3 class="text-lg font-bold">{{ event.title }}</h3>
                    <span class="organization">{{ event.organization }}</span>
                  </div>
                  
                  <div class="card-body">
                    <div class="period">{{ event.period }}</div>
                    <p class="description">{{ event.description }}</p>
                  </div>
                  
                  <div class="card-footer">
                    <span class="event-type" [ngClass]="event.type">
                      {{ event.type | titlecase }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Floating orbs animation */
    @keyframes floating {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(20px, -20px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
    }
    
    .floating-orb {
      animation: floating 8s ease-in-out infinite;
    }

    .timeline-container {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }
    
    .timeline-wrapper {
      position: relative;
      padding: 1.5rem 0;
    }
    
    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
      transform: translateX(-50%);
      border-radius: 2px;
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 2.5rem;
      display: flex;
      align-items: center;
    }
    
    .timeline-item.even {
      flex-direction: row;
    }
    
    .timeline-item.odd {
      flex-direction: row-reverse;
    }
    
    .timeline-marker {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.1rem;
      z-index: 10;
      box-shadow: 0 8px 12px -3px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    
    .timeline-marker.education {
      background: linear-gradient(135deg, #10b981, #34d399);
    }
    
    .timeline-marker.experience {
      background: linear-gradient(135deg, #3b82f6, #60a5fa);
    }
    
    .timeline-marker.certification {
      background: linear-gradient(135deg, #f59e0b, #fbbf24);
    }
    
    .timeline-marker:hover {
      transform: translateX(-50%) scale(1.15) rotate(5deg);
      box-shadow: 0 0 20px currentColor;
    }
    
    .timeline-content {
      width: 45%;
    }
    
    .timeline-item.even .timeline-content {
      margin-right: auto;
      margin-left: 0;
    }
    
    .timeline-item.odd .timeline-content {
      margin-left: auto;
      margin-right: 0;
    }
    
    .timeline-card {
      background: rgba(31, 41, 55, 0.7);
      border: 1px solid rgba(96, 165, 250, 0.2);
      border-radius: 0.75rem;
      padding: 1.25rem;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      transform: translateY(0);
    }
    
    .timeline-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 20px -5px rgba(59, 130, 246, 0.3);
      border-color: rgba(96, 165, 250, 0.5);
    }
    
    .card-header h3 {
      margin: 0 0 0.375rem 0;
      color: #f9fafb;
    }
    
    .organization {
      color: #93c5fd;
      font-weight: 500;
      font-size: 0.875rem;
    }
    
    .card-body {
      margin: 0.875rem 0;
    }
    
    .period {
      color: #9ca3af;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
    
    .description {
      color: #d1d5db;
      line-height: 1.5;
      margin: 0;
      font-size: 0.875rem;
    }
    
    .card-footer {
      margin-top: 0.875rem;
    }
    
    .event-type {
      display: inline-block;
      padding: 0.2rem 0.65rem;
      border-radius: 2rem;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    
    .event-type.education {
      background: rgba(16, 185, 129, 0.2);
      color: #34d399;
    }
    
    .event-type.experience {
      background: rgba(59, 130, 246, 0.2);
      color: #93c5fd;
    }
    
    .event-type.certification {
      background: rgba(245, 158, 11, 0.2);
      color: #fbbf24;
    }
    
    @media (max-width: 768px) {
      .timeline-line {
        left: 30px;
      }
      
      .timeline-item {
        flex-direction: row !important;
        margin-bottom: 2rem;
      }
      
      .timeline-marker {
        left: 30px;
        width: 36px;
        height: 36px;
        font-size: 0.95rem;
      }
      
      .timeline-content {
        width: calc(100% - 70px);
        margin-left: 45px !important;
        margin-right: 0 !important;
      }
      
      .timeline-card {
        padding: 1rem;
      }
    }
  `]
})
export class TimelineComponent {
  timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      title: 'IT System & Custom Software Development',
      organization: 'École Numérique Ahmed Al Hansali',
      period: '2024 - Present',
      description: 'Pursuing advanced studies in IT systems and custom software development with focus on modern technologies and industry practices.',
      type: 'education',
      icon: 'fa-graduation-cap'
    },
    {
      id: 2,
      title: 'Java / Angular Developer',
      organization: 'JNF PRODUCTION',
      period: 'Aug 2025 - Oct 2025 · 3 mos',
      description: 'Developed a small project using Java (Spring Boot) for the back-end and Angular for the front-end. Implemented CRUD operations and connected front-end with back-end via REST APIs. Gained hands-on experience in web application development and software engineering practices.',
      type: 'experience',
      icon: 'fa-briefcase'
    },
    {
      id: 3,
      title: 'Web and Mobile Development',
      organization: 'YouCode',
      period: '2023 - 2024',
      description: 'Completed comprehensive program in web and mobile development covering frontend, backend, and mobile technologies.',
      type: 'education',
      icon: 'fa-laptop-code'
    },
    {
      id: 4,
      title: 'Backend Developer (Internship)',
      organization: 'ICF Communication',
      period: '06/2024 - 08/2024',
      description: 'Developed full-stack applications using Spring Boot and Angular, containerized applications with Docker.',
      type: 'experience',
      icon: 'fa-briefcase'
    },
    {
      id: 5,
      title: 'SQL (Basic) Certificate',
      organization: 'HackerRank',
      period: '04/2025',
      description: 'Demonstrated proficiency in SQL fundamentals including queries, joins, and database management.',
      type: 'certification',
      icon: 'fa-certificate'
    },
    {
      id: 6,
      title: 'Rest API (Intermediate)',
      organization: 'HackerRank',
      period: '06/2025',
      description: 'Validated skills in designing and implementing RESTful APIs with best practices.',
      type: 'certification',
      icon: 'fa-code'
    }
  ];
}