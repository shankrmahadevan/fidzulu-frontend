import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor() {}
  minPrice = Infinity;
  maxPrice = 0;
  setPriceInterval(productList: Product[]) {
    for (let product of productList) {
      if (this.minPrice > product.price) {
        this.minPrice = product.price;
      }
      if (this.maxPrice < product.price) {
        this.maxPrice = product.price;
      }
    }
  }
}
