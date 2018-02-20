import { Component, OnInit, Input, TemplateRef } from '@angular/core';
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
  constructor(private modalService: BsModalService) { }

// open modal window with advanced information (used ngx-bootstrap)
openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}

  ngOnInit() {
  }

}
