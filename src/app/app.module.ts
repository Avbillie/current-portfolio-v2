import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProfileBackgroundComponent } from './components/profile-background/profile-background.component';
import { BriefBioComponent } from './components/profile-background/brief-bio/brief-bio.component';
import { AboutMeComponent } from './components/profile-background/about-me/about-me.component';
import { EducationInterestsComponent } from './components/profile-background/education-interests/education-interests.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InformationalVideosBackgroundComponent } from './components/informational-videos-background/informational-videos-background.component';
import { SkillsNProjectsBackgroundComponent } from './components/skills-n-projects-background/skills-n-projects-background.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { IndexComponent } from './components/index/index.component';
import { QoutesComponent } from './components/qoutes/qoutes.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

const routes: Routes = [
  {
  path:'',
  component: IndexComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProfileBackgroundComponent,
    BriefBioComponent,
    AboutMeComponent,
    EducationInterestsComponent,
    SkillsComponent,
    InformationalVideosBackgroundComponent,
    SkillsNProjectsBackgroundComponent,
    ProjectsComponent,
    IndexComponent,
    QoutesComponent,
    CopyrightComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PinchZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
