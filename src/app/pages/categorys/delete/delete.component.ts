import { Component } from '@angular/core';
import {CategoryControllerService} from "../../../openapi-client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pm-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  standalone: true,
})
export class DeleteComponent {
  constructor(
      private categoryControllerService: CategoryControllerService,
      private activatedRoute: ActivatedRoute
  ) {

  }
}
//deleteCategoryById
