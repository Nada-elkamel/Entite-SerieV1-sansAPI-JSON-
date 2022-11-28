import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { UpdateSerieComponent } from './update-serie/update-serie.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SerieGuard } from './serie.guard';

const routes: Routes = [
  {path: "series", component : SeriesComponent},
  {path: "add-serie", component : AddSerieComponent,canActivate:[SerieGuard]},
  {path: "updateSerie/:id", component: UpdateSerieComponent},
  {path: "rechercheParType",component: RechercheParTypeComponent},
  {path:"rechercheParNom",component:RechercheParNomComponent},
  {path: "listeTypes", component : ListeTypesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "", redirectTo: "series", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
