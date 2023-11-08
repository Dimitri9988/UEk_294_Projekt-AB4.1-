import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, PatternValidator, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {
  CategoryControllerService,
  ProductControllerService,
  RegisterDto,
  UserControllerService, UserShowDto
} from "../../../openapi-client";
import {Router} from "@angular/router";

@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  user!: UserShowDto;

  registerForm!: FormGroup;
  constructor(
    private readonly userControllerService: UserControllerService,
    private fb: FormBuilder,
    private router: Router
  ){
  }

  save(value: any, valid: boolean): void {

    if(valid) {
      this.userControllerService.register(this.registerForm.value as RegisterDto).subscribe(user => {
        this.user = user;
        this.router.navigateByUrl('/auth/login').then();

      })
    } else {
      //fehlermeldung x,y
    }
  }



  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      street: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      zip: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      city:['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      country: ['', Validators.required],
      phone: ['', Validators.maxLength(15)],
      mobilePhone: ['', Validators.maxLength(15)],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$")]],

    });

  }
}
