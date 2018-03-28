import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Person } from '../person';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})

export class PersonDetailComponent implements OnInit {
  modalRef: BsModalRef;
  @Input() person: Person;
  @Input() isModalShown: boolean;

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;

  constructor(private modalService: BsModalService,
            private cookieService: CookieService) { }

  // open modal window with advanced information (used ngx-bootstrap)
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  showModal(): void {
    this.isModalShown = true;
    this.cookieService.set('isModalShown', 'true');
  }

  hideModal(): void {
    this.autoShownModal.hide();
    //this.cookieService.set('isModalShown', 'false');
  }

  onHidden(): void {
    this.isModalShown = false;
    this.cookieService.set('isModalShown', '');
  }

  ngOnInit() { }
}
