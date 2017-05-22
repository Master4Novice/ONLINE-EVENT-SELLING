import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventHeaderComponent } from './event-header/event-header.component';
import { EventFooterComponent } from './event-footer/event-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EventHeaderComponent,
    EventFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
