import { NgIf, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css',
})
export class ThemeButtonComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isLight = false;
  }
  isLight: boolean;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (window.localStorage.getItem('theme')) {
        document.body.setAttribute('data-theme', 'lofi');
        document.documentElement.classList.remove('dark');
      } else {
        document.body.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark');
      }
      this.isLight = window.localStorage.getItem('theme') ? true : false;
    }
  }
  handleClick(): void {
    this.getSavedPreference() ? this.savePreference() : this.deletePreference();
  }
  savePreference(): void {
    window.localStorage.setItem('theme', 'lofi');
    document.body.setAttribute('data-theme', 'lofi');
    document.documentElement.classList.remove('dark');
  }
  deletePreference(): void {
    window.localStorage.clear();
    document.documentElement.classList.add('dark');
    document.body.setAttribute('data-theme', 'dark');
  }
  getSavedPreference(): boolean {
    if (window.localStorage.getItem('theme')) {
      return false;
    } else {
      return true;
    }
  }
}
