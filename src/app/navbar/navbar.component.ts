import { Component } from '@angular/core';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  options = [
    {
      title: 'Home',
      link: 'home',
    },
    {
      title: 'About',
      link: 'about',
    },
    {
      title: 'Experience',
      link: 'experience',
    },
    {
      title: 'Projects',
      link: 'projects',
    },
    {
      title: 'Stack',
      link: 'stack',
    },
    {
      title: 'Contact',
      link: 'contact',
    },
  ];
  scrollToElement(elementId: string): void {
    window.scroll(0, this.getElementPosition(elementId) ?  this.getElementPosition(elementId) - 95: 0);
  }
  getElementPosition(elementId: string): number {
    const position = document.getElementById(elementId)?.offsetTop || 0
    return position
  }
}
