import React from 'react';
import Board from './components/Board';
import Card from './components/Card';
import {useState} from 'react';

const App = () => {
  const [Name, setName] = useState("")
  const [Age, setAge] = useState("")
  const [Colour, setColour] = useState("")
  const [cards, setCards] = useState([])

  const handleAddCard = (e) => {
      e.preventDefault();

      setCards(cards => [...cards, { name: Name, age : Age, colour : Colour }])
  }

  return (
      <div className="App">
        <main className="flexbox">
  
          <Board id="board-1" className="board">
              <div>
                  <input
                      type="text"
                      placeholder="Name"
                      value={Name}
                      onChange={e => setName(e.target.value)}
                      className="input"
                  />
                  <input
                      type="text"
                      placeholder="Age"
                      value={Age}
                      onChange={e => setAge(e.target.value)}
                      className="input"
                  />
                  <input
                      type="text"
                      placeholder="Favourite Colour"
                      value={Colour}
                      onChange={e => setColour(e.target.value)}
                      className="input"
                  />
              </div>
              <button
                  type="button"
                  onClick={handleAddCard}
                  className="small"
              >
                  Add Card
              </button>
          
          {cards.map(c => (
              <Card 
                id={c.name} 
                className="card" 
                draggable="true">
                  <p>{c.name}</p>
                  <p>{c.age}</p>
                  <p>{c.colour}</p>
              </Card>
          ))}
          
          </Board>
  
          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true">
              <p>Right Card</p>
            </Card>
          </Board>
        </main>
      </div>
  )
}

export default App;