import { Injectable, ElementRef } from '@angular/core';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
  once?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer: IntersectionObserver | null = null;
  private animatedElements = new Set<Element>();

  constructor() {
    this.initializeObserver();
  }

  private initializeObserver(): void {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  observeElement(element: Element, options: ScrollAnimationOptions = {}): void {
    if (!this.observer || !element) return;

    // Set default animation class if not provided
    const animationClass = options.animationClass || 'animate-fade-in-up';
    element.classList.add('animate-on-scroll', animationClass);

    // Add delay if specified
    if (options.delay) {
      (element as HTMLElement).style.animationDelay = `${options.delay}ms`;
    }

    this.observer.observe(element);
  }

  private animateElement(element: Element): void {
    if (this.animatedElements.has(element)) return;

    element.classList.add('animate-in');
    this.animatedElements.add(element);

    // Remove from observer after animation to improve performance
    if (this.observer) {
      this.observer.unobserve(element);
    }
  }

  unobserveElement(element: Element): void {
    if (this.observer && element) {
      this.observer.unobserve(element);
    }
  }

  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.animatedElements.clear();
  }
}
