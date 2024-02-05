import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ECOMMERCE-APP-TRAINING';

  @ViewChild('user',{read : ViewContainerRef}) vcr! : ViewContainerRef 

  ngOnInit(): void {
    
  }
  
}
