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


}
