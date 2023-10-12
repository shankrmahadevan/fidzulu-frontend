// import { TestBed } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { ProductService } from './product.service';

// describe('ProductServiceService', () => {
//   let service: ProductService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({ 
//       imports: [HttpClientTestingModule,
//       HttpClientModule]});
//     service = TestBed.inject(ProductService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { SessionService } from './session.service';
import { Product } from '../models/product';

describe('ProductService', () => {
  let productService: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService, SessionService],
    });

    productService = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should get all products for a given type', () => {
    const productType = 'bikes';
    const mockProducts: Product[] = /* your mock data here */[
        {
          product_name: 'Product 1',
          product_description: 'Description for Product 1',
          img_thumbnail: 'path/to/image1.jpg',
          product_id: 1,
          brand: 'Brand A',
          price: 50,
          tax_percentage: 10,
          rating: 4.5,
          metadata: 'Metadata for Product 1',
          timestamp: new Date('2022-01-01'),
        },
        {
          product_name: 'Product 2',
          product_description: 'Description for Product 2',
          img_thumbnail: 'path/to/image2.jpg',
          product_id: 2,
          brand: 'Brand B',
          price: 75,
          tax_percentage: 8,
          rating: 3.8,
          metadata: 'Metadata for Product 2',
          timestamp: new Date('2022-02-01'),
        },
        // Add more products as needed
      ];

    productService.getAllProducts(productType).subscribe((products) => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/classA/bike/all/US-NC`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProducts);
  });

//   it('should get an image', () => {
//     const imageUrl = 'http://example.com/image.jpg';
//     const mockImageData = /* your mock image data here */;

//     productService.getImage(imageUrl).subscribe((image) => {
//       expect(image).toEqual(mockImageData);
//     });

//     const req = httpTestingController.expectOne(imageUrl);
//     expect(req.request.method).toEqual('GET');
//     req.flush(mockImageData);
//   });

  it('should filter products based on provided filters', () => {
    const products: Product[] =  [
        {
          product_name: 'Product 1',
          product_description: 'Description for Product 1',
          img_thumbnail: 'path/to/image1.jpg',
          product_id: 1,
          brand: 'Brand A',
          price: 50,
          tax_percentage: 10,
          rating: 4.5,
          metadata: 'Metadata for Product 1',
          timestamp: new Date('2022-01-01'),
        },
        {
          product_name: 'Product 2',
          product_description: 'Description for Product 2',
          img_thumbnail: 'path/to/image2.jpg',
          product_id: 2,
          brand: 'Brand B',
          price: 75,
          tax_percentage: 8,
          rating: 3.8,
          metadata: 'Metadata for Product 2',
          timestamp: new Date('2022-02-01'),
        },
        // Add more products as needed
      ];
    const filters = {
      brands: ['Brand1', 'Brand2'],
      price: { min: 10, max: 50 },
      rating: 4,
    };

    const filteredProducts = productService.filterProducts(products, filters);
    console.log('Filtered Products:', filteredProducts);
    // Add assertions for the expected behavior
    // For example, check that the resulting products meet the specified filters
    expect(filteredProducts.length).toBeGreaterThan(0);
  });

  it('should sort products based on the specified sort order', () => {
    const products: Product[] = /* your mock data here */[
        {
          product_name: 'Product 1',
          product_description: 'Description for Product 1',
          img_thumbnail: 'path/to/image1.jpg',
          product_id: 1,
          brand: 'Brand A',
          price: 50,
          tax_percentage: 10,
          rating: 4.5,
          metadata: 'Metadata for Product 1',
          timestamp: new Date('2022-01-01'),
        },
        {
          product_name: 'Product 2',
          product_description: 'Description for Product 2',
          img_thumbnail: 'path/to/image2.jpg',
          product_id: 2,
          brand: 'Brand B',
          price: 75,
          tax_percentage: 8,
          rating: 3.8,
          metadata: 'Metadata for Product 2',
          timestamp: new Date('2022-02-01'),
        }
        // Add more products as needed
      ];
    const sortOrder = 'latest';

    const sortedProducts = productService.sortProducts(products, sortOrder);
    // Add assertions for the expected behavior
    // For example, check that the resulting products are sorted correctly
    // expect(sortedProducts.length).toBe(products.length);
    expect(sortedProducts.length).toBeGreaterThan(0);
    // Add more specific expectations based on your sorting logic
  });

  // Add more tests as needed for other methods in the service
  //negative tests
  it('should handle invalid product type in getAllProducts', () => {
    const invalidProductType = 'invalidType';
  
    productService.getAllProducts(invalidProductType).subscribe(
      () => fail('The call should have failed'),
      (error) => {
        expect(error).toBeTruthy();
        // Add more specific error handling expectations if needed
      }
    );
  });
  it('should handle invalid filters in filterProducts', () => {
    const products: Product[] = [{
        product_name: 'Product 1',
        product_description: 'Description for Product 1',
        img_thumbnail: 'path/to/image1.jpg',
        product_id: 1,
        brand: 'Brand A',
        price: 50,
        tax_percentage: 10,
        rating: 4.5,
        metadata: 'Metadata for Product 1',
        timestamp: new Date('2022-01-01'),
      },
      {
        product_name: 'Product 2',
        product_description: 'Description for Product 2',
        img_thumbnail: 'path/to/image2.jpg',
        product_id: 2,
        brand: 'Brand B',
        price: 75,
        tax_percentage: 8,
        rating: 3.8,
        metadata: 'Metadata for Product 2',
        timestamp: new Date('2022-02-01'),
      }];
    const invalidFilters = {
      brands: null, // Invalid value
      price: { min: 40, max: 60 },
      rating: 4,
    };
  
    const filteredProducts = productService.filterProducts(products, invalidFilters);
  
    expect(filteredProducts).toEqual([]);
    // Add more specific expectations or error handling if needed
  });
  

});
