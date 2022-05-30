import {Component, OnInit, ViewChild} from '@angular/core';
import {IndexService} from "../services/index.service";
import {Lawyer} from "../model/lawyer";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-pages',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  LawyerData:Lawyer;
  dataSource:Lawyer[];
  @ViewChild('indexForm', {static: true})
  indexForm!: NgForm;

  constructor(private indexService:IndexService) {
    this.LawyerData = {} as Lawyer;
    this.dataSource = [];
  }
  ngOnInit(): void {
    this.getLawyer(2);
  }

  getLawyer(id:any){
    this.indexService.getLawyer(id).subscribe((response:any) =>{
      this.LawyerData=response;
    })
  }

}
