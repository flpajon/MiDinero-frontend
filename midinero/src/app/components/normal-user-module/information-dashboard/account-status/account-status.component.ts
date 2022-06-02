import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-account-status',
  templateUrl: './account-status.component.html',
  styleUrls: ['./account-status.component.scss']
})
export class AccountStatusComponent implements OnInit, OnDestroy {

  accountStatus: number = 0;
  month: string = '';

  currentAccountStatementSubscription!: Subscription;

  constructor(private movementService: MovementService) { }

  ngOnInit(): void {
    this.subscribeCurrentAccountStatement();
    this.loadCurrentAccountStatement();
  }

  subscribeCurrentAccountStatement() {
    this.currentAccountStatementSubscription = this.movementService.currentAccountStatement().subscribe(result => {
      if (result.stateMovementsAccountStatus.statusCode == 0) {
        result.accountStatus = result.accountStatus.replace(/,/g, '.');
        this.accountStatus = Number(result.accountStatus);
        this.month = result.accountDate
      }
    });
  }

  unsubcribeCurrentAccountStatement() {
    if (this.currentAccountStatementSubscription) {
      this.currentAccountStatementSubscription.unsubscribe();
    }
  }

  loadCurrentAccountStatement() {
    this.movementService.getCurrentAccountStatement();
  }

  ngOnDestroy(): void {
    this.unsubcribeCurrentAccountStatement();
  }


}
