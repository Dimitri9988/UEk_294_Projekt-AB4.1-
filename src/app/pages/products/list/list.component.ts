import { Component } from '@angular/core';
import {ProductControllerService, ProductShowDto} from "../../../openapi-client";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'pm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgForOf,
    RouterModule,
    MatIconModule
  ]
})
export class ListComponent {

  allProducts: ProductShowDto[] = []

  constructor(
      private  productControllerService: ProductControllerService
  )
  {
    this.productControllerService.getAllProducts().subscribe( products =>
    {
      this.allProducts = products
      console.log(this.allProducts)
    })
  }
}
