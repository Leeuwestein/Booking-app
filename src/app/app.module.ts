import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocationSliderComponent } from './location-slider/location-slider.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { DestinationComponent } from './location-search/destination/destination.component';
import { DateComponent } from './location-search/date/date.component';
import { TravelersComponent } from './location-search/travelers/travelers.component';
import { ActivityTypeComponent } from './location-search/activity-type/activity-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideDirective } from '../app/location-search/click-outside.directive';
import { DestinationPickerComponent } from './location-search/destination/destination-picker/destination-picker.component';
import { DatePickerComponent } from './location-search/date/date-picker/date-picker.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationSliderComponent,
    LocationSearchComponent,
    DestinationComponent,
    DateComponent,
    TravelersComponent,
    ActivityTypeComponent,
    ClickOutsideDirective,
    DestinationPickerComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
