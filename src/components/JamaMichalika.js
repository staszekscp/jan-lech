import {useState, useEffect} from 'react'

import zelenski from '../assets/boy-zelenski.png';
import mehoffer from '../assets/mehoffer.png';

import Conversation from './Conversation'
import './Jama.css';

function JamaMichalika(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationMehoffer, setConversationMehoffer] = useState(false)
  const [conversationZelenski, setConversationZelenski] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversationMehoffer(true)
    }, 5000)
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="jama-background">
        {conversationMehoffer && <div><Conversation right={true} place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationMehoffer(true)}}>
                <img className="mehoffer-conversation" src={mehoffer} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationZelenski(true)}}>
                <img className="zelenski" src={zelenski} />
              </div>
            </div>
            }
            {conversationZelenski && <div><Conversation place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationZelenski(true)}}>
                <img className="zelenski-conversation" src={zelenski} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationMehoffer(true)}}>
                <img className="mehoffer" src={mehoffer} />
              </div>
            </div>
            }
            {(!conversationMehoffer && !conversationZelenski) && <div><div onClick={() => {setConversationZelenski(true)}}>
                <img className="zelenski" src={zelenski} />
              </div>
              <div onClick={() => {setConversationMehoffer(true)}}>
                <img className="mehoffer" src={mehoffer} />
              </div>
            </div>
            }
          <div className="location-overlay">
              Wchodzisz do Jamy Michalika
          </div>
        </div>
      </div>
    );
  }
  
  export default JamaMichalika;