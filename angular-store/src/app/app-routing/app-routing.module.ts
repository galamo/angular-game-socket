import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from "./app-routing.utils"
import { RoutesLinksComponent } from '../components/routes-links/routes-links.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [RoutesLinksComponent],
    imports: [RouterModule.forRoot(routes), CommonModule],
    providers: [],
    exports: [RouterModule, RoutesLinksComponent]
})
export class AppRoutingModule { }
