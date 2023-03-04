import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { Investment } from 'src/app/interfaces/investment.interface';
import { DataService } from 'src/app/services/data.service';
import { HelperService } from 'src/app/services/helper.service';
import { ConfirmIcon } from '../../shared/confirmation/confirm-icon.enum';
import { ConfirmationDialogComponent } from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.less']
})
export class InvestmentListComponent implements OnInit {
  investments: Array<Investment> = [];
  isInProgress: boolean = true;
  constructor(private dataService: DataService, private route: ActivatedRoute, private _location: Location,
    private helper: HelperService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getInvestments(this.route.snapshot.params['id']);
  }

  async getInvestments(category_id: string) {
    this.isInProgress = true;
    this.investments = await this.dataService.getInvestmentsByCategoryId(category_id);
    this.isInProgress = false;
  }

  backButtonClick(event: any) {
    this._location.back();
  }

  getMaturityDate(year: number, month: number, day: number) {
    return this.helper.getMaturityDate(year, month, day);
  }

  async deleteInvestment(event: any, id: string | undefined) {
    event.stopPropagation();
    this.confirmDialog().subscribe(async (res: boolean) => {
      if (res) {
        if (await this.dataService.deleteInvestment(id as string)) { // It will delete the investment
          this.investments = this.investments.filter(arr => arr._id !== id);
        }
      }
    })

  }

  
  confirmDialog(): Observable<boolean> {
    return this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirm Action', message: `This will delete the investment. Continue ?`,
        icon: ConfirmIcon.Error
      },
    }).afterClosed()
      .pipe(filter((confirm: boolean) => confirm));

  }

}
