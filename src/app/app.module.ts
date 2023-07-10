import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { LocationSliderComponent } from './location-slider/location-slider.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { DestinationComponent } from './location-search/destination/destination.component';
import { DatepickerComponent } from './location-search/datepicker/datepicker.component';
import { TravelersComponent } from './location-search/travelers/travelers.component';
import { ActivityTypeComponent } from './location-search/activity-type/activity-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideDirective } from '../app/location-search/click-outside.directive';
import { DestinationPickerComponent } from './location-search/destination/destination-picker/destination-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationSliderComponent,
    LocationSearchComponent,
    DestinationComponent,
    DatepickerComponent,
    TravelersComponent,
    ActivityTypeComponent,
    ClickOutsideDirective,
    DestinationPickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
