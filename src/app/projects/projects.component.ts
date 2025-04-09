import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['../../assets/css/meyawo.css', '../../assets/vendors/themify-icons/css/themify-icons.css', './projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    // Your project data here
  ];
}
