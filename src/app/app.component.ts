import { Component, VERSION } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'is simple, go step by step';
  userlist: any = [];
  constructor(private userdata: UserdataService) {
    this.userdata.getUser().subscribe((userinfo) => {
      console.log(userinfo);
      this.userlist = userinfo;
    });
  }
}
