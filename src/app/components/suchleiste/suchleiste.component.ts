import { Component, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FaunadbService } from '../../services/faunadb.service';
import { FormsModule } from '@angular/forms';
import { FighterComponent } from '../fighter/fighter.component';
import {counter} from '../../meine-Dateien/constants';

@Component({
  selector: 'app-suchleiste',
  standalone: true,
  imports: [MatIconModule, FormsModule, FighterComponent],
  templateUrl: './suchleiste.component.html',
  styleUrl: './suchleiste.component.less'
})
export class SuchleisteComponent {
  searchText: string = "";
  showDings: boolean = false;
  existiert: boolean = false;
  fights = computed(() =>  counter());
response: any;
constructor(private faunadb: FaunadbService){
}

async searchFunction() {
  this.response = await this.faunadb.find(this.searchText.trim());
  try {
    if(this.response.data.data[0].name){
  this.existiert = true;
    }
  }
  catch (error)
  {
    this.existiert = false;
  }
    
this.showDings = true;
  // Your search logic here
  const inputField = document.querySelector('.search-input');
  // Add animation class (replace with your animation library)
  inputField?.classList.add('search-animation');
  setTimeout(() => {
    inputField?.classList.remove('search-animation');
  }, 1000); // Adjust animation duration as desired
}

}
