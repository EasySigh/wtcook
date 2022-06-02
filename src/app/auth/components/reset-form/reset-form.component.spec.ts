import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ResetFormComponent } from './reset-form.component';
import { Observable } from 'rxjs';

const MockSnackBar = {
  open(): any {}
}

describe('ResetFormComponent', () => {
  let fixture: ComponentFixture<ResetFormComponent>;
  let component: ResetFormComponent;
  let loader: HarnessLoader;
  let btn: HTMLButtonElement;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSnackBarModule,
        MatFormFieldModule
      ],
      declarations: [ResetFormComponent],
      providers: [{provide: MatSnackBar, useValue: MockSnackBar}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetFormComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();

    btn = fixture.debugElement.nativeElement.querySelector('button');
    input = fixture.debugElement.nativeElement.querySelector('input[type="email"]');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled btn', () => {
    expect(btn.disabled).toBeTruthy();
  });

  it('should not be disabled', () => {
    input.value = 'test@email.com';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.email).toEqual('test@email.com');
    expect(btn.disabled).toBeFalsy();
  });

  it('should call submit method', () => {
    const spy = spyOn(component, 'submit');

    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should open SnackBar', () => {
    const spy = spyOn(MockSnackBar, 'open').and.returnValue({
      onAction(): Observable<void> {
        return new Observable<void>();
      }
    });

    component.email = 'test@email.com';
    component.submit();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
