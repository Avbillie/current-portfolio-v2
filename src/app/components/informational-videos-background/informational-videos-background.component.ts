import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-informational-videos-background',
  templateUrl: './informational-videos-background.component.html',
  styleUrls: ['./informational-videos-background.component.scss'],
})
export class InformationalVideosBackgroundComponent implements OnInit {
  @Input()
  url: string = 'https://www.youtube.com/embed/UoCnsh6x2ls';
  link1: SafeResourceUrl = '';
  link2: SafeResourceUrl = '';
  link3: SafeResourceUrl = '';
  fullstack = {
    link: 'https://www.youtube.com/embed/UoCnsh6x2ls',
    name: 'What is full-stack development?',
    safeLink: "this.link1",
  };
  development = {
    link: 'https://www.youtube.com/embed/pJrAkqk9a-I',
    name: 'What does a full-stack developer do?',
    safeLink: "this.link2",
  };
  development2 = {
    link: 'https://www.youtube.com/embed/E0a3Vpptlqs',
    name: 'What is MEAN & MERN stack?',
    safeLink: "this.link3",
  };
  videoArray: any[] = [this.fullstack, this.development, this.development2];
  linkArray : any[] = [this.link1, this.link2, this.link3]
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.link1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.fullstack.link);
    this.link2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.development.link);
    this.link3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.development2.link);
  }
}
