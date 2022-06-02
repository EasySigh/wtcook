import { WtPreloaderDirective } from './preloader-controller.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderControllerService } from '@shared/services/loader-controller.service';

class MockService {
  loaderIds: number[] = [];
  getLoaderState = () => true
}
@Component({selector: 'wt-mock-host-component', template: `<mat-progress-bar *wtPreloader="0"></mat-progress-bar>`})
class MockHostComponent {}

describe('LoaderControllerDirective', () => {
  let fixture: ComponentFixture<MockHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [
        TemplateRef,
        ViewContainerRef,
        {provide: LoaderControllerService, useValue: MockService}
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockHostComponent);
    fixture.detectChanges();
  });
});
