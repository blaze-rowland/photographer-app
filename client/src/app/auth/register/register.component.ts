import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/shared/services/app-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  info;

  constructor(private appInfo: AppInfoService) {
    this.info = appInfo.appInfo;
  }

  ngOnInit() {
  }

  onRegister(e: any) {
    e.preventDefault();
  }
}
