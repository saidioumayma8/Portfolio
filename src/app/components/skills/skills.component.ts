import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: string;
  level: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('particleCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private animationId!: number;
  private particles: any[] = [];
  
  hoveredSkill: string | null = null;
  selectedCategory: string = 'all';
  skillsRotation = 0;
  private rotationInterval: any;
  // All skills with proficiency levels
  allSkills: Skill[] = [
    { name: 'Java', category: 'backend', level: 90 },
    { name: 'Spring Boot', category: 'backend', level: 85 },
    { name: 'Spring Framework', category: 'backend', level: 85 },
    { name: 'Spring Security', category: 'backend', level: 80 },
    { name: 'Node.js', category: 'backend', level: 88 },
    { name: 'Express.js', category: 'backend', level: 85 },
    { name: 'PHP', category: 'backend', level: 75 },
    { name: 'Laravel', category: 'backend', level: 78 },
    { name: 'Angular', category: 'frontend', level: 92 },
    { name: 'React.js', category: 'frontend', level: 88 },
    { name: 'Vue.js', category: 'frontend', level: 82 },
    { name: 'JavaScript', category: 'frontend', level: 95 },
    { name: 'TypeScript', category: 'frontend', level: 90 },
    { name: 'HTML', category: 'frontend', level: 95 },
    { name: 'CSS', category: 'frontend', level: 92 },
    { name: 'Bootstrap', category: 'frontend', level: 85 },
    { name: 'Tailwind', category: 'frontend', level: 88 },
    { name: 'Docker', category: 'devops', level: 85 },
    { name: 'Kubernetes', category: 'devops', level: 75 },
    { name: 'Git', category: 'devops', level: 90 },
    { name: 'Jenkins', category: 'devops', level: 78 },
    { name: 'AWS', category: 'devops', level: 80 },
    { name: 'MySQL', category: 'database', level: 88 },
    { name: 'PostgreSQL', category: 'database', level: 85 },
    { name: 'MongoDB', category: 'database', level: 82 },
    { name: 'Oracle', category: 'database', level: 80 },
    { name: 'Agile', category: 'methodology', level: 90 },
    { name: 'Scrum', category: 'methodology', level: 88 },
    { name: 'Jira', category: 'methodology', level: 85 },
    { name: 'Trello', category: 'methodology', level: 82 },
    { name: 'Figma', category: 'design', level: 85 },
    { name: 'GitHub', category: 'design', level: 92 },
    { name: 'VS Code', category: 'design', level: 95 },
    { name: 'IntelliJ IDEA', category: 'design', level: 88 }
  ];

  // Getter methods to filter skills by category
  getBackendSkills(): Skill[] {
    return this.allSkills.filter(skill => skill.category === 'backend');
  }

  getFrontendSkills(): Skill[] {
    return this.allSkills.filter(skill => skill.category === 'frontend');
  }

  getDevOpsSkills(): Skill[] {
    return this.allSkills.filter(skill => skill.category === 'devops');
  }

  getDatabaseSkills(): Skill[] {
    return this.allSkills.filter(skill => skill.category === 'database');
  }

  getMethodologySkills(): Skill[] {
    return this.allSkills.filter(skill => skill.category === 'methodology');
  }

  getDesignSkills(): Skill[] {
    return this.allSkills.filter(skill => skill.category === 'design');
  }

  ngOnInit() {
    this.initFloatingSkills();
    this.startRotation();
  }

  ngAfterViewInit() {
    if (this.canvasRef) {
      const canvas = this.canvasRef.nativeElement;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      this.ctx = canvas.getContext('2d')!;
      this.createParticles();
      this.animateParticles();
    }
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  initFloatingSkills() {
    this.allSkills = this.allSkills.map(skill => ({
      ...skill,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));
  }

  startRotation() {
    this.rotationInterval = setInterval(() => {
      this.skillsRotation = (this.skillsRotation + 3) % 360;
    }, 30);
  }

  createParticles() {
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvasRef.nativeElement.width,
        y: Math.random() * this.canvasRef.nativeElement.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  animateParticles() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
      this.ctx.fill();
    });

    // Connect nearby particles
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }

    this.animationId = requestAnimationFrame(() => this.animateParticles());
  }

  onSkillHover(skillName: string) {
    this.hoveredSkill = skillName;
  }

  onSkillLeave() {
    this.hoveredSkill = null;
  }

  getSkillColor(category: string): string {
    const colors: any = {
      backend: '#3b82f6',
      frontend: '#10b981',
      devops: '#8b5cf6',
      database: '#ef4444',
      methodology: '#eab308',
      design: '#06b6d4'
    };
    return colors[category] || '#6b7280';
  }
}
