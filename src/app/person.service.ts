import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Person } from "./person";


@Injectable()
export class PersonService {
    private personsUrl = 'http://jsonplaceholder.typicode.com/users';
  constructor (private http: HttpClient) { }

  // service's method for get data from url (async)
  getPersons (): Observable<Person[]> {
  return this.http.get<Person[]>(this.personsUrl);
  }
 }
