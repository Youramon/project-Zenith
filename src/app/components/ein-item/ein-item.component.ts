import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ein-item',
  standalone: true,
  imports: [],
  templateUrl: './ein-item.component.html',
  styleUrl: './ein-item.component.less'
})
export class EinItemComponent {
@Input() name: string;
@Input() bild: string;
constructor(){
  this.name = '';
  this.bild = '';
}
}
