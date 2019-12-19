import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({

       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}')
      ]]  //min 8, max 16 characters / at least: 1 uppercase - 1 lowercase - 1 number - 1 special character
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  show(){

    document.getElementById('login').className = "d-none";
    document.getElementById('routerOutlet').className = "col d-block";

  }

  onSubmit() {
    this.submitted = true;
    // stop there if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // SUCCESS
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    document.getElementById('menu').className = "col-2";
    document.getElementById('routerOutlet').className = "col-9";
    document.getElementById('login').className = "d-none";
  }



}
