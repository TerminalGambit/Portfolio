import { Directive, ElementRef, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ScrollAnimationService, ScrollAnimationOptions } from '../services/scroll-animation.service';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() animationType: string = 'fade-in-up';
  @Input() animationDelay: number = 0;
  @Input() threshold: number = 0.1;

  constructor(
    private elementRef: ElementRef,
    private scrollAnimationService: ScrollAnimationService
  ) {}

  ngOnInit(): void {
    // Add initial classes for animation
    this.elementRef.nativeElement.classList.add('scroll-animate', `animate-${this.animationType}`);
  }

  ngAfterViewInit(): void {
    // Start observing the element after view is initialized
    const options: ScrollAnimationOptions = {
      animationClass: `animate-${this.animationType}`,
      delay: this.animationDelay,
      threshold: this.threshold
    };

    this.scrollAnimationService.observeElement(this.elementRef.nativeElement, options);
  }

  ngOnDestroy(): void {
    this.scrollAnimationService.unobserveElement(this.elementRef.nativeElement);
  }
}
