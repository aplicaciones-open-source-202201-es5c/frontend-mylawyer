import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent} from "./appointments/pages/appointments/appointments.component";
import { ClientsComponent} from "./clients/pages/clients/clients.component";
import {NotificationComponent} from "./notifications/pages/notification/notification.component";
import {IndexComponent} from "./index/pages/index.component";
import {LawyersComponent} from "./clients/pages/lawyers/lawyers.component";


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'profile', component: IndexComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'notifications', component: NotificationComponent },

  { path: 'lawyer', component: LawyersComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
