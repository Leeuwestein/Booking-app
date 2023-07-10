import { Component, OnInit } from '@angular/core';

interface Month {
  month: any;
  year: any;
  days: any[];
}

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  months: Month[] = [];

  ngOnInit() {
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    this.generateMonth(currentMonth, currentYear);
  }

  generateMonth(month: number, year: number) {
    const firstOfMonth = new Date(year, month, 1);
    const startingDay = (firstOfMonth.getDay() + 6) % 7;
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();

    const currentMonth: Month = {
      month: month,
      year: year,
      days: [],
    };

    for (let i = 0; i < startingDay; i++) {
      currentMonth.days.push(null);
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      currentMonth.days.push(i);
    }

    this.months.push(currentMonth);
  }

  isDateExpired(day: number, month: number, year: number): boolean {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    if (year === currentYear && month === currentMonth && day < currentDay) {
      return true;
    } else {
      return false;
    }
  }

  getNextMonth() {
    const lastMonth = this.months[this.months.length - 1];
    const nextMonth = lastMonth.month + 1;
    const nextYear = lastMonth.year;

    this.generateMonth(nextMonth, nextYear);
  }
}
