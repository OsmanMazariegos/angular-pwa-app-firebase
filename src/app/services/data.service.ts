
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { NotificationsService  } from 'angular2-notifications';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  customer = {};
  dialogData: any;

  constructor(private http: HttpClient) { }
  private readonly API_URL = 'https://heroku-node-80101.herokuapp.com/api/template';
  
  // DEMO ONLY, you can find working methods below
  addIssue (custome): void {
    this.http.post(this.API_URL+"/add", custome).subscribe(data => {
      console.log("Exito");
      },
      (err: HttpErrorResponse) => {
     console.log(err);
    });
  }


}
