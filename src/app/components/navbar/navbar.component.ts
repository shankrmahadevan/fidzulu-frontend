import { Component, ElementRef, ViewChild } from '@angular/core';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

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

  changeCategory(category: string) {
    this.category = category
  }

  changeCountry(country: string) {
    this.country = country
  }



  changeFocus(state: boolean) {
    this.onFocus = state;
  }

}
