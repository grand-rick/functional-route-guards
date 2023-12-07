import { Component } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
