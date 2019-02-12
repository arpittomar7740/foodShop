import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {MenuComponent} from './components/menu/menu.component';
import {ContactComponent} from "./components/contact/contact.component";
import { FeedbackComponent } from './components/feedback/feedback.component';


const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'feedback', component: FeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})



export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AboutUsComponent, MenuComponent, ContactComponent, FeedbackComponent];
