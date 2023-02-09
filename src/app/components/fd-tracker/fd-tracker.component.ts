import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fd-tracker',
  templateUrl: './fd-tracker.component.html',
  styleUrls: ['./fd-tracker.component.less']
})
export class FdTrackerComponent implements OnInit{
  categories:Array<any>=[];
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getAllCategories();
  }

  async getAllCategories() {
    this.categories = await this.dataService.getAllCategoriesGroupedWithInvestments();
    console.log(this.categories);
  }

  navigateTo(url:string) {
    this.router.navigateByUrl(url);
  }
}
