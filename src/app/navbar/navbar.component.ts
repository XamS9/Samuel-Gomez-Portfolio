import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
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
    const element = document.getElementById(elementId);
    const result = element?.offsetTop
    window.scroll(0, result ? result - 95: 0);
  }
}
