import { Component, OnInit } from '@angular/core';
import {faEnvelope, faHeart, faHome, faImages, faLock, faNewspaper, faStar, faUpload} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  faHome = faHome;
  faNewspaper = faNewspaper;
  faImages = faImages;
  faUpload = faUpload;
  faHeart = faHeart;
  faStar = faStar;
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor() {}

  ngOnInit() {}
}
