import {useState} from 'react'

import Conversation from './Conversation'
import neighbor from '../assets/sasiad-3.png';
import './NeighborOne.css';

function NeighborOne(props) {

  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)

    return (
      <div className="main">
        <div className="neighbor-one-background" >
        {conversation && <Conversation place="home" current={props.current} back={props.back}/>}
          <div className="wife" onClick={() => {setConversation(true)}}>
            <img src={neighbor} />
          </div>
          {conversation && <div className="backdrop-opacity"/>}
        </div>
      </div>
    );
  }
  
  export default NeighborOne;