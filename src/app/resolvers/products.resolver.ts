import { ResolveFn } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { inject } from '@angular/core';
import { Product } from '../models/product.model';

export const productsResolver: ResolveFn<Product[]> = (route, state) => {
  const productsService = inject(ProductsService);
  return productsService.getProducts();
};
