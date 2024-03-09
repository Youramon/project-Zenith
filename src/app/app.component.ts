import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import *as db from "./meine-Dateien/db"
import { EinItemComponent } from "./components/ein-item/ein-item.component";
import { FabComponent } from './components/fab/fab.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from './components/dialogue/dialogue.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    imports: [CommonModule, RouterOutlet, EinItemComponent, FabComponent, DialogueComponent]
})
export class AppComponent {
  title = 'project-zenith';
ngOnInit() {
  // db.setTabs(JSON.parse(localStorage.getItem("tabs") || "[]"));
}
constructor(private dialog: MatDialog){
}

showDialogue() {
  this.dialog.open(DialogueComponent,{
  width: '500px',
  height: '330px',
    });
}
get tabs() {
    return db.tabs;
  }

}
