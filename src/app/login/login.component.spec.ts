import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

// Descreve o conjunto de testes para o componente LoginComponent
describe('LoginComponent', () => {
  let component: LoginComponent; // Declaração da variável para armazenar a instância do componente
  let fixture: ComponentFixture<LoginComponent>; // Declaração da variável para armazenar a instância do componente fixture

  // Antes de cada teste, configura o TestBed com o componente LoginComponent como declaração
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ] // Declaração do LoginComponent para o teste
    })
    .compileComponents(); // Compila os componentes necessários

    fixture = TestBed.createComponent(LoginComponent); // Cria uma instância do componente LoginComponent
    component = fixture.componentInstance; // Obtém a instância do componente LoginComponent

    fixture.detectChanges(); // Detecta as mudanças no componente
  });

  // Testa se o componente foi criado com sucesso
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se o componente é verdadeiro (ou seja, foi criado com sucesso)
  });
});
