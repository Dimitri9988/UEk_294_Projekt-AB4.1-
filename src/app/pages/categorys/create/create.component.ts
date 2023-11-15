import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {
  CategoryControllerService,
  CategoryCreateDto, CategoryUpdateDto,
  LoginRequestDto,
  UserControllerService
} from "../../../openapi-client";
import {_MatSlideToggleRequiredValidatorModule, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'pm-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSlideToggleModule,
    FormsModule,
    _MatSlideToggleRequiredValidatorModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class CreateComponent implements OnInit{
  isChecked = true;
  isEdit = false;
  createCategoryForm!: FormGroup;
  categoryId!: number;
  constructor(
    private fb: FormBuilder,
    private readonly categoryControllerService: CategoryControllerService,
    private activatedRoute: ActivatedRoute
  ) {
    if (this.activatedRoute.snapshot.params['id']) {
      this.isEdit = true

      this.categoryControllerService.getCategoryById(this.activatedRoute.snapshot.params['id']).subscribe(category => {
        this.createCategoryForm.patchValue(category);
        this.categoryId = category.id;
      })
    }






    this.createCategoryForm = this.fb.group({
      active: [false, Validators.required],
      name: ['', Validators.required]
    })
  }

  save(value: any, valid: boolean): void {

    if(valid) {

        if (this.createCategoryForm.valid) {
          if(this.isEdit) {
            this.categoryControllerService.updateCategoryById(this.categoryId, this.createCategoryForm.value as CategoryUpdateDto).subscribe(val => {

            })
          }else {
            this.categoryControllerService.createCategory(this.createCategoryForm.value as CategoryCreateDto).subscribe(val => {

            });

        }
      }



      alert(JSON.stringify(value));



    } else {
      //fehlermeldung x,y
    }
  }

  ngOnInit() {
  }
}
