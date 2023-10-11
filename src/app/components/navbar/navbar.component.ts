import { Component, ElementRef, ViewChild } from '@angular/core';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import {ProductService} from "../../services/product.service";

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
    faBars: faBars
  }

  onFocus = false

  country = "India"

  category = "Books"

  constructor(private productService:ProductService) {
  }

  changeCategory(category: string) {
    this.category = category
  }

  changeCountry(country: string) {
    this.country = country
  }

  changeFocus(state: boolean) {
    this.onFocus = state;
  }

  searchKeyword(){
    let keywords = this.searchInput.nativeElement.value.split(" ");
    for(let keyword in keywords){

    }
  }

}
