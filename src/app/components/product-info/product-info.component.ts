import {Component, Input, OnInit} from '@angular/core';
import {Product} from 'src/app/models/product';
import {ProductService} from "../../services/product.service";
import {SessionService} from 'src/app/services/session.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  @Input("product") product!: Product;
  reviews = [
    {
      date: '2 days ago',
      stars: 4.5,
      name: 'Shankar',
      description: 'This product exceeded my expectations! It is of excellent quality, and I absolutely love it. I highly recommend it to everyone.'
    },
    {
      date: '3 days ago',
      stars: 2.0,
      name: 'Dhanush',
      description: 'The quality of this product is good, but there is still room for improvement. I have been using it for a while, and it does its job decently.'
    },
    {
      date: '4 days ago',
      stars: 5.0,
      name: 'Lalith',
      description: 'I can confidently say that this product is perfect in every aspect. From the build quality to the performance, it excels in every way.'
    },
    // {
    //   date: '4 days ago',
    //   stars: 5.0,
    //   name: 'Lalith',
    //   description: 'I can confidently say that this product is perfect in every aspect. From the build quality to the performance, it excels in every way.'
    // },
  ];
  similarProducts = [
    {
      price: '699.99', name: 'Cannon EOS 90D',
      image: 'https://hnsgsfp.imgix.net/4/images/detailed/101/canon-eos-r50-aps-c-mirrorless-camera-with-rf-s-18-45mm-f-4.5-6.3-is-stm-lens-white_1.jpg?fit=fill&bg=0FFF&w=1534&h=900&auto=format,compress'
    },
    {
      price: '1099.99', name: 'iPad Air',
      image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-finish-select-gallery-202211-blue-wificell_AV1_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670633074188'
    },
    {
      price: '99.99', name: 'iPhone 14 Pro',
      image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403'
    },
  ];

  currency = '$';

  constructor(private productService: ProductService, public sessionService:SessionService, private routerMap:ActivatedRoute) {
  }

  getStarArray(stars: number): number[] {
    return new Array(Math.floor(stars));
  }

  ngOnInit() {
    this.sessionService.locationChange.subscribe(
      () => {
        this.currency = this.sessionService.getCurrencySymbol(this.sessionService.getLocation())
        let category = this.routerMap.snapshot.paramMap.get('category')
        this.productService.getAllProducts(category || "books").subscribe(
          (products) => {
            this.productService.cache[category + this.sessionService.getLocation()] = products;
            for(let product of products){
              if(product.product_id == parseInt(this.routerMap.snapshot.paramMap.get('id') || "0")){
                product.price = parseFloat(product.price.toString())
                this.product = product
                break;
              }
            }
          }
        )
      }
    )
    let category = this.routerMap.snapshot.paramMap.get('category')
    this.productService.getAllProducts(category || "books").subscribe(
      (products) => {
        this.productService.cache[category + this.sessionService.getLocation()] = products;
        for(let product of products){
          if(product.product_id == parseInt(this.routerMap.snapshot.paramMap.get('id') || "0")){
            product.price = parseFloat(product.price.toString())
              this.product = product
              break;
          }
        }
      }
    )
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

  protected readonly arrayInit = Array;
  protected readonly math = Math;

  protected readonly alert = alert;
}
