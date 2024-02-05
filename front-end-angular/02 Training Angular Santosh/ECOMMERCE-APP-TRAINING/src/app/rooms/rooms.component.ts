import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  constructor() {}


  ngOnInit(): void {
    this.roomlist = [
      {
        roomNumber: 111,
        roomType: 'Delux Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos: '',
        checkinTime: new Date('25-Jan-2024'),
        checkoutTime: new Date('29-Jan-2024'),
        rating: 4.34333,
      },
      {
        roomNumber: 112,
        roomType: 'Private Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 18000,
        photos: '',
        checkinTime: new Date('26-Jan-2024'),
        checkoutTime: new Date('28-Jan-2024'),
        rating: 4.3212,
      },
      {
        roomNumber: 113,
        roomType: 'Family Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 16000,
        photos: '',
        checkinTime: new Date('22-Jan-2024'),
        checkoutTime: new Date('29-Jan-2024'),
        rating: 3.321,
      },
      {
        roomNumber: 114,
        roomType: 'Family Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 16000,
        photos: '',
        checkinTime: new Date('22-Jan-2024'),
        checkoutTime: new Date('29-Jan-2024'),
        rating: 4.3232,
      },
      {
        roomNumber: 115,
        roomType: 'Family Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 16000,
        photos: '',
        checkinTime: new Date('22-Jan-2024'),
        checkoutTime: new Date('29-Jan-2024'),
        rating: 4.6245,
      },
    ];
    // console.log(this.headerComponent)
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent

  ngAfterViewInit(): void {
    // console.log(this.headerComponent)
    this.headerComponent.title = "Room view has updated"
  }

  // change detection on push function
  addRoom(){
    const room : RoomList = {
      roomNumber : 116,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: '',
      checkinTime: new Date('25-Jan-2024'),
      checkoutTime: new Date('29-Jan-2024'),
      rating: 2.34333,
    }
    // this.roomlist.push(room)
    this.roomlist = [...this.roomlist, room]
  }

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;
  title : string = 'Room List'

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 6,
    totalRooms: 20,
  };

  roomlist: RoomList[] = [];

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Room change"
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}
