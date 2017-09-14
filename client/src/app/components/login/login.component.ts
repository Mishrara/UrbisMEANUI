import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CommonModule } from "@angular/common"
 
import { AuthenticationService } from '../../services/authentication.service';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  ScreeenCaption: string;
  createForm(){
    this.loginForm = this.formBuilder.group({
      screenCaption: this.ScreeenCaption,
      domain: ['',Validators.required],
      userId:['',Validators.required],
      password:['',Validators.required],
      otp:''
    });
  }
  constructor(
     private formBuilder:FormBuilder,
     private router: Router,
     private authService: AuthenticationService,
     private flashMessage: FlashMessagesService
      ) {
        this.createForm();
      }
  ngOnInit() {
            
        }     
  onLoginSubmit() {
    const userInfo = {
      domain: this.loginForm.get("domain").value,
      userId: this.loginForm.get("userId").value,
      password: this.loginForm.get("password").value,
      otp: this.loginForm.get("otp").value
    }
      this.authService.authenticateUser(userInfo).subscribe(data => {
        if(data.success) {
        // login successful
        this.authService.storeUserData(data.token);
        var result = this.authService.loggedIn();
        console.log(result);
        this.flashMessage.show('You are now logged in ',{
          cssClass: 'alert-success',
          timeout:5000
        });
        this.router.navigate(['/']);
        } else {
          // login failed
          this.flashMessage.show(data.err,{
            cssClass: 'alert-danger',
            timeout:5000
          });
          this.router.navigate([this.router.url]);
          
          // this.loading = false;
      }
    });
  }
}


