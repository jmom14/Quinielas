import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

   columnasObj: any[] = [];
   public name:String;

   constructor(){
     this.name ='';
    this.columnasObj = [
      {
        numero: 1,
        etiquetaL : 'L',
        etiquetaE : 'E',
        etiquetaV : 'V'
      },
      {
        numero: 2,
        etiquetaL : 'L',
        etiquetaE : 'E',
        etiquetaV : 'V'
      }
      ,
      {
        numero: 3,
        etiquetaL : 'L',
        etiquetaE : 'E',
        etiquetaV : 'V'
      },
      {
        numero: 4,
        etiquetaL : 'L',
        etiquetaE : 'E',
        etiquetaV : 'V'
      },
      {
        numero: 5,
        etiquetaL : 'L',
        etiquetaE : 'E',
        etiquetaV : 'V'
      },
      {
        numero: 6,
        etiquetaL : 'L',
        etiquetaE : 'E',
        etiquetaV : 'V'
      },
      {
        numero: 7,
        etiquetaL : 'L',
        etiquetaE : 'E',
        etiquetaV : 'V'
      },
      {
        numero: 8,
        etiquetaL : 'L',
        etiquetaE : 'E',
        etiquetaV : 'V'
      },
      {
        numero: 9,
        etiquetaL : 'L',
        etiquetaE : 'E',
        etiquetaV : 'V'
      }
    ];
   }

   
}
