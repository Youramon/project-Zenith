import { Component } from '@angular/core';
import { seiten, setTabs, setNames } from '../../meine-Dateien/db';
import { FaunadbService } from '../../services/faunadb.service';
import { setCurrentPage} from '../../meine-Dateien/constants';



@Component({
  selector: 'app-sidemenu-vertrau',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu-vertrau.component.html',
  styleUrl: './sidemenu-vertrau.component.less'
})
export class SidemenuVertrauComponent {
constructor(private faunadb: FaunadbService){
}
  seitenn:any = seiten;
async auswahl(angriff: any){
  setTabs(await this.faunadb.listSync(angriff));
  setNames();
  setCurrentPage(angriff);
}
}
