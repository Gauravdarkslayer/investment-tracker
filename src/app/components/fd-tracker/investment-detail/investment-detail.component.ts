import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Investment } from 'src/app/interfaces/investment.interface';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-investment-detail',
  templateUrl: './investment-detail.component.html',
  styleUrls: ['./investment-detail.component.less']
})
export class InvestmentDetailComponent implements OnInit  {
  investment!: Investment;
  isInProgress: boolean = true;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router,
    private _location: Location) { }

  ngOnInit(): void {
    this.getInvestment(this.route.snapshot.params['id']);

  }

  async getInvestment(investment_id: string) {
    this.isInProgress = true;
    this.investment = await this.dataService.getInvestmentById(investment_id);
    this.isInProgress = false;

  }

  backButtonClick(event: any) {
    this._location.back();
  }
  
}
