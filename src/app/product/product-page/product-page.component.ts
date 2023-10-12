import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  filter!: any;

  @ViewChild('productList') childComponent: any;

  applyFilters(filter: any) {
    this.filter = filter;
    this.childComponent.applyFilters(filter);
  }
}
