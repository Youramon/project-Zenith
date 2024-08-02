import { Component } from '@angular/core';
import { calculateAllAverage, faction } from '../../meine-Dateien/db';

@Component({
  selector: 'app-tabstistics',
  standalone: true,
  imports: [],
  templateUrl: './tabstistics.component.html',
  styleUrl: './tabstistics.component.less'
})
export class TabstisticsComponent {
  allAverage = calculateAllAverage();
  factions = faction;
}
