import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import Reservation from '../models/Reservation';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedCar: string = 'default';
  carTypes: { id: number; type: string }[] = [
    { id: 1, type: 'Sedan' },
    { id: 2, type: 'SUV' },
  ];
  resDate: string = '';
  resHours: number = 1;
  carSeat: boolean = false;
  error: boolean = false;
  resID: number = 0;

  constructor(private router: Router) {}

  validateDate = (): boolean => {
    let date: moment.Moment = moment(this.resDate);
    return date.isValid();
  };

  validatePastDate = (): boolean => {
    let date: moment.Moment = moment(this.resDate);
    return date >= moment().startOf('day');
  };

  onFormChange = (): void => {
    this.evaluateError();
  };

  evaluateError = (): void => {
    this.error =
      this.selectedCar === 'default' ||
      !this.validateDate() ||
      !this.validatePastDate() ||
      this.resHours < 0 ||
      this.resHours > 96;
  };

  resetForm = (): void => {
    this.error = false;

    this.resDate = '';
    this.selectedCar = 'default';
    this.resHours = 1;
    this.carSeat = false;
  };

  onSubmit = (): void => {
    this.evaluateError();

    if (!this.error) {
      this.resID = Math.floor(Math.random() * 9999);

      let reservation: Reservation = {
        ID: this.resID,
        carType: this.selectedCar,
        date: this.resDate,
        hours: this.resHours,
        carSeat: this.carSeat,
      };

      let navigationExtras: NavigationExtras = {
        queryParams: {
          reso: JSON.stringify(reservation),
        },
      };

      this.router.navigate(['/receipt'], navigationExtras);
    }
  };
}
