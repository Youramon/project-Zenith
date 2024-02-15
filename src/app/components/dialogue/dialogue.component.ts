import { Component } from '@angular/core';

import * as db from '../../meine-Dateien/db';
@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.less'
})
export class DialogueComponent {
  get tabs() {
    return db.tabs;
  }
}
