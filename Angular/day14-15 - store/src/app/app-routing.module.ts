import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch:'full',
  },
  {
    path:'product',
    component: ProductListComponent,
  },
  {
    path:'product/details',
    component: ProductDetailsComponent,
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
    {
    path:'cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
