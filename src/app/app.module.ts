import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Material Modules
import { MatToolbarModule, MatTableModule } from '@angular/material';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatTableModule
  ],
  declarations: [AppComponent, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
