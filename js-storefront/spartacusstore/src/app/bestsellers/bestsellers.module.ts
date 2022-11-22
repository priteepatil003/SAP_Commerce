import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestsellersComponent } from './bestsellers.component';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { I18nModule } from '@spartacus/core';




@NgModule({
  declarations: [
    BestsellersComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    RouterModule.forChild([
      {
        path: 'bestsellers',
        component: BestsellersComponent,
        canActivate: [CmsPageGuard],
        //as bestseller pagelabel is not created in CMS,
        //breadcrumb is shown as not found on the web page.to avoid this map it to any avilable page label OR create this static page in CMS.
     }
    ])
    

  ]
})
export class BestsellersModule { }
