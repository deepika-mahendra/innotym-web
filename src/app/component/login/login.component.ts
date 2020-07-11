import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms'
import { UserService } from '../user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Component({
  selector: '.app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
signupForm:FormGroup;
loginForm:FormGroup;
  constructor(private fb:FormBuilder ,
    private userService:UserService,
     private _snackBar: MatSnackBar,
     private sharedService:SharedService,
     private router :Router
     ) { }

  ngOnInit(): void {
    this.createSignupForm();
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  createSignupForm(){
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      amount:['',Validators.required]
    })
  }
  signup(){
   this.signupForm.value.role="user";
   this.userService.createUser( this.signupForm.value).subscribe(data=>{
     alert("SignUp Successful");
     console.log(data);
 
   },
  err=>console.log(err)) ; 
  }
  login(){
    this.userService.loginUser( this.loginForm.value).subscribe(data=>{
      this._snackBar.open('login Successful', 'Success', {
        duration: 2000,
      });
      this.sharedService.updateMessage(data);
      this.router.navigate(['user']);
      console.log(data);
  
    },
   err=>console.log(err)) ; 
   }

}
