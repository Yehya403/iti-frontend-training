import { Component, Input } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() productItem!: ProductModel;
  
  constructor(private _productService:ProductService){}

  onAddToCart(item: ProductModel) {
    this._productService.onCountIncrement();
    this._productService.onItemAdded(item);
  }
 
}
