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
  ifCookieSet: boolean = false;  // flag. True when cookie is set
  constructor(  private personService: PersonService,
                private cookieService: CookieService) { }

  ngOnInit() {
     this.getPersons();
  }

  // Get persons from service
  getPersons(): void {
    this.personService.getPersons().subscribe(persons => {this.persons = persons;
    if (this.persons) this.cookieCheck(); });
  }

  // If cookies aren't empty --> define the selectedPerson from cookies
  cookieCheck() :void {
      if (this.cookieService.check('personid'))
      {
                  for (var i=0; i<this.persons.length;i++) {
                      if (this.persons[i].id == this.cookieService.get('personid')) {
                          this.selectedPerson = this.persons[i];
                          this.ifCookieSet = true;
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
