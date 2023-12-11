import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WishService } from './wish.service';
import { WishComponent } from './wish.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule, WishComponent],
  exports: [WishComponent],
  providers: [WishService],
})
export class WishModule {}
