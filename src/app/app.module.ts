import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProfileBackgroundComponent } from './components/profile-background/profile-background.component';
import { BriefBioComponent } from './components/profile-background/brief-bio/brief-bio.component';
import { AboutMeComponent } from './components/profile-background/about-me/about-me.component';
import { EducationInterestsComponent } from './components/profile-background/education-interests/education-interests.component';
import { SkillsBackgroundComponent } from './components/skills-background/skills-background.component';
import { InformationalVideosBackgroundComponent } from './components/informational-videos-background/informational-videos-background.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProfileBackgroundComponent,
    BriefBioComponent,
    AboutMeComponent,
    EducationInterestsComponent,
    SkillsBackgroundComponent,
    InformationalVideosBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
