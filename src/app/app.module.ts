import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatSnackBarModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSortModule,
  MatCheckboxModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {DialogAddComponent} from './dialog-add/dialog-add.component';
import {DialogPatchComponent} from './dialog-patch/dialog-patch.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogAddComponent,
    DialogPatchComponent
  ],
  imports: [
    MatTableModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogAddComponent,
    DialogPatchComponent
  ]
})
export class AppModule {
}
