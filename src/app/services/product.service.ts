import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { SessionService } from './session.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  urls: { [key: string]: string } = {
    bikes:
      'http://localhost:8080/classA/bike/all/' +
      this.sessionService.getLocation(),
    food:
      'http://localhost:8080/classA/food/all/' +
      this.sessionService.getLocation(),
    toys: 'http://localhost:3033/toys/all/' + this.sessionService.getLocation(),
    books:
      'http://localhost:8080/classB/books/all/' +
      this.sessionService.getLocation(),
    dvds:
      'http://localhost:8080/classB/dvd/all/' +
      this.sessionService.getLocation(),
    laptops:
      'http://localhost:8080/classB/laptop/all/' +
      this.sessionService.getLocation(),
  };

  cache: { [key: string]: Product[] } = {
    bikes: [],
    food: [],
    toys: [],
    books: [],
    dvds: [],
    laptops: [],
  };
  category: any;

  constructor(
    private sessionService: SessionService,
    private httpClient: HttpClient
  ) {}

  getAllProducts(productType: string): Observable<Product[]> {
    productType = productType.toLowerCase();
    let url = this.urls[productType];
    if (this.cache[productType].length == 0) {
      return this.httpClient.get<Product[]>(url);
    } else {
      return of(this.cache[productType]);
    }
  }

  getImage(imageUrl: string): Observable<string> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' }).pipe(
      map((data: Blob) => {
        const blob = new Blob([data], { type: 'image/jpeg' }); // Change the type if necessary
        return window.URL.createObjectURL(blob);
      }),
      catchError((error) => {
        console.error('Error fetching image:', error);
        return throwError('Failed to fetch the image');
      })
    );
  }

  filterProducts(products: Product[], filters: any): Product[] {
    let filteredProducts = [...products];
    console.log(filteredProducts);

    // Filter by brand
    if (filters.brands && filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.brands.includes(product.brand)
      );
      console.log('After brands Filter', filteredProducts);
    }

    // Filter by price range
    if (filters.price) {
      let priceFiltered = [];
      for (let product of filteredProducts) {
        if (
          product.price >= filters.price.min &&
          product.price <= filters.price.max
        ) {
          priceFiltered.push(product);
        }
      }
      filteredProducts = [...priceFiltered];
      console.log('After price Filter', filteredProducts);
    }

    // Filter by rating
    if (filters.rating) {
      let ratingFiltered = [];
      for (let product of filteredProducts) {
        if (product.rating >= filters.rating) {
          ratingFiltered.push(product);
        }
      }
      filteredProducts = [...ratingFiltered];
      console.log('After rating Filter', filteredProducts);
    }

    // return this.sortProducts(filteredProducts, filters.sortBy);
    return filteredProducts;
  }

  sortProducts(products: Product[], sortOrder: string): Product[] {
    if (sortOrder === 'latest') {
      return products.sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
      );
    } else if (sortOrder === 'oldest') {
      return products.sort(
        (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
      );
    }
    console.log();

    return products;
  }
}
