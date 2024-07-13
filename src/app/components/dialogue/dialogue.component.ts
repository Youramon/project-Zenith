import { Component } from '@angular/core';
import { handleKampf } from '../../meine-Dateien/handleKampf';
import * as db from '../../meine-Dateien/db';
import { ZahlenService } from '../../zahlen.service';
import { FighterComponent } from '../fighter/fighter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { currentPage,setDowload} from '../../meine-Dateien/constants';
import { FaunadbService } from '../../services/faunadb.service';
import {count} from '../../meine-Dateien/constants';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [FighterComponent, MatButtonToggleModule,FormsModule, ReactiveFormsModule],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.less'
})
export class DialogueComponent {
[x: string]: any;
  ObjektEins = this.tabs[this.zahlen.random(0, db.tabs.length - 1)];
  ObjektZwei = this.tabs[this.zahlen.random(0, db.tabs.length - 1)];
  result?: number;
  change: number = 0;
 
async handleFight(){
 if (this.result != undefined){
  count();
  this.change = handleKampf(this.ObjektEins.eloRating, this.ObjektZwei.eloRating, this.result); 
  this.ObjektEins.eloRating += this.change;
  this.ObjektZwei.eloRating -= this.change;
  this.ObjektEins.record[2- 2*this.result]++;
  this.ObjektZwei.record[2*this.result]++;
  if(currentPage === "boxing"){
    await this.faunadb.updateElo(this.ObjektEins.name,this.ObjektZwei.name, this.ObjektEins.eloRating, this.ObjektZwei.eloRating,this.ObjektEins.record,this.ObjektZwei.record);
    if(Math.max(this.ObjektEins.eloRating,this.ObjektZwei.eloRating) > db.tabs[9].eloRating || Math.min(this.ObjektEins.eloRating,this.ObjektZwei.eloRating) < db.tabs[10].eloRating){
    setDowload(true);
    db.setTabs(await this.faunadb.listSync(currentPage));
    }
  }
  else{
  db.tabs.sort((a, b) => b.eloRating - a.eloRating);
  db.setNames();
  localStorage.setItem(currentPage, JSON.stringify(db.tabs));
  }
  this.dialogRef.close();
 }
}
handleRaflkapter1(value: any){
  this.ObjektEins = currentPage === "boxing" ? value.data.data[0] : value;
}
handleRaflkapter2(value: any){
  this.ObjektZwei = currentPage === "boxing" ? value.data.data[0] : value;
}
  constructor(public zahlen: ZahlenService,public dialogRef: MatDialogRef<DialogueComponent>, private faunadb: FaunadbService) {
    while(this.ObjektZwei === this.ObjektEins)
    {
      this.ObjektZwei= this.tabs[this.zahlen.random(0, db.tabs.length - 1)];
    }
  }
  get tabs() {
    return db.tabs;
  }
}
