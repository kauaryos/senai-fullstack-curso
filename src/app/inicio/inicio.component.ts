// Importa o Componente do Angular Core
import { Component } from '@angular/core';

// Define o Componente
@Component({
  selector: 'app-inicio', // Seletor do componente
  templateUrl: './inicio.component.html', // URL do template HTML
  styleUrls: ['./inicio.component.css'] // URLs dos estilos CSS
})
export class InicioComponent {
  // Array de jogos
  jogos = [
    { 
      nome: 'Cyberpunk 2077', 
      descricao: 'Entre em Night City, uma metrópole obcecada pelo poder, glamour e biomodificações. Você joga como V, um mercenário fora da lei atrás de um implante único que carrega a chave da imortalidade. Personalize seu personagem e mergulhe em uma narrativa épica cheia de escolhas e consequências.',
      preco: 'R$ 199,90', 
      imagem: './assets/img/jogo1.PNG' 
    },
    { 
      nome: 'Star Wars Jedi: Fallen Order', 
      descricao: 'Assuma o papel de Cal Kestis, um jovem Padawan que escapou por pouco do expurgo da Ordem 66 após os eventos de Star Wars: Episódio III - A Vingança dos Sith. Embarque em uma jornada épica para reconstruir a Ordem Jedi enquanto enfrenta o Império e seus letais Inquisidores.',
      preco: 'R$ 179,90', 
      imagem: './assets/img/jogo2.PNG' 
    },
    { 
      nome: 'LEGO The Hobbit', 
      descricao: 'Reviva as aventuras épicas de Bilbo Bolseiro, Gandalf, Thorin Escudo-de-Carvalho e a Companhia dos Anões enquanto eles viajam pela Terra-média para recuperar o Reino de Erebor. Explore locais icônicos, resolva quebra-cabeças e enfrente perigosas criaturas neste jogo LEGO repleto de humor e aventura.',
      preco: 'R$ 99,90', 
      imagem: './assets/img/jogo3.jpg' 
    }
  ];
}
