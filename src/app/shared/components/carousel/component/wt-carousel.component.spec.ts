import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtCarouselComponent } from './wt-carousel.component';

describe('WtCarouselComponent', () => {
  let component: WtCarouselComponent;
  let fixture: ComponentFixture<WtCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WtCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WtCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
