import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie.model';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series : Serie[]; //un tableau de chînes de caractères

  constructor(private serieService: SerieService,
              public authService:AuthService ) {
    this.series = serieService.listeSeries();
    }
    
  

  ngOnInit(): void {
  }
  supprimerSerie(s: Serie)
  {
  //console.log(s);
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
  
  this.serieService.supprimerSerie(s);
  }
}
