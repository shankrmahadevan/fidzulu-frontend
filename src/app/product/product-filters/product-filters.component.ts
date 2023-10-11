import { ChangeDetectorRef, Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
})
export class ProductFiltersComponent {
  @Output('filter') applyFiltersEvent = new EventEmitter<any>();
  @Output() priceRangeChanged = new EventEmitter<number[]>();
  @Output() sortBy!: string;
  currentPrice: number = 0;
  brands: string[] = [];
  constructor(
    private productService: ProductService,
    public productListService: ProductListService
  ) {
    productService.getAllProducts('toys').subscribe((products) => {
      for (let product of products) {
        console.log();
        if (!this.brands.includes(product.brand.toLowerCase())) {
          this.brands.push(product.brand);
        }
      }
    });
  }
  updatePriceRange(event: any) {
    this.currentPrice = event.target.value;
    this.filters.price.max = this.currentPrice;
    console.log(this.filters);
  }

  filters = {
    brands: '',
    price: { min: 0, max: Infinity },
    rating: 1,
    sortBy: 'latest',
  };

  ngOnChange() {
    this.applyFilters();
  }
  setRatingFilter(rating: number) {
    this.filters.rating = rating;
    console.log('Rating change', this.filters);
  }

  applyFilters() {
    this.applyFiltersEvent.emit(this.filters);
    console.log('emission took place !', this.filters);
  }

  updateBrandFilter(brand: string): void {
    this.filters.brands = brand;
  }
  removeElementFromArray(elementToRemove: any, array: any[]) {
    let index = array.indexOf(elementToRemove);
    // Use the splice() method to remove the element
    return array.splice(index, 1);
  }
}
