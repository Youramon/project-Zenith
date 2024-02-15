import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fighter',
  standalone: true,
  imports: [],
  templateUrl: './fighter.component.html',
  styleUrl: './fighter.component.less'
})
export class FighterComponent {
@Input() objekt!: any;
}
