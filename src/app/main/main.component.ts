import { Component, OnInit } from '@angular/core';
import {faHome} from '@fortawesome/free-solid-svg-icons';

declare var start: any;
declare var menu: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  faHome = faHome;

  constructor() {}

  ngOnInit() {
    this.runJavaScript();
  }

  runJavaScript() {
    start(window);
    menu();
  }
}
