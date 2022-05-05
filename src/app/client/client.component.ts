import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  panelOpenState = false;
  list = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}
