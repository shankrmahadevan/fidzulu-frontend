import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product!: Product;

  stars: string[] = [];

  effectivePrice!: number;

  constructor(private productervice: ProductService) {}

  ngOnInit() {
    this.loadImage();
    this.calculateStars();
    this.calculateEffectivePrice();
  }

  loadImage() {
    this.productervice.getImage(this.product.img_thumbnail).subscribe(
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
    const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest half
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = hasHalfStar ? 5 - fullStars - 1 : 5 - fullStars;

    this.stars = Array(fullStars).fill('fa fa-star'); // Full stars
    if (hasHalfStar) {
        this.stars.push('fa fa-star-half'); // Half star
    }
    this.stars = this.stars.concat(Array(emptyStars).fill('fa fa-star-o')); // Empty stars
  }
  calculateEffectivePrice() {
    const price = this.product.price;
    const taxPercentage = this.product.tax_percentage / 100;
    this.effectivePrice = price + price * taxPercentage;
  }
}
