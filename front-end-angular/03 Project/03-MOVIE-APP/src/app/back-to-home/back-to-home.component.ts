import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-back-to-home',
  templateUrl: './back-to-home.component.html',
  styleUrls: ['./back-to-home.component.css']
})
export class BackToHomeComponent {
  constructor(private auth: AuthService){}
  back(){
    this.auth.back()
  }

}
