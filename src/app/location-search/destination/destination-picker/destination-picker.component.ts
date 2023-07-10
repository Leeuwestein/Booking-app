import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-destination-picker',
  templateUrl: './destination-picker.component.html',
  styleUrls: ['./destination-picker.component.scss'],
})
export class DestinationPickerComponent {
  @Input() filteredCities: any[] = [];
  @Output() citySelected = new EventEmitter<any>();

  selectCity(city: any) {
    this.citySelected.emit(city);
  }
}
