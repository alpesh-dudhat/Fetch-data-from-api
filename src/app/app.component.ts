import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'is simple, go step by step';

  userlist: any = []; // Using subscribe method

  getdata$: Observable<any>; // Using observable method

  constructor(private userdata: UserdataService) {
    // Subscribe
    this.userdata.getUser().subscribe((userinfo) => {
      console.log(userinfo);
      this.userlist = userinfo;
    });

    //  Observables
    this.getdata$ = this.userdata.getUser();
  }
}
