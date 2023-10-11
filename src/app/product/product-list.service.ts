import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observer, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductListService {

  minPrice = Infinity;
  maxPrice = 0;
  products: Subject<Product[]> = new Subject<Product[]>();
  constructor() {
    this.products.subscribe(
      (productList) => {
        this.setPriceInterval(productList)
      }
    )
  }

  setPriceInterval(productList: Product[]) {
    this.minPrice = Infinity;
    this.maxPrice = 0;
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
