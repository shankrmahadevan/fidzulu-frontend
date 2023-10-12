import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private location: 'US-NC' | 'IRE' | 'IND' = 'US-NC';
  private cartKey = 'shoppingCart'; 
  public itemsInCart: Product[] = [];

  constructor() {
    const cartData = sessionStorage.getItem(this.cartKey);
    if (cartData) {
      this.itemsInCart = JSON.parse(cartData);
    }
  }

  public getLocation() {
    return this.location;
  }

  public setLocation(value: 'US-NC' | 'IRE' | 'IND') {
    this.location = value;
  }

  public addToCart(product: Product) {
    this.itemsInCart.push(product);
    sessionStorage.setItem(this.cartKey, JSON.stringify(this.itemsInCart));
  }

  public removeFromCart(product: Product) {
    const index = this.itemsInCart.indexOf(product, 0);
    if (index > -1) {
      this.itemsInCart.splice(index, 1);
      sessionStorage.setItem(this.cartKey, JSON.stringify(this.itemsInCart));
    }
  }

  public isItemInCart(product: Product): boolean {
    return this.itemsInCart.some((item) => item.product_id === product.product_id);
  }
}
