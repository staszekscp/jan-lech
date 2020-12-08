import {useState, useEffect} from 'react'

import dabrowski from '../assets/dabrowski.png';
import journalist from '../assets/marian.png';

import Conversation from './Conversation'
import './IKC.css';

function IKC(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationDabrowski, setConversationDabrowski] = useState(false)
  const [conversationJournalist, setConversationJournalist] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversationDabrowski(true)
    }, 5000)
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="ikc-background">
            {conversationDabrowski && <div><Conversation right={true} place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationDabrowski(true)}}>
                <img className="dabrowski-conversation" src={dabrowski} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationJournalist(true)}}>
                <img className="journalist" src={journalist} />
              </div>
            </div>
            }
            {conversationJournalist && <div><Conversation place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationJournalist(true)}}>
                <img className="journalist-conversation" src={journalist} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationDabrowski(true)}}>
                <img className="dabrowski" src={dabrowski} />
              </div>
            </div>
            }
            {(!conversationDabrowski && !conversationJournalist) && <div><div onClick={() => {setConversationDabrowski(true)}}>
                <img className="dabrowski" src={dabrowski} />
              </div>
              <div onClick={() => {setConversationJournalist(true)}}>
                <img className="journalist" src={journalist} />
              </div>
            </div>
            }
          <div className="location-overlay">
              Wchodzisz do holu siedziby Ilustrowanego Kuriera Coddziennego w Pałacu Prasy
          </div>
        </div>
      </div>
      
    );
  }
  
  export default IKC;