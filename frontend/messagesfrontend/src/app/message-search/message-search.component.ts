import {Component, Input, OnInit} from '@angular/core';
import { InvoiceMessage } from '../models/invoice-message';
import { MessageResultsComponent } from '../message-results/message-results.component';

@Component({
  selector: 'app-message-search',
  templateUrl: './message-search.component.html',
  styleUrls: ['./message-search.component.css']
})
export class MessageSearchComponent implements OnInit {

  @Input()
  messages = InvoiceMessage;

  constructor() { }

  ngOnInit() {
  }

  searchAll(){
    console.log("here in sear all")
  }

  searchReference(mess: InvoiceMessage): void {
    console.log("here in sear ref:" + mess.referenceNumber)
  }

  searchCustomer(mess: InvoiceMessage): void {
    console.log("here in sear cust:" + mess.customerNumber)
  }
}
