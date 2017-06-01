import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EventHeaderComponent } from './event-header/event-header.component';
import { EventFooterComponent } from './event-footer/event-footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { EventsShopComponent } from './events-shop/events-shop.component';
import { ContactComponent } from './contact/contact.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { DashboardProviderComponent } from './dashboard-provider/dashboard-provider.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import 'hammerjs';

import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';

import { PostsService } from './posts.service';

const ROUTES = [
                {
                  path: '',
                  redirectTo: 'posts',
                  pathMatch: 'full'
                },
                {
                  path: 'posts',
                  component: PostsComponent
                }
];

@NgModule({
  declarations: [
    AppComponent,
    EventHeaderComponent,
    EventFooterComponent,
    NavComponent,
    EventsShopComponent,
    ContactComponent,
    LoginRegistrationComponent,
    DashboardProviderComponent,
    DashboardUserComponent,
    PostsComponent
  ],
  imports: [
    BrowserAnimationsModule,        
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    MaterialModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
