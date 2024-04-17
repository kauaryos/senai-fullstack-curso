import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostraMenu = new Subject<boolean>();

  constructor() { }

  login(usuario:string, senha:string): void {
    if(usuario === "aluno" && senha === "1234") {
      localStorage.setItem('token', 'qwer1234');
      this.mostraMenu.next(true); // Alterei para true para mostrar o menu após o login
    } else {
      this.mostraMenu.next(false); // Alterei para false para esconder o menu se o login falhar
      window.location.reload();
    }
  }

  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor);
  }

  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }
}
