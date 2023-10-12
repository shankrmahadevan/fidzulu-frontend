import { ChangeDetectorRef, Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductListService } from '../product-list.service';
import {ActivatedRoute} from "@angular/router";
import { Product } from 'src/app/models/product';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
})
export class ProductFiltersComponent{
  @Output('filter') applyFiltersEvent = new EventEmitter<any>();
  @Output() priceRangeChanged = new EventEmitter<number[]>();
  @Output() sortBy!: string;
  currentPrice: number = 0;
  brands: string[] = [];
  constructor(
    private productService: ProductService,
    public productListService: ProductListService,
    private route:ActivatedRoute
  ) {
  }

  starIcon = faStar

  ngOnInit(){
    this.productListService.products.subscribe((data) => {
      this.brands = []
      for (let product of data) {
        if (!this.brands.map(x => x.toLowerCase()).includes(product.brand.toLowerCase())) {
          this.brands.push(product.brand);
        }
      }
    })
  }
  updatePriceRange(event: any) {
    this.currentPrice = event.target.value;
    this.filters.price.max = this.currentPrice;
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
  }

  applyFilters() {
    this.applyFiltersEvent.emit(this.filters);
  }

  updateBrandFilter(brand: string): void {
    this.filters.brands = brand;
  }
  removeElementFromArray(elementToRemove: any, array: any[]) {
    let index = array.indexOf(elementToRemove);
    // Use the splice() method to remove the element
    return array.splice(index, 1);
  }

  filterStarRating = 0

  setStarRating(rating: number) {
    if(this.filterStarRating === rating) {
      this.filterStarRating = 0;
    } else {
      this.filterStarRating = rating
    }
  }
}
