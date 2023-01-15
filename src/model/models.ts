export interface License {
  name: string
  url: string
}

export interface Phonetic {
  audio: string
  sourceUrl: string
  license: License
  text: string
}

export interface Definition {
  definition: string
  synonyms: any[]
  antonyms: any[]
  example: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

export interface License2 {
  name: string
  url: string
}

export interface ServerResponse {
  word: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License2
  sourceUrls: string[]
}
