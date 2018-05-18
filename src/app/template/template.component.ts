import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from '../services/data.service';
import { NotificationsService  } from 'angular2-notifications';

class Button {
  text: string;
}


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']

})
export class TemplateComponent implements OnInit {

  public options = {
    position: ["bottom", "right"],
    timeOut: 4000,
    lastOnBottom: false,
    animate: "fromLeft",  
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true,
    maxLength: 200
};

  customer = {
    full_name:"",
  u_id_tax:"",
  i_will_pay:"",
  pay_day:"",
  pledge_amount:""
  };

  

  public button: Button = {
    text: 'Enviar datos'
  };

  

  constructor(private http: HttpClient, private router: Router,
    public dataService: DataService, private _service: NotificationsService) { }


  ngOnInit() {
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  saveCustomer() {
     //this.router.navigate(["result"]);
         //  this.router.navigate(['/book-details', id]);
   //  this.http.post('/template/add', this.book)
   //  .subscribe(res => {
   //      let id = res['_id'];
   
   //    }, (err) => {
    //     console.log(err);
  //     }
 //    );
    

  }

submit() {
  // emppty stuff
  }



  public confirmAdd(): void {
    this.dataService.addIssue(this.customer);
    
    this._service.success('¡Éxito!','Su solicitud fue completada.')
    
  }

}
