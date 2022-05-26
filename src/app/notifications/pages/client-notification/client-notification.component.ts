import { Component, OnInit } from '@angular/core';
import {Notification} from "../../model/notifications";
import {MatTableDataSource} from "@angular/material/table";
import {notificationsService} from "../../services/notifications.service";

@Component({
  selector: 'app-client-notification',
  templateUrl: './client-notification.component.html',
  styleUrls: ['./client-notification.component.css']
})
export class ClientNotificationComponent implements OnInit {

  notificationData:Notification;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[]=['notifications'];
  disabled = false;

  constructor(private notificationService: notificationsService) {
    this.notificationData={} as Notification;
    this.dataSource=new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getAllNotificationsForClient(3);
  }

  getAllNotifications(){
    this.notificationService.getAll().subscribe((response:any)=>{
      this.dataSource.data=response;
    });
  }

  getAllNotificationsForClient(id:any){
    this.notificationService.getAllForClient(id).subscribe((response: any) =>{
      this.dataSource.data = response;
    })
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
