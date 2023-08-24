import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  constructor(private _productService: ProductService) {}
  products: ProductModel[] = [];
  ngOnInit(): void {
    this._productService.currentProducts$.subscribe((res) => {
      this.products = res;
    });
  }
  incrementQuantity(product: ProductModel): void {
    this._productService.increaseQuantity(product);
  }

  decrementQuantity(product: ProductModel): void {
    this._productService.decreaseQuantity(product);
  }

  removeFromCart(product: ProductModel): void {
    this._productService.removeProduct(product);
  }

}
