import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './directive';
import { TrainingCmpComponent } from './training-cmp/training-cmp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular-Naqeem';

  //*ngIf Directive
  rooms: Room = {
    totalRooms: 20,
    bookedRooms: 10,
    availableRooms: 10,
  };

  //*ngFor Directive
  roomsList: RoomList[] = [];

  //*ngSwitch Directive
  role = 'User';

  // pipes
  lwrCasPip = 'This is lower case pipes';
  uprCasPip = 'This is upper case pipes';
  decimalPip = '4.5555';
  currncyPip = '100000';

  // Pass data from parent to child
  dataPass = 'This data is coming from parent component';

  // onChanges
  data = 'This is a data';
  updateData() {
    this.data = 'see data is changed';
  }

  // OnInit
  ngOnInit(): void {
    this.roomsList = [
      {
        roomType: '2BHK Room',
        status: 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
        price: 15000,
        photos:
          'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
        checkinTime: new Date(),
        checkOutTime: new Date(),
        Rating: 4.133333,
      },
      {
        roomType: 'Private Room',
        status: 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
        price: 17000,
        photos:
          'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
        checkinTime: new Date(),
        checkOutTime: new Date(),
        Rating: 5.033,
      },
      {
        roomType: '1BHK Room',
        status: 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
        price: 12700,
        photos:
          'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
        checkinTime: new Date(),
        checkOutTime: new Date(),
        Rating: 2.5,
      },
      {
        roomType: '3BHK Room',
        status: 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
        price: 19000,
        photos:
          'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
        checkinTime: new Date(),
        checkOutTime: new Date(),
        Rating: 4.5,
      },
    ];
  }

  // Event bindin
  userName: string | undefined;
  pressButton() {
    console.log(this.userName);
  }

  // task 
  postTitle : string | undefined
  postDetails : string | undefined
  imageURL : string | undefined
  postURL : string | undefined
  addBackground : boolean | undefined
}
