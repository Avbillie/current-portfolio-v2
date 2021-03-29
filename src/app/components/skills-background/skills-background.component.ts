import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-background',
  templateUrl: './skills-background.component.html',
  styleUrls: ['./skills-background.component.scss']
})
export class SkillsBackgroundComponent implements OnInit {
  codeImg = '/assets/images/coding.jpg'
  html ={
    title: 'HTML',
    image:'/assets/images/html.jpg',
    alt: 'html',
    text:['']
  };
  css ={
    title: 'CSS',
    image:'/assets/images/css.jpg',
    alt: 'css',
    text:['']
  };
  js ={
    title: 'Javascript',
    image:'/assets/images/javascript.jpg',
    alt: 'javascript',
    text:['jQuery']
  };
  ts ={
    title: 'Typescript',
    image:'/assets/images/typescript.jpg',
    alt: 'typescript',
    text:['']
  };
  node ={
    title: 'Nodejs',
    image:'/assets/images/nodejs.jpg',
    alt: 'html',
    text:['']
  };
  react ={
    title: 'Reactjs',
    image:'/assets/images/react.jpg',
    alt: 'react',
    text:['']
  };
  angular ={
    title: 'Angular',
    image:'/assets/images/angular.jpg',
    alt: 'angular',
    text:['']
  };
  mongo ={
    title: 'MongoDB',
    image:'/assets/images/mongo.jpg',
    alt: 'mongodb',
    text:['']
  };
  // rightImgArray: any[]=[];
  // leftImgArray: any[]=[];
  imageArray: any =[this.ts, this.html, this.css, this.js];
  imageArray2: any =[this.node, this.mongo, this.angular, this.react]


  constructor() { }

  ngOnInit(): void {

  }

  // sortSkillImgs(){
  //   for(var i= 1; i < this.imageArray.length; i = i + 2){
  //     this.leftImgArray.push(this.imageArray[i])
  //   }
  //   for(var i= 0; i < this.imageArray.length; i = i + 2){
  //     this.rightImgArray.push(this.imageArray[i])
  //   }
  // }

}
