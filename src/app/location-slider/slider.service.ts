import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  private sliders: any[] = [];

  registerSlider(slider: any) {
    this.sliders.push(slider);
  }

  nextSlide() {
    this.sliders.forEach((slider: any) => {
      slider.slickNext();
    });
  }
}
