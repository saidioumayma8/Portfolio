import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Backend Technologies',
      icon: 'fas fa-server text-blue-400',
      skills: [
        { name: 'Java & Spring Boot', level: 85 },
        { name: 'Spring Framework', level: 80 },
        { name: 'Spring Security', level: 75 },
        { name: 'Node.js & Express', level: 70 },
        { name: 'PHP & Laravel', level: 65 }
      ]
    },
    {
      name: 'Frontend Frameworks',
      icon: 'fas fa-laptop-code text-green-400',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Vue.js', level: 70 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'HTML5/CSS3', level: 90 }
      ]
    },
    {
      name: 'Tools & DevOps',
      icon: 'fas fa-database text-purple-400',
      skills: [
        { name: 'MySQL & PostgreSQL', level: 80 },
        { name: 'Docker & Kubernetes', level: 70 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'Jenkins & CI/CD', level: 65 },
        { name: 'AWS Basics', level: 60 }
      ]
    }
  ];

  getSkillIcon(skillName: string): string {
    const iconMap: { [key: string]: string } = {
      'Java & Spring Boot': 'fab fa-java',
      'Spring Framework': 'fas fa-leaf',
      'Spring Security': 'fas fa-shield-alt',
      'Node.js & Express': 'fab fa-node-js',
      'PHP & Laravel': 'fab fa-php',
      'Angular': 'fab fa-angular',
      'React.js': 'fab fa-react',
      'Vue.js': 'fab fa-vuejs',
      'JavaScript/TypeScript': 'fab fa-js',
      'HTML5/CSS3': 'fas fa-code',
      'MySQL & PostgreSQL': 'fas fa-database',
      'Docker & Kubernetes': 'fab fa-docker',
      'Git & GitHub': 'fab fa-github',
      'Jenkins & CI/CD': 'fab fa-jenkins',
      'AWS Basics': 'fab fa-aws'
    };

    return iconMap[skillName] || 'fas fa-star';
  }
}