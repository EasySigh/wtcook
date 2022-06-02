import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { LoaderControllerService } from '@shared/services/loader-controller.service';
import { PortalModule } from '@angular/cdk/portal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WtPreloaderDirective } from '@shared/directives/wt-prealoader/preloader-controller.directive';
import { BrowserModule } from '@angular/platform-browser';

const mockActivatedRoute = {
  snapshot: {data: {title: 'Вход', name: 'login'}}
} as unknown as ActivatedRoute;

class MockLoaderService {
  loaderIds: number[] = [];
  getLoaderState = () => true;
  addLoader(): void {};
  removeLoader(): void {};
}

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterTestingModule,
        MatCardModule,
        MatFormFieldModule,
        PortalModule
      ],
      declarations: [AuthComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: LoaderControllerService, useValue: MockLoaderService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
