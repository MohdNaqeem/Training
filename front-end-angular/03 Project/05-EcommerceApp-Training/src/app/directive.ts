//*ngIf directive
export interface Room {
    totalRooms : number,
    availableRooms : number,
    bookedRooms : number
}

//*ngFor directive
export interface RoomList  {
    roomType : string
    status : string
    checkinTime : Date
    checkOutTime : Date
    price : number
    photos : string
    Rating : number
    }