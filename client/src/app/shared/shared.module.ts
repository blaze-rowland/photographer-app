import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { AppNavComponent } from './app-nav/app-nav.component';

@NgModule({
  declarations: [
    CommonLayoutComponent,
    AppNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonLayoutComponent
  ]
})
export class SharedModule { }
