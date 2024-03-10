import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.less'
})
export class FabComponent {
constructor(private bottomSheet: MatBottomSheet){}
  @Output() dialogue = new EventEmitter();
 openDialogue(){
    this.dialogue.emit();
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }
}
