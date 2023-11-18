import { Component } from '@angular/core';
import {CategoryControllerService, CategoryShowDto} from "../../../openapi-client";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'pm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,

  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ]
})

export class ListComponent {

  columNames: string[] = ['name', 'action'];

  allCategories: CategoryShowDto[] = [];
  constructor(
      private categoryControllerService: CategoryControllerService
  )
  {
    this.categoryControllerService.getAllCategories().subscribe(categories =>
    {
      this.allCategories = categories
    })
  }

  delete(id: number) {
    debugger
    this.categoryControllerService.deleteCategoryById(id).subscribe()
  }
}
