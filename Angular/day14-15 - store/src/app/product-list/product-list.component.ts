import { Component } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

products!: ProductModel[];

constructor(private _http:HttpClient){}

ngOnInit():void{
   this._http.get('https://fakestoreapi.com/products').subscribe({
      next:(res:any) =>{
         this.products=res;
      },
      error: (err: any) => {
         console.log(err);
      }
   })
}
}
