import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceCreateComponent } from './services/service-create/service-create.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ClientListComponent,
    ClientCreateComponent,
    ClientEditComponent,
    ServiceListComponent,
    ServiceCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
