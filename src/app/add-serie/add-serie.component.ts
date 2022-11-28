import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie.model';
import { Router } from '@angular/router';
import { SerieService } from '../services/serie.service';
import {Type} from '../model/type.model';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {
  newSerie = new Serie();
  types!:Type[];
  newIdType!:number;
  newType!:Type;


  constructor(private serieService: SerieService,
               private router : Router) { }

  ngOnInit(): void {
    this.types=this.serieService.listeTypes();
  }
  addSerie(){
    //console.log(this.newSerie);
    this.newType=this.serieService.consulterType(this.newIdType);
    this.newSerie.type=this.newType;
    this.serieService.ajouterSerie(this.newSerie);
    this.router.navigate(['series']);
    }
    

}
