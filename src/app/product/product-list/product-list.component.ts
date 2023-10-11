import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductListService } from '../product-list.service';
import { SessionService } from 'src/app/services/session.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  category = ''
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
    private route:ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get("category") || "";
    let keyWords = this.route.snapshot.queryParamMap.get("q");
    this.productService.getAllProducts(this.category).subscribe((data) => {
      this.products = data;
      this.productListService.products.next(data)
      this.filteredProducts = data;
      this.productListService.setPriceInterval(this.products);
      this.setPage(1);
    });

    if(keyWords){
      let keywords = keyWords.toLowerCase().split(" ");
      let filteredProducts: Product[] = []
      for (let product of this.products) {
        for (let keyword of keywords) {
          if (product.product_name.toLowerCase().includes(keyword) || product.metadata.toLowerCase().includes(keyword) || product.product_description.toLowerCase().includes(keyword)) {
            if (!filteredProducts.includes(product)) {
              filteredProducts.push(product)
            }
          }
        }
      }
      this.products = filteredProducts;
      this.productListService.products.next(filteredProducts)
      this.filteredProducts = filteredProducts;
      this.setPage(1);
    }
  }
  applyFilters(filter: any) {
    this.filteredProducts = this.productService.filterProducts(
      this.products,
      filter
    );
    this.setPage(1);
  }

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
