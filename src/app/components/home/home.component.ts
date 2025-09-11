import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { EnhancedScrollAnimationService } from '../../services/enhanced-scroll-animation.service';
import { TypingAnimationService } from '../../services/typing-animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroTitle', { static: true }) heroTitle!: ElementRef;

  constructor(
    private scrollAnimationService: EnhancedScrollAnimationService,
    private typingAnimationService: TypingAnimationService
  ) {}

  ngAfterViewInit() {
    this.scrollAnimationService.observeElement(this.heroTitle, { animationType: 'fade-up' });
    this.typingAnimationService.startTypingAnimation(this.heroTitle.nativeElement, [
      'AI Specialist',
      'Finance Innovator',
      'Machine Learning Engineer'
    ], {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 60,
      pauseDuration: 2000,
      showCursor: true
    });
  }

  scrollToAbout() {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
