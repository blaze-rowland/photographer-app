import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../services/app-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {
  appInfo;

  constructor(private appInfoService: AppInfoService, private router: Router) {
    this.appInfo = this.appInfoService.appInfo;
  }

  ngOnInit() {
  }

  onLogout() {
    this.router.navigate(['/auth/login']);
    console.log('logged out');
  }
}
