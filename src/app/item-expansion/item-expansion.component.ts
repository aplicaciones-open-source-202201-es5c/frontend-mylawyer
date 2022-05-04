import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-expansion',
  templateUrl: './item-expansion.component.html',
  styleUrls: ['./item-expansion.component.css']
})

export class ItemExpansionComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
