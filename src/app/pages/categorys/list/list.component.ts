import {Component} from '@angular/core';
import {CategoryControllerService, CategoryShowDto} from "../../../openapi-client";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'pm-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  standalone: true,

  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ]
})

export class ListComponent {
  //Nahmen der Spalten
  columNames: string[] = ['name', 'action'];

  allCategories: CategoryShowDto[] = [];

  constructor(
    private categoryControllerService: CategoryControllerService
  ) {
    //Gibt alle Kategorien aus und speicher sie in allCategories
    this.categoryControllerService.getAllCategories().subscribe(categories => {
      this.allCategories = categories
    })
  }

  //Löscht das Element mit der entsprechenden ID wen auf den Delete Button geklickt wird.
  delete(id: number) {
    this.categoryControllerService.deleteCategoryById(id).subscribe()
  }
}
