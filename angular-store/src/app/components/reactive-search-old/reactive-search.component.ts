import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounce, debounceTime } from "rxjs/operators"
import { timer, Subscription } from 'rxjs';
@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.css']
})
export class ReactiveSearchComponent implements OnInit {

  public searchText:string;

  public searchFormControl:FormControl;
  public searchFormControl2:FormControl;
  public searchFormControlUNS:Subscription;

  constructor() { 
    this.searchFormControl = new FormControl()
    this.searchFormControl2 = new FormControl()
    this.searchFormControlUNS = new Subscription();
  }



  ngOnInit() {
    this.searchFormControlUNS = this.searchFormControl.valueChanges.pipe(debounce(()=>{
        return timer(1000)
    })).subscribe((newValue:string)=>{ this.searchText = newValue })

    this.searchFormControl2.valueChanges.pipe(debounceTime(1000)).
    subscribe((newValue:string)=>{
        this.searchText = newValue
    })

    setTimeout(() => {
        console.log("from now on matan will not ask questions...")
        this.searchFormControlUNS.unsubscribe()
    }, 10000);
    
  }
  ngDoCheck(va){
      console.log("changes made...",va)
  }

  ngOnDestroy(){
    this.searchFormControlUNS.unsubscribe()
  }

}
