import {Injectable} from '@angular/core';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private location: 'US-NC' | 'IRE' | 'IND' = 'US-NC';
  public itemsInCart: Product[] = []

  constructor() {
  }

  public getLocation() {
    return this.location
  }

  public setLocation(value: 'US-NC' | 'IRE' | 'IND') {
    this.location = value;
  }

  public addToCart(product: Product) {
    this.itemsInCart.push(product)
  }

  public removeFromCart(product: Product) {
    const index = this.itemsInCart.indexOf(product, 0);
    if (index > -1) {
      this.itemsInCart.splice(index, 1);
    }
  }
}
