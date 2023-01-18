import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyDetailResolverService } from './services/property-detail.resolver.service';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListingsService } from './services/listings.service';
import { AddListingComponent } from './Property/property/add-listing/add-listing.component';
import { PropertyDetailComponent } from './Property/property/property-detail/property-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { HttpErrorInterspectorService } from './services/httperror-interspector.service';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'sell-item', component: PropertyListComponent},
  {path: 'add-listing', component: AddListingComponent},
  {path: 'item-detail/:id',
          component: PropertyDetailComponent,
          resolve: { prp: PropertyDetailResolverService }},
  //{path: '**', component: PageNotFound} -> apply custom
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  {path: '**', component: PropertyListComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddListingComponent,
    PropertyDetailComponent,
    UserRegisterComponent,
    UserLoginComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterspectorService,
      multi: true
    },
    ListingsService,
    AlertifyService,
    AuthService,
    PropertyDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
