import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { Investment } from 'src/app/interfaces/investment.interface';
import { FdCalculationsService } from 'src/app/services/fd-calculations.service';

@Component({
  selector: 'app-investment-overview-dashboard',
  templateUrl: './investment-overview-dashboard.component.html',
  styleUrls: ['./investment-overview-dashboard.component.less']
})
export class InvestmentOverviewDashboardComponent implements OnInit {
  @Input()
  investmentData: Array<Investment | Category> = [];
  @Input()
  dataType: 'category' | 'investment' = 'category';
  dashboardData: { averageReturn: number; investedValue: number; interestEarned: number; currentValue: number; } | undefined;

  constructor(private fdCalculation: FdCalculationsService) { }

  ngOnInit(): void {
    console.log(this.investmentData);
    if (this.investmentData.length) {
      this.getFdDashboardData();
    }
  }

  getFdDashboardData() {
    if (this.dataType == 'investment') {
      this.dashboardData = this.fdCalculation.allFdInCategoryCalculations(this.investmentData as Investment[]);
    } else {
      this.dashboardData = this.fdCalculation.allCategoriesFdCalculation(this.investmentData as Category[]);
    }
  }
}
