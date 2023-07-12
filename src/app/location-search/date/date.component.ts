import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

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
  pickedFromDate: NgbDate;
  pickedToDate: NgbDate;
  checkInDateSelectedText: string = 'Add a date';
  checkOutDateSelectedText: string = 'Add a date';

  constructor(calendar: NgbCalendar) {
    this.pickedFromDate = calendar.getToday();
    this.pickedToDate = calendar.getNext(calendar.getToday(), 'd', 3);
  }

  onClickedOutside() {
    this.showPicker = false;
    console.log(this.showPicker);
  }

  onShowPicker() {
    this.showPicker = true;
  }

  onDateSelection(event: any) {
    console.log(this.pickedFromDate, this.pickedToDate);
    this.pickedFromDate = event.fromDate;
    this.pickedToDate = event.toDate;
    this.checkInDateSelectedText = this.formatDate(this.pickedFromDate);
    this.checkOutDateSelectedText = this.formatDate(this.pickedToDate);
  }

  formatDate(date: NgbDate): string {
    if (date) {
      const day = date.day < 10 ? `0${date.day}` : date.day;
      const month = date.month < 10 ? `0${date.month}` : date.month;
      const year = date.year;

      return `${day}/${month}/${year}`;
    }

    return '';
  }
}
