import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {
  MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import *as db from "../../meine-Dateien/db"
import { FaunadbService } from '../../services/faunadb.service';
import { currentPage } from '../../meine-Dateien/constants';
@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.less'
})
export class FabComponent {
constructor(private bottomSheet: MatBottomSheet, private faunadb: FaunadbService) {
}
  @Output() dialogue = new EventEmitter();
 openDialogue(){
    this.dialogue.emit();
  }
  async elementDelete(){
    let a = db.tabs.pop();
    if(currentPage === "boxing"){
      await this.faunadb.remove(a.name);
    }
  }
  async makeItHappen(){
    db.setTabs(await this.faunadb.listSync("boxing"));
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }
}
