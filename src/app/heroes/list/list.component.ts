import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk','Capitan america', 'Wolwerine']
  public deleteHero?:string;

  removeHero():void{
     this.deleteHero = this.heroNames.pop();   
  }
}
