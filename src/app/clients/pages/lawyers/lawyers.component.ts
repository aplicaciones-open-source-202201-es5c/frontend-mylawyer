import { Component, OnInit } from '@angular/core';
import {LawyersService} from "../../services/lawyers.service";

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.css']
})
export class LawyersComponent implements OnInit {

  lawyers :any[] = []

  constructor(private lawyerService:LawyersService) { }

  ngOnInit(): void {

    this.lawyerService.getAll().subscribe((response: any) => {
      this.lawyers = response;
    });

  }

}
