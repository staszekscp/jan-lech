import {useState, useEffect} from 'react'

import client from '../assets/klient-hawelka.png';
import waiter from '../assets/hawelka-kelner.png';
import boss from '../assets/hawelka-wlasciciel.png';

import Conversation from './Conversation'
import './Hawelka.css';

function HawelkaRestaurant(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationBoss, setConversationBoss] = useState(false)
  const [conversationWaiter, setConversationWaiter] = useState(false)
  const [conversationClient, setConversationClient] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversationBoss(true)
    }, 5000)
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="hawelka-background">
          {conversationBoss && <div><Conversation right={true} place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="boss-hawelka-conversation" src={boss} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationClient(true)}}>
                <img className="client" src={client} />
              </div>
              <div onClick={() => {setConversationWaiter(true)}}>
                <img className="waiter" src={waiter} />
              </div>
            </div>
            }
            {conversationWaiter && <div><Conversation place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationWaiter(true)}}>
                <img className="waiter-conversation" src={waiter} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationClient(true)}}>
                <img className="client" src={client} />
              </div>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="boss-hawelka" src={boss} />
              </div>
            </div>
            }
            {conversationClient && <div><Conversation place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationClient(true)}}>
                <img className="client-conversation" src={client} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationWaiter(true)}}>
                <img className="waiter" src={waiter} />
              </div>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="boss-hawelka" src={boss} />
              </div>
            </div>
            }
            {(!conversationBoss && !conversationWaiter && !conversationClient) && <div><div onClick={() => {setConversationClient(true)}}>
                <img className="client" src={client} />
              </div>
              <div onClick={() => {setConversationWaiter(true)}}>
                <img className="waiter" src={waiter} />
              </div>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="boss-hawelka" src={boss} />
              </div>
            </div>
            }
          <div className="location-overlay">
              Wchodzisz do restauracji Hawełka przy Rynku
          </div>
          
        </div>
      </div>
      
    );
  }
  
  export default HawelkaRestaurant;