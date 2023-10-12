import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductFiltersComponent } from './product-filters.component';

import { ProductService } from 'src/app/services/product.service';

import { ProductListService } from '../product-list.service';

import { HttpClient } from '@angular/common/http';

describe('ProductFiltersComponent', () => {
  let component: ProductFiltersComponent;

  let fixture: ComponentFixture<ProductFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFiltersComponent],

      imports: [HttpClientTestingModule], // Include HttpClientTestingModule

      providers: [ProductService, ProductListService, HttpClient],
    });

    fixture = TestBed.createComponent(ProductFiltersComponent);

    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the rating filter when a rating button is clicked', () => {
    const rating = 3;

    component.setRatingFilter(rating);

    expect(component.filters.rating).toBe(rating);
  });

  it('should update the price range when the slider is moved', () => {
    const newPrice = 50;

    const priceRange = [0, newPrice];

    component.updatePriceRange({ target: { value: newPrice } });

    expect(component.currentPrice).toBe(newPrice);

    expect(component.filters.price.max).toBe(newPrice);
  });

  it('should update the selected brand when a radio button is clicked', () => {
    const brand = 'Reebok';

    component.updateBrandFilter(brand);

    expect(component.filters.brands).toBe(brand);
  });

  it('should emit the filters when "Apply Filters" button is clicked', () => {
    const filters = {
      brands: 'Reebok',
      price: { min: 0, max: 100 },
      rating: 4,
      sortBy: 'latest',
    };

    const applyFiltersSpy = spyOn(component.applyFiltersEvent, 'emit');

    component.filters = filters;

    component.applyFilters();

    expect(applyFiltersSpy).toHaveBeenCalledWith(filters);
  });

  it('should initialize with the default filters', () => {
    expect(component.filters).toEqual({
      brands: '',
      price: { min: 0, max: Infinity },
      rating: 1,
      sortBy: 'latest',
    });
  });
});
