import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtViewComponent } from './wt-view.component';

describe('ViewComponent', () => {
  let component: WtViewComponent;
  let fixture: ComponentFixture<WtViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WtViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
