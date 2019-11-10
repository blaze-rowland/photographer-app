import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonLayoutComponent } from '../shared/common-layout/common-layout.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceCreateComponent } from './services/service-create/service-create.component';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'clients',
        component: ClientListComponent,
        data: {
          title: 'Client List'
        }
      },
      {
        path: 'clients/create',
        component: ClientCreateComponent,
        data: {
          title: 'Create Client'
        }
      },
      {
        path: 'clients/edit',
        component: ClientEditComponent,
        data: {
          title: 'Edit Client'
        }
      },
      {
        path: 'services',
        component: ServiceListComponent,
        data: {
          title: 'Service List'
        }
      },
      {
        path: 'services/create',
        component: ServiceCreateComponent,
        data: {
          title: 'Cerate Service'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
