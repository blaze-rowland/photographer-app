import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {
  appInfo = {
    title: 'Photographer',
    description: 'An app for photographers built by photographers',
    author: 'Blaze Rowland',
    authorContact: 'mail.browland@gmail.com',
    authorWebsite: 'http://www.blazerow.com',
    version: '1.0.0',
  };

  constructor() { }
}
