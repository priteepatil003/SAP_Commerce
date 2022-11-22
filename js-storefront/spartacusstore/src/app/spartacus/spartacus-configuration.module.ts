import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, RoutingConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders,

    provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://localhost:9002/',
        prefix:'/myprojectwebservices/v2'
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
     /* currency: ['USD'],
      language: ['en'],
      baseSite: ['electronics-spa']*/
    },
  }),
    provideConfig(<RoutingConfig> {
      protected: true,
      routes: {
        product: {
          paths: [
            'product/:productCode'
          ]
        }
      }
      }),
    provideConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: translationChunksConfig,
      },
    }),



    /*provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), */

    provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  })]
})
export class SpartacusConfigurationModule { }
