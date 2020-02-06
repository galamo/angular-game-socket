import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms"
import { debounceTime } from 'rxjs/operators';
import { SearchService } from "../../services/search/search.service"
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.css']
})
export class ReactiveSearchComponent implements OnInit {
  
  public searchText:string;
  public searchFormControl:FormControl;
  public unSubscribeSearchTextChanges:Subscription
  constructor(private searchService:SearchService) { 
      this.searchFormControl = new FormControl()
  }

  ngOnInit() {
    this.unSubscribeSearchTextChanges =  this.searchFormControl.valueChanges.pipe(debounceTime(400)).
    subscribe((newValue:string)=>{
        //save the relevant value into service
        this.searchService.setSearchTextChanges(newValue)
        this.searchText = newValue
        console.log(newValue)
    })
  }

  ngOnDestroy() {
    this.unSubscribeSearchTextChanges.unsubscribe()
}

}
