import { Component, OnInit } from '@angular/core';
import { Character, CharacterResponse } from 'src/app/models/character-list.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
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
