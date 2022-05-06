import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {notificationsService} from "../../services/notifications.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  notificationsData: Notification;
  dataSource:MatTableDataSource<any>;
  displayedColumns:String[]=['id','name','date','actions'];
  isEditMode=false;

  @ViewChild(MatPaginator,{static:true})
  paginator!:MatPaginator;
  @ViewChild(MatSort)
  sort!:MatSort;
  @ViewChild('notificationForm',{static:true})
  notificationForm!:NgForm;


  constructor(private notificationsService: notificationsService) {
    this.notificationsData={} as Notification;
    this.dataSource=new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator=this.paginator;
    this.getAllNotifications();
  }

  getAllNotifications(){
    this.notificationsService.getAll().subscribe((response:any)=>{
      this.dataSource.data=response;
    });
  }

}
