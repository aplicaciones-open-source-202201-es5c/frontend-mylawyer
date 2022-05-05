import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from './appointments/pages/appointments/appointments.component';
import { ClientsComponent} from "./clients/pages/clients/clients.component";
import { PagesComponent} from "./notifications/pages/notifications/pages.component";
import {IndexComponent} from "./index/pages/index.component";


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'notifications', component: PagesComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
