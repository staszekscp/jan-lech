import {useState, useEffect} from 'react'

import Conversation from './Conversation'
import neighbor from '../assets/sasiad-3.png';
import './NeighborOne.css';

function NeighborOne(props) {

  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversation(true)
    }, 5000)
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="neighbor-one-background" >
        {conversation ? <Conversation right={true} place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
          <div className="stelmach-conversation" onClick={() => {setConversation(true)}}>
            <img src={neighbor} />
          </div>
          </Conversation> :
          <div className="stelmach" onClick={() => {setConversation(true)}}>
            <img src={neighbor} />
          </div>}
          
          <div className="location-overlay">
            Wchodzisz do mieszkania Stelmacha
          </div>
        </div>
      </div>
    );
  }
  
  export default NeighborOne;