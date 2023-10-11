import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {Observable, of} from "rxjs";
import {SessionService} from "./session.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urls: { [key: string]: string } = {
    'bikes': 'http://localhost:8080/classA/bike/all/' + this.sessionService.getLocation(),
    'food': 'http://localhost:8080/classA/food/all/' + this.sessionService.getLocation(),
    'toys': 'http://localhost:3033/toys/all/' + this.sessionService.getLocation(),
    'books': 'http://localhost:8080/classB/books/all/' + this.sessionService.getLocation(),
    'dvds': 'http://localhost:8080/classB/dvd/all/' + this.sessionService.getLocation(),
    'laptops': 'http://localhost:8080/classB/laptop/all/' + this.sessionService.getLocation(),
  }

  cache: { [key: string]: Product[] } = {
    'bikes': [],
    'food': [],
    'toys': [],
    'books': [],
    'dvds': [],
    'laptops': []
  }

  constructor(private sessionService: SessionService, private httpClient: HttpClient) {
  }

  getAllProducts(productType: string): Observable<Product[]> {
    productType = productType.toLowerCase();
    let url = this.urls[productType]
    if(this.cache[productType].length == 0){
      return this.httpClient.get<Product[]>(url);
    } else{
      return of(this.cache[productType])
    }
  }
}
