import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="particles-container" #particlesContainer></div>
    <div class="gradient-overlay"></div>
  `,
  styles: [`
    .particles-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
    }
    
    .gradient-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.8) 100%);
      z-index: -1;
    }
  `]
})
export class BackgroundComponent implements OnInit, OnDestroy {
  private particles: HTMLElement[] = [];
  private animationFrameId: number = 0;
  private container!: HTMLElement;

  ngOnInit() {
    // Create particles for the background
    this.createParticles();
    this.animateParticles();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private createParticles() {
    // Create 50 floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size and position
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      // Random color from our palette
      const colors = ['rgba(59, 130, 246, 0.5)', 'rgba(139, 92, 246, 0.5)', 'rgba(16, 185, 129, 0.5)'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      
      // Random animation
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s infinite ease-in-out`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      document.querySelector('.particles-container')?.appendChild(particle);
      this.particles.push(particle);
    }
  }

  private animateParticles() {
    // Animate particles with subtle movements
    const animate = () => {
      this.particles.forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const x = parseFloat(particle.style.left || '0');
        const y = parseFloat(particle.style.top || '0');
        
        // Subtle movement
        const newX = x + (Math.random() - 0.5) * 0.1;
        const newY = y + (Math.random() - 0.5) * 0.1;
        
        particle.style.left = `${newX}%`;
        particle.style.top = `${newY}%`;
      });
      
      this.animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
  }
}