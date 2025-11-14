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
      class="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      <i class="{{ themeIcon }}"></i>
    </button>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .theme-toggle-btn {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.3));
      border: 2px solid rgba(59, 130, 246, 0.4);
      color: #60a5fa;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }
    
    .theme-toggle-btn:hover {
      transform: scale(1.1) rotate(15deg);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
      border-color: rgba(59, 130, 246, 0.8);
    }
    
    .theme-toggle-btn:active {
      transform: scale(0.95);
    }
    
    :host-context(.light) .theme-toggle-btn {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(251, 191, 36, 0.3));
      border-color: rgba(245, 158, 11, 0.4);
      color: #f59e0b;
    }
    
    :host-context(.light) .theme-toggle-btn:hover {
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
      border-color: rgba(245, 158, 11, 0.8);
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