import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-reprogram',
  templateUrl: './dialog-reprogram.component.html',
  styleUrls: ['./dialog-reprogram.component.css']
})
export class DialogReprogramComponent implements OnInit {

  date:Date = new Date();
  dateString:string = '';
  hours=['17:00','18:00']
  constructor(public dialogRef: MatDialogRef<DialogReprogramComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  changeDate(day:any,month:any,year:any):void{
    this.dateString = day+'-'+month+'-'+year;
  }
  changeHour(id:any):void{
    this.dateString+=' '+this.hours[id];
    this.data.appointment.date = this.dateString;
  }
  close():void{
    this.dialogRef.close();
  }

}
