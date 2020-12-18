import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
      console.log("filtering")
   console.log(items)
   if (!items) return [];
   return items.filter(
     pro => pro.Title.toLowerCase().indexOf(value.toLowerCase()) > -1
   )
 }
}
