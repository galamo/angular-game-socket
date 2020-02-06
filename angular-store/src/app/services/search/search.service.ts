import { Injectable } from '@angular/core';
import  { Subject } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class SearchService {
    
  public searchTextChanges: Subject<string>;
  constructor() {
      this.searchTextChanges = new Subject<string>()
   }

   setSearchTextChanges(newValue:string){
        this.searchTextChanges.next(newValue)
        console.log("setSearchTextChanges", newValue)
       // subject?  
   }

}
