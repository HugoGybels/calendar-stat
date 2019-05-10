import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CalendarStatService} from './services/calendar-stat/calendar-stat.service';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ChartsModule} from 'ng2-charts';
import { GraphComponent } from './components/graph/graph.component';
import { AddComponent } from './components/add/add.component';
import { MenuComponent } from './components/menu/menu.component';
import { LastComponent } from './components/last/last.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'last', component: LastComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'add', component: AddComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphComponent,
    AddComponent,
    MenuComponent,
    LastComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    ChartsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
    CalendarStatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
