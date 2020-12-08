import {useState, useEffect} from 'react'

import boss from '../assets/szef-browar.png';
import guard from '../assets/straznik-browaru.png';

import Conversation from './Conversation'
import './Brewery.css';

function Brewery(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationBoss, setConversationBoss] = useState(false)
  const [conversationGuard, setConversationGuard] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversationGuard(true)
    }, 5000)
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="brewery-background">
          {conversationBoss && <div><Conversation place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="brewery-boss-conversation" src={boss} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationGuard(true)}}>
                <img className="brewery-guard" src={guard} />
              </div>
            </div>
            }
            {conversationGuard && <div><Conversation right={true} place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationGuard(true)}}>
                <img className="brewery-guard-conversation" src={guard} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="brewery-boss" src={boss} />
              </div>
            </div>
            }
            {(!conversationGuard && !conversationBoss) && <div><div onClick={() => {setConversationBoss(true)}}>
                <img className="brewery-boss" src={boss} />
              </div>
              <div onClick={() => {setConversationGuard(true)}}>
                <img className="brewery-guard" src={guard} />
              </div>
            </div>
            }
            <div className="location-overlay">
              Wkraczasz do zatłoczonej restauracji pełnej podpitych ludzi
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Brewery;