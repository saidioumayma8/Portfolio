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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundComponent, HeaderComponent, HeroComponent, SkillsComponent, ProjectShowcaseComponent, ContactComponent, FooterComponent, AboutComponent, TimelineComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}