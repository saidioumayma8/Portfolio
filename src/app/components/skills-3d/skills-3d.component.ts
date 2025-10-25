import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillNode {
  id: number;
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

@Component({
  selector: 'app-skills-3d',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills-3d" class="py-20 relative">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4 text-center">My Skills in 3D</h2>
        <p class="text-gray-400 text-center mb-12">Hover and drag to interact with my skill network</p>
        
        <div class="skills-3d-container" #skillsContainer>
          <canvas #skillsCanvas class="w-full h-96"></canvas>
          <div class="skills-info-panel" #infoPanel>
            <h3 class="text-xl font-bold mb-2">{{ selectedSkill?.name }}</h3>
            <p class="text-gray-300">{{ selectedSkill?.category }}</p>
            <div class="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                class="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                [style.width.%]="selectedSkill?.level || 0"
              ></div>
            </div>
            <span class="text-sm mt-1 block">{{ selectedSkill?.level }}% Proficiency</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-3d-container {
      position: relative;
      height: 500px;
      border-radius: 1rem;
      overflow: hidden;
      background: rgba(31, 41, 55, 0.5);
      border: 1px solid rgba(96, 165, 250, 0.2);
      backdrop-filter: blur(10px);
    }
    
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
    
    .skills-info-panel {
      position: absolute;
      bottom: 20px;
      left: 20px;
      background: rgba(17, 24, 39, 0.8);
      border: 1px solid rgba(96, 165, 250, 0.3);
      border-radius: 0.5rem;
      padding: 1rem;
      min-width: 200px;
      backdrop-filter: blur(5px);
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .skills-info-panel.visible {
      transform: translateY(0);
      opacity: 1;
    }
  `]
})
export class Skills3DComponent implements OnInit, OnDestroy {
  @ViewChild('skillsCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('infoPanel') infoPanelRef!: ElementRef<HTMLDivElement>;
  
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private animationId: number = 0;
  private skills: SkillNode[] = [];
  public selectedSkill: SkillNode | null = null; // Changed to public
  private isDragging = false;
  private lastX = 0;
  private lastY = 0;
  private rotationX = 0;
  private rotationY = 0;
  
  // Sample skills data
  private skillData = [
    { id: 1, name: 'Java & Spring Boot', level: 85, category: 'Backend Development' },
    { id: 2, name: 'Angular', level: 85, category: 'Frontend Frameworks' },
    { id: 3, name: 'React.js', level: 80, category: 'Frontend Frameworks' },
    { id: 4, name: 'MySQL', level: 80, category: 'Databases' },
    { id: 5, name: 'Docker', level: 70, category: 'DevOps' },
    { id: 6, name: 'Git', level: 85, category: 'Tools' },
    { id: 7, name: 'Node.js', level: 70, category: 'Backend Development' },
    { id: 8, name: 'Vue.js', level: 70, category: 'Frontend Frameworks' },
    { id: 9, name: 'PostgreSQL', level: 75, category: 'Databases' },
    { id: 10, name: 'JavaScript', level: 85, category: 'Languages' },
    { id: 11, name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { id: 12, name: 'Spring Security', level: 75, category: 'Backend Development' }
  ];

  ngOnInit() {
    this.initializeSkills();
    this.setupCanvas();
    this.animate();
    this.setupEventListeners();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initializeSkills() {
    // Initialize skills with random positions in 3D space
    this.skills = this.skillData.map((skill, index) => {
      const radius = 150;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      return {
        ...skill,
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5
      };
    });
  }

  private setupCanvas() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    
    // Set canvas size
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    });
  }

  private setupEventListeners() {
    // Mouse events for interaction
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    });
    
    this.canvas.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const deltaX = e.clientX - this.lastX;
        const deltaY = e.clientY - this.lastY;
        
        this.rotationY += deltaX * 0.01;
        this.rotationX += deltaY * 0.01;
        
        this.lastX = e.clientX;
        this.lastY = e.clientY;
      }
      
      // Check for hover
      this.checkHover(e);
    });
    
    this.canvas.addEventListener('mouseup', () => {
      this.isDragging = false;
    });
    
    this.canvas.addEventListener('mouseleave', () => {
      this.isDragging = false;
    });
  }

  private checkHover(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    let hoveredSkill: SkillNode | null = null;
    let minDistance = Infinity;
    
    // Find the closest skill node
    this.skills.forEach(skill => {
      const projected = this.project3D(skill.x, skill.y, skill.z);
      const distance = Math.sqrt(
        Math.pow(projected.x - x, 2) + 
        Math.pow(projected.y - y, 2)
      );
      
      if (distance < 20 && distance < minDistance) {
        minDistance = distance;
        hoveredSkill = skill;
      }
    });
    
    this.selectedSkill = hoveredSkill;
    
    // Show/hide info panel
    if (this.infoPanelRef) {
      const panel = this.infoPanelRef.nativeElement;
      if (this.selectedSkill) {
        panel.classList.add('visible');
      } else {
        panel.classList.remove('visible');
      }
    }
  }

  private project3D(x: number, y: number, z: number) {
    // Simple 3D projection
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    
    // Apply rotation
    const cosX = Math.cos(this.rotationX);
    const sinX = Math.sin(this.rotationX);
    const cosY = Math.cos(this.rotationY);
    const sinY = Math.sin(this.rotationY);
    
    // Rotate around X axis
    let newY = y * cosX - z * sinX;
    let newZ = y * sinX + z * cosX;
    
    // Rotate around Y axis
    let newX = x * cosY + newZ * sinY;
    newZ = -x * sinY + newZ * cosY;
    
    // Project to 2D
    const scale = 400 / (400 + newZ);
    const projX = newX * scale + centerX;
    const projY = newY * scale + centerY;
    
    return { x: projX, y: projY, scale };
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw connections between skills
    this.drawConnections();
    
    // Draw skill nodes
    this.drawSkillNodes();
  }

  private drawConnections() {
    this.ctx.strokeStyle = 'rgba(96, 165, 250, 0.2)';
    this.ctx.lineWidth = 1;
    
    // Draw lines between related skills
    for (let i = 0; i < this.skills.length; i++) {
      for (let j = i + 1; j < this.skills.length; j++) {
        const skillA = this.skills[i];
        const skillB = this.skills[j];
        
        // Connect skills in the same category
        if (skillA.category === skillB.category) {
          const projA = this.project3D(skillA.x, skillA.y, skillA.z);
          const projB = this.project3D(skillB.x, skillB.y, skillB.z);
          
          this.ctx.beginPath();
          this.ctx.moveTo(projA.x, projA.y);
          this.ctx.lineTo(projB.x, projB.y);
          this.ctx.stroke();
        }
      }
    }
  }

  private drawSkillNodes() {
    this.skills.forEach(skill => {
      const projected = this.project3D(skill.x, skill.y, skill.z);
      
      // Size based on skill level
      const size = 5 + (skill.level / 100) * 15;
      
      // Color based on category
      let color: string;
      switch (skill.category) {
        case 'Backend Development':
          color = '#3b82f6'; // Blue
          break;
        case 'Frontend Frameworks':
          color = '#10b981'; // Green
          break;
        case 'Databases':
          color = '#8b5cf6'; // Purple
          break;
        default:
          color = '#f59e0b'; // Amber
      }
      
      // Draw glow effect for selected skill
      if (skill === this.selectedSkill) {
        this.ctx.shadowColor = color;
        this.ctx.shadowBlur = 20;
      }
      
      // Draw skill node
      this.ctx.beginPath();
      this.ctx.arc(projected.x, projected.y, size * projected.scale, 0, Math.PI * 2);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      
      // Reset shadow
      this.ctx.shadowBlur = 0;
      
      // Draw skill name for selected skill
      if (skill === this.selectedSkill) {
        this.ctx.fillStyle = '#f9fafb';
        this.ctx.font = '12px sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(skill.name, projected.x, projected.y - size - 10);
      }
    });
  }
}