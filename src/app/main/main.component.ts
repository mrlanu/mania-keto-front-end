import { Component, OnInit } from '@angular/core';

declare var start: any;
declare var menu: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.runJavaScript();
  }

  runJavaScript() {
    start(window);
    menu();
  }
}
