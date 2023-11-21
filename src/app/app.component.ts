import { Component } from '@angular/core';
import { ImgCarouselOptions } from './img-carousel-rxjs/img-carousel-rxjs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'img-carousel-rxjs';

  options: Partial<ImgCarouselOptions> = {
    slides: [
      {
        imageSrc: 'https://plus.unsplash.com/premium_photo-1669842613532-1f0947aa6fa6?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageTitle: 'Picture 1'
      },
      { 
        imageSrc: 'https://images.unsplash.com/photo-1508264165352-258db2ebd59b?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageTitle: 'pic2'
      },
      { 
        imageSrc: 'https://images.unsplash.com/photo-1504788363733-507549153474?auto=format&fit=crop&q=80&w=1734&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageTitle: 'pic3'
      },
      { 
        imageSrc: 'https://images.unsplash.com/photo-1506202687253-52e1b29d3527?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageTitle: 'pic4'
      },
      { 
        imageSrc: 'https://images.unsplash.com/photo-1508144322886-717c284ab392?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageTitle: 'pic5'
      },
      { 
        imageSrc: 'https://images.unsplash.com/photo-1528840467926-94930468212f?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageTitle: 'pic6'
      },
    ],
    interval: 10000,
    indicators: true,
    controls: true
  }

}
