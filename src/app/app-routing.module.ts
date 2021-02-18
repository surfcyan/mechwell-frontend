import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponent } from './error/error.component';
import { GroupCompaniesComponent } from './group-companies/group-companies.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'groupCompanies', component: GroupCompaniesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'ourTeam', component: TeamComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
