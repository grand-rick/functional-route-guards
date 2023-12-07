import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import materialModules from '../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule, materialModules],
})
export class ProductsModule {}
