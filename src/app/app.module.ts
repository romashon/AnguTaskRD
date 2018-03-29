import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonService } from './person.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2Webstorage } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    Ng2Webstorage
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
