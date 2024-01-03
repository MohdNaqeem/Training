import { Component, OnInit} from '@angular/core';
import { Room, RoomList } from './directive';
import { UserDataService } from './services/user-data.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { noSpace } from './Custom-Validetors/nospace.validetors';

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
  roomsList = [
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

  // Service : API
  apiData : any ;
  apiDemo : any ;
  fbform : any
  constructor(private user:UserDataService, fb:FormBuilder){
    user.userData().subscribe((data)=>{
      this.apiData=data
    })

    // Practice of making API
    user.apiDemo().subscribe((data2)=>{
      this.apiDemo = data2
    })

    // Reactive from using form builder
    this.fbform = fb.group({
      studentName : ['', [
        Validators.required,
        Validators.minLength(5),
        noSpace.noSpaceValidations
      ]],
      studentEmail : ['',[
        Validators.required,
        Validators.email,
        noSpace.noSpaceValidations
      ]],
      password : ['',[
        Validators.required,
        Validators.minLength(8),
        noSpace.noSpaceValidations
      ]],
    })
  }

  // Reactive form builder 
  get fc(){
  return this.fbform.controls
  }

  // add new data using post method
  newApi: any
  addNewUserDetails(data:any){
    this.user.addNewData(data).subscribe((res)=>{
      console.log(res)
      this.newApi = res
    })
  }

  // Practice of making API
  demoAPi:any
  addDataApi(data:any){
    this.user.addDemoApi(data).subscribe((res)=>{
      this.demoAPi = res
      console.log(res)
    })
  }

  //Template driven form
  onSubmit(templateform:NgForm){
    console.log(templateform.value)
  }

  // Reactive form
  loginForm = new FormGroup({
    user : new FormControl('', [Validators.required, Validators.minLength(5)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required,  Validators.minLength(8)])
  })
  loginUser(){
    console.log(this.loginForm.value)
  }

  get getUser(){
    return this.loginForm.get('user')
  }
  
  get getEmail(){
    return this.loginForm.get('email')
  }

  get getPassword(){
    return this.loginForm.get('password')
  }

  // rivise and practice previous topic and some new topic
  title1 = "rivise and practice previous topic and some new topic"

  // for binding
  para = "This is interpolation binding"

  // property binding
  disable : boolean = true

  // event binding
  value = "Welcome to event binding"
  event = "";

  onClick(){
    this.event = this.value
  }

  // directives - *ngIf Directives
  NgIf = "this"

  // ngFor directive
  students = [
    {
      name : "Momin Mohd",
      class : "Xth",
      division : "A",
      rollNo: 1,
      teacherName:"Naqeem"
    },
    {
      name : "Momin Raza",
      class : "Xth",
      division : "A",
      rollNo: 2,
      teacherName:"Naqeem"
    },
    {
      name : "Momin Ahmad",
      class : "Xth",
      division : "A",
      rollNo: 3,
      teacherName:"Naqeem"
    },
    {
      name : "Momin Asif",
      class : "Xth",
      division : "A",
      rollNo: 4,
      teacherName:"Naqeem"
    },
    {
      name : "Momin Kaif",
      class : "Xth",
      division : "A",
      rollNo: 5,
      teacherName:"Naqeem"
    },
    {
      name : "Momin Rehan",
      class : "Xth",
      division : "A",
      rollNo: 6,
      teacherName:"Naqeem"
    }
  ]

  // add new data using change detection 
  addData2(){
    this.students.push({
      name : "Momin Amir",
      class : "Xth",
      division : "A",
      rollNo: 7,
      teacherName:"Naqeem"
    })
  }

  onDelete2(index:any){
    this.students.splice(index,1)
  }

  // *ngSwitchCase
  data2 : string | undefined 
  click(status:any){
    this.data2 = status
  }
}
