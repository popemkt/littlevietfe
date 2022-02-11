import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReservationDetailComponent } from './reservation-management/reservation-detail/reservation-detail.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { DateFormatPipe } from 'src/commons/pipes/date-format.pipe';
import { TakeAwayManagementComponent } from './take-away-management/take-away-management.component';
import { ProductManagementComponent } from './product-managment/product-management.component';
import { ProductDetailComponent } from './product-managment/product-detail/product-detail.component';
import { ProductTypeManagementComponent } from './product-type-managment/product-type-management.component';
import { ProductTypeDetailComponent } from './product-type-managment/product-type-detail/product-type-detail.component';



@NgModule({
  imports: [
    WelcomeRoutingModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    CommonModule,
    NzPaginationModule,
    NzDropDownModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzInputModule,
    NzTagModule,
    NzPopconfirmModule,
    NzMessageModule
  ],
  declarations: [
    WelcomeComponent,
    ReservationManagementComponent,
    ReservationDetailComponent,
    TakeAwayManagementComponent,
    ProductManagementComponent,
    ProductDetailComponent,
    ProductTypeManagementComponent,
    ProductTypeDetailComponent,
    DateFormatPipe
  ],
  providers: [
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
