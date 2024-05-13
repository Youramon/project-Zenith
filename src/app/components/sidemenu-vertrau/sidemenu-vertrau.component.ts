import { Component } from '@angular/core';
import { seiten } from '../../meine-Dateien/db';



@Component({
  selector: 'app-sidemenu-vertrau',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu-vertrau.component.html',
  styleUrl: './sidemenu-vertrau.component.less'
})
export class SidemenuVertrauComponent {
seitenn:any = seiten;
raflkapter(event: any){
  console.log(event);
}
}
