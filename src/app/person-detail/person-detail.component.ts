import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Person } from '../person';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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

  constructor(private modalService: BsModalService) { }

  // open modal window with advanced information (used ngx-bootstrap)
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }

  ngOnInit() { }
}
