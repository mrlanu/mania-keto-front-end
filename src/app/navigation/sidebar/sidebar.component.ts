import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  randomUser: any = {
    name: 'Vasya',
    image: 'imagePath'
  };

  constructor() { }

  ngOnInit() {
  }

  onOpenSidebar() {
    $('#sidebar').toggleClass('active');
    $('#overlay').toggleClass('shadow');
  }
}
