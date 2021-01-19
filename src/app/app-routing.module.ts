import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerlistComponent } from './beerlist/beerlist.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch:"full"},
  {path: 'beer-list', component: BeerlistComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo:"/page-not-found"},
  {path: 'page-not-found', component: PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
