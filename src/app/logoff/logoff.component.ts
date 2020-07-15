import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private router : Router,private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.removeToken();
    this.router.navigate(['/login']);
  }

}
