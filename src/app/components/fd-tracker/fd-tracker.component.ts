import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category.interface';
import { DataService } from 'src/app/services/data.service';
import { ConfirmIcon } from '../shared/confirmation/confirm-icon.enum';
import { IConfirmationData } from '../shared/confirmation/confirmation-data.interface';
import { ConfirmationDialogComponent } from '../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-fd-tracker',
  templateUrl: './fd-tracker.component.html',
  styleUrls: ['./fd-tracker.component.less']
})
export class FdTrackerComponent implements OnInit {
  categories: Array<Category> = [];
  isInProgress: boolean = true;
  constructor(private dataService: DataService, private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllCategories();
  }

  async getAllCategories() {
    this.categories = await this.dataService.getAllCategoriesGroupedWithInvestments();
    this.isInProgress = false;
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  async deleteCategory(event: any, id: string) {
    event.stopPropagation();
    this.confirmDialog().subscribe(async (res: boolean) => {
      console.log(res);
      if (res) {
        if (await this.dataService.deleteCategory(id)) { // It will delete the category
          this.categories = this.categories.filter(arr => arr._id !== id);
        }
      }
    })

  }

  confirmDialog(): Observable<boolean> {
    return this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirm Action', message: `This will also delete all the investments inside this components. Continue ?`,
        icon: ConfirmIcon.Error
      },
    }).afterClosed()
      .pipe(filter((confirm: boolean) => confirm));

  }

}
