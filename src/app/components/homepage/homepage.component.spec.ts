import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      imports:[NgbModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have images array initialized', () => {
    expect(component.images).toBeDefined();
    expect(component.images.length).toBeGreaterThan(0);
  });

  it('should have trendingProducts array initialized', () => {
    expect(component.trendingProducts).toBeDefined();
    expect(component.trendingProducts.length).toBeGreaterThan(0);
  });

  it('should have categories array initialized', () => {
    expect(component.categories).toBeDefined();
    expect(component.categories.length).toBeGreaterThan(0);
  });

  
});

