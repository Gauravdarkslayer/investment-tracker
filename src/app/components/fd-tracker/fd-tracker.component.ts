import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { DataService } from 'src/app/services/data.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-fd-tracker',
  templateUrl: './fd-tracker.component.html',
  styleUrls: ['./fd-tracker.component.less']
})
export class FdTrackerComponent implements OnInit {
  categories: Array<Category> = [];
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

  async deleteCategory(event:any,id:string) {
    event.stopPropagation();
    if(confirm('Are you sure you want to delete this category ?')) {
      if(1 || await this.dataService.deleteCategory(id)) {
        this.categories = this.categories.filter(arr => arr._id !== id);
      }
      alert('you pressed yes, it will not delete category')
    } else {
      alert('operation cancelled');
    }
  }
}
