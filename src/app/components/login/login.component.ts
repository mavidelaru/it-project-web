import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder,
               private router: Router ) { }

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

  onSubmit() {
    this.submitted = true;
    // stop there if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // SUCCESS
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
  }

  forgotPassword() {
    this.router.navigate( ['/login', 'reset-password'] );
  }

}
