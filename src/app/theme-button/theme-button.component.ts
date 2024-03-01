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
      } else {
        document.body.setAttribute('data-theme', 'dark');
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
  }
  deletePreference(): void {
    window.localStorage.clear();
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
