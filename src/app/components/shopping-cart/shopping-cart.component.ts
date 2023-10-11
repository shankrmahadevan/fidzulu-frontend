import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent{
  @Input("product") product!: Product;
  cartItems = this.sessionService.itemsInCart;
  

  constructor(private sessionService: SessionService) {
    this.cartItems = this.sessionService.itemsInCart;
    const dateString = "2011-10-10"; 
    const dateObject = new Date(dateString);
    const itemOne = {
      product_id: 1, brand: 'Cannon', tax_percentage: 0, rating: 4.5, product_description: 'The only camera you need to capture all of life\'s vibrant shades', 
      price: 699.99, product_name: 'Cannon EOS 90D',
      img_thumbnail: 'https://hnsgsfp.imgix.net/4/images/detailed/101/canon-eos-r50-aps-c-mirrorless-camera-with-rf-s-18-45mm-f-4.5-6.3-is-stm-lens-white_1.jpg?fit=fill&bg=0FFF&w=1534&h=900&auto=format,compress',
      metadata: 'camOne', timestamp: dateObject
    }
    this.sessionService.addToCart(itemOne);
  }

  removeItem(product: Product) {
    this.sessionService.removeFromCart(product);
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, product) =>
        total + product.price + product.price * product.tax_percentage,
      0
    );
  }



}




