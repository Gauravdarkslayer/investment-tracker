import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.less']
})
export class InvestmentListComponent implements OnInit{
  investments:Array<any>=[];
  isInProgress: boolean = true;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.getInvestments(this.route.snapshot.params['id']);
    
  }

  async getInvestments(category_id:string) {
    this.isInProgress = true;
    this.investments = await this.dataService.getInvestmentsByCategoryId(category_id);
    console.log(this.investments);
    this.isInProgress = false;
    
  }

  backButtonClick(event:any) {
    this.router.navigate(['..']);
  }
}
