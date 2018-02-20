import { Component, OnInit } from "@angular/core";
import { Person } from "../person";
import { PersonService } from "../person.service";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons =[];                  // all persons from responce
  selectedPerson : Person;      // person who was selected
  loadResult: boolean = false;  // flag. True when persons are not empty
  constructor(  private personService: PersonService,
                private cookieService: CookieService) { }

  ngOnInit() {
     this.getPersons();
    // this.cookieCheck();   //don't work :(
  }

  // Get persons from service
  getPersons(): void {
    this.personService.getPersons().subscribe(persons => this.persons = persons);
  }

  // If cookies aren't empty --> check person
  cookieCheck() :void {
      if (this.cookieService.check('personid'))
      {
          while (this.loadResult == false) {
              this.personCheck();
          }
      }
  }

  // If persons are loaded --> define the selectedPerson from cookie
  personCheck () : void {
      if ( this.persons.length > 0) {
          this.loadResult = true;
          for (var i=0; i<this.persons.length;i++) {
              if (this.persons[i].id == this.cookieService.get('personid')) {
                  this.selectedPerson = this.persons[i];
              }
          }
     }
  }

  // When selected --> define selectedPerson
  onSelect(person:Person): void {
      this.selectedPerson = person;
      this.cookieService.set('personid', this.selectedPerson.id);
  }
}
