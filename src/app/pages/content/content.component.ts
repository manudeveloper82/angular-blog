import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover:string = "../../../assets/youcine-app-assistir-series-filmes.jpg"
  cardTitle:string = "YouCine! Filmes e Séries de graça de alta qualidade."
  cardDescription:string = "Os recursos de filmes e séries de TV mais recentes e populares estão todos no apk Youcine. Como plataforma de streaming de mídia, não há apenas um grande número de recursos de programas, mas também filmes e animações especiais para crianças. Ao mesmo tempo, nosso apk é adequado para celulares, TV e PC, permitindo que você assista aos mais recentes filmes e séries de TV em alta definição gratuitamente a qualquer hora e em qualquer lugar."
  cardLink:string = "https://www.youcine.net/"


}
