import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { AgendaComponent } from './agenda/agenda.component';
import { NotificationComponent } from './notification/notification.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'notifications', component: NotificationComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
