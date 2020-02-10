import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as socketIo from "socket.io-client";

const socketUrl = "http://localhost:4000" //put in configuration
const MoveAction = "move"
const PositionAction = "position"

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    @ViewChild("game", null)
    private gameCanvas: ElementRef
    private context: any;
    private socket: any;
    private playerId: string;
    constructor() {
        this.socket = socketIo(socketUrl) // on connection executed
        this.socket.on("connect", () => {
            const { id } = this.socket;
            this.playerId = id;
        })
    }

    ngOnInit() {
        console.log("ngOnInit")
    }

    ngAfterViewInit() {
        this.context = this.gameCanvas.nativeElement.getContext("2d");

        this.socket.on(PositionAction, (players) => {
            console.log(PositionAction)
            this.context.clearRect(0, 0, this.gameCanvas.nativeElement.width, this.gameCanvas.nativeElement.height);
            if (!Array.isArray(players)) return;
            players.forEach(player => {
                const { position: pos, playerId } = player
                const image = new Image()
                this.context.drawImage(image, pos.x, pos.y)
                this.context.fillText(playerId, pos.x, pos.y);
                image.onload = () => {
                    this.context.drawImage(image, pos.x, pos.y, 85, 85); // Or at whatever offset you like
                };
                image.src = "https://cdn0.iconfinder.com/data/icons/ten-world-leaders/500/Benjamin_Netanyahu-512.png"
            })

            // this.context.fillRect(pos.x,pos.y,50,50)
        })


    }


    move(direction: string): void {
        const { playerId } = this;
        this.socket.emit(MoveAction, { playerId, direction })
    }

}
