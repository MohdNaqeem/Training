import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './directive';
import { TrainingCmpComponent } from './training-cmp/training-cmp.component';
import { UserDataService } from './services/user-data.service';

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
  roomsList: RoomList[] = [
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

  // change detection
  addData(){
    this.roomsList.push({
      roomType: 'Non A.C Room',
      status: 'Air Conditioner, Free Wifi, Tv, Bathroom, Kitchen,',
      price: 18000,
      photos:
        'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      checkinTime: new Date(),
      checkOutTime: new Date(),
      Rating: 4.133333,
    },)
  }

  onDelete(index:number){
    this.roomsList.splice(index, 1)
  }

  //*ngSwitch Directive
  role = 'User';

  // pipes
  lwrCasPip = 'This is lower case pipes';
  uprCasPip = 'This is upper case pipes';
  decimalPip = '4.5555';
  currncyPip = '100000';

  // custom pipe
  dummyString : string = "March 3, 2023 - Text.app is a simple text editor for Chrome OS and Chrome. It's fast, lets you open multiple files at once, has syntax highlighting, and saves to Google Drive on Chrome OS. File bugs: https://github.com/GoogleChrome/text-app/issues Version 0.8.4: - Fixed performance of feature Version ..."

  // Pass data from parent to child
  dataPass = 'This data is coming from parent component';

  // onChanges
  data = 'This is a data';
  updateData() {
    this.data = 'see data is changed';
  }

  // OnInit
  ngOnInit(): void {
  }

  // Event binding
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

  // task 2
  name: string | undefined
  userEmail: string | undefined
  userAddress: string | undefined

  userDetails : Array<any> = [];

  onPushDetails(){
    this.userDetails.push({
      "name" : this.name,
      "Email" : this.userEmail,
      "Address": this.userAddress
    })
  }

  Delete(index:number){
    this.userDetails.splice(index,1)
  }

  // Service
  serviceData:any
  constructor(private data2 : UserDataService){
    this.serviceData=data2.userData()
    console.log(data2.userData())
  }


}
