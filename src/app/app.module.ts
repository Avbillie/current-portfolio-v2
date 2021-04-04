import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProfileBackgroundComponent } from './components/profile-background/profile-background.component';
import { BriefBioComponent } from './components/profile-background/brief-bio/brief-bio.component';
import { AboutMeComponent } from './components/profile-background/about-me/about-me.component';
import { EducationInterestsComponent } from './components/profile-background/education-interests/education-interests.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InformationalVideosBackgroundComponent } from './components/informational-videos-background/informational-videos-background.component';
import { SkillsNProjectsBackgroundComponent } from './components/skills-n-projects-background/skills-n-projects-background.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PinchZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
