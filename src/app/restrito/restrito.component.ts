// Importa o Componente do Angular Core
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa o RouterModule

@Component({
  selector: 'app-restrito',
  templateUrl: './restrito.component.html',
  styleUrls: ['./restrito.component.css']
})
export class RestritoComponent {

}

@NgModule({
  imports: [
    RouterModule // Certifique-se de importar o RouterModule aqui
  ]
})
export class RestritoModule { }
