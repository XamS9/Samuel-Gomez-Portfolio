import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isLightSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLight$ = this.isLightSubject.asObservable();

  constructor() {}

  setLight(light: boolean) {
    this.isLightSubject.next(light);
  }

  getLight() {
    return this.isLightSubject.value;
  }
}
