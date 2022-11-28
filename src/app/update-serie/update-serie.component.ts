import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { Serie } from '../model/serie.model';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-serie',
  templateUrl: './update-serie.component.html',
  styles: []
})
export class UpdateSerieComponent implements OnInit {
  currentSerie = new Serie();
  types!:Type[];
  updatedTypeId!:number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private serieService: SerieService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.types=this.serieService.listeTypes();
this.currentSerie = this.serieService.consulterSerie(this.activatedRoute.snapshot. params['id']);
this.updatedTypeId=this.currentSerie.type.idType;
  }
  updateSerie()
{ //console.log(this.currentSerie);
  this.currentSerie.type=this.serieService.consulterType(this.updatedTypeId);
this.serieService.updateSerie(this.currentSerie);
this.router.navigate(['series']);
}


}
