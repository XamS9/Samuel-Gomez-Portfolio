import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserMockupComponent } from './browser-mockup.component';

describe('BrowserMockupComponent', () => {
  let component: BrowserMockupComponent;
  let fixture: ComponentFixture<BrowserMockupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserMockupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowserMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
