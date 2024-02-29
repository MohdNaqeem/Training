import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-training',
  templateUrl: './rxjs-training.component.html',
  styleUrls: ['./rxjs-training.component.css'],
})
export class RxjsTrainingComponent implements AfterViewInit {
  // observable Example
  observer = new Observable(() => {
    this.observer = new Observable((observer) => {
      try {
        observer.next('Momin');
        setInterval(() => {
          observer.next('Mohd');
        }, 3000);
        setInterval(() => {
          observer.next('Naqeem');
        }, 6000);
      } catch (e) {
        observer.error(e);
      }
    });
  });
  getDataForObservable() {
    this.observer.subscribe((data) => {
      console.log(data);
    });
  }
  //------------------------------------------------------------------------------------------------

  // observable practice
  myObservable = new Observable((observerData) => {
    setTimeout(() => {
      observerData.next('1');
    }, 1000);
    setTimeout(() => {
      observerData.next('2');
    }, 2000);
    setTimeout(() => {
      observerData.next('3');
    }, 3000);
    setTimeout(() => {
      observerData.error(
        new Error('Something went wrong, please try again later')
      );
    }, 3000);
    setTimeout(() => {
      observerData.next('4');
    }, 4000);
    setTimeout(() => {
      observerData.next('5');
    }, 5000);
    setTimeout(() => {
      observerData.complete();
    }, 6000);
  });
  getData() {
    this.myObservable.subscribe({
      next: (val) => {
        console.log(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('All data has printed');
      },
    });
  }
  //------------------------------------------------------------------------------------------------

  // for of operator Example
  array1 = [1, 3, 4, 5, 6];
  data: any[] = [];
  array2 = ['A', 'B', 'C', 'D'];
  ofOperator = of(this.array1, 29, 30, this.array2);
  ofOperatorData() {
    this.ofOperator.subscribe({
      next: (val: any) => {
        this.data = val;
        console.log(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('All data has printed');
      },
    });
  }
  //-------------------------------------------------------------------------------------------------------

  // for from operator Example
  arrFrom = [1, 2, 3, 4, 5, 6, 7];
  getFrom = from(this.arrFrom);
  getFormData() {
    this.getFrom.subscribe({
      next: (val) => {
        console.log(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('The Form is Completed!');
      },
    });
  }
  //--------------------------------------------------------------------------------------------------------

  // fromEvent Operator Example
  @ViewChild('creatbtn')
  creatBtn: ElementRef;
  createBtnDetails: any;

  getFromEvent() {
let count = 0
    this.createBtnDetails = fromEvent(
      this.creatBtn.nativeElement,
      'click'
    ).subscribe((data) => {
      console.log(data);
      this.getItemInFromEvent(++count)
    });
  }

  getItemInFromEvent(val:number){
    let div = document.createElement('div');
    div.innerHTML = 'item' + val
    document.getElementById('getItem').appendChild(div)
  }

  ngAfterViewInit(): void {
    this.getFromEvent();
  }
}
