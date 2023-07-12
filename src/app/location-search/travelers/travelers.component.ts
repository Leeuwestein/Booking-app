import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-travelers',
  templateUrl: './travelers.component.html',
  styleUrls: ['./travelers.component.scss'],
  animations: [
    trigger('bounceAnimation', [
      transition(':enter', [
        style({ scale: 0.8, opacity: 0 }),
        animate(
          '600ms cubic-bezier(.47,1.64,.41,.8)',
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
export class TravelersComponent {
  showPicker = false;

  onClickedOutside() {
    this.showPicker = false;
  }

  onShowPicker() {
    this.showPicker = true;
  }
}
