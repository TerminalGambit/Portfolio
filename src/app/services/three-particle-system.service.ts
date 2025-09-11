import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class ThreeParticleSystemService {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private particleGeometry!: THREE.BufferGeometry;
  private particleMaterial!: THREE.PointsMaterial;
  private animationId!: number;
  private mouse = { x: 0, y: 0 };
  private isActive = false;
  private container!: HTMLElement;
  private particleCount = 1000;
  private positions!: Float32Array;
  private velocities!: Float32Array;
  private sizes!: Float32Array;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initializeParticleSystem(container: HTMLElement): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.container = container;
    this.initThreeJS();
    this.createParticles();
    this.setupEventListeners();
    this.animate();
    this.isActive = true;
  }

  private initThreeJS(): void {
    // Scene setup
    this.scene = new THREE.Scene();
    
    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 100;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0); // Transparent background
    
    this.container.appendChild(this.renderer.domElement);
  }

  private createParticles(): void {
    this.particleGeometry = new THREE.BufferGeometry();
    
    // Initialize arrays
    this.positions = new Float32Array(this.particleCount * 3);
    this.velocities = new Float32Array(this.particleCount * 3);
    this.sizes = new Float32Array(this.particleCount);

    // Populate particle data
    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions
      this.positions[i3] = (Math.random() - 0.5) * 200;
      this.positions[i3 + 1] = (Math.random() - 0.5) * 200;
      this.positions[i3 + 2] = (Math.random() - 0.5) * 100;
      
      // Random velocities
      this.velocities[i3] = (Math.random() - 0.5) * 0.5;
      this.velocities[i3 + 1] = (Math.random() - 0.5) * 0.5;
      this.velocities[i3 + 2] = (Math.random() - 0.5) * 0.5;
      
      // Random sizes
      this.sizes[i] = Math.random() * 3 + 1;
    }

    // Set geometry attributes
    this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.particleGeometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

    // Create material
    this.particleMaterial = new THREE.PointsMaterial({
      color: 0x00ccff, // Brighter blue color
      size: 4, // Larger particle size
      sizeAttenuation: true,
      transparent: true,
      opacity: 1.0, // Full opacity
      blending: THREE.AdditiveBlending
    });

    // Create particles mesh
    this.particles = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.scene.add(this.particles);
  }

  private setupEventListeners(): void {
    // Resize handler
    window.addEventListener('resize', () => this.onWindowResize());
    
    // Mouse movement handler
    window.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Click handler for particle burst effect
    window.addEventListener('click', (event) => {
      this.createParticleBurst(event.clientX, event.clientY);
    });
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private createParticleBurst(x: number, y: number): void {
    // Convert screen coordinates to world coordinates
    const vector = new THREE.Vector3(
      (x / window.innerWidth) * 2 - 1,
      -(y / window.innerHeight) * 2 + 1,
      0.5
    );
    vector.unproject(this.camera);

    // Add burst effect by modifying nearby particles
    const positions = this.particleGeometry.attributes['position'].array as Float32Array;
    
    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;
      const dx = positions[i3] - vector.x;
      const dy = positions[i3 + 1] - vector.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 20) {
        this.velocities[i3] += (dx / distance) * 2;
        this.velocities[i3 + 1] += (dy / distance) * 2;
      }
    }
  }

  private animate(): void {
    if (!this.isActive) return;

    this.updateParticles();
    this.renderer.render(this.scene, this.camera);
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private updateParticles(): void {
    const positions = this.particleGeometry.attributes['position'].array as Float32Array;
    
    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;
      
      // Update positions with velocities
      positions[i3] += this.velocities[i3];
      positions[i3 + 1] += this.velocities[i3 + 1];
      positions[i3 + 2] += this.velocities[i3 + 2];
      
      // Mouse interaction
      const mouseInfluence = 0.01;
      const dx = this.mouse.x * 100 - positions[i3];
      const dy = this.mouse.y * 100 - positions[i3 + 1];
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 50) {
        this.velocities[i3] += dx * mouseInfluence / distance;
        this.velocities[i3 + 1] += dy * mouseInfluence / distance;
      }
      
      // Apply damping
      this.velocities[i3] *= 0.99;
      this.velocities[i3 + 1] *= 0.99;
      this.velocities[i3 + 2] *= 0.99;
      
      // Boundary conditions - wrap around screen
      if (positions[i3] > 100) positions[i3] = -100;
      if (positions[i3] < -100) positions[i3] = 100;
      if (positions[i3 + 1] > 100) positions[i3 + 1] = -100;
      if (positions[i3 + 1] < -100) positions[i3 + 1] = 100;
    }
    
    // Update geometry
    this.particleGeometry.attributes['position'].needsUpdate = true;
    
    // Rotate particle system slowly
    this.particles.rotation.y += 0.001;
    this.particles.rotation.x += 0.0005;
  }

  // Public control methods
  setParticleCount(count: number): void {
    this.particleCount = count;
    this.scene.remove(this.particles);
    this.particleGeometry.dispose();
    this.createParticles();
  }

  setColor(color: number): void {
    this.particleMaterial.color.setHex(color);
  }

  setOpacity(opacity: number): void {
    this.particleMaterial.opacity = opacity;
  }

  pause(): void {
    this.isActive = false;
  }

  resume(): void {
    if (!this.isActive) {
      this.isActive = true;
      this.animate();
    }
  }

  destroy(): void {
    this.isActive = false;
    
    if (!isPlatformBrowser(this.platformId)) return;
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    // Clean up Three.js resources
    if (this.particleGeometry) {
      this.particleGeometry.dispose();
    }
    
    if (this.particleMaterial) {
      this.particleMaterial.dispose();
    }
    
    if (this.renderer) {
      this.renderer.dispose();
      if (this.container && this.renderer.domElement && this.container.contains(this.renderer.domElement)) {
        this.container.removeChild(this.renderer.domElement);
      }
    }
    
    // Remove event listeners (only in browser)
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', () => this.onWindowResize());
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('click', () => {});
    }
  }
}
