import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investment } from 'src/app/interfaces/investment.interface';
import { DataService } from 'src/app/services/data.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.less']
})
export class InvestmentListComponent implements OnInit {
  investments: Array<Investment> = [];
  isInProgress: boolean = true;
  constructor(private dataService: DataService, private route: ActivatedRoute, private _location: Location,
    private helper: HelperService) { }

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


}
