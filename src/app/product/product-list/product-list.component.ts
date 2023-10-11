import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductListService } from '../product-list.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() filters: any = {
    brands: [],
    price: { min: 0, max: 1000 },
    rating: 4.2,
    sortBy: 'latest',
  };
  filteredProducts!: Product[];

  pagedProducts: any[] = [];
  pageSize: number = 5;
  currentPage: number = 1;

  constructor(
    private productService: ProductService,
    private productListService: ProductListService,
    private sessionService:SessionService
  ) {
    sessionService.category = 'toys'
    productService.getAllProducts('toys').subscribe((data) => {
      console.log(data);
      this.products = data;
      this.filteredProducts = data;
      this.productListService.setPriceInterval(this.products);
      this.setPage(1);
    });
  }

  ngOnInit() {
    this.filteredProducts = this.products;
    this.setPage(1);
    //this.applyFilters(); (For test if it works)
  }

  // ngOnChanges() {
  //   this.applyFilters();
  // }

  applyFilters(filter: any) {
    this.filteredProducts = this.productService.filterProducts(
      this.products,
      filter
    );
    this.setPage(1);
  }

  // clearFilters() {
  //   this.filters = {
  //     brands: [],
  //     price: { min: 0, max: Infinity },
  //     rating: null,
  //     sortBy: 'latest',
  //   };
  //   this.filteredProducts = this.products;
  // }
  setPage(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(start, end);
  }

  setCurrentPage(page: number) {
    this.setPage(page);
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.filteredProducts.length / this.pageSize);
    return new Array(pageCount).fill(0).map((_, i) => i + 1);
  }
}
