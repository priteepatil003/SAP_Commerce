import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageComponent } from '../static-page/static-page.component';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { SaleComponent } from '../sale/sale.component';
import { ConfigModule, RoutingConfig } from '@spartacus/core';

const STATIC_ROUTES: Routes = [
  {
    path: `static-page`,
    component: StaticPageComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: `cart` }
  },
  {
    path: `alias/help`,
    component: PageLayoutComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: `homepage` }
  },
   {
    path: `sale`,
     component: SaleComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: `sale` }
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES),
    ConfigModule.withConfig({
      routing:{
       routes: {
      products: {

          paths: [
          `electronics / cameras /:productCode`
          ]               
       }

        }
      }
    } as RoutingConfig)
  ]
})
export class CustomRoutingModule { }
