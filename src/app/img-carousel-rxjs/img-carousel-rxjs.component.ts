import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject, interval, startWith, switchMap, tap } from 'rxjs';

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
  styleUrls: ['./img-carousel-rxjs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgCarouselRxjsComponent implements OnInit {

  options: ImgCarouselOptions = DEFAULT_OPTIONS;

  show$ = new  Observable<number>();

  changeSlide$ = new Subject<number>();

  @Input() set config(value: Partial<ImgCarouselOptions>) {
    this.options = {...DEFAULT_OPTIONS, ...value};
    console.log(this.options);
    this.show$ = this.changeSlide$.pipe(
      startWith(-1),      
      switchMap(index => { 
        console.log(index);       
        if(index >= 0 && index < this.options.slides.length) {          
          this.options.hideSlide = this.options.activeSlide;
          this.options.activeSlide = index;
        }
        else this.changeSlide$.next(0);
        return interval(this.options.interval).pipe(
          tap(() => {
            if(!window.document.hidden) {
              if(this.options.activeSlide + 1 === this.options.slides.length) {
                this.options.hideSlide = this.options.slides.length - 1;
                this.options.activeSlide = 0;
                console.log(this.options.activeSlide);
              }
              else {
                this.options.hideSlide = this.options.activeSlide;
                this.options.activeSlide++;
                console.log(this.options.activeSlide);
              }              
            }
          })
        )
      })
    )
  }

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