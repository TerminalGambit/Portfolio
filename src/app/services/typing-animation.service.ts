import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface TypingConfig {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
}

interface AnimationState {
  animate: () => void;
  element: HTMLElement;
  cursorInterval?: any;
}

@Injectable({
  providedIn: 'root'
})
export class TypingAnimationService {
  private activeAnimations = new Map<HTMLElement, AnimationState>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  startTypingAnimation(
    element: HTMLElement,
    texts: string[],
    config: TypingConfig = {}
  ): void {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId)) return;
    
    const {
      typeSpeed = 50,
      deleteSpeed = 30,
      pauseDuration = 2000,
      loop = true,
      showCursor = true,
      cursorChar = '|'
    } = config;

    // Stop any existing animation
    this.stopTypingAnimation(element);

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    const animate = () => {
      const currentText = texts[textIndex];
      
      if (!isPaused) {
        if (!isDeleting) {
          // Typing
          if (charIndex < currentText.length) {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(animate, typeSpeed + Math.random() * 50); // Add slight randomness
          } else {
            // Finished typing, pause before deleting
            isPaused = true;
            setTimeout(() => {
              isPaused = false;
              isDeleting = true;
              animate();
            }, pauseDuration);
          }
        } else {
          // Deleting
          if (charIndex > 0) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(animate, deleteSpeed);
          } else {
            // Finished deleting, move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            
            if (!loop && textIndex === 0) {
              // Animation completed, don't loop
              if (showCursor) {
                element.textContent += cursorChar;
              }
              return;
            }
            
            setTimeout(animate, typeSpeed);
          }
        }
      }

      // Add/remove cursor
      if (showCursor) {
        const content = element.textContent || '';
        const hasCursor = content.endsWith(cursorChar);
        
        if (!hasCursor && (Date.now() / 500) % 2 < 1) {
          element.textContent = content + cursorChar;
        } else if (hasCursor && (Date.now() / 500) % 2 >= 1) {
          element.textContent = content.slice(0, -1);
        }
      }
    };

    // Store animation reference
    const animationId: AnimationState = { animate, element };
    this.activeAnimations.set(element, animationId);

    // Start the animation
    animate();

    // Cursor blinking effect
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        if (!this.activeAnimations.has(element)) {
          clearInterval(cursorInterval);
          return;
        }

        const content = element.textContent || '';
        const hasCursor = content.endsWith(cursorChar);
        
        if (hasCursor) {
          element.textContent = content.slice(0, -1);
        } else {
          element.textContent = content + cursorChar;
        }
      }, 500);

      // Store cursor interval for cleanup
      animationId.cursorInterval = cursorInterval;
    }
  }

  stopTypingAnimation(element: HTMLElement): void {
    const animation = this.activeAnimations.get(element);
    if (animation) {
      if (animation.cursorInterval) {
        clearInterval(animation.cursorInterval);
      }
      this.activeAnimations.delete(element);
    }
  }

  // Simple typewriter effect (one-time, no loop)
  typewriterEffect(
    element: HTMLElement,
    text: string,
    speed: number = 50
  ): Promise<void> {
    return new Promise((resolve) => {
      let index = 0;
      element.textContent = '';

      const type = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(type, speed + Math.random() * 30);
        } else {
          resolve();
        }
      };

      type();
    });
  }

  // Animated text reveal effect
  revealText(
    element: HTMLElement,
    text: string,
    config: { speed?: number; highlightColor?: string } = {}
  ): Promise<void> {
    const { speed = 30, highlightColor = 'var(--accent-bright)' } = config;
    
    return new Promise((resolve) => {
      element.innerHTML = '';
      
      // Create spans for each character
      const chars = text.split('').map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = 'all 0.3s ease';
        span.style.display = 'inline-block';
        return span;
      });

      chars.forEach(span => element.appendChild(span));

      // Animate each character
      let delay = 0;
      chars.forEach((span, index) => {
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
          
          // Add highlight effect
          span.style.color = highlightColor;
          setTimeout(() => {
            span.style.color = '';
          }, 200);

          if (index === chars.length - 1) {
            setTimeout(resolve, 300);
          }
        }, delay);
        
        delay += speed;
      });
    });
  }

  // Cleanup all animations
  cleanup(): void {
    this.activeAnimations.forEach((animation, element) => {
      this.stopTypingAnimation(element);
    });
    this.activeAnimations.clear();
  }
}
