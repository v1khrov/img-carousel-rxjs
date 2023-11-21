import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarouselRxjsComponent } from './img-carousel-rxjs.component';

describe('ImgCarouselRxjsComponent', () => {
  let component: ImgCarouselRxjsComponent;
  let fixture: ComponentFixture<ImgCarouselRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCarouselRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCarouselRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
