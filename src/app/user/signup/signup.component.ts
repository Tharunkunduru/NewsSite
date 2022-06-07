import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SignupService} from "../../shared/services/signup.service";
import {Credentialinterface} from "../../shared/interface/credentialinterface";
import {Forminterface} from "../../shared/interface/forminterface";
import {MAT_DATE_FORMATS} from "@angular/material/core";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signup: SignupService) { }

  ngOnInit(): void {
  }

  signUp(signupform: NgForm) {
    console.log(signupform)
    if(!signupform.form.valid) return ;
    let formData : FormData = new FormData();
    let val = signupform.form.value;
    let data: object = {
      username:val['username'],
      email:val['email'],
      dateofbirth: formatDate(val['dob'],'yyyy-MM-dd','en','+0530'),
      phonenumber:val['phonenumber'],
      gender:val['gender'],
      nation:val['nation'],
      firstname:val['firstname'],
      lastname:val['lastname']
    };
    let cred:object ={
      email:val['email'],
      password:val['password'],
    }
    // formData.append('username',val['username']);
    // formData.append('email',val['email']);
    // formData.append('password',val['password']);
    // formData.append('dob',new Date(val['dob']).toISOString());
    // formData.append('phonenumber',val['phonenumber']);
    // formData.append('gender',val['gender']);
    // formData.append('nation',val['nation']);
    // formData.append('firstname',val['firstname']);
    // formData.append('lastname',val['lastname']);
    // console.log(formData);
    let cred1: FormData=new FormData();
    cred1.append('email',val['email']);
    cred1.append('password',val['password']);

    this.signup.signUp(JSON.stringify(data),JSON.stringify(cred));

  }
}
