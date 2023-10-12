import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private location: 'US-NC' | 'IE' | 'IN' = 'US-NC';
  public category = 'toys'
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

  public setLocation(value: 'US-NC' | 'IE' | 'IN') {
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
}
