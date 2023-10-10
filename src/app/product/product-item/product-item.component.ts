import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  rating: number = 4.5; 
  @Input("products") products:Product[] = 

  [
  
    {
  
      "productName": "Safari Animal Figures",
  
      "productDescription": "A collection of safari animal figures for pretend play and learning about wildlife.",
  
      "imgThumbnail": "https://example.com/safari_animal_figures.jpg",
  
      "productId": 130,
  
      "brand": "WildLifeAdventures",
  
      "price": 999.99,
  
      "taxPercentage": 8.5,
  
      "rating": 4.3,
  
      "metadata": "safari animal figures, pretend play, learning, wildlife",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Fishing Adventure Game",
  
      "productDescription": "An interactive fishing game for kids to experience the excitement of fishing.",
  
      "imgThumbnail": "https://example.com/fishing_adventure_game.jpg",
  
      "productId": 131,
  
      "brand": "FishyFun",
  
      "price": 799.99,
  
      "taxPercentage": 6.5,
  
      "rating": 4.4,
  
      "metadata": "fishing adventure game, interactive, excitement, fishing",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Mini Basketball Hoop Set",
  
      "productDescription": "A mini basketball hoop set for indoor slam dunks and basketball fun.",
  
      "imgThumbnail": "https://example.com/basketball_hoop_set.jpg",
  
      "productId": 132,
  
      "brand": "HoopsMania",
  
      "price": 599.99,
  
      "taxPercentage": 7.0,
  
      "rating": 4.6,
  
      "metadata": "mini basketball hoop set, indoor slam dunks, basketball fun",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Gardening Kit for Kids",
  
      "productDescription": "A gardening kit with child-friendly tools for little green thumbs.",
  
      "imgThumbnail": "https://example.com/gardening_kit.jpg",
  
      "productId": 133,
  
      "brand": "GreenThumbKids",
  
      "price": 1299.99,
  
      "taxPercentage": 6.0,
  
      "rating": 4.8,
  
      "metadata": "gardening kit, child-friendly tools, little green thumbs",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Ice Cream Shop Playset",
  
      "productDescription": "A pretend play ice cream shop set with scoops, cones, and toppings.",
  
      "imgThumbnail": "https://example.com/ice_cream_shop_playset.jpg",
  
      "productId": 134,
  
      "brand": "SweetTreats",
  
      "price": 899.99,
  
      "taxPercentage": 7.5,
  
      "rating": 4.2,
  
      "metadata": "ice cream shop playset, pretend play, scoops, cones, toppings",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Pirate Ship Play Tent",
  
      "productDescription": "A pirate ship-themed play tent for swashbuckling adventures.",
  
      "imgThumbnail": "https://example.com/pirate_ship_play_tent.jpg",
  
      "productId": 135,
  
      "brand": "PirateAdventures",
  
      "price": 1799.99,
  
      "taxPercentage": 8.2,
  
      "rating": 4.7,
  
      "metadata": "pirate ship play tent, pirate adventures, swashbuckling",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Wooden Puzzle Set",
  
      "productDescription": "A set of wooden puzzles for brain-teasing fun and cognitive development.",
  
      "imgThumbnail": "https://example.com/wooden_puzzle_set.jpg",
  
      "productId": 136,
  
      "brand": "WoodenWonders",
  
      "price": 999.99,
  
      "taxPercentage": 6.2,
  
      "rating": 4.9,
  
      "metadata": "wooden puzzle set, brain-teasing fun, cognitive development",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Science Lab Playset",
  
      "productDescription": "A science lab playset for young scientists to conduct imaginative experiments.",
  
      "imgThumbnail": "https://example.com/science_lab_playset.jpg",
  
      "productId": 137,
  
      "brand": "LabGenius",
  
      "price": 1499.99,
  
      "taxPercentage": 6.5,
  
      "rating": 4.4,
  
      "metadata": "science lab playset, young scientists, imaginative experiments",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Tropical Bird Stuffed Animals",
  
      "productDescription": "A collection of colorful tropical bird stuffed animals for cuddly companionship.",
  
      "imgThumbnail": "https://example.com/tropical_bird_stuffed_animals.jpg",
  
      "productId": 138,
  
      "brand": "TropicalFriends",
  
      "price": 699.99,
  
      "taxPercentage": 7.0,
  
      "rating": 4.6,
  
      "metadata": "tropical bird stuffed animals, colorful, cuddly companionship",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Solar System Planetarium",
  
      "productDescription": "An educational planetarium model for learning about the solar system.",
  
      "imgThumbnail": "https://example.com/solar_system_planetarium.jpg",
  
      "productId": 139,
  
      "brand": "SpaceWonders",
  
      "price": 1999.99,
  
      "taxPercentage": 8.0,
  
      "rating": 4.8,
  
      "metadata": "solar system planetarium, educational, learning, solar system",
  
      "timestamp": new Date("10-10-2023")
  
    },
  
    {
  
      "productName": "Police Car Toy Set",
  
      "productDescription": "A set of police car toys for exciting police chase and rescue missions.",
  
      "imgThumbnail": "https://example.com/police_car_toy_set.jpg",
  
      "productId": 140,
  
      "brand": "PoliceHeroes",
  
      "price": 1299.99,
  
      "taxPercentage": 6.5,
  
      "rating": 4.2,
  
      "metadata": "police car toy set, police chase, rescue missions",
  
      "timestamp": new Date("10-10-2023")
  
    }
  
  ];
}
