import {Component, ElementRef, ViewChild} from '@angular/core';
import {faMagnifyingGlass, faBars, faChevronRight, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";

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

  category = sessionStorage['category'] || "Bikes"

  constructor(private router: Router, private modalService: NgbModal, private productService: ProductService) {
  }

  ngOnInit() {
  }

  changeCategory(category: string) {
    this.category = category
    sessionStorage['category'] = category
  }

  changeCountry(country: string) {
    this.country = country
  }

  changeFocus(state: boolean) {
    this.onFocus = state;
  }

  searchKeyword() {
    this.router.navigate(["products" , this.category , "search"], {
      queryParams: {
        'q': this.searchInput.nativeElement.value
      }
    })
  }

  getCategory() {
    return this.category.toLowerCase()
  }

  closeResult = '';


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      }
    );
  }


  protected readonly onkeyup = onkeyup;
}
