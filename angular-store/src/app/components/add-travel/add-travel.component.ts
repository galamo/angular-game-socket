import { Component, OnInit } from '@angular/core';
import { FavoritesService } from "../../services/favorites.service"
import { FormBuilder } from "@angular/forms"

@Component({
    selector: 'app-add-travel',
    templateUrl: './add-travel.component.html',
    styleUrls: ['./add-travel.component.css']
    // providers: [FavoritesService]
})
export class AddTravelComponent implements OnInit {
    public myForm;
    public listOfTravels: Array<any>; // move this array to service
    constructor(private formBuilder: FormBuilder) {
        this.listOfTravels = []
        this.myForm = this.formBuilder.group({
            location: "",
            description: "",
            numberOfDays: 0,
            hiddenDescription: "hidden field do not send"
            // add another inputs for dates . grouControl
        })
    }

    addTravel() {
        // DELETE LIST OF TRAVELS
        // move this code to save the travles on service
        // create a Travelslist component
        this.listOfTravels.push({
            location: this.myForm.get("location").value,
            description: this.myForm.get("description").value
        })
        this.myForm.reset()
        console.log(this.listOfTravels)
    }
    ngOnInit() {

    }

}
