import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { InvoiceMessage } from '../models/invoice-message';
import { MessageResultsService } from './message-results.service';

@Component({
  selector: 'app-message-results',
  templateUrl: './message-results.component.html',
  styleUrls: ['./message-results.component.css']
})
export class MessageResultsComponent implements OnInit {

  // messages: Observable<InvoiceMessage[]>;
  messages: InvoiceMessage[];
  // message: InvoiceMessage;
  constructor(
        private messageResultsService : MessageResultsService
  ){}

  ngOnInit() {
    this.searchResults();
    // console.log('messages:',this.messages[0]);
  }

  searchResults(): void {
      this.messageResultsService
          .getMesssages()
          .subscribe( messages => {
              this.messages = messages;
              console.log('amy this.messages:',this.messages);
            },
            error => {
              console.log('Error:', error.status, ' ', error.statusText);
            }
          )

  }

}
