import {Component, OnInit} from '@angular/core';
import {flush} from "@angular/core/testing";
import {Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductControllerService, ProductCreateDto, ProductUpdateDto} from "../../../openapi-client";
import {ActivatedRoute} from "@angular/router";
import {subscribeOn} from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@Component({
  selector: 'pm-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ]
})
export class CreateComponent implements OnInit{
  isEdit = false;
  createProductForm!: FormGroup;
  productId!: number;
  constructor(
      private fb:FormBuilder,
      private readonly productControllerService: ProductControllerService,
      private activatedRoute: ActivatedRoute
  ) {
    if (this.activatedRoute.snapshot.params['id']) {
      this.isEdit = true

      this.productControllerService.getProductById(this.activatedRoute.snapshot.params['id']).subscribe(product =>{
        this.createProductForm.patchValue(product);
        this.productId = product.id;
      })
    }
    this.createProductForm = this.fb.group({
      name: ['', Validators.required],
      sku: ['', Validators.required],
      image: ['', Validators.required],
      price: [0, Validators.required],
      stock: [0, Validators.required],
      description: ['', Validators.required],
      categoryId: [102, Validators.required],
      active: [true]
    })
  }

  save(value: any, valid: boolean): void {
    if(valid) {
      if(this.isEdit) {
        this.productControllerService.updateProductById(this.productId, this.createProductForm.value as ProductUpdateDto).subscribe(val => {

        })
      }else {
        this.productControllerService.createProduct(this.createProductForm.value as ProductCreateDto).subscribe(val => {

        });
      }
      alert(JSON.stringify(value));
    } else {
      // Fehlermeldung
    }

  }
  ngOnInit() {
  }
}
