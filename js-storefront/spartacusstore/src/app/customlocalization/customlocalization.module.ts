import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      i18n: {
        fallbackLang:'en',
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json'
        }
      }
    })
  ]
})
export class CustomlocalizationModule { }
