import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  fullYear = this.getYear()
  getYear() {
    return new Date().getFullYear()
  }
}
