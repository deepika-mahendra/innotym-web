import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../app/component/user/user.component';
import { pathToFileURL } from 'url';
import { LoginComponent } from './component/login/login.component';
import { AddMoneyComponent } from './component/add-money/add-money.component';
import { transaction } from './component/transaction/transaction';
import { DoTransactionComponent } from './component/transaction/do-transaction/do-transaction.component';


const routes: Routes = [
  {path:'',redirectTo:'/Login',pathMatch:'full'},
  {path:'user',component:UserComponent},
  {path:'add-money',component:AddMoneyComponent},
  {path:'Login',component:LoginComponent},
  {path:'transaction',component:DoTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
