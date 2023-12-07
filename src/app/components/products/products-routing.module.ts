import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';
import { productGuard } from './guards/product.guard';
import { productsResolver } from '../../resolvers/products.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivateChild: [productGuard],
    children: [
      {
        path: 'all',
        component: ProductsListComponent,
        resolve: {
          products: productsResolver,
        },
      },
      {
        path: 'add',
        component: AddProductComponent,
      },
      { path: ':id', component: ProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
