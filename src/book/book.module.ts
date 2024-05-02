import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';


@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    BookRoutingModule,
    ThemeSharedModule
  ]
})
export class BookModule { }
