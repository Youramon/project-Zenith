import { Component, Input } from '@angular/core';
import  *as db from '../../meine-Dateien/db';

@Component({
  selector: 'app-fighter',
  standalone: true,
  imports: [],
  templateUrl: './fighter.component.html',
  styleUrl: './fighter.component.less'
})
export class FighterComponent {
@Input() objekt!: any;
a = db.faction;
}
