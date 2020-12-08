import {useState, useEffect} from 'react'

import boss from '../assets/szef.png';
import coworker from '../assets/krowodrza-pracownik.png';

import Conversation from './Conversation'
import './Krowodrza.css';

function Krowodrza(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationBoss, setConversationBoss] = useState(false)
  const [conversationCoworker, setConversationCoworker] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversationBoss(true)
    }, 5000)
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="krowodrza-background">
            {conversationBoss && <div><Conversation right={true} place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="krowodrza-boss-conversation" src={boss} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationCoworker(true)}}>
                <img className="krowodrza-coworker" src={coworker} />
              </div>
            </div>
            }
            {conversationCoworker && <div><Conversation place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationCoworker(true)}}>
                <img className="krowodrza-coworker-conversation" src={coworker} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="krowodrza-boss" src={boss} />
              </div>
            </div>
            }
            {(!conversationCoworker && !conversationBoss) && <div><div onClick={() => {setConversationBoss(true)}}>
                <img className="krowodrza-boss" src={boss} />
              </div>
              <div onClick={() => {setConversationCoworker(true)}}>
                <img className="krowodrza-coworker" src={coworker} />
              </div>
            </div>
            }
            <div className="location-overlay">
              Podchodzisz do rogatki przy ul. Łokietka
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Krowodrza;