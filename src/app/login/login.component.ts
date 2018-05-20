import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../_services/index';
import {MaterialUIModule} from '../_modules/index';
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private mongoservice:MongodbService,private router:Router) { }
  ngOnInit() {
  }
  Login(){
    debugger;
    this.mongoservice.login(this.username,this.password).subscribe(data=>{
      debugger;
      var result=data;
      if(result && result.status){
        alert("Login success");
        this.router.navigate(['/dashboard']);
      }
      else{
        alert("Login failed");
      }
    });
  }
  Reset(){
    this.username = "";
    this.password = "";
  }

}
