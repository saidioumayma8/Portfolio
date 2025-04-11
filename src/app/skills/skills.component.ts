import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class AppComponent {
  skills = [
    { name: 'HTML5', icon: 'ti-html5' },
    { name: 'CSS3', icon: 'ti-css3' },
    { name: 'JavaScript', icon: 'ti-layout' },
    { name: 'Angular', icon: 'ti-angular' },
    { name: 'Java', icon: 'ti-cup' },
    { name: 'Spring Boot', icon: 'ti-settings' }
  ];
}

