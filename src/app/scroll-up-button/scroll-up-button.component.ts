import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-scroll-up-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './scroll-up-button.component.html',
  styleUrl: './scroll-up-button.component.css',
})
export class ScrollUpButtonComponent {
  render = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    window.scrollY > 200 ? (this.render = true) : (this.render = false);
  }
  scrollUp(): void {
    window.scrollTo(0,0)
  }
}
