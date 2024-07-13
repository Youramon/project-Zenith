import { Component, EventEmitter, Input, Output } from '@angular/core';
import  *as db from '../../meine-Dateien/db';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FaunadbService } from '../../services/faunadb.service';
import { currentPage } from '../../meine-Dateien/constants';


@Component({
  selector: 'app-fighter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AsyncPipe, MatAutocompleteModule],
  templateUrl: './fighter.component.html',
  styleUrl: './fighter.component.less'
})
export class FighterComponent {
[x: string]: any;
  @Output() raflkapter = new EventEmitter();
  control = new FormControl("");
  names: string[] = db.names;
  gefilterteKaempfer!: Observable<string[]>;
  @Input() objekt!: any;
  a = db.faction;

constructor(private faunadb: FaunadbService) { }

ngOnInit() {
  this.gefilterteKaempfer = this.control.valueChanges.pipe(
    startWith(""),
    map(value => this._filter(value || '')),
  );
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.names.filter(meow => this._normalizeValue(meow).includes(filterValue));
  }
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  roflkopter(event: MatAutocompleteSelectedEvent){
    const wert = event.option.value;
    this.objekt = db.tabs.find(x => x.name === wert);
    this.raflkapter.emit(this.objekt);
  }
  public grrr(): void{
    console.log("grrr");
  }
get currentPage() { return currentPage; }
  async knopfGedrueckt(knopf: KeyboardEvent, رُفلّكوبطر: string){
    if(knopf.key === "Enter" && currentPage === "boxing"){
        let antwort = await this.faunadb.find(رُفلّكوبطر);
        this.raflkapter.emit(antwort);
        this.objekt = antwort.data.data[0];
    }
  }
}
