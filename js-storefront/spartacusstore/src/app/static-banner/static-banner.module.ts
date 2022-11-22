import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideCmsStructure } from '@spartacus/storefront';
import { CMSComponentConfig, CmsConfig, ConfigModule } from '@spartacus/core';
import { StaticBannerComponent } from './static-banner.component';



@NgModule({
  declarations: [
    StaticBannerComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        StaticBanner: {
          component:StaticBannerComponent
        }
      }


    } as CmsConfig)
  ],
  providers: [
    provideCmsStructure({
      componentId: 'StaticBanner', //componentId is typecode of the component if this component is created in CMS later.
      pageSlotPosition: 'StaticBannerSlot'
    })


  ]
})
export class StaticBannerModule { }
