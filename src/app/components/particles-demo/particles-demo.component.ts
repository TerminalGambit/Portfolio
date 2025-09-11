import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeParticleSystemService } from '../../services/three-particle-system.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-particles-demo',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, FormsModule, MatIconModule],
  templateUrl: './particles-demo.component.html',
  styleUrl: './particles-demo.component.scss'
})
export class ParticlesDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particleContainer', { static: true }) containerRef!: ElementRef<HTMLDivElement>;

  particleCount = 1000;
  opacity = 1.0;
  isPlaying = true;

  constructor(private particleService: ThreeParticleSystemService) {}

  ngAfterViewInit(): void {
    this.particleService.initializeParticleSystem(this.containerRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.particleService.destroy();
  }

  onParticleCountChange(event: any): void {
    this.particleCount = event.target.value;
    this.particleService.setParticleCount(this.particleCount);
  }

  onOpacityChange(event: any): void {
    this.opacity = event.target.value;
    this.particleService.setOpacity(this.opacity);
  }

  togglePlayPause(): void {
    if (this.isPlaying) {
      this.particleService.pause();
    } else {
      this.particleService.resume();
    }
    this.isPlaying = !this.isPlaying;
  }

  changeColor(color: string): void {
    const colorMap: { [key: string]: number } = {
      'blue': 0x00ccff,
      'green': 0x00ff88,
      'purple': 0x8844ff,
      'red': 0xff4444,
      'yellow': 0xffaa00
    };
    this.particleService.setColor(colorMap[color]);
  }
}
