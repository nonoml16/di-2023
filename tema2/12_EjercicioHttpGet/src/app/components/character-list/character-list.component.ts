import { Component, OnInit } from '@angular/core';
import { CharacterResponse } from 'src/app/models/character-list.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  characterList: string = "";

  constructor(private characterService: CharacterService){}
  
  ngOnInit(): void {
    this.characterService.getCharacterList().subscribe(resp => {
      this.characterList = resp.character;
    })
  }
  
}
