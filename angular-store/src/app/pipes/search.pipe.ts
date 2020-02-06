import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(items: any, searchText: string, searchKey: string, e: any): any {
        console.log(e)

        if (!searchText) return items;
        if (!Array.isArray(items)) return [];
        return items.filter((product) => {
            return product[searchKey].toLowerCase().includes(searchText.toLowerCase())
        })
    }

}
