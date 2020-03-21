import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { HelpComponent } from './misc/help/help.component';
import { ContactComponent } from './misc/contact/contact.component';

//empty routes array
const routes: Routes = [
  {path: "", redirectTo: "/help", pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: "about",component: AboutComponent},
  {path: "help", component: HelpComponent},
  {path: "contact", component: ContactComponent}, 
  //catch all
  {path: "**", component:AboutComponent}
];

//decorater
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//class with no properties
export class AppRoutingModule { }
