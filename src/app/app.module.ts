import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { LandingAboutComponent } from './landing-about/landing-about.component';
import { LandingBusinessComponent } from './landing-business/landing-business.component';
import { LandingTeamComponent } from './landing-team/landing-team.component';
import { LandingServiceComponent } from './landing-service/landing-service.component';
import { LandingServiceBlocksComponent } from './landing-service-blocks/landing-service-blocks.component';
import { LandingReviewsComponent } from './landing-reviews/landing-reviews.component';
import { LandingWhyComponent } from './landing-why/landing-why.component';
import { LandingBelieveComponent } from './landing-believe/landing-believe.component';
import { LandingOffersComponent } from './landing-offers/landing-offers.component';
import { LandingExperienceComponent } from './landing-experience/landing-experience.component';
import { LandingCategoriesComponent } from './landing-categories/landing-categories.component';
import { LandingDigitalComponent } from './landing-digital/landing-digital.component';
import { LandingContactsComponent } from './landing-contacts/landing-contacts.component';
import { FooterComponent } from './footer/footer.component';
import { BusinessComponent } from './modals/business/business.component';
import { TeamComponent } from './modals/team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainSectionComponent,
    LandingAboutComponent,
    LandingBusinessComponent,
    LandingTeamComponent,
    LandingServiceComponent,
    LandingServiceBlocksComponent,
    LandingReviewsComponent,
    LandingWhyComponent,
    LandingBelieveComponent,
    LandingOffersComponent,
    LandingExperienceComponent,
    LandingCategoriesComponent,
    LandingDigitalComponent,
    LandingContactsComponent,
    FooterComponent,
    BusinessComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
