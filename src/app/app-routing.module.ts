import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ProductInfoComponent} from "./components/product-info/product-info.component";
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProductPageComponent } from './product/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'products/:category', component: ProductPageComponent },
  { path: 'products/:category/search', component: ProductPageComponent },
  { path: 'product/:category/:id', component: ProductInfoComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'about', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
