import logo from './logo.svg';
import { tarotCardJson } from './data/cardJson';
import './App.css';

// function getCardImages(tarotCardJson){
//   let lenCards = tarotCardJson.length;
//   for (i = 0; i< lenCards; i++) {
//     tarotCardJson[i].uri

//       return div class="grid-item">
//       <img src="images/{uri}" title="The Star" alt="The Star"></img>
//       </div>

//   }
// }

function isCardMajorArcana(card){
  if(card.tag == 'major'){return true;}
  else {return false;}
}



function App() {
  let uriPrefix = "images/"

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarot From The Divide</h1>
      </header>
      <h2>Major Arcana</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "major" ? (<div> 
              <img src={uriPrefix + card.uri} />
              <div>{card.name}</div>
            </div>) : null
          }

          )
        }
      </div>
      <h2>Suit of Fire</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "fire" ? (<div> 
              <img src={uriPrefix + card.uri} />
              <div>{card.name}</div>
            </div>) : null
          }

          )
        }
      </div>

      <h2>Suit of Air</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "air" ? (<div> 
              <img src={uriPrefix + card.uri} />
              <div>{card.name}</div>
            </div>) : null
          }

          )
        }
      </div>

      <h2>Suit of Water</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "water" ? (<div> 
              <img src={uriPrefix + card.uri} />
              <div>{card.name}</div>
            </div>) : null
          }

          )
        }
      </div>

      <h2>Suit of Earth</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "earth" ? (<div> 
              <img src={uriPrefix + card.uri} />
              <div>{card.name}</div>
            </div>) : null
          }

          )
        }
      </div>

    </div>
  );
}

export default App;
///Users/meganwotring/divide-tarot-app/src/images/star.jpg
///Users/meganwotring/divide-tarot-app/src/priestess.jpg