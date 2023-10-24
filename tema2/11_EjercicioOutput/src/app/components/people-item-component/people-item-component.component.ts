import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/people-detail.interface';

@Component({
  selector: 'app-people-item-component',
  templateUrl: './people-item-component.component.html',
  styleUrls: ['./people-item-component.component.css']
})
export class PeopleItemComponentComponent {

  @Input() person!: Person;
  @Output() personClick = new EventEmitter<string>();

  getPersonImage() {
    const personId = this.person.url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`;
  }

  viewPersonDetail() {
    this.personClick.emit(this.person.name);
  }

  title = '';
  constructor(private modalService: NgbModal) { }

  open(modal: any) {
    this.title = 'Hola Mundo';
    this.modalService.open(modal,
      {
        keyboard: true
      });
  }
}
