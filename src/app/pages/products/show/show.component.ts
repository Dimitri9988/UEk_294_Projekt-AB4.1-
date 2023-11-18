import {Component} from '@angular/core';
import {
  ProductControllerService,
  ProductDetailDto,
} from "../../../openapi-client";
import {ActivatedRoute, provideRouter, RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'pm-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    NgForOf,
    RouterLink,
    MatIconModule
  ]
})
export class ShowComponent {
  product: ProductDetailDto | any

  constructor(
    private readonly productControllerService: ProductControllerService,
    private activatedRoute: ActivatedRoute
  ) {
    //Gibt ein Produkt aus nach seiner ID
    this.productControllerService.getProductById(this.activatedRoute.snapshot.params['id']).subscribe(product => {
      this.product = product
    })
  }

  //Löscht ein Produckt nach einer ID
  delete(id: number) {
    debugger
    this.productControllerService.deleteProductById(id).subscribe()
  }
}
