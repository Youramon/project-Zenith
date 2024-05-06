import { Component } from '@angular/core';
import { handleKampf } from '../../meine-Dateien/handleKampf';
import * as db from '../../meine-Dateien/db';
import { ZahlenService } from '../../zahlen.service';
import { FighterComponent } from '../fighter/fighter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
 
handleFight(){
 if (this.result != undefined){
  this.change = handleKampf(this.ObjektEins.eloRating, this.ObjektZwei.eloRating, this.result); 
  this.ObjektEins.eloRating += this.change;
  this.ObjektZwei.eloRating -= this.change;
  this.ObjektEins.record[2- 2*this.result]++;
  this.ObjektZwei.record[2*this.result]++;
  db.tabs.sort((a, b) => b.eloRating - a.eloRating);
  db.setNames();
  localStorage.setItem("tabs", JSON.stringify(db.tabs));
  this.dialogRef.close();
 }
}
handleRaflkapter1(value: any){
  this.ObjektEins = value;
}
handleRaflkapter2(value: any){
  this.ObjektZwei = value;
}
  constructor(public zahlen: ZahlenService,public dialogRef: MatDialogRef<DialogueComponent>){
    while(this.ObjektZwei === this.ObjektEins)
    {
      this.ObjektZwei= this.tabs[this.zahlen.random(0, db.tabs.length - 1)];
    }
  }
  get tabs() {
    return db.tabs;
  }
}
