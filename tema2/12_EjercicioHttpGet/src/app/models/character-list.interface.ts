// Generated by https://quicktype.io

export interface CharacterResponse {
    quote:              string;
    character:          string;
    image:              string;
    characterDirection: CharacterDirection;
}

export enum CharacterDirection {
    Left = "Left",
    Right = "Right",
}