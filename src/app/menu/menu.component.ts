import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user : string = null;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getEmail();
    console.log(this.user);
  }
}
