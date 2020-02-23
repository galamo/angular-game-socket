import { Routes, Route } from "@angular/router";
import { CountriesListComponent } from "../components/countries-list/countries-list.component";
import { TravelsComponent } from "../components/travels/travels.component";
import { AddTravelComponent } from "../components/add-travel/add-travel.component";
import { TravelListComponent } from "../components/travel-list/travel-list.component";
import { FavoritesComponent } from "../components/favorites/favorites.component";
import { ProductsComponent } from "../components/products/products.component";
import { GameComponent } from "../components/game/game.component";
import { AuthGourdService } from "../services/auth-gourd.service";
import { DeactivateGuard } from "../services/deactivate-gourd.service";

interface CustomRoute extends Route {
  children?: Array<CustomRoute>;
  title?: string;
  isVisible?: boolean;
}

export const routes: Array<CustomRoute> = [
  { path: "", redirectTo: "countries", pathMatch: "full" },
  {
    path: "countries",
    component: CountriesListComponent,
    title: "CountrieS",
    isVisible: true
  },
  {
    path: "favorites",
    component: FavoritesComponent,
    title: "Favorites",
    isVisible: true
  },
  {
    path: "products",
    component: ProductsComponent,
    title: "Products",
    isVisible: true,
    canActivate: [AuthGourdService],
    canDeactivate: [DeactivateGuard]
  },

  {
    path: "travels",
    component: TravelsComponent,
    title: "Trips",
    isVisible: true,
    children: [
      { path: "", redirectTo: "travel-list", pathMatch: "full" },
      {
        path: "travel-list",
        component: TravelListComponent,
        isVisible: true,
        title: "List"
      },
      {
        path: "add-travel",
        component: AddTravelComponent,
        isVisible: true,
        title: "Add"
      }
    ]
  },
  { path: "game", component: GameComponent, title: "Game", isVisible: true }
];
