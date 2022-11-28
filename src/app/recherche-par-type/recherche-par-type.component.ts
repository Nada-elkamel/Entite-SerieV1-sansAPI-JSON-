import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie.model';
import { Type } from '../model/type.model';
import { AuthService } from '../services/auth.service';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styles: [
  ]
})
export class RechercheParTypeComponent implements OnInit {
series!:Serie[];
types!:Type[];
IdType!:number;



  constructor(private serieService: SerieService,
              public authService:AuthService) { }

  ngOnInit(): void {
    this.types=this.serieService.listeTypes();
    
    this.series=[];
}
onChange(){
  console.log(this.IdType);
  this.series=this.serieService.rechercherParType(this.IdType);
  console.log(this.series);
}
supprimerSerie(s:Serie){
  let conf=confirm('Etes-vous sur?');
  if(conf)
  {
    this.serieService.supprimerSerie(s);
    this.series=this.serieService.rechercherParType(this.IdType);
  }
}

}
