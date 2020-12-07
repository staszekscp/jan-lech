import {useState} from 'react'

import worker from '../assets/konsulat-pracownica.png';
import guard from '../assets/konsulat-wozny.png';
import '../App.css';

function Consulate() {

  const [fadeOut, setFadeOut] = useState(false)
  const [guardConversation, setGuardConversation] = useState(true)

    return (
      <div className="main">
        <div className="consulate-background">
          <div className="worker-consulate">
            <img className="worker-consulate-size" src={worker} />
          </div>
          <div className="guard-consulate">
            <img className="guard-consulate-size" src={guard} />
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Consulate;