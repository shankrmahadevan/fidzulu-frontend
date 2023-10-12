import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent{
  @Input("product") product!: Product;
  cartItems = this.sessionService.itemsInCart;


  constructor(private sessionService: SessionService) {
    this.cartItems = this.sessionService.itemsInCart;
    const dateString = "2011-10-10";
    const dateObject = new Date(dateString);
  }

  removeItem(product: Product) {
    this.sessionService.removeFromCart(product);
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, product) =>
        total + product.price + product.price * product.tax_percentage,
      0
    );
  }



}




