import {Component, OnInit, ViewChild} from '@angular/core';
import {notificationsService} from "../../services/notifications.service";
import {MatTableDataSource} from "@angular/material/table";
import {Notification} from "../../model/notifications";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificationData:Notification;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[]=['notifications'];
  notificationOn = false;

  @ViewChild(MatPaginator,{static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild('notificationForm', {static: true})
  appointmentForm!: NgForm;

  constructor(private notificationService: notificationsService) {
    this.notificationData={} as Notification;
    this.dataSource=new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    //this.getAllNotifications();
    this.getAllNotificationsForLawyer(this.getCurrentUserID());
  }
  getAllNotifications(){
    this.notificationService.getAll().subscribe((response:any)=>{
      this.dataSource.data=response;
    });
  }

  getAllNotificationsForLawyer(id:any){
    this.notificationService.getAllForLawyer(id).subscribe((response: any) =>{
      this.dataSource.data = response;
    })
  }
  getCurrentUserID() {
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      return currentUser.id;
    }else return null;
  }
  deleteItem(id:number){
    this.notificationService.delete(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((o:Notification)=>{
        return o.id !== id ? o :false;
      });
    });
    console.log(this.dataSource.data);
  }


}
