import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
  name: 'filter',
    pure: false

})
@Injectable()

export class FilterPipe implements PipeTransform {

  /**
   * @param items object from array
   * @param term term's search
   */
  transform(items: any, searchText: string): any {
    if (!searchText || !items) return items;

    return FilterPipe.filter(items, searchText);
  }

  /**
   * 
   * @param items List of items to filter
   * @param searchText  a string term to compare with every property of the list
   * 
   */
  static filter(items: Array<{ [key: string]: any }>, searchText: string): Array<{ [key: string]: any }> {

    const toCompare = searchText.toLowerCase();

    return items.filter(function (item: any) {
      for (let property in item) {
        if (item[property] === null) {
          continue;
        }
        if (item[property].toString().toLowerCase().includes(searchText)) {
          return true;
          
        }
      }
      return false;
    });
  }
  
}