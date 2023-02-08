import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fd-tracker',
  templateUrl: './fd-tracker.component.html',
  styleUrls: ['./fd-tracker.component.less']
})
export class FdTrackerComponent implements OnInit{
  investments:Array<any>=[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllInvestments()
  }

  async getAllInvestments() {
    this.investments = await this.dataService.getAllCategoriesGroupedWithInvestments();
    console.log(this.investments);
  }
}
