import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {Observable, of} from "rxjs";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urls: { [key: string]: string } = {
    'bikes': 'http://localhost:8080/classA/bike/all/' + this.sessionService.getLocation(),
    'food': 'http://localhost:8080/classA/food/all/' + this.sessionService.getLocation(),
    'toys': 'http://localhost:8080/classA/toy/all/' + this.sessionService.getLocation(),
    'books': 'http://localhost:8080/classB/books/all/' + this.sessionService.getLocation(),
    'dvds': 'http://localhost:8080/classB/dvd/all/' + this.sessionService.getLocation(),
    'laptops': 'http://localhost:8080/classB/laptop/all/' + this.sessionService.getLocation(),
  }

  constructor(private sessionService: SessionService) {
  }

  getAllProducts(productType: string): Observable<Product[]> {
    let url = this.urls[productType.toLowerCase()]
    return of([{
      product_name: "iPhone 14 Pro Max",
      product_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
        "        Harum id officia reiciendis! Aut beatae ea illum ipsa magni maxime nisi officiis reiciendis\n" +
        "        sequi voluptatem! Aperiam eum illo illum incidunt tempore.A cum ex illum ipsa,\n" +
        "        molestiae odit officiis repellat ullam! Aliquid amet aspernatur eligendi enim illo inventore\n" +
        "        ipsa libero magnam maiores nam necessitatibus nisi, non omnis optio praesentium quae reprehenderit.",
      img_thumbnail: "https://sellup.com.sg:8443/SellupDS/Image/Device/1aca096f-fc58-4845-b56b-ce0f5cdc4106.jpg",
      product_id: 88888,
      brand: "Apple",
      price: 69990,
      tax_percentage: 0.01,
      rating: 4,
      metadata: "some,meta,data",
      timestamp: new Date(),
    }])
  }
}
