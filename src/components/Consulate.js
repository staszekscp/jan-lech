import {useState, useEffect} from 'react'

import worker from '../assets/konsulat-pracownica.png';
import guard from '../assets/konsulat-wozny.png';

import Conversation from './Conversation'
import './Consulate.css';

function Consulate(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationWorker, setConversationWorker] = useState(false)
  const [conversationGuard, setConversationGuard] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversationGuard(true)
    }, 5000)
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="consulate-background">
        {conversationWorker && <div><Conversation place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationWorker(true)}}>
                <img className="worker-consulate-conversation" src={worker} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationGuard(true)}}>
                <img className="guard-consulate" src={guard} />
              </div>
            </div>
            }
            {conversationGuard && <div><Conversation right={true} place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationGuard(true)}}>
                <img className="guard-consulate-conversation" src={guard} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationWorker(true)}}>
                <img className="worker-consulate" src={worker} />
              </div>
            </div>
            }
            {(!conversationGuard && !conversationWorker) && <div><div onClick={() => {setConversationWorker(true)}}>
                <img className="worker-consulate" src={worker} />
              </div>
              <div onClick={() => {setConversationGuard(true)}}>
                <img className="guard-consulate" src={guard} />
              </div>
            </div>
            }
            <div className="location-overlay">
              Wchodzisz do konsulatu Czechosłowacji na Gołębiej
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Consulate;