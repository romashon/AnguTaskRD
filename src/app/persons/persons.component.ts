import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons = [];                // all persons from responce
  selectedPerson: Person;      // person who was selected
  isModalShown = false;        // flag. True if modal is shown
  constructor(private personService: PersonService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.getPersons();
  }

  // Get persons from service
  getPersons(): void {
    this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
      if (this.persons) {
        this.cookieCheck();
      }
    });
  }

  // If cookies aren't empty --> define the selectedPerson from cookies
  cookieCheck(): void {
    if (this.localStorageService.retrieve('personid') !== undefined) {
      for (let i = 0; i < this.persons.length; i++) {
        if (this.persons[i].id === this.localStorageService.retrieve('personid')) {
          this.selectedPerson = this.persons[i];
          this.isModalShown = this.localStorageService.retrieve('isModalShown');
        }
      }
    }
  }

  // When selected --> define selectedPerson
  onSelect(person: Person): void {
    this.selectedPerson = person;
    this.localStorageService.store('personid', this.selectedPerson.id);
  }
}
