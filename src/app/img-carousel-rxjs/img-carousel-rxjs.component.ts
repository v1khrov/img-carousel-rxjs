import { Component, OnInit } from '@angular/core';

const DEFAULT_OPTIONS: ImgCarouselOptions = {
  slides: [],
  activeSlide: 0,
  hideSlide: null,
  interval: 5000,
  indicators: true,
  controls: true
}

@Component({
  selector: 'app-img-carousel-rxjs',
  templateUrl: './img-carousel-rxjs.component.html',
  styleUrls: ['./img-carousel-rxjs.component.css']
})
export class ImgCarouselRxjsComponent implements OnInit {

  options: ImgCarouselOptions = DEFAULT_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}

/** Slide (img) of image carousel */
export interface ImgCarouselSlide {

  /** Image source */
  imageSrc: string;
  /** Image title */
  imageTitle?: string;
  /** Image description */
  imageDescription?: string;
  /** Image route */
  route?: string;

  [key: string]: any;
}


export interface ImgCarouselOptions {

  slides: ImgCarouselSlide[];
  activeSlide: number;
  hideSlide: number | null;
  interval: number;
  indicators: boolean;
  controls: boolean;

  [key: string]: any;
}