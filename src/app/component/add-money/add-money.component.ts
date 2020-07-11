import { Component, OnInit, ErrorHandler } from '@angular/core';
import { SharedService } from '../login/shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {
userDetails:any={};
addMoneyForm:FormGroup;
  constructor(private sharedService:SharedService,
    private fb : FormBuilder,
    private userService:UserService,
    private _snackBar: MatSnackBar,
    private errorHandler:ErrorHandler) { }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe(data => {
      this.userDetails = data;
    });
this.addMoneyForm = this.fb.group({
  amount:['',Validators.required]
})
  }
  addMoney(){
    this.userDetails.amount= parseInt(this.userDetails.amount + this.addMoneyForm.value.amount);
    console.log(this.addMoneyForm.value);
    
        this.userService.updateUser(this.userDetails).subscribe(data =>{
      this._snackBar.open('money Added', 'Success', {
        duration: 2000,
      });
      console.log("success");
      this.sharedService.updateMessage(data);
    },
    
    err =>{
      console.log(err);
              
    });
    
  }
 
}
