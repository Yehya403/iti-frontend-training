import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { NavbarSectionComponent } from './navbar-section/navbar-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent,
    FooterSectionComponent,
    NavbarSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
