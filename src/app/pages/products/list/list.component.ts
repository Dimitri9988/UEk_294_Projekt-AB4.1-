import { Component } from '@angular/core';
import {ProductControllerService, ProductShowDto} from "../../../openapi-client";

@Component({
  selector: 'pm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
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
