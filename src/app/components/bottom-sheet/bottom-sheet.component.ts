import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { tabs,setNames } from '../../meine-Dateien/db';
import { FaunadbService } from '../../services/faunadb.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { currentPage } from '../../meine-Dateien/constants';


@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatDividerModule, MatSelectModule, MatButtonModule, FormsModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.less'
})
export class BottomSheetComponent {
constructor(public bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>, private faunadb: FaunadbService){

}
  name: string = "";
link: string = "";
kosten: number = 0;
faction: number = 0;
async handleClick(){
  if(this.name == "" || this.link == ""){
    alert("Falsche Eingabe");
  }
  else{
    tabs.push({name: this.name, image: this.link,cost: this.kosten === 0 ? null : this.kosten, faction: this.faction === 0 ? null : this.faction, eloRating: 1000, record: [0,0,0]});
    setNames();
    if (currentPage == "boxing")
      await this.faunadb.create(this.name, 1000, this.link, [0,0,0]);
    this.bottomSheetRef.dismiss();
  }
}
}
