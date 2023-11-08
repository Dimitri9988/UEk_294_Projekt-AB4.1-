import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {LoginRequestDto, UserControllerService, UserShowDto} from "../../../openapi-client";
import {Router} from "@angular/router";

@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,
  private readonly userControllerService: UserControllerService,
  private router: Router
) {}

  save(value: any, valid: boolean): void {

    if(valid) {
      this.userControllerService.login(this.loginForm.value as LoginRequestDto).subscribe(token => {
        console.log(token);
        localStorage.setItem('ACCESS_TOKEN', token.token as string);
      })
      alert(JSON.stringify(value))
    } else {
      //fehlermeldung x,y
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$")]],
    })
  }


}
