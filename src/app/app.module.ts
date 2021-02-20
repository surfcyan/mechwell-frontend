import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { TeamComponent } from './team/team.component';
import { GroupCompaniesComponent } from './group-companies/group-companies.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionTwoComponent } from './home/section-two/section-two.component';
import { ServerService } from './services/server.service';
import { HttpClientModule } from "@angular/common/http";
import { SectionThreeComponent } from './home/section-three/section-three.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    ProductsComponent,
    TeamComponent,
    GroupCompaniesComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    SectionTwoComponent,
    SectionThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
