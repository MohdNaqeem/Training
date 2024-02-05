import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnChanges, DoCheck{

ngDoCheck(): void {
  console.log('ngDocheck is called')
}

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
  if(changes['title']){
    this.title = changes['title'].currentValue.toUpperCase()
  }
}

@Input() rooms : RoomList []= []

@Input() title : string = ''

@Output() selectedRoom = new EventEmitter<RoomList>()

selectRoom(room : RoomList){
  this.selectedRoom.emit(room)
}


}
