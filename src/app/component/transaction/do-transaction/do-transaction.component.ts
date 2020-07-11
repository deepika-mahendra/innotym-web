import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Validators } from '@angular/forms';
import { FormGroup , FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-do-transaction',
  templateUrl: './do-transaction.component.html',
  styleUrls: ['./do-transaction.component.scss']
})
export class DoTransactionComponent implements OnInit {

  constructor(private transactionService:TransactionService,
    private fb:FormBuilder) { }
    transactionForm:FormGroup;

  ngOnInit(): void {
    this.createForm();
  }
createForm(){
  this.transactionForm =this.fb.group({
    amount:['' ,Validators.required],
    user:['',Validators.required]
  })
}


doTransaction(){
  console.log(this.transactionForm.value);
  alert("Function call");
}
//   this.transactionService.createTransaction(model).subscribe(data => {
//     console.log(data);
//   },
//   err=> console.log(err));
// }
}