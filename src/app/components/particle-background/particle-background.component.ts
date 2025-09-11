import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ThreeParticleSystemService } from '../../services/three-particle-system.service';

@Component({
  selector: 'app-particle-background',
  imports: [],
  templateUrl: './particle-background.component.html',
  styleUrl: './particle-background.component.scss'
})
export class ParticleBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particleContainer', { static: true }) containerRef!: ElementRef<HTMLDivElement>;

  constructor(private particleService: ThreeParticleSystemService) {}

  ngAfterViewInit(): void {
    this.particleService.initializeParticleSystem(this.containerRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.particleService.destroy();
  }
}
