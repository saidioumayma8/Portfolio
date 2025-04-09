import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
  title = 'Welcome to my Portfolio!';
  introduction = 'A brief introduction about myself...';
}
