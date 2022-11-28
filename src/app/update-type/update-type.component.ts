//import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Type } from '../model/type.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styles: [
  ]
})
export class UpdateTypeComponent implements OnInit {
@Input()
type!:Type;

@Output()
typeUpdated= new EventEmitter<Type>();

@Input()
ajout!:boolean;

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    console.log("UpdateTypeComponent.ngOnInit()", this.type);
  }
  saveType(){
    this.typeUpdated.emit(this.type);
    console.log(this.type);
  }

}
