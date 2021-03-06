import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  fullstack = 'assets/images/fullstack.jpg';
  resume = "assets/images/Anthony's Most Recent Resume.pdf";
  time = new Date()
  linkClicked: boolean = false;
  clicked() {
    this.linkClicked = true;
  }
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
   }, 1000);
  }
}
