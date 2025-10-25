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
      name: 'Backend Development',
      icon: 'fas fa-server text-blue-400',
      skills: [
        { name: 'Java & Spring Boot', level: 85 },
        { name: 'Node.js & Express', level: 70 },
        { name: 'PHP & Laravel', level: 65 }
      ]
    },
    {
      name: 'Frontend Development',
      icon: 'fas fa-laptop-code text-green-400',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'JavaScript/TypeScript', level: 85 }
      ]
    },
    {
      name: 'Databases',
      icon: 'fas fa-database text-purple-400',
      skills: [
        { name: 'MySQL & PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 70 }
      ]
    },
    {
      name: 'DevOps & Tools',
      icon: 'fas fa-cogs text-yellow-400',
      skills: [
        { name: 'Docker & Kubernetes', level: 70 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'CI/CD', level: 65 }
      ]
    },
    {
      name: 'Cloud Services',
      icon: 'fas fa-cloud text-cyan-400',
      skills: [
        { name: 'AWS Basics', level: 60 }
      ]
    }
  ];

  getSkillIcon(skillName: string): string {
    const iconMap: { [key: string]: string } = {
      'Java & Spring Boot': 'fab fa-java',
      'Node.js & Express': 'fab fa-node-js',
      'PHP & Laravel': 'fab fa-php',
      'Angular': 'fab fa-angular',
      'React.js': 'fab fa-react',
      'JavaScript/TypeScript': 'fab fa-js',
      'MySQL & PostgreSQL': 'fas fa-database',
      'MongoDB': 'fas fa-leaf',
      'Docker & Kubernetes': 'fab fa-docker',
      'Git & GitHub': 'fab fa-github',
      'CI/CD': 'fas fa-sync',
      'AWS Basics': 'fab fa-aws'
    };

    return iconMap[skillName] || 'fas fa-star';
  }
}