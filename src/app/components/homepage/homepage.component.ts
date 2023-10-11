import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  images=[
    {name:'laptop.jpg',caption:'Laptops'},
    {name:'book.jpg',caption:'Books'},
    {name:'bike.jpg',caption:'Bikes'},
    {name:'food.jpg',caption:'Food'},
    {name:'dvd.jpg',caption:'DVD'},
    {name:'toy.jpg',caption:'Toys'},
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
      {name:'Bikes',image:'https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-storefront/default/dw76e1fdf0/category-landing/mountain/full-suspension-bikes.jpg?sw=632&sh=356&sm=cut&sfrm=jpg&q=80'},
      {name:'Books & Toys',image:'https://www.sassymamasg.com/wp-content/uploads/2022/08/great-singapore-deals-toys-r-us.jpg'},
      {name:'Electronics',image:'https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg'},
      {name:'Food',image:'https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg'},
      // {name:'Toys',image:''},
      // {name:'Laptops',image:''},
    ]
}
