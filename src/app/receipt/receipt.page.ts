import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import Reservation from '../models/Reservation';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage implements OnInit {
  subtotal: number = 0;

  reservation: Reservation = {
    ID: 0,
    carType: '',
    date: '',
    hours: 0,
    carSeat: false,
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params && 'reso' in params) {
        this.reservation = JSON.parse(params['reso']);
      }
    });
  }

  calculateSubtotal = () => {
    let carTypeHourlyRate = this.reservation.carType === 'Sedan' ? 7 : 12;
    let carTypeDailyRate = this.reservation.carType === 'Sedan' ? 70 : 100;

    if (this.reservation.carSeat) {
      carTypeHourlyRate += 1;
      carTypeDailyRate += 10;
    }

    if (this.reservation.hours <= 5) {
      this.subtotal = carTypeHourlyRate * this.reservation.hours;
    } else if (this.reservation.hours > 5 && this.reservation.hours <= 24) {
      this.subtotal = carTypeDailyRate;
    } else {
      this.subtotal =
        carTypeDailyRate *
        Math.ceil(moment.duration(this.reservation.hours, 'hours').asDays());
    }
  };

  ngOnInit() {
    this.reservation.date = moment(this.reservation.date).format('YYYY-MM-DD');
    this.calculateSubtotal();
  }
}
