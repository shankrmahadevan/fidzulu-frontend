import {Component, Input} from '@angular/core';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
reviews = [
    {date:'2 days ago', stars: 4.5, name: 'Shankar', description: 'This product exceeded my expectations! It is of excellent quality, and I absolutely love it. I highly recommend it to everyone.' },
    {date:'3 days ago', stars: 2.0, name: 'Dhanush', description: 'The quality of this product is good, but there is still room for improvement. I have been using it for a while, and it does its job decently.' },
    {date:'4 days ago', stars: 5.0, name: 'Lalith', description: 'I can confidently say that this product is perfect in every aspect. From the build quality to the performance, it excels in every way.' },
  {
    date: '4 days ago',
    stars: 5.0,
    name: 'Lalith',
    description: 'I can confidently say that this product is perfect in every aspect. From the build quality to the performance, it excels in every way.'
  },
  ];

  products = [
    {price:'$699.99', name:'Cannon EOS 90D',
    image: 'https://hnsgsfp.imgix.net/4/images/detailed/101/canon-eos-r50-aps-c-mirrorless-camera-with-rf-s-18-45mm-f-4.5-6.3-is-stm-lens-white_1.jpg?fit=fill&bg=0FFF&w=1534&h=900&auto=format,compress'
    },
    {price:'$1099.99', name:'iPad Air',
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-finish-select-gallery-202211-blue-wificell_AV1_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670633074188'},
    {price:'$99.99', name:'iPhone 14 Pro',
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403'
    },
   ];

  getStarArray(stars: number): number[] {
    return new Array(Math.floor(stars));
  }

  similarProducts = [
    {
      name: 'iPhone 13 Pro',
      image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403'
    },
    {
      name: 'iPad 10th generation',
      image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-10th-gen-finish-select-202212-pink-wifi?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1670856076309'
    },
    {
      name: 'MacBook Air',
      image: ''
    },
  ];

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
