import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent, ProductViewComponent } from './products/products.component';
import { TeamComponent } from './team/team.component';
import { GroupCompaniesComponent } from './group-companies/group-companies.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionTwoComponent } from './home/section-two/section-two.component';
import { ServerService } from './services/server.service';
import { HttpClientModule } from "@angular/common/http";
import { SectionThreeComponent } from './home/section-three/section-three.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionFourComponent } from './home/section-four/section-four.component';
import { WhyComponent } from './home/why/why.component';
import { HomeAboutUsComponent } from './home/home-about-us/home-about-us.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RoboticsComponent } from './products/dialog-pages/robotics/robotics.component';
import { WeldingComponent } from './products/dialog-pages/welding/welding.component';
import { SpmComponent } from './products/dialog-pages/spm/spm.component';
import { FabricationComponent } from './products/dialog-pages/fabrication/fabrication.component';
import { LineComponent } from './products/dialog-pages/line/line.component';
import { SimulationComponent } from './products/dialog-pages/simulation/simulation.component';
import { AutoComponent } from './products/dialog-pages/auto/auto.component';
import { GaugesComponent } from './products/dialog-pages/gauges/gauges.component';
import { ToolsComponent } from './products/dialog-pages/tools/tools.component';
import { OneBikeComponent } from './home/one-bike/one-bike.component';
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
    SectionThreeComponent,
    SectionFourComponent,
    WhyComponent,
    HomeAboutUsComponent,
    OurClientsComponent,
    ProductViewComponent,
    RoboticsComponent,
    WeldingComponent,
    SpmComponent,
    FabricationComponent,
    LineComponent,
    SimulationComponent,
    AutoComponent,
    GaugesComponent,
    ToolsComponent,
    OneBikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [
    ProductViewComponent,
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
