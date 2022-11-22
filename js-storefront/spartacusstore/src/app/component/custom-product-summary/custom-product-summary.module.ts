import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CmsConfig, ConfigModule } from "@spartacus/core";
import { CustomProductSummaryComponent } from "./custom-product-summary.component";

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductSummaryComponent: {
         // component:CustomProductSummaryComponent
          component: () =>
            import('./custom-product-summary.component').then(
              (m) => m.CustomProductSummaryComponent

            )
        }
      }
    } as CmsConfig)


  ],
  declarations:[CustomProductSummaryComponent]

})
export class CustomProductSummaryModule { }
