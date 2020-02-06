import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../../services/countries/countries.service"
@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    public favorites;
    constructor(public countriesService: CountriesService) {
    }

    ngOnInit() {
        this.favorites = this.countriesService.getFavorites();
        
    }

}
