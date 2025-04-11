import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'StockMaster',
      link: 'https://github.com/yourusername/stockmaster',
      image: 'assets/imgs/image.png'
    },
    {
      title: 'MedicalApp',
      link: 'https://github.com/yourusername/medical-app',
      image: 'assets/imgs/image1.png'
    },
    {
      title: 'Trektrove',
      link: 'https://github.com/saidioumayma8/TrekTrouve.git',
      image: 'assets/imgs/trektrove.png'
    }
  ];
}
