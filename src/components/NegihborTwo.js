import {useState} from 'react'

import Conversation from './Conversation'
import neighborM from '../assets/sasiad-2.png';
import neighborF from '../assets/sasiadka-2.png';
import './NeighborTwo.css';

function NeighborTwo(props) {

  const [fadeOut, setFadeOut] = useState(false)
  const [conversation1, setConversation1] = useState(false)
  const [conversation2, setConversation2] = useState(false)

    return (
      <div className="main">
        <div className="neighbor-two-background">
          {(conversation1 || conversation2) && <Conversation place="home" current={props.current} back={props.back}/>}
          <div onClick={() => {setConversation2(true)}}>
            <img className={conversation2 ? "neighbor2-conversation" : "neighbor2"} src={neighborM} />
          </div>
          <div onClick={() => {setConversation1(true)}}>
            <img className={conversation1 ? "neighbor1-conversation" : "neighbor1"} src={neighborF} />
          </div>
          {(conversation1 || conversation2) && <div className="backdrop-opacity"/>}
        </div>
      </div>
    );
  }
  
  export default NeighborTwo;