import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character-list.interface';
import { CharacterService } from 'src/app/services/character.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterItemComponent } from '../character-item/character-item.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-character-list',
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
	standalone: true,
	imports: [NgbPaginationModule, CharacterItemComponent],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  page = 1;
  characterList: Character[] = [];

  constructor(private characterService: CharacterService){}
  
  onCharacterClicked(characterName: string){
    alert(characterName);
  }

  ngOnInit(): void {
    this.characterService.getCharacterList().subscribe(resp => {
      this.characterList = resp.docs;
    });
  }
  
}
