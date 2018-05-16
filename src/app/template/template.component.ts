import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { Router } from '@angular/router';

class Button {
  text: string;
  disabled: boolean;
  color: string;
}


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public button: Button = {
    text: 'Enviar datos',
    color: 'primary',
    disabled: false
  };

  date = new Date();
    

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login() : void {
     this.router.navigate(["result"]);

    
  }

}
