import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  weatherDashboard ={
    title: 'Weather Dashboard',
    image:'./assets/images/weather-dashboard.jpg?raw=true',
    link: 'https://avbillie.github.io/Weather-Dashboard/',
    text:'An interactive web weather application that displays the forecast of the selected city.'
  };
  travelSite ={
    title: 'Explorer',
    image:'./assets/images/travelSite.jpg?raw=true',
    link: 'https://talysh.github.io/explorer/',
    text:'An interactive travel website that displays the current weather for selected state and user interests.'
  };
  workDay ={
    title: 'Work Planner',
    image:'./assets/images/workDayScheduler.jpg?raw=true',
    link:'https://avbillie.github.io/Work-Planner/',
    text:'A daily work planner that tracks the time of day along with the current time in the 24 hour format'
  };
  jsQuiz ={
    title: 'Trivia Quiz',
    image:'./assets/images/jsQuiz.jpg?raw=true',
    link: 'https://avbillie.github.io/JavaScript-Quiz/',
    text:'A dynamic JavaScript quiz that allows user to log score at the end.'
  };
  fitnessTracker ={
    title: 'Fitness Tracker',
    image:'./assets/images/fitnessTracker.jpg?raw=true',
    link: 'https://fitness-tracker-version-one.herokuapp.com/',
    text:'A dynamic fitness tracker that saves and tracks user workout'
  };

  projectsArray: any =[this.travelSite, this.weatherDashboard, this.workDay, this.jsQuiz, this.fitnessTracker];

  constructor() { }

  ngOnInit(): void {
  }

}
