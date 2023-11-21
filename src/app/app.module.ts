import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImgCarouselRxjsComponent } from './img-carousel-rxjs/img-carousel-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgCarouselRxjsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
