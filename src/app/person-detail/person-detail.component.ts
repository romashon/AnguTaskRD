import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Person } from '../person';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})

export class PersonDetailComponent implements OnInit {
  @Input() person: Person;
  @Input() isModalShown: boolean;

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;

  constructor(private localStorageService: LocalStorageService) { }

  showModal(): void {
    this.isModalShown = true;
    this.localStorageService.store('isModalShown', true);
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
    this.localStorageService.store('isModalShown', false);
  }

  ngOnInit() { }
}
