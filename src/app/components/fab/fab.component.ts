import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {
  MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import *as db from "../../meine-Dateien/db"
import { FaunadbService } from '../../services/faunadb.service';
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
  elementDelete(){
db.tabs.pop();
  }
  async makeItHappen(){
    db.setTabs(await this.faunadb.listSync("boxing"));
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }
}
