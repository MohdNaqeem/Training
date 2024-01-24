import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnChanges, OnInit {
  constructor() {
    console.log('This is user constructot');
  }
  ngOnInit(): void {
    console.log('This is user onInit');
  }

  @Input() data: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
