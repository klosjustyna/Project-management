import { Routes } from '@angular/router';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UsersComponent } from './components/users/users.component';

const appRoutes: Routes = [
  { path: '', 
    component: AddProjectComponent 
  },
  { path: 'addProject', 
    component: AddProjectComponent 
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  { path: 'calendar',
    component: CalendarComponent
  },
  { path: 'statistics',
    component: StatisticsComponent
  },
  { path: 'notifications',
    component: NotificationsComponent
  },
  { path: 'users',
    component: UsersComponent
  },
];
export default appRoutes;