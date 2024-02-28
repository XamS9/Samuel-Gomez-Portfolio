import { Component } from '@angular/core';
import { CardSkeletonComponent } from '../card-skeleton/card-skeleton.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardSkeletonComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  TAGS = {
    React: {
      name: 'React.js',
      icon: '../../assets/react-javascript-js.svg',
    },
    Tailwind: {
      name: 'Tailwind CSS',
      icon: '../../assets/tailwind-css-svgrepo-com.svg',
    },
    Node: {
      name: 'Express.js',
      icon: '../../assets/node-js.svg',
    },
    Postgres: {
      name: 'Postgresql',
      icon: '../../assets/PostgreSQL-Logo.wine.svg',
    },
    Sequelize: {
      name: 'Sequelize',
      icon: '../../assets/sequelize-svgrepo-com.svg',
    },
    Angular: {
      name: 'Angular',
      icon: '../../assets/angular-icon-seeklogo.svg',
    },
    Daisyui: {
      name: 'Daisyui',
      icon: '../../assets/Daisyui.png',
    }
  };
  projects = [
    {
      title: 'Samuel Gomez Portfolio',
      description:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas ',
      year: '2024',
      image: '../../assets/Screenshot (12).png',
      tags: [this.TAGS.Tailwind, this.TAGS.Angular, this.TAGS.Daisyui],
      github: "https://github.com/XamS9/xams-portfolio"
    },
    {
      title: 'Cincinnatus bootcamp - CRUD',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas ',
      year: '2023',
      image: '../../assets/Screenshot (14).png',
      tags: [this.TAGS.React, this.TAGS.Node, this.TAGS.Postgres, this.TAGS.Sequelize],
      github: "https://github.com/XamS9/mini-bootcamp"
    },
  ];
}
