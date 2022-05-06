import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {notificationsService} from "../../services/notifications.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";
import {catchError} from "rxjs";
import * as _ from "lodash";

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
  notificationData: any;


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
  editItem(element:Notification){
    this.notificationsData=_.cloneDeep(element);
    this.isEditMode=true;
  }

  cancelItem(){
    this.isEditMode=false;
    this.notificationForm.resetForm();
  }
  deleteItem(id: number){
    this.notificationsService.delete(id).subscribe( () =>{
      this.dataSource.data = this.dataSource.data.filter((o: Notification) => {
        return o.data.id !== id ? o :false;
      });
    });
    console.log(this.dataSource.data);
  }
  updateNotification(){
    this.notificationsService.update(this.notificationsData,this.notificationsData).subscribe((response:any)=>{
      this.dataSource.data =this.dataSource.data.map((o:Notification)=>{
        if(o.data.id===response.id){
          o=response;
        }
        return o;
      })
    })
  }

  addNotification(){
  this.notificationsData.data.id=0;
  this.notificationsService.create(this.notificationsData).subscribe((response:any)=>{
    this.dataSource.data.push({...response});
    this.dataSource.data=this.dataSource.data.map((o:any)=>{return o;});
  });
  }

  cancelEdit(){
    this.isEditMode=false;
    this.notificationForm.resetForm();
  }

  onSubmit() {
    if (this.notificationForm.form.valid) {
      console.log('valid');
      if (this.isEditMode){
        console.log('about to update');
        this.updateNotification();
      }
      else {
        console.log('about to add');
        this.addNotification();
      }
      this.cancelEdit();
    }
    else {
      console.log('Invalid data');
    }
  }
}
