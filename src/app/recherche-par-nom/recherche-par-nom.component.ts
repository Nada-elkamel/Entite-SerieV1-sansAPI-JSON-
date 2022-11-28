import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie.model';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',

})
export class RechercheParNomComponent implements OnInit {

  series!:Serie[];
  searchTerm!:String;
  nomSerie!:String;
  allSeries!:Serie[];
  genericName!:String;

  constructor(private serieService:SerieService,
              public authService:AuthService) { 
    this.series=this.serieService.listeSeries();
  }

  ngOnInit(): void {

    this.series = this.serieService.listeSeries();
    this.allSeries = this.series;
      
  }

  onChange() {
    this.series = this.serieService.rechercherParNom(this.genericName);
  }

  SupprimerSerie(s: Serie) {
    let conf = confirm("Etes-vous sur que vous aimerez supprimer cette serie?");
    if (conf) {
      this.serieService.supprimerSerie(s);
    }
  }
  onKeyUp(filterText : string){
    this.series = this.allSeries.filter(item =>
      item.nomSerie!.toLowerCase().includes(filterText.toLocaleLowerCase()));
    }


}
