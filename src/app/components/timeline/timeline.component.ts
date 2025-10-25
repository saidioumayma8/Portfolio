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
    <section id="timeline" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4 text-center">My Journey</h2>
        <p class="text-gray-400 text-center mb-12">Explore my professional and educational background</p>
        
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
                    <h3 class="text-xl font-bold">{{ event.title }}</h3>
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
    .timeline-container {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }
    
    .timeline-wrapper {
      position: relative;
      padding: 2rem 0;
    }
    
    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
      transform: translateX(-50%);
      border-radius: 2px;
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
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
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.25rem;
      z-index: 10;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
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
      transform: translateX(-50%) scale(1.1);
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
      border-radius: 1rem;
      padding: 1.5rem;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      transform: translateY(0);
    }
    
    .timeline-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: rgba(96, 165, 250, 0.4);
    }
    
    .card-header h3 {
      margin: 0 0 0.5rem 0;
      color: #f9fafb;
    }
    
    .organization {
      color: #93c5fd;
      font-weight: 500;
    }
    
    .card-body {
      margin: 1rem 0;
    }
    
    .period {
      color: #9ca3af;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }
    
    .description {
      color: #d1d5db;
      line-height: 1.6;
      margin: 0;
    }
    
    .card-footer {
      margin-top: 1rem;
    }
    
    .event-type {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 2rem;
      font-size: 0.75rem;
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
      }
      
      .timeline-marker {
        left: 30px;
      }
      
      .timeline-content {
        width: calc(100% - 80px);
        margin-left: 50px !important;
        margin-right: 0 !important;
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
      title: 'Web and Mobile Development',
      organization: 'YouCode',
      period: '2023 - 2024',
      description: 'Completed comprehensive program in web and mobile development covering frontend, backend, and mobile technologies.',
      type: 'education',
      icon: 'fa-laptop-code'
    },
    {
      id: 3,
      title: 'Backend Developer (Internship)',
      organization: 'ICF Communication',
      period: '06/2024 - 08/2024',
      description: 'Developed full-stack applications using Spring Boot and Angular, containerized applications with Docker.',
      type: 'experience',
      icon: 'fa-briefcase'
    },
    {
      id: 4,
      title: 'SQL (Basic) Certificate',
      organization: 'HackerRank',
      period: '04/2025',
      description: 'Demonstrated proficiency in SQL fundamentals including queries, joins, and database management.',
      type: 'certification',
      icon: 'fa-certificate'
    },
    {
      id: 5,
      title: 'Rest API (Intermediate)',
      organization: 'HackerRank',
      period: '06/2025',
      description: 'Validated skills in designing and implementing RESTful APIs with best practices.',
      type: 'certification',
      icon: 'fa-code'
    }
  ];
}