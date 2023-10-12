import {Component, Input} from '@angular/core';
import {Product} from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';
import {SessionService} from 'src/app/services/session.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  protected readonly arrayInit = Array;
  protected readonly math = Math;
  @Input() product!: Product;

  stars: string[] = [];

  effectivePrice!: number;

  constructor(
    private sessionService: SessionService,
    private productService: ProductService,
    private router:ActivatedRoute
  ) {}

  currency: string = '';
  category = ''

  ngOnInit() {
    this.currency = this.sessionService.getCurrencySymbol(this.sessionService.getLocation())
    this.router.params.subscribe(
      (params) => {
        this.category = params['category']
      }
    )
    this.loadImage();
    this.calculateStars();
    this.calculateEffectivePrice();
    this.sessionService.locationChange.subscribe(
      () => {
        this.currency = this.sessionService.getCurrencySymbol(this.sessionService.getLocation());
        this.loadImage();
        this.calculateStars();
        this.calculateEffectivePrice();
      })
  }

  loadImage() {
    this.productService.getImage(this.product.img_thumbnail).subscribe(
      (url: string) => {
        this.product.img_thumbnail = url;
      },
      (error: any) => {
        console.error('Error fetching image:', error);
      }
    );
  }

  calculateStars() {
    const rating = this.product.rating;
    // const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest half
    // const fullStars = Math.floor(roundedRating);
    // const hasHalfStar = roundedRating % 1 !== 0;
    // const emptyStars = hasHalfStar ? 5 - fullStars - 1 : 5 - fullStars;

    // this.stars = Array(fullStars).fill('fa fa-star'); // Full stars
    // if (hasHalfStar) {
    //   this.stars.push('fa fa-star-half'); // Half star
    // }
    // this.stars = this.stars.concat(Array(emptyStars).fill('fa fa-star-o')); // Empty stars
  }
  calculateEffectivePrice() {
    const price = this.get_mrp()
    // const taxPercentage = this.product.tax_percentage / 100;
    this.effectivePrice = this.get_final_price()
  }

  get_final_price() {
    return this.product.price + this.product.price * (this.product.tax_percentage / 100)
  }

  get_mrp() {
    return this.get_final_price() + this.get_final_price() * 0.1
  }

  get_you_save() {
    return (this.get_mrp() * 0.1).toFixed(2)
  }
}
