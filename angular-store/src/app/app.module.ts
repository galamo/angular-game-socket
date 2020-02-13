import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './components/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryComponent } from './components/country/country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelsComponent } from './components/travels/travels.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbar, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule } from "@angular/material";
import { AddTravelComponent } from './components/add-travel/add-travel.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';
// import { RoutesLinksComponent } from './components/routes-links/routes-links.component'
import { FavoritesService } from './services/favorites.service';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductsComponent } from './components/products/products.component';
import { MatCard } from "@angular/material";
import { CurrencySignPipe } from './pipes/currency-sign.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ReactiveSearchComponent } from './components/reactive-search/reactive-search.component';
import { GameComponent } from './components/game/game.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ResizeDirective } from './directives/resize/resize.directive';
import { CopyDirective } from './directives/copyToClipboard/copy.directive';

@NgModule({
    declarations: [

        AppComponent,
        AppHeader,
        UsersListComponent,
        CountriesListComponent,
        CountryComponent,
        TravelsComponent,
        NavbarComponent,
        MatToolbar,
        AddTravelComponent,
        TravelListComponent,
        FavoritesComponent,
        ProductsComponent,
        CurrencySignPipe,
        SearchPipe,
        ReactiveSearchComponent,
        GameComponent,
        HighlightDirective,
        ResizeDirective,
        CopyDirective,

    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
