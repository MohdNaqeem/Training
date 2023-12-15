import { Component } from '@angular/core';
import { Room, RoomList } from './directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Naqeem';

  //*ngIf Directive
  rooms : Room = {
    totalRooms:20,
    bookedRooms:10,
    availableRooms:10,
  }

   //*ngFor Directive
   roomsList : RoomList[] = [
    {
    roomType : '2BHK Room',
    status : 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
    price : 15000,
    photos : 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
    checkinTime : new Date,
    checkOutTime : new Date
  },
  {
    roomType : 'Private Room',
    status : 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
    price : 17000,
    photos : 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
    checkinTime : new Date,
    checkOutTime : new Date
  },
  {
    roomType : '1BHK Room',
    status : 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
    price : 12700,
    photos : 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
    checkinTime : new Date,
    checkOutTime : new Date
  },
  {
    roomType : '3BHK Room',
    status : 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
    price : 19000,
    photos : 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
    checkinTime : new Date,
    checkOutTime : new Date
  },
]

  //*ngFor Directive
  role = 'User'
}
