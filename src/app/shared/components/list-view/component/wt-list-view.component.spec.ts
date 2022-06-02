import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtListViewComponent } from './wt-list-view.component';
import { ViewData } from '@const';

describe('ListViewComponent', () => {
  let component: WtListViewComponent<ViewData>;
  let fixture: ComponentFixture<WtListViewComponent<ViewData>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WtListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WtListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
