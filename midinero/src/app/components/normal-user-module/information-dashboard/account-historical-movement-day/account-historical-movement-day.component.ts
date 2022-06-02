import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-account-historical-movement-day',
  templateUrl: './account-historical-movement-day.component.html',
  styleUrls: ['./account-historical-movement-day.component.scss']
})
export class AccountHistoricalMovementDayComponent implements OnInit {

  accountHistoricalDaySubscription!: Subscription;

  constructor(private movementService: MovementService) { }

  ngOnInit(): void {
    this.subscribeAccountHistoricalDay();
    this.loadAccountHistoricalDay();
  }

  subscribeAccountHistoricalDay() {
    this.movementService.accountHistoricalDay().subscribe(result => {

    });
  }

  loadAccountHistoricalDay() {
    this.movementService.getAccountHistoricalDay();
  }

  unsubcribeAccountHistoricalDay() {
    this.accountHistoricalDaySubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.unsubcribeAccountHistoricalDay();
  }
}
