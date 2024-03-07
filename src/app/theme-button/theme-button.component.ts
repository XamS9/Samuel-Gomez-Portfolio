import { NgIf, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css',
})
export class ThemeButtonComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public themeService: ThemeService
  ) {}
  isLight = this.themeService.getLight();
  ngOnInit(): void {
    this.themeService.isLight$.subscribe((isLight) => {
      this.isLight = isLight;
    });
    if (isPlatformBrowser(this.platformId)) {
      if (window.localStorage.getItem('theme')) {
        document.body.setAttribute('data-theme', 'lofi');
        document.documentElement.classList.remove('dark');
      } else {
        document.body.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark');
      }
      this.themeService.setLight(
        window.localStorage.getItem('theme') ? true : false
      );
    }
  }
  handleClick(): void {
    this.getSavedPreference() ? this.savePreference() : this.deletePreference();
  }
  savePreference(): void {
    window.localStorage.setItem('theme', 'lofi');
    document.body.setAttribute('data-theme', 'lofi');
    document.documentElement.classList.remove('dark');
    this.themeService.setLight(true);
  }
  deletePreference(): void {
    window.localStorage.clear();
    document.documentElement.classList.add('dark');
    document.body.setAttribute('data-theme', 'dark');
    this.themeService.setLight(false);
  }
  getSavedPreference(): boolean {
    if (window.localStorage.getItem('theme')) {
      return false;
    } else {
      return true;
    }
  }
}
