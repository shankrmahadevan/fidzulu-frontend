import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ProductInfoComponent} from "./components/product-info/product-info.component";
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProductPageComponent } from './product/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'products', component: ProductPageComponent },
  { path: 'product/:id', component: ProductInfoComponent },
  { path: 'Cart', component: ShoppingCartComponent },
  { path: 'About', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
