import {Component, OnInit, ViewChild} from '@angular/core';
import {Appointment} from "../../model/appointment";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AppointmentsService} from "../../services/appointments.service";

@Component({
  selector: 'app-appointments-client',
  templateUrl: './appointments-client.component.html',
  styleUrls: ['./appointments-client.component.css']
})
export class AppointmentsClientComponent implements OnInit {

  appointmentData: Appointment;
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['appointments'];

  @ViewChild(MatPaginator,{static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private appointmentsService: AppointmentsService) {
    this.appointmentData = {} as Appointment;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllAppointmentsForClient(this.getCurrentUserID());
  }

  getCurrentUserID() {
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      return currentUser.id;
    }else return null;
  }
  getAllAppointments(){
    this.appointmentsService.getAll().subscribe((response: any) =>{
      this.dataSource.data = response;
    })

  }

  getAllAppointmentsForClient(id:any){
    this.appointmentsService.getAllForClient(id).subscribe((response: any) =>{
      this.dataSource.data = response;
    })
  }

  deleteItem(id: number){
    this.appointmentsService.delete(id).subscribe(() =>{
      this.dataSource.data = this.dataSource.data.filter((a: Appointment) =>{
        return a.id != id? a : false;
      });
    });
    console.log(this.dataSource.data);
  }


}
