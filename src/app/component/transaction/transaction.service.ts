import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {transaction} from './transaction';

const BaseUrl = 'http://localhost:3000/api/transaction'
@Injectable({
    providedIn:'root'
})
export class TransactionService{
    constructor(private http: HttpClient) { }
    createTransaction(model):Observable<transaction>{
        return this.http.post<transaction>(`${BaseUrl}`,model);
       
     }
}
