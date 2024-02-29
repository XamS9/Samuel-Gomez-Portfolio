import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  options = [
    {
      title: "Home",
      link: "#home"
    },
    {
      title: "About",
      link: "#about"
    },
    {
      title: "Stack",
      link: "#stack"
    },
    {
      title: "Work",
      link: "#work"
    },
    {
      title: "Contact",
      link: "#contact"
    }
  ]
}
