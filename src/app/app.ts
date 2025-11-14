import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './components/background/background.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundComponent, HeaderComponent, HeroComponent, SkillsComponent, ProjectShowcaseComponent, ContactComponent, FooterComponent, AboutComponent, TimelineComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [ThemeService]
})
export class App {
  constructor(private themeService: ThemeService) {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      this.themeService.setLightMode();
    } else {
      this.themeService.setDarkMode();
    }
  }
}