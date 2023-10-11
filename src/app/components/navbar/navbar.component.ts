import { Component, ElementRef, ViewChild } from '@angular/core';
import { faMagnifyingGlass, faBars, faChevronRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
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

  changeCategory(category: string) {
    this.category = category
  }

  changeCountry(country: string) {
    this.country = country
  }



  changeFocus(state: boolean) {
    this.onFocus = state;
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
