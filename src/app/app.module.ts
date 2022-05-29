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

const routes: Routes=[
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
