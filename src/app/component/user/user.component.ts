import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userList:User[];
  constructor(private _userService : UserService) { }
  displayedColumns: string[] = ['_id', 'roll_no','name', 'salary', 'role','age','gender'];
  dataSource = [];
  ngOnInit(): void {
  this.getUserList();
  }
  getUserList(){
    this._userService.getUser().subscribe(res=>{
      this.userList=res;
      
      this.dataSource = this.userList;
      console.log(this.userList)
    })
  }

}
