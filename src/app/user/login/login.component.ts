import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

  validateCredentials(loginForm: NgForm) {
    console.log(loginForm);
    let formData: FormData = new FormData();
    formData.append("email", loginForm.form.controls['email'].value.toLowerCase());
    formData.append("password", loginForm.form.controls['password'].value.toLowerCase());
    this.login.login(formData).subscribe(response => {
      console.log(response);
    });
  }
}
