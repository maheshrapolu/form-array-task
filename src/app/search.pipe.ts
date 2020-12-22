import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: any, searchItem: any): any {
    if (!array) { return [] }
    if (!searchItem) { return array }
    searchItem=searchItem.toLowerCase()
    return array.filter(value=>{
      return value.name.toLowerCase().includes(searchItem)
    })
  }

}
