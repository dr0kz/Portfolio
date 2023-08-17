import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/Home Page/header/header.component';
import {FooterComponent} from './components/Home Page/footer/footer.component';
import {ContactComponent} from './components/Home Page/contact/contact.component';
import {HomeComponent} from './components/Home Page/home/home.component';
import {BannerComponent} from './components/Home Page/banner/banner.component';
import {AboutMeComponent} from "./components/Home Page/About Me/about-me/about-me.component";
import {MyInterestsComponent} from "./components/Home Page/About Me/My Interests/my-interests/my-interests.component";
import {HobbyComponent} from './components/Home Page/About Me/My Interests/hobby/hobby.component';
import {ProfessionalSkillsComponent} from './components/Home Page/professional-skills/professional-skills.component';
import {EducationComponent} from './components/Home Page/education/education.component';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { DevelopmentCycleComponent } from './components/Home Page/development-cycle/development-cycle.component';
import { SomeOfMyWorkComponent } from './components/Home Page/some-of-my-work/some-of-my-work.component';
import { HireMeComponent } from './components/Home Page/hire-me/hire-me.component';
import { PrimaryButtonComponent } from './components/Buttons/primary-button/primary-button.component';
import {MatInputModule} from "@angular/material/input";
import { FullScreenNavModalComponent } from './components/Dialogs/full-screen-nav-modal/full-screen-nav-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ProjectOverviewModalComponent } from './components/Dialogs/project-overview-modal/project-overview-modal.component';
import { AnimatePipe } from './pipes/animate.pipe';
import { DelayPipe } from './pipes/delay.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ContactComponent,
    HomeComponent,
    BannerComponent,
    MyInterestsComponent,
    HobbyComponent,
    ProfessionalSkillsComponent,
    EducationComponent,
    SkillBarComponent,
    DevelopmentCycleComponent,
    SomeOfMyWorkComponent,
    HireMeComponent,
    PrimaryButtonComponent,
    FullScreenNavModalComponent,
    ProjectOverviewModalComponent,
    AnimatePipe,
    DelayPipe
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
