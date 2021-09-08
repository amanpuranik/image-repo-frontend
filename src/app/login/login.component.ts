import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
  })
export class LoginComponent implements OnInit{

    userName:string | undefined;
    password!: String;

    constructor() { }

    ngOnInit() {
    }  
    
    
    loginUser(event:any){
        console.log(this.userName)

    }


}
