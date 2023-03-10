export default interface PokemonInterface{
    name: string,
    abilities: Array<Abilities>,
    moves: Array<Moves>,
    id: number,
    types: Array<Types>,
    sprites: {
      front_default: string
    }
  }
  
  interface Abilities {
    ability: {
      name: string,
      url: string,
    }
  }
  
  interface Moves {
    move: {
      name: string,
      url: string
    }
  }
  
  interface Types {
    type: {
      name: string,
      url: string
    }
  }
  
  interface Sprite {
    front_default: string
  }