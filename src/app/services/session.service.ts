import {Injectable} from '@angular/core';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private location: 'US-NC' | 'IE' | 'IN' = 'US-NC';
  public itemsInCart: Product[] = []

  constructor() {
  }

  public getLocation() {
    return this.location
  }

  public setLocation(value: 'US-NC' | 'IE' | 'IN') {
    this.location = value;
  }

  public addToCart(product: Product) {
    this.itemsInCart.push(product)
  }

  public removeFromCart(product: Product) {
    // this.itemsInCart.remove(product);
  }
}
