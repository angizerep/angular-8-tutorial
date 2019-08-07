import { Component, OnInit } from '@angular/core';

@Component({
  //Option 1
  selector: 'app-servers', //should be in this way

  //Option 2
  //selector: '[app-servers]',

  //Option 3
  //selector: '.app-servers',

  //templateUrl: './servers.component.html',
  template: 
    '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
