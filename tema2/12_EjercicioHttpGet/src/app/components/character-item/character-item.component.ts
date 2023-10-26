import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/models/character-list.interface';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent {

  @Input() character!: Character;
  @Output() characterClick = new EventEmitter<string>();

  getCharacterImage(){
    return this.character.Imagen;

    
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
