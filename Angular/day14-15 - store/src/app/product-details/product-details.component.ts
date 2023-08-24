import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: ProductModel ;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _http: HttpClient
  ) { }

  productId!: string;


  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.queryParams['id'];
  
    this._http
      .get<ProductModel>(`https://fakestoreapi.com/products/${this.productId}`)
      .subscribe({
        next: (res: ProductModel) => {
          console.log(res);
          this.product = res;
        },  
      });
  }
    
  onAddToCart() {
    this._productService.onCountIncrement();
  }
}