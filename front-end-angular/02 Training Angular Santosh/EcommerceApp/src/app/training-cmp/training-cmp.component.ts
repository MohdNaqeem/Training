import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-training-cmp',
  templateUrl: './training-cmp.component.html',
  styleUrls: ['./training-cmp.component.css']
})
export class TrainingCmpComponent implements OnChanges{
  @Input() data: any
  ngOnChanges(): void {
  console.warn("Data is changed from parent data after click on button " + this.data)
}
@Input() parent:any
}
