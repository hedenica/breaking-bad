import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../Ui/Spinner';

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
      <section className="cards">
        {characters.map(character => (
          <CharacterItem key={character.char_id} character={character}></CharacterItem>
        ))}
      </section>)
}

export default CharacterGrid
