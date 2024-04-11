import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

// Este teste verifica se o componente InicioComponent pode ser criado com sucesso.
describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  // Antes de cada teste, configura o TestBed com o componente InicioComponent como declaração.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ]
    })
    .compileComponents();

    // Cria uma instância do componente InicioComponent.
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;

    // Detecta as mudanças no componente.
    fixture.detectChanges();
  });

  // Testa se o componente foi criado com sucesso.
  it('should create', () => {
    // Verifica se o componente é verdadeiro (ou seja, foi criado com sucesso).
    expect(component).toBeTruthy();
  });
});
