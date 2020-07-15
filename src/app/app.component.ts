import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appAula3';

  menu: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        if (auth.isLogg() === true) {
          this.menu = true;
        } else {
          this.menu = false;
        }
      }
    })
  }
}
