import { Component, OnInit } from '@angular/core';
import { routes } from "../../app-routing/app-routing.utils"
const ROUTES_TITLE = "Trips"

@Component({
    selector: 'app-travels',
    templateUrl: './travels.component.html',
    styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
    public nestedRoutes;
    constructor() {

    }

    ngOnInit() {
        this.nestedRoutes = routes.find(route => route.title === ROUTES_TITLE && Array.isArray(route.children)).children
    }

}
