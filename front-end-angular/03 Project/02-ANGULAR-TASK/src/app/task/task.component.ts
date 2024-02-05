import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements AfterViewInit {
  @ViewChild('myElement') myElement: ElementRef | undefined;

  ngAfterViewInit() {
    // Now, you can access and manipulate the DOM element
    this.myElement!.nativeElement.innerHTML = 'View initialized!';
  }
}
