import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private location: 'US-NC' | 'IE' | 'IN' = "US-NC";
  public locationChange: Subject<number> = new Subject<number>();
  public category = ''
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
    this.locationChange.next(1)
  }

  public getCurrencySymbol(location: string): string {
    switch (location) {
      case 'US-NC':
        return '$'; // United States currency symbol
      case 'IE':
        return '€'; // Euro currency symbol
      case 'IN':
        return '₹'; // Indian Rupee currency symbol
      default:
        return ''; // Default currency symbol if location doesn't match
    }
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
