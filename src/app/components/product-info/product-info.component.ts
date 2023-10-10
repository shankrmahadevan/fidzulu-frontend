import {Component, Input} from '@angular/core';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  @Input("product") product: Product = {
    product_name: "iPhone 14 Pro max",
    product_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "        Harum id officia reiciendis! Aut beatae ea illum ipsa magni maxime nisi officiis reiciendis\n" +
      "        sequi voluptatem! Aperiam eum illo illum incidunt tempore.A cum ex illum ipsa,\n" +
      "        molestiae odit officiis repellat ullam! Aliquid amet aspernatur eligendi enim illo inventore\n" +
      "        ipsa libero magnam maiores nam necessitatibus nisi, non omnis optio praesentium quae reprehenderit.",
    img_thumbnail: "https://sellup.com.sg:8443/SellupDS/Image/Device/1aca096f-fc58-4845-b56b-ce0f5cdc4106.jpg",
    product_id: 88888,
    brand: "Apple",
    price: 69990,
    tax_percentage: 0.01,
    rating: 4,
    metadata: "some,meta,data",
    timestamp: new Date(),
  }

  get_final_price() {
    return this.product.price + this.product.price * this.product.tax_percentage
  }

  get_mrp() {
    return this.get_final_price() + this.get_final_price() * 0.1
  }

  get_you_save(){
    return (this.get_mrp() * 0.1).toFixed(2)
  }
}
