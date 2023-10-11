import {Component, ElementRef, ViewChild} from '@angular/core';
import {faMagnifyingGlass, faBars, faChevronRight, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('searchInput')
  searchInput!: ElementRef;

  icons = {
    faMagnifyingGlass: faMagnifyingGlass,
    faBars: faBars,
    arrow: faChevronRight,
    location: faLocationDot
  }

  onFocus = false

  country = "India"

  category = "Books"

  currentProducts: Product[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAllProducts(this.category).subscribe(
      (products) => {
        this.currentProducts = products
      }
    )
  }

  changeCategory(category: string) {
    this.category = category
    this.productService.getAllProducts(this.getCategory()).subscribe(
      (products) => {
        this.currentProducts = products
        if(this.productService.cache[this.getCategory()].length == 0){
          this.productService.cache[this.getCategory()] = products;
        }
      }
    )
  }

  changeCountry(country: string) {
    this.country = country
  }

  changeFocus(state: boolean) {
    this.onFocus = state;
  }

  searchKeyword(): Product[] {
    let keywords = this.searchInput.nativeElement.value.toLowerCase().split(" ");
    let filteredProducts: Product[] = []
    let products = this.productService.getAllProducts(this.category);
    for (let product of this.currentProducts) {
      for (let keyword of keywords) {
        if (product.metadata.toLowerCase().includes(keyword) || product.product_description.toLowerCase().includes(keyword)) {
          console.log(product.metadata)
          if (!filteredProducts.includes(product)) {
            filteredProducts.push(product)
          }
        }
      }
    }
    return filteredProducts;
  }

  getCategory(){
    return this.category.toLowerCase()
  }

  closeResult = '';

	constructor(private modalService: NgbModal) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			}
		);
	}


}
