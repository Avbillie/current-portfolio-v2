import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief-bio',
  templateUrl: './brief-bio.component.html',
  styleUrls: ['./brief-bio.component.scss'],
})
export class BriefBioComponent implements OnInit {
  profilePic = 'assets/images/profilePic.jpg';

  gmail = {
    link: 'mailto:anthonybilliejr2021@gmail.com',
    image: 'assets/images/gmail.jpg',
  };
  resume = {
    link: "assets/images/Anthony's Most Recent Resume.pdf",
    image: 'assets/images/resume.jpg',
  };
  linkedIn = {
    link: "https://www.linkedin.com/in/anthonybillie/",
    image:'assets/images/LinkedIn.jpg'
  };
  github = {
    link: "https://github.com/Avbillie",
    image: 'assets/images/GitHub.jpg'
  };
  acm = {
    link:'https://www.acm.org/',
    text:'Association for Computing Machinery'
  };
  bdpa = {
    link: 'https://www.bdpa.org/',
    text: 'Black Data Processing Associates'
  };
  usmc ={
    link:'https://www.marines.mil/',
    text:'The United States Marine Corps'
  }
  linkArray: any[] = [this.gmail, this.github, this.linkedIn, this.resume];
  affiliationsArray: any[] = [this.acm, this.bdpa, this.usmc]
  constructor() {}

  ngOnInit(): void {}
}
