import { Component, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent {
  constructor() {}

  cities = [
    { name: 'Venice', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Paris', country: 'France' },
    { name: 'New York', country: 'USA' },
  ];

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
      return this.cities.filter((city) =>
        city.name.toLowerCase().startsWith(filteredText)
      );
    }

    return this.cities.filter((city) =>
      city.name.toLowerCase().includes(filteredText)
    );
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
