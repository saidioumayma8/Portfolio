import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'Oumayma Saidi';
  title = 'Web Developer';
  description = 'Passionate web developer with expertise in full-stack development using Java, Spring Boot, Angular, and modern web technologies. Experienced in building scalable applications and microservices architecture.';
}