import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { CustomRoutingModule } from "./custom-routing/custom-routing.module";
import { SpartacusModule } from './spartacus/spartacus.module';
import { StaticPageComponent } from './static-page/static-page.component';
import { SaleComponent } from './sale/sale.component';
import { MyBannerModule } from "./my-banner/my-banner.module";
import { MyLayoutModule } from "./my-layout/my-layout.module";
import { BestsellersModule } from "./bestsellers/bestsellers.module";
import { StaticBannerModule } from "./static-banner/static-banner.module";
import { CustomProductSummaryComponent } from './component/custom-product-summary/custom-product-summary.component';
import { CustomProductSummaryModule } from "./component/custom-product-summary/custom-product-summary.module";
import { CustomlocalizationModule } from "./customlocalization/customlocalization.module";
import { LocaltranslateComponent } from './localtranslate/localtranslate.component';


@NgModule({
  declarations: [
    AppComponent,
    StaticPageComponent,
    SaleComponent,
    LocaltranslateComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomRoutingModule,
    MyBannerModule,
    MyLayoutModule,
    BestsellersModule,
    StaticBannerModule,
    CustomProductSummaryModule,
    CustomlocalizationModule

  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
