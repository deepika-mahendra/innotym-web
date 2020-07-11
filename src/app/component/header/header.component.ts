import { Component, OnInit } from '@angular/core';
import { SharedService } from '../login/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
userObj:any={};
isHidden:Boolean=true;
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe(data => {
      if(data== ''){
        this.isHidden = true;
        this.userObj = null;
      }
      else{
        this.isHidden =false;
        this.userObj =data;
      }
    })
  }

}
