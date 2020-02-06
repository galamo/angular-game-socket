import { Component, OnInit } from '@angular/core';
// import { routes } from "../../app-routing/app-routing.utils"
import { Routes } from "@angular/router";
import { routes } from "../../app-routing/app-routing.utils"


// import { CountriesListComponent } from '../countries-list/countries-list.component';
// import { TravelListComponent } from '../travel-list/travel-list.component';
// import { AddTravelComponent } from '../add-travel/add-travel.component';

// const countriesArgs = { title: "Countries", isVisible: true }
// const TravelArgs = { title: "Travels", isVisible: true }

// export const routes: Routes = [
//     { path: "", redirectTo: "countries", pathMatch: "full" },
//     { path: "countries", component: CountriesListComponent, ...countriesArgs },
//     {
//         path: "travels", component: TravelListComponent, ...TravelArgs, children: [
//             { path: "", redirectTo: "travel-list", pathMatch: "full" },
//             {
//                 path: "travel-list", component: TravelListComponent
//             },
//             {
//                 path: "add-travel", component: AddTravelComponent
//             }
//         ]
//     }
// ];

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public mainRoutes;
    constructor() {
        this.mainRoutes = routes;

    }

    ngOnInit() {
    }

}
