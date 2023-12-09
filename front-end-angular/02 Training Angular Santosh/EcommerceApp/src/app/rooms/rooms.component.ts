import { Component } from '@angular/core';
import { Room } from './Rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = "hotelinventory"
  numberOfRooms = 10

  hideRooms = false
  
  rooms:Room ={
    // totalRooms:20,
    // availableRooms:10,
    // bookedRooms:5
  }
   
  toggle(){
  this.hideRooms = !this.hideRooms
  }

  getData(val:any){
    console.warn(val)
  }
  
}
