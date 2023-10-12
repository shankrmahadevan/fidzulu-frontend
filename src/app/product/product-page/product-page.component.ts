import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  filter!: any;

  @ViewChild('productList') childComponent: any;

  applyFilters(filter: any) {
    console.log("1")
    this.filter = filter;
    this.childComponent.applyFilters(filter);
  }
}
