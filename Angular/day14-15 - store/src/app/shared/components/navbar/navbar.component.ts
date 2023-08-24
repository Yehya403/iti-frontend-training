import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

count!:number;

constructor(private _productService:ProductService){
  
  this._productService.currentCount$.subscribe({
    next: (count: number) => {
      this.count = count;
    },
    error: (error) => {
      console.log(error);
    },
  });
}


}
