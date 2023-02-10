import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fd-tracker',
  templateUrl: './fd-tracker.component.html',
  styleUrls: ['./fd-tracker.component.less']
})
export class FdTrackerComponent implements OnInit {
  categories: Array<any> = [];
  isInProgress: boolean = true;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getAllCategories();
  }

  async getAllCategories() {
    this.isInProgress = true;
    this.categories = await this.dataService.getAllCategoriesGroupedWithInvestments();
    console.log(this.categories);
    this.isInProgress = false;
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
