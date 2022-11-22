import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';


@Injectable({
  providedIn: 'root'
})
export class ProductNameNormaliserService implements Converter<Occ.Product, Product> {

  constructor() { }
  convert(source: Occ.Product, target?: Product): Product {

    convert(source: Occ.Product, target: Product): Product {
      if (source.name) {
        target.name = source.name.replace(/ /g,`_´);
      }
    return target;
   }
    }

  
    
}
