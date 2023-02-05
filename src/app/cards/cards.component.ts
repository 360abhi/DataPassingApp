import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/card.service';
import { TrialService } from '../Services/trial.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: []
})
export class CardsComponent {

    cards;
  

    constructor(private _cardservice: CardService, private _trialservice: TrialService){
      this.cards = this._cardservice.getDetails();
      
    }
 
  
    change(target:string): void {
     this._trialservice.message = target;
     console.log(this._trialservice.message)
    }

    gotoView(target: HTMLInputElement) : void{
      target.scrollIntoView({behavior: 'smooth'});
    }
    
}
