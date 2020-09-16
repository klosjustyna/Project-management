import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddProjectComponent } from './components/add-project/add-project.component';

import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { ProjectsComponent } from './components/projects/projects.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UsersComponent } from './components/users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddProjectComponent,
    ProjectsComponent,
    CalendarComponent,
    StatisticsComponent,
    NotificationsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
