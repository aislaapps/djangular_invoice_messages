import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { InvoiceMessage } from '../models/invoice-message';

@Injectable()
export class MessageResultsService {

  private apiURIReference='';
  private apiURICustomer='';
  private apiURI='messages/';

  constructor(private http: Http) {}

  public getMesssages(): Observable<InvoiceMessage[]>{
		return this.http
					.get(this.apiURI)
          .map((resp: Response) => resp.json());
	}

	// getMesssagesByReferenceNumber(referenceNumber: number): Observable<InvoiceMessage[]>{
	// 	return this.http
	// 				.get(`app/heroes/?reference=${referenceNumber}`)
	// 				.map((r: Response) => r.json().data as InvoiceMessage[]);
	// }
  //
  // getMesssagesByCustomer(customerNumber: string): Observable<InvoiceMessage[]>{
	// 	return this.http
	// 				.get(`app/heroes/?customer=${customerNumber}`)
	// 				.map((r: Response) => r.json().data as InvoiceMessage[]);
	// }

}
