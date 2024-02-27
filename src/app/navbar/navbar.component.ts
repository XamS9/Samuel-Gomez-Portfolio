import { Component } from '@angular/core';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
