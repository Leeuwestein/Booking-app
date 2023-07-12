import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-traveler-picker',
  templateUrl: './traveler-picker.component.html',
  styleUrls: ['./traveler-picker.component.scss'],
})
export class TravelerPickerComponent {
  @Output() closePicker: EventEmitter<any> = new EventEmitter();
  @Output() travelerAmount: EventEmitter<number> = new EventEmitter();

  adultCounter: number = 0;
  childrenCounter: number = 0;
  infantCounter: number = 0;
  petCounter: number = 0;

  changeCounter(number: number, operation: string) {
    operation === 'increment' ? this.adultCounter++ : this.adultCounter--;
  }

  onFinishedPicking() {
    setTimeout(() => {
      this.closePicker.emit();
      this.travelerAmount.emit(this.adultCounter);
    }, 0);
  }
}
