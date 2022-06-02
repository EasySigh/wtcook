import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WtNavbarComponent } from '@shared/components/navbar/component/wt-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NAVBAR_ITEMS } from '@const';
import { UiThemeService } from '@shared/services/ui-theme.service';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

class MockUiThemeService {
  public setTheme(): void {}
}

describe('NavbarComponent', () => {
  let component: WtNavbarComponent;
  let fixture: ComponentFixture<WtNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatToolbarModule, MatIconModule],
      declarations: [WtNavbarComponent],
      providers: [{provide: NAVBAR_ITEMS, useValue: of([])}, {provide: UiThemeService, useValue: MockUiThemeService}],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WtNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ebati v rot', () => {
    expect(true).toBeTruthy();
  })
});
