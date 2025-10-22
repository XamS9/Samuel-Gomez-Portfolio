import { Component, OnInit } from '@angular/core';
import { CardSkeletonComponent } from '../card-skeleton/card-skeleton.component';
import { BrowserMockupComponent } from '../browser-mockup/browser-mockup.component';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardSkeletonComponent, BrowserMockupComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent implements OnInit {
  constructor(public themeService: ThemeService) {}
  isLight = this.themeService.getLight();
  ngOnInit(): void {
    this.themeService.isLight$.subscribe((isLight) => {
      this.isLight = isLight;
    });
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
    Javascript: {
      name: 'Javascript',
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
    Websocket: {
      name: 'Websockets',
      icon: 'assets/icons/websocket-svgrepo-com.svg',
    },
    Vue: {
      name: 'VueJS',
      icon: 'assets/icons/vue.svg',
    },
    Vuetify: {
      name: 'Vuetify',
      icon: 'assets/icons/vuetify.svg',
    },
    Pinia: {
      name: 'Pinia',
      icon: 'assets/icons/pinia.svg',
    },
    Strapi: {
      name: 'Strapi',
      icon: 'assets/icons/strapi.svg',
    },
    Typescript: {
      name: 'Typescript',
      icon: 'assets/icons/typescript.svg',
    },
    OpenAi: {
      name: 'OpenAI',
      icon: 'assets/icons/OpenAI-white-monoblossom.svg',
    },
    S3: {
      name: 'AWS S3',
      icon: 'assets/icons/Amazon-S3-Logo.svg',
    },
  };
  projects = [
    {
      id: 'ai-scribe',
      title: 'AI Scribe Notes Management Tool',
      description:
        "A full-stack healthcare application that transforms clinical documentation through AI-powered transcription and summarization. Healthcare providers can create notes by typing or uploading audio recordings, which are automatically transcribed using OpenAI's Whisper and formatted into standardized SOAP notes using GPT-4.",
      year: '2025',
      bImage: 'assets/ai-scribe.png',
      wImage: 'assets/ai-scribe-w.png',
      tags: [
        this.TAGS.Node,
        this.TAGS.Tailwind,
        this.TAGS.Typescript,
        this.TAGS.Postgres,
        this.TAGS.React,
        this.TAGS.OpenAi,
        this.TAGS.S3,
      ],
      github: [
        {
          repo: 'https://github.com/XamS9/AI-Scribe-Notes-Management-Tool-Frontend',
          buttonTitle: 'Frontend',
        },
        {
          repo: 'https://github.com/XamS9/AI-Scribe-Notes-Management-Tool-Backend',
          buttonTitle: 'Backend',
        },
      ],
      mockupLink: 'healthcarescribe.ai',
    },
    {
      id: 'vuejs-store',
      title: 'Our Store',
      description:
        'Vuejs-Store is a simple e-commerce application built using Vue.js. It provides a looks-alike shopping experience with a responsive UI, product listings, a shopping cart, and user authentication.',
      year: '2025',
      bImage: 'assets/vuejs-store.png',
      wImage: 'assets/vuejs-store-w.png',
      tags: [
        this.TAGS.Vue,
        this.TAGS.Vuetify,
        this.TAGS.Pinia,
        this.TAGS.Strapi,
      ],
      github: [
        {
          repo: 'https://github.com/XamS9/vuejs-store',
          buttonTitle: 'Code',
        },
      ],
      mockupLink: 'ourstore.com',
    },
    {
      id: 'web-socket-challenge',
      title: 'Trading - web sockets technical challenge',
      description: `A web socket small system where you have some data sources, trading agregators & a broadcaster to send message when some data has been changed using javascript`,
      year: '2024',
      bImage: 'assets/websockets-rm.webp',
      wImage: 'assets/websockets-rm.webp',
      tags: [this.TAGS.Javascript, this.TAGS.Websocket],
      github: [
        {
          repo: 'https://github.com/XamS9/web-socket-challenge',
          buttonTitle: 'Code',
        },
      ],
      mockupLink: 'websocket.com',
    },
    {
      id: 'portfolio-item',
      title: 'Samuel Gomez Portfolio',
      description:
        'This is my personal portfolio. For this one I use Angular with Taildwin CSS and Daisyui for fast style development. It also use SSR and is fully mobile responsive',
      year: '2024',
      bImage: 'assets/portfolio.webp',
      wImage: 'assets/portfolio-w.webp',
      tags: [this.TAGS.Tailwind, this.TAGS.Angular, this.TAGS.Daisyui],
      github: [
        {
          repo: 'https://github.com/XamS9/xams-portfolio',
          buttonTitle: 'Code',
        },
      ],
      mockupLink: 'portfolio.com',
    },
    {
      id: 'bootcamp-item',
      title: 'Cincinnatus bootcamp - CRUD',
      description: `It's web platform based on udemy, you can learn about anything with online courses. As an admin you can create, read, update and delete every data with the dashboard and also subscribe to any course and view the content like a regular student as well.
    `,
      year: '2023',
      bImage: 'assets/bootcamp.webp',
      wImage: 'assets/bootcamp-w.webp',
      tags: [
        this.TAGS.React,
        this.TAGS.Node,
        this.TAGS.Postgres,
        this.TAGS.Sequelize,
      ],
      github: [
        {
          repo: 'https://github.com/XamS9/mini-bootcamp',
          buttonTitle: 'Code',
        },
      ],
      mockupLink: 'bootcamp.com',
    },
  ];
}
