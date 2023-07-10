import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import { cities } from './citydata';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  animations: [
    trigger('bounceAnimation', [
      transition(':enter', [
        style({ scale: 0.8, opacity: 0 }),
        animate(
          '1000ms cubic-bezier(.47,1.64,.41,.8)',
          style({ scale: 1, opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '400ms cubic-bezier(.47,1.64,.41,.8)',
          style({ scale: 0.8, opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class DestinationComponent {
  constructor() {}

  cities: any = cities;
  showPicker = false;
  isLocationSelected = false;
  searchText = '';
  originalPlaceholderText = 'Where are you going?';
  placeholderText = 'Where are you going?';

  get filteredCities(): any[] {
    const filteredText = this.searchText.toLowerCase().trim();
    if (!filteredText) {
      return [];
    }

    if (filteredText.length === 1) {
      return this.cities
        .filter((city: any) => city.name.toLowerCase().startsWith(filteredText))
        .slice(0, 4);
    }

    const filtered = this.cities.filter((city: any) =>
      city.name.toLowerCase().includes(filteredText)
    );

    return filtered.slice(0, 4);
  }

  selectCity(city: any) {
    this.searchText = city.name + ', ' + city.country;
    this.showPicker = false;
    this.isLocationSelected = true;
  }

  clearPlaceholder() {
    this.placeholderText = '';
  }

  restorePlaceholder() {
    if (!this.searchText) {
      this.placeholderText = this.originalPlaceholderText;
      this.isLocationSelected = false;
    }
  }

  onClickedOutside() {
    this.showPicker = false;
  }

  onShowPicker() {
    this.showPicker = true;
  }
}
