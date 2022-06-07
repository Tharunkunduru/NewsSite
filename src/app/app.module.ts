import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import { NewsCardComponent } from './news-card/news-card.component';
import { CardCollectionComponent } from './card-collection/card-collection.component';
import {RouterModule, Routes} from "@angular/router";
import { IndividualCollectionComponent } from './individual-collection/individual-collection.component';
import { HomeCollectionComponent } from './home-collection/home-collection.component';
import {HttpClientModule} from "@angular/common/http";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { AlertComponent } from './shared/components/alert/alert.component';
import { PlaceholderDirective } from './shared/directives/placeholder.directive';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { PasswordValidatorDirective } from './shared/directives/password-validator.directive';
import { CountryValidatorDirective } from './shared/directives/country-validator.directive';

const routes: Routes=[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeCollectionComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'search',component:IndividualCollectionComponent},
  {path:'**',component: CardCollectionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsCardComponent,
    CardCollectionComponent,
    IndividualCollectionComponent,
    HomeCollectionComponent,
    AlertComponent,
    PlaceholderDirective,
    LoginComponent,
    SignupComponent,
    ChangepasswordComponent,
    PasswordValidatorDirective,
    CountryValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
