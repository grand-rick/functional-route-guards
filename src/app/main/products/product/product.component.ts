import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  id: string | null = '';
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
    });

    if (this.id) {
      this.productsService.getProductById(this.id).subscribe((product) => {
        this.product = product;
      });
    }
  }
}
