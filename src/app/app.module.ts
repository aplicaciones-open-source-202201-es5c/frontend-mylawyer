import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyLawyerNavigationComponent } from './my-lawyer-navigation/my-lawyer-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentsComponent} from "./appointments/pages/appointments/appointments.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ClientsComponent } from './clients/pages/clients/clients.component';
import { PagesComponent } from './notifications/pages/notifications/pages.component';
import { IndexComponent} from "./index/pages/index.component";
import { HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MyLawyerNavigationComponent,
    AppointmentsComponent,
    ClientsComponent,
    PagesComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
