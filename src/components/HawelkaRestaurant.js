import {useState, useEffect} from 'react'

import waiter from '../assets/hawelka-kelner.png';
import boss from '../assets/hawelka-wlasciciel.png';

import Conversation from './Conversation'
import './Hawelka.css';

function HawelkaRestaurant(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationBoss, setConversationBoss] = useState(false)
  const [conversationWaiter, setConversationWaiter] = useState(false)
  const [numberBoss, setNumberBoss] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setConversationBoss(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if(props.progress.hawelka) {
      setNumberBoss(4)
    }
  }, [])

  const switchWaiter = () => {
    setConversationBoss(false)
    setConversationWaiter(true)
  }

  const switchBoss = () => {
    setConversationWaiter(false)
    setNumberBoss(3)
    setTimeout(() => {
      setConversationBoss(true)
    }, 1)
  }
  
  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    hawelka: true
  }))}

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="hawelka-background">
          {conversationBoss && <div><Conversation actionOne={actionOne} number={numberBoss} turnOff={switchWaiter} right={true} place="macharski" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {
                  setConversationBoss(true)
                }}>
                <img className="boss-hawelka-conversation" src={boss} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationWaiter(true)}}>
                <img className="waiter" src={waiter} />
              </div>
            </div>
            }
            {conversationWaiter && <div><Conversation number={1} turnOff={switchBoss} place="kelner" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationWaiter(true)}}>
                <img className="waiter-conversation" src={waiter} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="boss-hawelka" src={boss} />
              </div>
            </div>
            }
            {(!conversationBoss && !conversationWaiter) && <div>
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