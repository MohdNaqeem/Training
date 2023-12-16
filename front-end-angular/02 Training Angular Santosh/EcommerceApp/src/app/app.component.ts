import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Room, RoomList } from './directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
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
    checkOutTime : new Date,
    Rating : 4.133333
  },
  {
    roomType : 'Private Room',
    status : 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
    price : 17000,
    photos : 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
    checkinTime : new Date,
    checkOutTime : new Date,
    Rating : 5.033
  },
  {
    roomType : '1BHK Room',
    status : 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
    price : 12700,
    photos : 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
    checkinTime : new Date,
    checkOutTime : new Date,
    Rating : 2.5
  },
  {
    roomType : '3BHK Room',
    status : 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
    price : 19000,
    photos : 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
    checkinTime : new Date,
    checkOutTime : new Date,
    Rating : 4.5
  },
]

  //*ngSwitch Directive
  role = 'User'

  // pipes
  lwrCasPip = 'This is lower case pipes'
  uprCasPip = 'This is upper case pipes'
  decimalPip = '4.5555'
  currncyPip = '100000'

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
 
}
