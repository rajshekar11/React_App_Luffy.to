import React from 'react'
import Form from './Form';

export default function About() {
    const onePieceCharacters = [
        {
          name: 'Monkey D. Luffy',
          image: 'https://freepngimg.com/thumb/one_piece/23231-5-one-piece-chibi-image-thumb.png',
          description: 'The main protagonist of One Piece and captain of the Straw Hat Pirates.',
        },
        {
          name: 'Roronoa Zoro',
          image: 'https://freepngimg.com/thumb/one_piece/23405-8-one-piece-chibi-thumb.png',
          description: 'A swordsman and member of the Straw Hat Pirates.',
        },
        {
          name: 'Nami',
          image: 'https://freepngimg.com/thumb/one_piece/22969-5-one-piece-logo-photos-thumb.png',
          description: 'The navigator of the Straw Hat Pirates.',
        },
        {
          name: 'Usopp',
          image: 'https://freepngimg.com/thumb/one_piece/23120-7-one-piece-chibi-clipart-thumb.png',
          description: 'A sniper and member of the Straw Hat Pirates.',
        },
        {
          name: 'Sanji',
          image: 'https://freepngimg.com/thumb/one_piece/23197-3-one-piece-sanji-transparent-thumb.png',
          description: 'A chef and member of the Straw Hat Pirates.',
        },
        {
          name: 'Tony Tony Chopper',
          image: 'https://freepngimg.com/thumb/one_piece/23369-9-one-piece-chibi-transparent-background-thumb.png',
          description: 'A reindeer who ate the Human-Human Fruit and joined the Straw Hat Pirates.',
        },
        {
          name: 'Nico Robin',
          image: 'https://freepngimg.com/thumb/one_piece/90550-monkey-nami-top-character-fictional-nico-luffy-thumb.png',
          description: 'An archaeologist and member of the Straw Hat Pirates.',
        },
        {
          name: 'Franky',
          image: 'https://freepngimg.com/thumb/one_piece/22969-5-one-piece-logo-photos-thumb.png',
          description: 'A cyborg and shipwright of the Straw Hat Pirates.',
        },
        {
          name: 'Brook',
          image: 'https://freepngimg.com/thumb/one_piece/87811-monkey-usopp-character-brook-fictional-costume-luffy-thumb.png',
          description: 'A musician and swordsman of the Straw Hat Pirates.',
        },
        {
          name: 'Jinbe',
          image: 'https://freepngimg.com/thumb/one_piece/22969-5-one-piece-logo-photos-thumb.png',
          description: 'A fish-man karate master and helmsman of the Straw Hat Pirates.',
        }
        // Add more character objects as needed
      ];
      
  return (
    <div className='container text-center'>
      <h1>About Anime</h1>
      <p>
        Anime refers to a style of animation originating from Japan. It encompasses various genres, including action,
        adventure, romance, and more. One Piece is a popular anime series known for its epic adventure, captivating
        storyline, and memorable characters.
      </p>
      <h2>One Piece Characters</h2>
      <div >
      <div className="row">
        {onePieceCharacters.map((character) => (
          <div className="col-sm-3" key={character.name}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            <p>{character.description}</p>
          </div>
        ))}
      </div>
      </div>
      <Form></Form>
    </div>
  )
}
