import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pwd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb : FormBuilder, private route : Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.invalid){
      alert("Invalid Form")
      return

    } else if(this.loginForm.value){
      // Swal("Good job!", "You clicked the button!", "success");
      alert("Login Successfull!!!")
      this.route.navigateByUrl('/home')

    }
  }

}
