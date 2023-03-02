import { Component } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'investment-tracker';
  isLoading=true;
  constructor(private dataService:DataService) {
    this.checkLogin()
  }

  async checkLogin() {
    // from(this.dataService.loginEmailPassword('gaurav@gmail.com', '1234412344')).subscribe
    if(await this.dataService.loginEmailPassword('gaurav@gmail.com', '1234412344')) {
      this.isLoading=false;
    }

  }
}
