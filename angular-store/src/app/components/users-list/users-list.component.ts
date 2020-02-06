import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
    // ngFor
    // ngIf

    public usersListModel: Array<string>
    public endOfList: string;
    public role: string;
    constructor() {
        this.usersListModel = ["Gal", "Gan", "Matan", "Silvia", "Sivan"]
        this.endOfList = "End of users list"
        this.role = "user"
    }

    removeFirstUser = () => {
        this.usersListModel.splice(0, 1)
        if (this.usersListModel.length) {
            this.role = "admin"
        }
    }

    changeRole = () => {
        this.role = "admin"
    }
}
