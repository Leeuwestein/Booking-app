import { Component } from '@angular/core';

interface ActivityType {
  type: string;
}

@Component({
  selector: 'app-activity-type',
  templateUrl: './activity-type.component.html',
  styleUrls: ['./activity-type.component.scss'],
})
export class ActivityTypeComponent {
  activityTypes: ActivityType[] = [
    {
      type: 'Flights',
    },
    {
      type: 'Cruises',
    },
    {
      type: 'Hotels',
    },
    {
      type: 'Car rentals',
    },
    {
      type: 'Things to do',
    },
  ];
}
