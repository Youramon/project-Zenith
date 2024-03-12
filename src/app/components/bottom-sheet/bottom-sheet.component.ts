import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { tabs } from '../../meine-Dateien/db';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatDividerModule, MatSelectModule, MatButtonModule, FormsModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.less'
})
export class BottomSheetComponent {
constructor(public bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>){

}
  name: string = "";
link: string = "";
kosten: number = 0;
faction: number = 8;
handleClick(){
  if(this.name == "" || this.link == "" || this.kosten == 0 || this.faction == 0){
    alert("Falsche Eingabe");
  }
  else{
    tabs.push({name: this.name, image: this.link, cost: this.kosten, faction: this.faction, eloRating: 1000, record: [0,0,0]});
    this.bottomSheetRef.dismiss();
  }
}
}
