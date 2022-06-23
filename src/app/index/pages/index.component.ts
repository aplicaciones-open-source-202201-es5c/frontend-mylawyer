import {Component, OnInit, ViewChild} from '@angular/core';
import {IndexService} from "../services/index.service";
import {Lawyer} from "../model/lawyer";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {Router} from "@angular/router";


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
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private indexService:IndexService,
              private breakpointObserver: BreakpointObserver,private route: Router) {
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
  //New Profile functions

  getCurrentUserEmail() {
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      return currentUser.email;
    }else return null;
  }
  getCurrentUserAge() {
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      return currentUser.age;
    }else return null;
  }
  getCurrentUserAddress() {
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      return currentUser.address;
    }else return null;
  }
  getCurrentUserRole() {
    let userRoll: string;
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      if(currentUser.role==="lawyer"){userRoll="abogado"}else {userRoll="cliente"}
      return userRoll;
    }else return null;
  }
  getCurrentUserType() {
    let currentUsertype=localStorage.getItem('currentUser');
    if(currentUsertype){
      let currentUser=(JSON.parse(currentUsertype));
      return currentUser.lawyer
    }else return null;
  }
  getCurrentUserName() {
    let currentUserString=localStorage.getItem('currentUser');
    if(currentUserString){
      console.log(`current user: ${currentUserString}`);
      let currentUser=(JSON.parse(currentUserString));
      return currentUser.name;
    }else return null;
  }

}
