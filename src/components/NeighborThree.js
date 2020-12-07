import {useState} from 'react'

import Conversation from './Conversation'
import neighbor from '../assets/sasiad-1.png';
import './NeighborThree.css';

function NeighborThree(props) {

  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)

    return (
      <div className="main">
        <div className="neighbor-three-background" >
          {conversation && <Conversation place="home" current={props.current} back={props.back}/>}
          <div className="neighbor3" onClick={() => {setConversation(true)}}>
            <img className="neighbor-size3" src={neighbor} />
          </div>
          {conversation && <div className="backdrop-opacity"/>}
        </div>
      </div>
    );
  }
  
  export default NeighborThree;