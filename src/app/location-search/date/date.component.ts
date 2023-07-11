import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
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
export class DateComponent {
  showPicker = false;

  onClickedOutside() {
    this.showPicker = false;
  }

  onShowPicker() {
    this.showPicker = true;
  }
}
