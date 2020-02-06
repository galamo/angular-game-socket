import { Component, OnInit } from '@angular/core';
import { FavoritesService } from "../../services/favorites.service"

@Component({
    selector: 'app-travel-list',
    templateUrl: './travel-list.component.html',
    styleUrls: ['./travel-list.component.css']
    // providers: [FavoritesService]
})
export class TravelListComponent implements OnInit {

    constructor(public favoriteService: FavoritesService) { }

    ngOnInit() {
        console.log(`favorite country`, this.favoriteService.getCountry())
    }

}
