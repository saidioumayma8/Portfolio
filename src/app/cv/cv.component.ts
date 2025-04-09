import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // You might need CommonModule

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule], // Import CommonModule
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CVComponent {
  cvUrl = 'assets/cv/your-cv.pdf'; // Make sure this path is correct
}
