import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  // All skills categorized
  allSkills: Skill[] = [
    { name: 'Java', category: 'backend' },
    { name: 'Spring Boot', category: 'backend' },
    { name: 'Spring Framework', category: 'backend' },
    { name: 'Spring Security', category: 'backend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express.js', category: 'backend' },
    { name: 'PHP', category: 'backend' },
    { name: 'Laravel', category: 'backend' },
    { name: 'Angular', category: 'frontend' },
    { name: 'React.js', category: 'frontend' },
    { name: 'Vue.js', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'HTML', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'Bootstrap', category: 'frontend' },
    { name: 'Tailwind', category: 'frontend' },
    { name: 'Docker', category: 'devops' },
    { name: 'Kubernetes', category: 'devops' },
    { name: 'Git', category: 'devops' },
    { name: 'Jenkins', category: 'devops' },
    { name: 'AWS', category: 'devops' },
    { name: 'MySQL', category: 'database' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Oracle', category: 'database' },
    { name: 'Agile', category: 'methodology' },
    { name: 'Scrum', category: 'methodology' },
    { name: 'Jira', category: 'methodology' },
    { name: 'Trello', category: 'methodology' },
    { name: 'Figma', category: 'design' },
    { name: 'GitHub', category: 'design' },
    { name: 'VS Code', category: 'design' },
    { name: 'IntelliJ IDEA', category: 'design' }
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

  // Removed unused icon functions since we're not using icons in the skills display
}
