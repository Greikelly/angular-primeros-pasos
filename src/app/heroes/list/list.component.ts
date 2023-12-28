import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
//Estas son Propiedades de clases de este modo las variables q aca declaro seran validas en todos los parametros que defina
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deleteHero?: string;


  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();
  }

}
