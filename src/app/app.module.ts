import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestServiceService } from './test-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TestServiceService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
