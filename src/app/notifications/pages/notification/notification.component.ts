import { Component, OnInit } from '@angular/core';
import {notificationsService} from "../../services/notifications.service";
import {MatTableDataSource} from "@angular/material/table";
import {Notification} from "../../model/notifications";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notificationData:Notification;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[]=['notifications'];


  constructor(private notificationService: notificationsService) {
    this.notificationData={} as Notification;
    this.dataSource=new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getAllNotifications();
  }
  getAllNotifications(){
    this.notificationService.getAll().subscribe((response:any)=>{
      this.dataSource.data=response;
    });
  }
  deleteItem(id:number){
    this.notificationService.delete(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((o:Notification)=>{
        return o.id !== id ? o :false;
      });
    });
    console.log(this.dataSource.data);
  }
  updateStudent(){
    this.notificationService.update(this.notificationData.id,this.notificationData).subscribe((response:any)=>{
      this.dataSource.data=this.dataSource.data.map((o:Notification)=>{
        if(o.id===response.id){
          o=response;
        }
        return o;
      })
    })
  }

}
