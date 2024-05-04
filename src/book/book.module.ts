import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../app/shared/shared.module';
@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    BookRoutingModule,
    ThemeSharedModule,
    SharedModule,
    NgbDatepickerModule
  ]
})
export class BookModule { }
