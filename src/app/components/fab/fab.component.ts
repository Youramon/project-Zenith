import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.less'
})
export class FabComponent {
constructor(){}
  @Output() dialogue = new EventEmitter();
 openDialogue(){
    this.dialogue.emit();
  }
}
