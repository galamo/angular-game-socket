import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from "../../services/products/products.service"
import { SearchService } from 'src/app/services/search/search.service';
import { Subscription, Observer } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
    public products: Array<any>
    public dateFormat: string = "dd-MM-yyyy";
    public searchText: string;
    public unSubscribeSearchTextChanges:Subscription;
    constructor(private productsService: ProductsService, private searchService:SearchService) {

    }

    ngOnInit() {
        this.unSubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe((newValue:string)=>{
            this.searchText = newValue;
        })
        // this.productsService.getProducts().subscribe((products: Array<any>) => {
        //     console.log("data arrived!")
        //     this.products = products
        // }, (err) => { console.log(err) },
        //     () => { console.log("complete!") })

    }

    ngOnDestroy() {
        this.unSubscribeSearchTextChanges.unsubscribe()
    }

}
