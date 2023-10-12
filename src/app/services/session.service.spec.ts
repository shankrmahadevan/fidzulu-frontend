import { TestBed } from '@angular/core/testing';
import { SessionService } from './session.service';
import { Product } from '../models/product';

describe('SessionService', () => {
  let sessionService: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService],
    });

    sessionService = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(sessionService).toBeTruthy();
  });

  it('should get and set location', () => {
    const initialLocation = sessionService.getLocation();
    expect(initialLocation).toBe('US-NC');

    sessionService.setLocation('IE');
    const updatedLocation = sessionService.getLocation();
    expect(updatedLocation).toBe('IE');
  });

  it('should add and remove items from the cart', () => {
    const product: Product = {
      product_name: 'Toy1',
      product_description: 'Description for Toy1',
      img_thumbnail: 'path/to/toy1.jpg',
      product_id: 1,
      brand: 'Brand A',
      price: 20,
      tax_percentage: 5,
      rating: 4,
      metadata: 'Metadata for Toy1',
      timestamp: new Date(),
    };

    // Adding to cart
    sessionService.addToCart(product);
    expect(sessionService.itemsInCart.length).toBe(1);

    // Removing from cart
    sessionService.removeFromCart(product);
    expect(sessionService.itemsInCart.length).toBe(0);
  });

  it('should initialize items in cart from session storage', () => {
    const product: Product = {
      product_name: 'Toy2',
      product_description: 'Description for Toy2',
      img_thumbnail: 'path/to/toy2.jpg',
      product_id: 2,
      brand: 'Brand B',
      price: 25,
      tax_percentage: 8,
      rating: 4.2,
      metadata: 'Metadata for Toy2',
      timestamp: new Date(),
    };

    // Adding to cart
    sessionService.addToCart(product);

    // Recreating the service to simulate a new instance (like a page refresh)
    sessionService = TestBed.inject(SessionService);

    // Check if items in cart are initialized from session storage
    expect(sessionService.itemsInCart.length).toBe(1);
  });
});
