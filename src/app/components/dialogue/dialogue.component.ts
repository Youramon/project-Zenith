import { Component } from '@angular/core';

import * as db from '../../meine-Dateien/db';
import { ZahlenService } from '../../zahlen.service';
import { FighterComponent } from '../fighter/fighter.component';
@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [FighterComponent],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.less'
})
export class DialogueComponent {
  ObjektEins= this.tabs[this.zahlen.random(0, db.tabs.length - 1)];
  ObjektZwei= this.tabs[this.zahlen.random(0, db.tabs.length - 1)];
  constructor(public zahlen: ZahlenService){

  }
  get tabs() {
    return db.tabs;
  }
}
