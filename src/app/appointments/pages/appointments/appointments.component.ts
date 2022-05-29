import {Component, OnInit, ViewChild} from '@angular/core';
import {Appointment} from "../../model/appointment";
import {MatTableDataSource} from "@angular/material/table";
import {AppointmentsService} from "../../services/appointments.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointmentData: Appointment;
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ['client', 'date', 'actions'];

  @ViewChild(MatPaginator,{static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild('appointmentForm', {static: true})
  appointmentForm!: NgForm;

  constructor(private appointmentsService: AppointmentsService) {
    this.appointmentData = {} as Appointment;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    //this.getAllAppointments();
    this.getAllAppointmentsForLawyer(3);
  }

  getAllAppointments(){
    this.appointmentsService.getAll().subscribe((response: any) =>{
      this.dataSource.data = response;
    })

  }

  getAllAppointmentsForLawyer(id:any){
    this.appointmentsService.getAllForLawyer(id).subscribe((response: any) =>{
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
