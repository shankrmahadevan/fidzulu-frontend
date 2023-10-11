import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products:Product[] = 

  [
  
    {
  
      product_name: "Safari Animal Figures",
  
      product_description: "A collection of safari animal figures for pretend play and learning about wildlife.",
  
      img_thumbnail: "https://example.com/safari_animal_figures.jpg",
  
      product_id: 130,
  
      brand: "WildLifeAdventures",
  
      price: 999.99,
  
      tax_percentage: 8.5,
  
      rating: 2.8,
  
      metadata: "safari animal figures, pretend play, learning, wildlife",
  
      timestamp: new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Fishing Adventure Game",
  
      "product_description": "An interactive fishing game for kids to experience the excitement of fishing.",
  
      "img_thumbnail": "https://example.com/fishing_adventure_game.jpg",
  
      "product_id": 131,
  
      "brand": "FishyFun",
  
      "price": 799.99,
  
      "tax_percentage": 6.5,
  
      "rating": 4.4,
  
      "metadata": "fishing adventure game, interactive, excitement, fishing",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Mini Basketball Hoop Set",
  
      "product_description": "A mini basketball hoop set for indoor slam dunks and basketball fun.",
  
      "img_thumbnail": "https://example.com/basketball_hoop_set.jpg",
  
      "product_id": 132,
  
      "brand": "HoopsMania",
  
      "price": 599.99,
  
      "tax_percentage": 7.0,
  
      "rating": 4.6,
  
      "metadata": "mini basketball hoop set, indoor slam dunks, basketball fun",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Gardening Kit for Kids",
  
      "product_description": "A gardening kit with child-friendly tools for little green thumbs.",
  
      "img_thumbnail": "https://example.com/gardening_kit.jpg",
  
      "product_id": 133,
  
      "brand": "GreenThumbKids",
  
      "price": 1299.99,
  
      "tax_percentage": 6.0,
  
      "rating": 3.8,
  
      "metadata": "gardening kit, child-friendly tools, little green thumbs",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Ice Cream Shop Playset",
  
      "product_description": "A pretend play ice cream shop set with scoops, cones, and toppings.",
  
      "img_thumbnail": "https://upload.wikimedia.org/wikipedia/commons/2/25/Robert_Patrick.jpg",
  
      "product_id": 134,
  
      "brand": "SweetTreats",
  
      "price": 899.99,
  
      "tax_percentage": 7.5,
  
      "rating": 4.2,
  
      "metadata": "ice cream shop playset, pretend play, scoops, cones, toppings",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Pirate Ship Play Tent",
  
      "product_description": "A pirate ship-themed play tent for swashbuckling adventures.",
  
      "img_thumbnail": "https://example.com/pirate_ship_play_tent.jpg",
  
      "product_id": 135,
  
      "brand": "PirateAdventures",
  
      "price": 1799.99,
  
      "tax_percentage": 8.2,
  
      "rating": 4.7,
  
      "metadata": "pirate ship play tent, pirate adventures, swashbuckling",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Wooden Puzzle Set",
  
      "product_description": "A set of wooden puzzles for brain-teasing fun and cognitive development.",
  
      "img_thumbnail": "https://example.com/wooden_puzzle_set.jpg",
  
      "product_id": 136,
  
      "brand": "WoodenWonders",
  
      "price": 999.99,
  
      "tax_percentage": 6.2,
  
      "rating": 4.9,
  
      "metadata": "wooden puzzle set, brain-teasing fun, cognitive development",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Science Lab Playset",
  
      "product_description": "A science lab playset for young scientists to conduct imaginative experiments.",
  
      "img_thumbnail": "https://example.com/science_lab_playset.jpg",
  
      "product_id": 137,
  
      "brand": "LabGenius",
  
      "price": 1499.99,
  
      "tax_percentage": 6.5,
  
      "rating": 4.4,
  
      "metadata": "science lab playset, young scientists, imaginative experiments",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Tropical Bird Stuffed Animals",
  
      "product_description": "A collection of colorful tropical bird stuffed animals for cuddly companionship.",
  
      "img_thumbnail": "https://example.com/tropical_bird_stuffed_animals.jpg",
  
      "product_id": 138,
  
      "brand": "TropicalFriends",
  
      "price": 699.99,
  
      "tax_percentage": 7.0,
  
      "rating": 4.6,
  
      "metadata": "tropical bird stuffed animals, colorful, cuddly companionship",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Solar System Planetarium",
  
      "product_description": "An educational planetarium model for learning about the solar system.",
  
      "img_thumbnail": "https://example.com/solar_system_planetarium.jpg",
  
      "product_id": 139,
  
      "brand": "SpaceWonders",
  
      "price": 1999.99,
  
      "tax_percentage": 8.0,
  
      "rating": 4.8,
  
      "metadata": "solar system planetarium, educational, learning, solar system",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "product_name": "Police Car Toy Set",
  
      "product_description": "A set of police car toys for exciting police chase and rescue missions.",
  
      "img_thumbnail": "https://example.com/police_car_toy_set.jpg",
  
      "product_id": 140,
  
      "brand": "PoliceHeroes",
  
      "price": 1299.99,
  
      "tax_percentage": 6.5,
  
      "rating": 4.2,
  
      "metadata": "police car toy set, police chase, rescue missions",
  
      "timestamp": new Date("10-10-2023")
  
    }
  
  ];
  @Input() filters: any= {
    brands: [],
      price: { min: 0, max: 1000 },
      rating: 4.2,
      sortBy: 'latest'

  };
  filteredProducts!: Product[];

  pagedProducts: any[] = [];
  pageSize: number = 5;
  currentPage: number = 1;


  constructor(private productService: ProductService){}

  ngOnInit(){
    this.filteredProducts = this.products;
    this.setPage(1);
    //this.applyFilters(); (For test if it works)
  }


  applyFilters() {
    this.filteredProducts = this.productService.filterProducts(this.products, this.filters);
  }

  clearFilters() {
    this.filters = {
      brands: [],
      price: { min: 0, max: Infinity },
      rating: null,
      sortBy: 'latest'
    };
    this.filteredProducts = this.products;
  }
  setPage(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(start, end);
  }

  setCurrentPage(page: number) {
    this.setPage(page);
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.filteredProducts.length / this.pageSize);
    return new Array(pageCount).fill(0).map((_, i) => i + 1);
  }
}
