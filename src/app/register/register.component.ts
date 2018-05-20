import { Component, OnInit } from '@angular/core';
import {MongodbService} from '../_services/index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(private router:Router,private mongodbservice:MongodbService) { }

  ngOnInit() {
  }
  register(){
    debugger;
    this.loading = true;
    this.mongodbservice.registerUser(this.model.username, this.model.password).subscribe(data=>{
      debugger;
      console.log(data);
      this.router.navigate(['/login']);
    },error=>{
      this.loading = false;
    });

  }

}
