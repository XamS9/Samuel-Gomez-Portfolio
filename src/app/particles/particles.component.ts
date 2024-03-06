import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { particlesConfig } from './particles-config';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
declare let particlesJS: any;

@Component({
  selector: 'app-particles',
  standalone: true,
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css'],
  imports: [CommonModule],
})
export class ParticlesComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isLight = false;
  }
  isLight: boolean;
  getTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.localStorage.getItem('theme') ? true : false;
    } else { 
      return false
    }
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadParticles();
      if (window.localStorage.getItem('theme')) {
        this.isLight = true;
      } else {
        this.isLight = false;
      }
    }
  }

  loadParticles(): void {
    particlesJS('particles-js', particlesConfig);
  }
}
