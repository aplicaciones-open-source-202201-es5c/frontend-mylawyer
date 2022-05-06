import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import {AppointmentsClient} from '../../model/clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  panelOpenState = false;
  list = [1, 2, 3, 4, 5, 6];

  appointmentClient: AppointmentsClient[] = []

  constructor(private clientsService:ClientsService) { }

  ngOnInit(): void {

    this.clientsService.getAll().subscribe((response: any) => {
      this.appointmentClient = response;
    });

  }

}
