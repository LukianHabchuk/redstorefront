import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../shared/interfaces';

@Pipe({ name: 'searchProducts' })
export class FilterPipe implements PipeTransform {
  transform(products: Product[], searchText: string): Product[] {
    try {
      if (!searchText.trim()) {
        return products;
      }
      return products.filter(product => {
        return product.name.toLowerCase().includes(searchText.toLowerCase());
      });
    } catch (e) {
      console.log('search input resetting');
      return products;
    }
  }
}
