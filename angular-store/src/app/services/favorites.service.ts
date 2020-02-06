import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class FavoritesService {
    private country: string
    constructor() {
        console.log("FavoritesService loaded")
        this.country = "Israel"
    }

    getCountry() { return this.country }
    setCountry(newFavorite: string) { this.country = newFavorite }
}
