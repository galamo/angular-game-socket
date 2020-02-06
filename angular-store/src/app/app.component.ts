import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-store';
 
  // Execute with the observer object myObservable.subscribe(myObserver);
   // Logs: // Observer got a next value: 1 // Observer got a next value: 2 // Observer got a next value: 3 // Observer got a complete notification
  
}
