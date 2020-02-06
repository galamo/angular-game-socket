import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';

@Component({
    selector: 'app-countries-list',
    templateUrl: './countries-list.component.html',
    styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent {
    public countries: Array<any>
    public selectedCountry: number;
    public selectedColor: string;
    public size: string;
    constructor(private countriesService: CountriesService) {
         this.countriesService.getAPICountries().then(res=>{
            this.countries = res;
        })
        this.selectedCountry = -1;
        this.selectedColor = "red"
        this.size = "40px"
    }

    moreThenTwoCurrencies(country: any) {
        return country.currencies && country.currencies.length > 1
    }
    deleteMe(countryName: string) {
        const countryIndex = this.countries.findIndex(country => country.name === countryName)
        if (countryIndex < 0) return;
        this.countries.splice(countryIndex, 1)
        this.selectedCountry = -1;
    }
    selectCountry(country: any) {
        country.isSelected = !country.isSelected
        this.countriesService.addToFavorites(country)
    }

}
