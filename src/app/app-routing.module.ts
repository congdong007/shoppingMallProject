import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'product-list',
    component:ProductListComponent
  },
  {
    path:'product-detail/:pid',
    component:ProductDetailComponent
  },
  {
    path:'user-login',
    component:UserLoginComponent
  },
  {
    path:'cart',
    component:CartComponent
  },  
  {
    path:'**',
    component:NotFoundComponent
  },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
