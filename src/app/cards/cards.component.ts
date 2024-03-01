import { AfterViewInit, Component } from '@angular/core';
import { CardSkeletonComponent } from '../card-skeleton/card-skeleton.component';
import { BrowserMockupComponent } from '../browser-mockup/browser-mockup.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardSkeletonComponent, BrowserMockupComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  isLight: boolean = false;
  getTheme(): boolean {
    return window.localStorage.getItem('theme') ? true : false;
  }

  TAGS = {
    React: {
      name: 'React.js',
      icon: 'assets/icons/react-javascript-js.svg',
    },
    Tailwind: {
      name: 'Tailwind CSS',
      icon: 'assets/icons/tailwind-css-svgrepo-com.svg',
    },
    Node: {
      name: 'Express.js',
      icon: 'assets/icons/node-js.svg',
    },
    Postgres: {
      name: 'Postgresql',
      icon: 'assets/icons/PostgreSQL-Logo.wine.svg',
    },
    Sequelize: {
      name: 'Sequelize',
      icon: 'assets/icons/sequelize-svgrepo-com.svg',
    },
    Angular: {
      name: 'Angular',
      icon: 'assets/icons/angular-icon-seeklogo.svg',
    },
    Daisyui: {
      name: 'Daisyui',
      icon: 'assets/icons/daisyui.svg',
    },
  };
  projects = [
    {
      id: 'portfolio-item',
      title: 'Samuel Gomez Portfolio',
      description: 'This is my personal portfolio. For this one I use Angular with Taildwin CSS and Daisyui for fast style development. It also use SSR and is fully mobile responsive',
      year: '2024',
      bImage: 'assets/portfolio.png',
      wImage: 'assets/portfolio-w.png',
      tags: [this.TAGS.Tailwind, this.TAGS.Angular, this.TAGS.Daisyui],
      github: 'https://github.com/XamS9/xams-portfolio',
      mockupLink: 'portfolio.com',
    },
    {
      id: 'bootcamp-item',
      title: 'Cincinnatus bootcamp - CRUD',
      description: `It's web platform based on udemy, you can learn about anything with online courses. As an admin you can create, read, update and delete every data with the dashboard and also subscribe to any course and view the content like a regular student as well.
      `,
      year: '2023',
      bImage: 'assets/bootcamp.png',
      wImage: 'assets/bootcamp-w.png',
      tags: [
        this.TAGS.React,
        this.TAGS.Node,
        this.TAGS.Postgres,
        this.TAGS.Sequelize,
      ],
      github: 'https://github.com/XamS9/mini-bootcamp',
      mockupLink: 'bootcamp.com',
    },
  ];
}
