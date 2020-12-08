import {useState, useEffect} from 'react'

import director from '../assets/bank-dyrektor.png';

import Conversation from './Conversation'
import './Bank.css';

function Bank(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversation(true)
    }, 5000)
  }, [])

  return (
    <div className={fadeOut?"out":"main"}>
      <div className="bank-background">
        {conversation ? <Conversation place="home" current={props.current} back={props.back} setFadeOut={setFadeOut}>
          <div onClick={() => {setConversation(true)}}>
            <img className="bank-boss-conversation" src={director} />
          </div>
          </Conversation> :
          <div onClick={() => {setConversation(true)}}>
            <img className="bank-boss" src={director} />
          </div>}
          <div className="location-overlay">
              Wkraczasz do banku Pekao przy Pijarskiej 1
          </div>
      </div>
    </div>
    
  );
}

export default Bank;