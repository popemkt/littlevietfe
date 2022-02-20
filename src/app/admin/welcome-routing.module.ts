import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-managment/product-detail/product-detail.component';
import { ProductManagementComponent } from './product-managment/product-management.component';
import { ProductTypeDetailComponent } from './product-type-managment/product-type-detail/product-type-detail.component';
import { ProductTypeManagementComponent } from './product-type-managment/product-type-management.component';
import { ReservationDetailComponent } from './reservation-management/reservation-detail/reservation-detail.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { TakeAwayManagementComponent } from './take-away-management/take-away-management.component';
import { PickUpOrderComponent } from './task-management/pick-up-order/pick-up-order.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'reservations',
        component: ReservationManagementComponent,
        data: {
          breadcrumb: 'Reservations'
        },
        children: [
          {
            path: ':id',
            component: ReservationDetailComponent,
            data: {
              breadcrumb: 'Detail'
            }
          }
        ]
      },
      {
        path: 'orders',
        component: TakeAwayManagementComponent,
        data: {
          breadcrumb: 'Take away'
        },
        // children: [
        //   {
        //     path: ':id',
        //     component: ReservationDetailComponent,
        //     data: {
        //       breadcrumb: 'Detail'
        //     }
        //   }
        // ]
      },
      {
        path: 'products',
        component: ProductManagementComponent,
        data: {
          breadcrumb: 'Products'
        },
        children: [
          {
            path: ':id',
            component: ProductDetailComponent,
            data: {
              breadcrumb: 'Detail'
            }
          }
        ]
      },
      {
        path: 'product-types',
        component: ProductTypeManagementComponent,
        data: {
          breadcrumb: 'Product types'
        },
        children: [
          {
            path: ':id',
            component: ProductTypeDetailComponent,
            data: {
              breadcrumb: 'Detail'
            }
          }
        ]
      },
      {
        path: 'tasks',
        component: TaskManagementComponent,
        data: {
          breadcrumb: 'Tasks'
        },
        children: [
          {
            path: 'pick-up-task',
            component: PickUpOrderComponent,
            data: {
              breadcrumb: 'Pick up'
            }
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
