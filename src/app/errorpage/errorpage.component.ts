import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { TrialService } from '../Services/trial.service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css'],

})

export class ErrorpageComponent  {

  constructor(public trialservice: TrialService){}

  message = this.trialservice.message

}
