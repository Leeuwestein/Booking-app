import { Component, ElementRef, ViewChild } from '@angular/core';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-location-slider',
  templateUrl: './location-slider.component.html',
  styleUrls: ['./location-slider.component.scss'],
})
export class LocationSliderComponent {
  @ViewChild('slickMain', { static: false }) slickMain: any;
  @ViewChild('slickMainTitle', { static: false }) slickMainTitle: any;
  @ViewChild('slickNext', { static: false }) slickNext: any;
  @ViewChild('slickNextTitle', { static: false }) slickNextTitle: any;
  @ViewChild('slickLowerLocation', { static: false }) slickLowerLocation: any;

  constructor(
    public sliderService: SliderService,
    private elementRef: ElementRef
  ) {}

  mainImageSlider: any;
  mainTitleSlider: any;
  nextImageSlider: any;
  nextImageTitle: any;
  lowerLocation: any;

  ngAfterViewInit() {
    this.mainImageSlider =
      this.elementRef.nativeElement.querySelector('.slider-main-image');
    this.mainTitleSlider =
      this.elementRef.nativeElement.querySelector('.slider-main-title');
    this.nextImageSlider =
      this.elementRef.nativeElement.querySelector('.slider-next-image');
    this.nextImageTitle =
      this.elementRef.nativeElement.querySelector('.slider-next-title');
    this.lowerLocation = this.elementRef.nativeElement.querySelector(
      '.slider-lower-location'
    );
  }

  ngOnInit() {
    this.sliderService.registerSlider(this);

    // setInterval(() => {
    //   this.nextSlide();
    // }, 4000);
  }

  slides = [
    {
      img: 'https://images.unsplash.com/photo-1688168293343-e1c824a4ace5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&h=670&q=80',
      title: 'Egypt',
      location: 'The Giza pyramid complex - El Cairo Egypt',
    },
    {
      img: 'https://images.unsplash.com/photo-1596407628318-9541e92f40a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&h=670&q=80',
      title: 'Maldive',
      location: 'Mahé - Seychelles islands',
    },
    {
      img: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&h=670&q=80',
      title: 'Rome',
      location: 'Collosseum - Rome, Italy',
    },
    {
      img: 'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&h=670&q=80',
      title: 'Greece',
      location: 'Zakynthos Blue - Zakynthos, Greece',
    },
  ];

  nextSlide() {
    this.slickMain.slickNext();
    this.slickNext.slickNext();
    this.slickMainTitle.slickNext();
    this.slickNextTitle.slickNext();
    this.slickLowerLocation.slickNext();
  }

  nextSlides = [...this.slides.slice(1), this.slides[0]];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    draggable: false,
    cssEase: 'cubic-bezier(0.84,0.02,0.21,1)',
    speed: 1000,
  };

  nextSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    draggable: false,
    vertical: true,
    cssEase: 'cubic-bezier(0.84,0.02,0.21,1)',
    speed: 1000,
  };

  lowerLocationConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    draggable: false,
    vertical: true,
    cssEase: 'cubic-bezier(0.84,0.02,0.21,1)',
    speed: 1000,
  };
}
