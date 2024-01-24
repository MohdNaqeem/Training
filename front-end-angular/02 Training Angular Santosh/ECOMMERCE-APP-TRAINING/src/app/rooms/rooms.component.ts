import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = "Hilton Hotel"

  numberOfRooms = 10

  hideRooms = false

  rooms : Room = {
    availableRooms : 10,
    bookedRooms : 6,
    totalRooms : 20
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
  
}
