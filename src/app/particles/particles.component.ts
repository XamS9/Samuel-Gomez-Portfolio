import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { particlesConfig } from './particles-config';
import { isPlatformBrowser } from '@angular/common';
declare let particlesJS: any;

@Component({
  selector: 'app-particles',
  standalone: true,
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css'],
  imports: [],
})
export class ParticlesComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) this.loadParticles();
  }

  loadParticles(): void {
    particlesJS('particles-js', particlesConfig);
  }
}
