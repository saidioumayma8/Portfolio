import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('contactCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private animationId!: number;
  private mouseX = 0;
  private mouseY = 0;
  private particles: any[] = [];
  
  isSubmitting = false;
  formState = 'idle'; // idle, success, error
  messageCount = 0;
  typingText = '';
  fullText = 'Ready to collaborate? Drop me a message! 🚀';
  private typingInterval: any;
  showMessageForm = false;
  ngOnInit() {
    this.startTypingAnimation();
  }

  ngAfterViewInit() {
    if (this.canvasRef) {
      const canvas = this.canvasRef.nativeElement;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      this.ctx = canvas.getContext('2d')!;
      this.createParticles();
      this.animateParticles();
      
      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;
      });
    }
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTypingAnimation() {
    let i = 0;
    this.typingInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.typingText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(this.typingInterval);
        setTimeout(() => {
          this.typingText = '';
          i = 0;
          this.startTypingAnimation();
        }, 2000); // Faster loop
      }
    }, 80); // Faster typing
  }

  createParticles() {
    for (let i = 0; i < 80; i++) {
      this.particles.push({
        x: Math.random() * this.canvasRef.nativeElement.width,
        y: Math.random() * this.canvasRef.nativeElement.height,
        vx: (Math.random() - 0.5) * 2, // Faster movement
        vy: (Math.random() - 0.5) * 2, // Faster movement
        radius: Math.random() * 3 + 1,
        color: this.getRandomColor()
      });
    }
  }

  getRandomColor() {
    const colors = [
      'rgba(168, 85, 247, 0.6)',
      'rgba(236, 72, 153, 0.6)',
      'rgba(239, 68, 68, 0.6)',
      'rgba(59, 130, 246, 0.6)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  animateParticles() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles.forEach((particle, index) => {
      // Mouse interaction
      const dx = this.mouseX - particle.x;
      const dy = this.mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        particle.vx -= Math.cos(angle) * 0.5;
        particle.vy -= Math.sin(angle) * 0.5;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.fill();

      // Connect particles
      for (let j = index + 1; j < this.particles.length; j++) {
        const dx2 = this.particles[j].x - particle.x;
        const dy2 = this.particles[j].y - particle.y;
        const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        if (dist < 150) {
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(168, 85, 247, ${0.3 * (1 - dist / 150)})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    });

    this.animationId = requestAnimationFrame(() => this.animateParticles());
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    
    this.isSubmitting = true;
    this.formState = 'idle';
    
    // Simulate form submission with animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    this.isSubmitting = false;
    this.formState = 'success';
    this.messageCount++;
    
    // For now, we'll show an alert with instructions
    alert('Message sent successfully! ✨\n\nTo implement real email functionality:\n' +
          '1. Use a backend service (Node.js, PHP, etc.)\n' +
          '2. Use EmailJS, Formspree, or SendGrid\n' +
          '3. Or use Netlify Forms\n\n' +
          'Email would be sent to: oumaymasaidi908@gmail.com');
    
    // Reset form
    const form = event.target as HTMLFormElement;
    form.reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      this.formState = 'idle';
    }, 3000);
  }
  
  copyToClipboard(text: string, type: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${type} copied to clipboard! ✓`);
    });
  }
  
  shakeCard(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.animation = 'shake 0.5s';
    setTimeout(() => {
      card.style.animation = '';
    }, 500);
  }
  
  toggleMessageForm() {
    this.showMessageForm = !this.showMessageForm;
  }
}