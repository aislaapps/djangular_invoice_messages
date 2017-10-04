import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MessageSearchComponent } from './message-search/message-search.component';
import { MessageResultsComponent } from './message-results/message-results.component';
import { MessageResultsService } from './message-results/message-results.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserInfoService } from './user-info/user-info.service'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MessageSearchComponent,
    MessageResultsComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MessageResultsService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
