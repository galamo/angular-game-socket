import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { Observable, Subject, timer, fromEvent } from 'rxjs';
import { debounce, map, filter } from "rxjs/operators"

const INITIAL_WIDTH = 50

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css'],

})
export class CountryComponent implements OnInit {
    @Input() countryObj: any
    @Output() delEvent = new EventEmitter<any>()
    public flagWidth: number
    public comment: string;
    public comments: Array<string>
    public clickSteamer: Observable<any> = new Subject<any>()
    constructor(public countriesService: CountriesService) {
        this.flagWidth = INITIAL_WIDTH
        this.comments = [];
    }

    ngOnInit() {
        const clickDebounce = this.clickSteamer.pipe(debounce(() => { return timer(1000) }))

        clickDebounce.subscribe(() => {
            console.log("data  sent to  server....")
        })

        const mouseMove = fromEvent(document, "mousemove")
        const paint = mouseMove.pipe(filter((event: MouseEvent) => { return event.clientX > 500 }))
        // paint.subscribe((event:MouseEvent)=>{
        //     //some execution!! only in case of clientX > 500
        //     console.log(event.clientX)
        // })

    }

    delete() {
        this.delEvent.emit(this.countryObj.name)
    }

    changeFlagSize(width: number) {
        this.flagWidth = width
    }
    addComment() {
        (this.clickSteamer as any).next()
        this.comments.push(this.comment)
        this.comment = "";
    }

    selectCountry() {
        this.countryObj.isSelected = !this.countryObj.isSelected
        this.countriesService.addToFavorites(this.countryObj)
    }

}
