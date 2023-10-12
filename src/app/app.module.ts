import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFiltersComponent } from './product/product-filters/product-filters.component';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './product/product-page/product-page.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductFiltersComponent,
    ProductPageComponent,
    ProductInfoComponent,
    FooterComponent,
    HomepageComponent,
    NavbarComponent,
    ShoppingCartComponent,
    CategoryCardComponent,
    TeamsComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
