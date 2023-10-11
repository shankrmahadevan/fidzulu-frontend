import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getImage(imageUrl: string): Observable<string> {
    return this.http.get(imageUrl, { responseType: 'blob' }).pipe(
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

    // Filter by brand
    if (filters.brands && filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        filters.brands.includes(product.brand)
      );
    }

    // Filter by price range
    if (filters.price) {
      filteredProducts = filteredProducts.filter(product =>
        product.price >= filters.price.min && product.price <= filters.price.max
      );
    }

    // Filter by rating
    if (filters.rating) {
      filteredProducts = filteredProducts.filter(product =>
        product.rating >= filters.rating
      );
    }

    return this.sortProducts(filteredProducts, filters.sortBy);
  }

  sortProducts(products: Product[], sortOrder: string): Product[] {
    if (sortOrder === 'latest') {
      return products.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    } else if (sortOrder === 'oldest') {
      return products.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    }
  
    return products;
  }
  
}

