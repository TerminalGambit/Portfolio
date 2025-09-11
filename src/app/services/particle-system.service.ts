import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { Particle } from './particle';

@Injectable({
  providedIn: 'root'
})
export class ParticleSystemService {
  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId!: number;
  private mouse = { x: 0, y: 0 };
  private isActive = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initializeParticleSystem(canvas: HTMLCanvasElement, particleCount: number = 50): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.canvas = canvas;
    this.context = canvas.getContext('2d')!;
    
    this.resizeCanvas();
    this.createParticles(particleCount);
    this.setupEventListeners();
    this.animate();
    this.isActive = true;
  }

  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private createParticles(count: number): void {
    this.particles = [];
    
    const colors = [
      'rgba(0, 153, 255, 0.6)',   // Primary blue
      'rgba(51, 170, 255, 0.4)',  // Light blue
      'rgba(0, 204, 255, 0.5)',   // Cyan
      'rgba(102, 187, 255, 0.3)'  // Muted blue
    ];

    for (let i = 0; i < count; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const color = colors[Math.floor(Math.random() * colors.length)];
      this.particles.push(new Particle(x, y, color));
    }
  }

  private setupEventListeners(): void {
    window.addEventListener('resize', () => this.resizeCanvas());
    
    // Track mouse movement
    window.addEventListener('mousemove', (event) => {
      this.mouse.x = event.clientX;
      this.mouse.y = event.clientY;
    });

    // Add particles on click
    this.canvas.addEventListener('click', (event) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Add multiple particles at click location
      for (let i = 0; i < 5; i++) {
        const offsetX = x + (Math.random() - 0.5) * 20;
        const offsetY = y + (Math.random() - 0.5) * 20;
        this.particles.push(new Particle(offsetX, offsetY, 'rgba(0, 153, 255, 0.8)'));
      }
    });
  }

  private animate(): void {
    if (!this.isActive) return;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw particles
    this.particles.forEach((particle, index) => {
      particle.update(this.mouse);
      particle.draw(this.context);
      
      // Remove particles that are too small
      if (particle.size <= 0.2) {
        this.particles.splice(index, 1);
      }
    });

    // Connect nearby particles with lines
    this.connectParticles();

    // Maintain minimum particle count
    if (this.particles.length < 30) {
      this.addRandomParticle();
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private connectParticles(): void {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          this.context.strokeStyle = `rgba(0, 153, 255, ${0.2 - distance / 600})`;
          this.context.lineWidth = 1;
          this.context.beginPath();
          this.context.moveTo(this.particles[i].x, this.particles[i].y);
          this.context.lineTo(this.particles[j].x, this.particles[j].y);
          this.context.stroke();
        }
      }
    }
  }

  private addRandomParticle(): void {
    const colors = [
      'rgba(0, 153, 255, 0.6)',
      'rgba(51, 170, 255, 0.4)',
      'rgba(0, 204, 255, 0.5)',
      'rgba(102, 187, 255, 0.3)'
    ];
    
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * this.canvas.height;
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.particles.push(new Particle(x, y, color));
  }

  destroy(): void {
    this.isActive = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.particles = [];
  }

  // Public methods for controlling the system
  addParticle(x: number, y: number): void {
    this.particles.push(new Particle(x, y, 'rgba(0, 153, 255, 0.8)'));
  }

  setParticleCount(count: number): void {
    if (count > this.particles.length) {
      const diff = count - this.particles.length;
      for (let i = 0; i < diff; i++) {
        this.addRandomParticle();
      }
    } else if (count < this.particles.length) {
      this.particles.splice(count);
    }
  }

  pause(): void {
    this.isActive = false;
  }

  resume(): void {
    this.isActive = true;
    this.animate();
  }
}
