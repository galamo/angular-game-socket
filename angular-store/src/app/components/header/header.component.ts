import { Component } from "@angular/core"

const users = ["silvia", "adir", "sivan"];
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class AppHeader {
    public title: string;
    public clicks: number
    public currentColor: string
    public fontSize: number;
    constructor() {
        this.title = "Countries Application";
        this.clicks = 10
        this.currentColor = "green"
        this.fontSize = 40
    }

    changeHeader = (newHeader: string) => {
        this.currentColor = "blue"
        this.title = newHeader
    }

    changeSize = (size: number) => {
        this.fontSize = this.fontSize + size;
    }
}