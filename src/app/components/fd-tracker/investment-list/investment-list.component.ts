import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investment } from 'src/app/interfaces/investment.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.less']
})
export class InvestmentListComponent implements OnInit {
  investments: Array<Investment> = [];
  isInProgress: boolean = true;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getInvestments(this.route.snapshot.params['id']);

  }

  async getInvestments(category_id: string) {
    this.isInProgress = true;
    this.investments = await this.dataService.getInvestmentsByCategoryId(category_id);
    console.log(this.investments);
    this.isInProgress = false;

  }

  backButtonClick(event: any) {
    this.router.navigate(['..']);
  }

  getMaturityDate(year: number, month: number, day: number) {
    const maturityDate = new Date();

    maturityDate.setFullYear(maturityDate.getFullYear() + year);
    maturityDate.setMonth(maturityDate.getMonth() + month);
    maturityDate.setDate(maturityDate.getDate() + day);

    const maturityDateString = maturityDate.toISOString().substring(0, 10); // format: yyyy-mm-dd

    return maturityDateString; // outputs the maturity date in the specified format

  }
}
