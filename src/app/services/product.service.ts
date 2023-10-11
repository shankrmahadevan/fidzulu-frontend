import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, catchError, filter, map, of, throwError } from 'rxjs';
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
      'http://localhost:3034/books/all/' + this.sessionService.getLocation(),
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

    console.log(filteredProducts, 'dgajshdgajshdgjashdgjasdhgjashgjh');

    // Filter by brand
    if (filters.brands && filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.brands.includes(product.brand)
      );
      console.log('After brands Filter', filteredProducts);
    }

    // Filter by price range
    console.log('Filters price:', filters);
    if (filters.price != undefined) {
      console.log('Filters fjhsdkfjhskdfjhk');
      let priceFiltered = [];
      for (let product of filteredProducts) {
        console.log(
          'Product price: ',
          product.price,
          filters.price.min,
          filters.price.max
        );
        if (
          product.price >= filters.price.min &&
          product.price <= filters.price.max
        ) {
          //console.log("Product price: ",product.price, filters.price.min, filters.price.max);
          console.log('Inside the conditional of price filter');
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
    console.log(this.sortProducts(filteredProducts, filters.sortBy));
    return this.sortProducts(filteredProducts, filters.sortBy);
  }

  sortProducts(products: Product[], sortOrder: 'latest' | 'oldest'): Product[] {
    const sortedProducts = [...products]; // Create a copy to avoid modifying the original array
  
    sortedProducts.sort((a, b) => {
      const timestampA = Date.parse(`20${a.timestamp}`);
      const timestampB = Date.parse(`20${b.timestamp}`);
  
      if (sortOrder === 'latest') {
        return timestampB - timestampA; // Sort in descending order for latest
      } else if (sortOrder === 'oldest') {
        return timestampA - timestampB; // Sort in ascending order for oldest
      } else {
        return 0; // No sorting for other values of sortOrder
      }
    });
    return sortedProducts;
  }
}
