import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { ContactComponent } from '../contact/contact.component';
import { StackComponent } from '../stack/stack.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CardsComponent,
    ContactComponent,
    StackComponent,
    ExperienceComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
