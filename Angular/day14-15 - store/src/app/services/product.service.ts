import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

count : number = 0;
countSource$ = new BehaviorSubject(this.count);
currentCount$ = this.countSource$.asObservable();


onCountIncrement(){
   this.countSource$.next(++this.count);
}

product: ProductModel[] = [];
productSource$ = new BehaviorSubject(this.product);
currentProducts$ = this.productSource$.asObservable();


onItemAdded(item: ProductModel) {
  const index = this.product.findIndex((prod) => prod.id === item.id);

  if (index === -1) {
   item.quantity = 1;
   this.product.push(item);
 } else {
   ++this.product[index].quantity;
 }
 this.productSource$.next(this.product);
}
removeProduct(product: ProductModel) {
  const index = this.product.findIndex(prod => prod.id === product.id);
  if (index !== -1) {
    this.product.splice(index, 1);
    this.productSource$.next(this.product);
  }
}

decreaseQuantity(product: ProductModel) {
  const index = this.product.findIndex(prod => prod.id === product.id);
  if (index !== -1 && this.product[index].quantity > 1) {
    this.product[index].quantity--;
    this.productSource$.next(this.product);
  } else{
    this.removeProduct(product);
  }
}

increaseQuantity(product: ProductModel) {
  const index = this.product.findIndex(prod => prod.id === product.id);
  if (index !== -1) {
    this.product[index].quantity++;
    this.productSource$.next(this.product);
  }
}

}
