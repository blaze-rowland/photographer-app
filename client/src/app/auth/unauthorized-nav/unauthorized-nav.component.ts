import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/shared/services/app-info.service';

@Component({
  selector: 'app-unauthorized-nav',
  templateUrl: './unauthorized-nav.component.html',
  styleUrls: ['./unauthorized-nav.component.scss']
})
export class UnauthorizedNavComponent implements OnInit {
  appInfo: any;

  constructor(private _appInfoService: AppInfoService) {
    this.appInfo = this._appInfoService.appInfo;
  }

  ngOnInit() {
  }

}
