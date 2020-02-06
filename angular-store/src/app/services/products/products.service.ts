import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators"
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    public productsUrl = "http://localhost:3500/products";
    public productsToOrder = []
    public pro = new Subject<Array<any>>();
    constructor(private httpClient: HttpClient) {
    }
    
    getProductsToOrder() {
        return this.pro;
    }
    getProducts(): Observable<Object> {
        return this.httpClient.get(this.productsUrl).pipe(map((result: Array<any>) => {
            this.productsToOrder = result.filter((p) => p.unitsInStock < 100);
            return result;
        }))
    }
    
}
