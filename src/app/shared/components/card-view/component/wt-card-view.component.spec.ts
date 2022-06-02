import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtCardViewComponent } from './wt-card-view.component';

describe('CardViewComponent', () => {
  let component: WtCardViewComponent;
  let fixture: ComponentFixture<WtCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WtCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WtCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
