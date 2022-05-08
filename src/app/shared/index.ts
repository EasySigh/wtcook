import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Shared pipes, components & directives
import { SHARED_PIPES } from './pipes';
import { SHARED_COMPONENTS } from './components';
import { SHARED_DIRECTIVES } from '@shared/directives';

// Local (only imported modules)
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

// Global (exported modules)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NAVBAR_ITEMS } from '@const';





@NgModule({
  declarations: [
    ...SHARED_PIPES,
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PortalModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
    ...SHARED_PIPES,
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES
  ]
})
export class SharedModule { }
