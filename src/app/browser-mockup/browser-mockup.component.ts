import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-browser-mockup',
  standalone: true,
  imports: [],
  templateUrl: './browser-mockup.component.html',
  styleUrl: './browser-mockup.component.css',
})
export class BrowserMockupComponent {
  @Input() content = '';
}
