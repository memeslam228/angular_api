import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';



import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatSortModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatTableModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
