import { Injectable, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface AnimationConfig {
  threshold?: number;
  rootMargin?: string;
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'slide-up';
  delay?: number;
  stagger?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EnhancedScrollAnimationService {
  private observers = new WeakMap<Element, IntersectionObserver>();
  private animatedElements = new WeakSet<Element>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  observeElement(
    element: ElementRef<HTMLElement> | HTMLElement, 
    config: AnimationConfig = {}
  ): void {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId)) return;
    
    const el = element instanceof ElementRef ? element.nativeElement : element;
    
    if (!el || this.observers.has(el)) return;

    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      animationType = 'fade-up',
      delay = 0,
      stagger = false
    } = config;

    // Add initial animation class
    el.classList.add('scroll-animate', `animate-${animationType}`);
    
    if (delay > 0) {
      el.style.animationDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
          this.animateElement(entry.target as HTMLElement, stagger);
          this.animatedElements.add(entry.target);
        }
      });
    }, {
      threshold,
      rootMargin
    });

    observer.observe(el);
    this.observers.set(el, observer);
  }

  observeMultipleElements(
    elements: (ElementRef<HTMLElement> | HTMLElement)[], 
    config: AnimationConfig = {}
  ): void {
    elements.forEach((element, index) => {
      const staggerDelay = config.stagger ? index * 100 : (config.delay || 0);
      this.observeElement(element, {
        ...config,
        delay: staggerDelay
      });
    });
  }

  private animateElement(element: HTMLElement, useStagger: boolean): void {
    // Handle staggered animations for child elements
    if (useStagger) {
      const children = Array.from(element.children) as HTMLElement[];
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('animate-in');
        }, index * 100);
      });
    } else {
      element.classList.add('animate-in');
    }

    // Trigger any custom animation events
    element.dispatchEvent(new CustomEvent('animated', { bubbles: true }));
  }

  unobserveElement(element: ElementRef<HTMLElement> | HTMLElement): void {
    const el = element instanceof ElementRef ? element.nativeElement : element;
    const observer = this.observers.get(el);
    
    if (observer) {
      observer.unobserve(el);
      observer.disconnect();
      this.observers.delete(el);
    }
  }

  // Utility method for manual animations
  animateOnDemand(element: HTMLElement, animationType: string): void {
    element.classList.add('scroll-animate', `animate-${animationType}`, 'animate-in');
  }

  // Reset animation for element
  resetAnimation(element: HTMLElement): void {
    element.classList.remove('animate-in');
    this.animatedElements.delete(element);
    
    // Trigger reflow
    element.offsetHeight;
    
    // Re-add animation class after a short delay
    setTimeout(() => {
      element.classList.add('animate-in');
    }, 50);
  }
}
