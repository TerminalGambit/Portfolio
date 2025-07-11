import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isDarkMode = true; // Portfolio starts in dark mode by default

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Add smooth scrolling to the entire document (only in browser)
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Load theme preference from localStorage
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) {
        this.isDarkMode = savedTheme === 'dark';
      }
      this.applyTheme();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.pageYOffset > 50;
    }
  }

  smoothScrollTo(elementId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
      localStorage.setItem('portfolio-theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      
      if (this.isDarkMode) {
        // Reset to dark theme (remove all custom properties to use CSS defaults)
        root.classList.remove('light-theme');
        root.classList.add('dark-theme');
        
        // Reset to original dark theme values
        root.style.setProperty('--bg-primary', '#0A0F0C');
        root.style.setProperty('--bg-secondary', '#111A15');
        root.style.setProperty('--bg-tertiary', '#1A2B20');
        root.style.setProperty('--bg-overlay', 'rgba(10, 15, 12, 0.9)');
        
        root.style.setProperty('--text-primary', '#FFFFFF');
        root.style.setProperty('--text-secondary', '#B8D4C2');
        root.style.setProperty('--text-tertiary', '#8BA99A');
        
        root.style.setProperty('--border-primary', '#2A4A35');
        root.style.setProperty('--border-secondary', '#1A2B20');
        
        // Reset shadows for dark mode
        root.style.setProperty('--shadow-light', '0 2px 10px rgba(0, 255, 136, 0.05)');
        root.style.setProperty('--shadow-medium', '0 4px 20px rgba(0, 255, 136, 0.1)');
        root.style.setProperty('--shadow-heavy', '0 8px 30px rgba(0, 255, 136, 0.15)');
        root.style.setProperty('--shadow-glow', '0 0 20px rgba(0, 255, 136, 0.2)');
      } else {
        // Light theme variables
        root.classList.remove('dark-theme');
        root.classList.add('light-theme');
        
        // Override CSS variables for light mode
        root.style.setProperty('--bg-primary', '#FFFFFF');
        root.style.setProperty('--bg-secondary', '#F8F9FA');
        root.style.setProperty('--bg-tertiary', '#FFFFFF');
        root.style.setProperty('--bg-overlay', 'rgba(255, 255, 255, 0.9)');
        
        root.style.setProperty('--text-primary', '#1A1A1A');
        root.style.setProperty('--text-secondary', '#4A5568');
        root.style.setProperty('--text-tertiary', '#718096');
        
        root.style.setProperty('--border-primary', '#E2E8F0');
        root.style.setProperty('--border-secondary', '#EDF2F7');
        
        // Adjust shadows for light mode
        root.style.setProperty('--shadow-light', '0 2px 10px rgba(0, 0, 0, 0.1)');
        root.style.setProperty('--shadow-medium', '0 4px 20px rgba(0, 0, 0, 0.15)');
        root.style.setProperty('--shadow-heavy', '0 8px 30px rgba(0, 0, 0, 0.2)');
        root.style.setProperty('--shadow-glow', '0 0 20px rgba(0, 255, 136, 0.3)');
      }
    }
  }
}
