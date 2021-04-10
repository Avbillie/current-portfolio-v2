import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit  {
  condition: boolean = true;
  @HostListener('window:scroll') onWindowScroll() {
    // do some stuff here when the window is scrolled
    if(window.scrollY !== 0){
      this.condition = false
    }else{
      this.condition = true
    }
  }
  arrowup = '/assets/images/chevron-up.jpg'
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  constructor() {}

  ngOnInit(): void {}
}
