import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Lawyer} from "../../model/lawyer";
import {SearchLawyerService} from "../../services/search-lawyer.service";


@Component({
  selector: 'app-search-lawyer',
  templateUrl: './search-lawyer.component.html',
  styleUrls: ['./search-lawyer.component.css']
})
export class SearchLawyerComponent implements OnInit {

  search:string;
  lawyers:Lawyer[]=[];
  textChanged:boolean=false;



  constructor(private searchService:SearchLawyerService) {
    this.search='';
  }

  ngOnInit(): void {
    this.getLawyers();
  }

  onTextChanged(searchValue:string){
    this.search = searchValue;
    this.textChanged = true;
  }
  getLawyers(){
    this.searchService.getAll().subscribe((response:any)=>{
      this.lawyers = response;
    });
  }

}
