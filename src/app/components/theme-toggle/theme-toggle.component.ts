import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="toggleTheme()" 
      class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <i class="{{ themeIcon }} text-xl"></i>
    </button>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  themeIcon = 'fas fa-moon';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.updateIcon();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.updateIcon();
  }

  private updateIcon() {
    this.themeIcon = this.themeService.isDarkTheme() ? 'fas fa-moon' : 'fas fa-sun';
  }
}