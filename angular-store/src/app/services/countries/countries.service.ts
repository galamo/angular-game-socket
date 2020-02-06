import { Injectable } from '@angular/core';
import countriesData from "../../../countries.js"
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// add in 
@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    private countries: Array<any>;
    private apiCountries: Array<any>;

    private baseURI: string = `https://restcountries.eu/rest`;

    constructor(private http: HttpClient) {
        this.countries = countriesData.map(c => ({ ...c, fav: false, isSelected: false }))
        this.apiCountries = [];
        // rest/v2/all

        // const myObservable: Observable<any> = of(1, 2, 3); 
        // // Create observer object
        //  const myObserver = {
        //   next: x => console.log('Observer got a next value: ' + x), 
        //   error: err => console.error('Observer got an error: ' + err),
        //   complete: () => console.log('Observer got a complete notification'),
        //  }; 

        //  myObservable.subscribe(myObserver).unsubscribe();
    }

    getCountries() { return this.countries }
    addToFavorites(country) {
        country.fav = true;
    }
    getFavorites() {
        console.log(this.countries.filter(c => c.fav))
        return this.countries.filter(c => c.fav)
    }

    getAPICountries() {
        
        const promise = new Promise<any>((resolve, reject) => {
                const uri = `${this.baseURI}/v2/all`;
                this.http.get(uri).toPromise().then(res => {                
                    resolve(res);
                },reject);
        });

        return promise;
    }
}
