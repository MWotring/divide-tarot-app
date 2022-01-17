import React, {useState} from "react";
import ReactModal from "react-modal";
import { tarotCardJson } from './data/cardJson';
import './App.css';
import './Modal.css';
import Modal from 'react-modal/lib/components/Modal';
import { AiOutlineClose } from "react-icons/ai";


function App() {
  let uriPrefix = "images/"
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalChild, setModalChild] = useState(null);
  function getTitle(card) {
    if (card.tag === 'major') {
      return <div className='modal-title'>{card['tarot-number']+" "+card.name}</div>
    }
    else { return <div className='modal-title'>{card.name}</div>}
  }

  function openModal(card) { 
    setIsOpen(true)
    let imageChild = <div className="modal-div">
      <div className="image-container">
        <img className="cardImage" src={uriPrefix + card.uri}  alt={card.uri}/>
      </div>
      
      <div className="card-details-container">
        {getTitle(card)}
        <div className='modal-created-date'>{"Date completed: "+card.dateCompleted}</div>
        <div className='modal-dimension'>{"Dimensions in inches: "+card.size}</div>
        <div className='modal-text'>{card.text}</div>

        </div>
      </div>
    
    setModalChild(imageChild);
  }
  function closeModal() { setIsOpen(false) }
  Modal.setAppElement("#root")
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarot From The Divide</h1>
      </header>
      <Modal className="modal"
        isOpen={modalIsOpen}
        contentLabel="Tarot Card Detail Modal"
        onRequestClose={() => setIsOpen(false)}
      >
        
        <button className="closeButton" onClick={() => setIsOpen(false)}>
          <AiOutlineClose/>
          </button>  
        {modalChild}
      </Modal>
      <h2 className='header'>Major Arcana</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "major" ? (
            <div className='card-wrapper' onClick={()=> openModal(card)}> 
              <img src={uriPrefix + card.uri}  alt={card.uri}/>
              <div className='title'>{card['tarot-number']+" "+card.name}</div>
            </div>) : null
          }

          )
        }
      </div>
      <h2 className='header'>Suit of Fire</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "fire" ? (
            <div className='card-wrapper' onClick={()=> openModal(card)}>  
              <img src={uriPrefix + card.uri} alt={card.uri}/>
              <div className='title'>{card.name}</div>
            </div>) : null
          }

          )
        }
      </div>

      <h2 className='header'>Suit of Air</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "air" ? (
            <div className='card-wrapper' onClick={()=> openModal(card)}> 
              <img src={uriPrefix + card.uri} alt={card.uri}/>
              <div className='title'>{card.name}</div>
            </div>) : null
          }

          )
        }
      </div>

      <h2 className='header'>Suit of Water</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "water" ? (
            <div className='card-wrapper' onClick={()=> openModal(card)}>  
              <img src={uriPrefix + card.uri} alt={card.uri}/>
              <div className='title'>{card.name}</div>
            </div>) : null
          }

          )
        }
      </div>

      <h2 className='header'>Suit of Earth</h2>
      <div className='grid-container'>
        {
          tarotCardJson.map(card =>{
            return card.tag === "earth" ? (
            <div className='card-wrapper' onClick={()=> openModal(card)}> 
              <img src={uriPrefix + card.uri} alt={card.uri}/>
              <div className='title'>{card.name}</div>
            </div>) : null
          }

          )
        }
      </div>

    </div>
  );
}

export default App;
