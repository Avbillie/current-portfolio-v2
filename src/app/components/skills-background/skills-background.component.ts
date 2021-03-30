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
    image:'https://github.com/Avbillie/current-portfolio-v2/blob/gh-pages/assets/images/html.jpg?raw=true',
    alt: 'html',
    text:['']
  };
  css ={
    title: 'CSS',
    image:'https://github.com/Avbillie/current-portfolio-v2/blob/gh-pages/assets/images/css.jpg?raw=true',
    alt: 'css',
    text:['']
  };
  js ={
    title: 'Javascript',
    image:'https://github.com/Avbillie/current-portfolio-v2/blob/gh-pages/assets/images/javascript.jpg?raw=true',
    alt: 'javascript',
    text:['jQuery']
  };
  ts ={
    title: 'Typescript',
    image:'https://github.com/Avbillie/current-portfolio-v2/blob/gh-pages/assets/images/typescript.jpg?raw=true',
    alt: 'typescript',
    text:['']
  };
  node ={
    title: 'Nodejs',
    image:'https://github.com/Avbillie/current-portfolio-v2/blob/gh-pages/assets/images/nodejs.jpg?raw=true',
    alt: 'html',
    text:['']
  };
  react ={
    title: 'Reactjs',
    image:'https://github.com/Avbillie/current-portfolio-v2/blob/gh-pages/assets/images/react.jpg?raw=true',
    alt: 'react',
    text:['']
  };
  angular ={
    title: 'Angular',
    image:'https://github.com/Avbillie/current-portfolio-v2/blob/gh-pages/assets/images/angular.jpg?raw=true',
    alt: 'angular',
    text:['']
  };
  mongo ={
    title: 'MongoDB',
    image:'https://github.com/Avbillie/current-portfolio-v2/blob/gh-pages/assets/images/mongo.jpg?raw=true',
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
