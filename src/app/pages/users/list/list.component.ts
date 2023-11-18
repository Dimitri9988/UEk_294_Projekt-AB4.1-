import { Component } from '@angular/core';
import {UserControllerService, UserShowDto} from "../../../openapi-client";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'pm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    RouterLink
  ]
})
export class ListComponent {
  //Nahmen der Tabellen Reihen
  columNames: string[] = ['username', 'Admin Role', 'action'];
  allUsers: UserShowDto[] = []

  constructor(
    private userControllerService: UserControllerService
  )
  {
    //Gibt alle Benutzer aus und speicher sie in allUsers um sie im HTML zu verwenden
    this.userControllerService.getAllUsers().subscribe( users => {
      this.allUsers = users
      console.log(this.allUsers)
    })
  }
}
