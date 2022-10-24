import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName=""
  lastName=""
  email=""
  pwd=""
  registerForm:any = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb : FormBuilder, private route :Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.registerForm.invalid){
      alert("Invalid Form")
      return

    } else if(this.registerForm.value){
      // Swal("Good job!", "You clicked the button!", "success");
      alert("Registration Successfull!!!")
      this.route.navigateByUrl('/')

    }
  }

}
