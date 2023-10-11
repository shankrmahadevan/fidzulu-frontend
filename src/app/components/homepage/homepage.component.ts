import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  images=[
    {name:'ny.jpg',caption:'New York'},
    {name:'cal.jpg',caption:'California'}
  ];

  trendingProducts = [
      {
        price: '$699.99', name: 'Cannon EOS 90D',
        image: 'https://hnsgsfp.imgix.net/4/images/detailed/101/canon-eos-r50-aps-c-mirrorless-camera-with-rf-s-18-45mm-f-4.5-6.3-is-stm-lens-white_1.jpg?fit=fill&bg=0FFF&w=1534&h=900&auto=format,compress'
      },
      {
        price: '$1099.99', name: 'iPad Air',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-finish-select-gallery-202211-blue-wificell_AV1_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670633074188'
      },
      {
        price: '$99.99', name: 'iPhone 14 Pro',
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403'
      },
    ];

    categories = [
      {name:'Bikes',image:''},
      {name:'Books',image:''},
      {name:'DvDs',image:''},
      // {name:'Food',image:''},
      // {name:'Toys',image:''},
      // {name:'Laptops',image:''},
    ]
}
