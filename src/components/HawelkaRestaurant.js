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
  const [styleWaiter, setStyleWaiter] = useState(1)
  const [styleBoss, setStyleBoss] = useState(1)

  let classWaiter = styleWaiter === 1 ? "waiter-start" : styleWaiter === 2 ? "waiter-conversation" : "waiter"
  let classBoss = styleBoss === 1 ? "boss-hawelka-start" : styleBoss === 2 ? "boss-hawelka-conversation" : "boss-hawelka"


  useEffect(() => {
    setTimeout(() => {
      setStyleBoss(2)
      setConversationBoss(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if(props.progress.hawelka) {
      setNumberBoss(4)
    }
  }, [])

  const switchWaiter = () => {
    setStyleBoss(3)
    setConversationBoss(false)
    setTimeout(() => {
      setStyleWaiter(2)
      setConversationWaiter(true)
      setStyleBoss(1)
    }, 1000)
  }

  const switchBoss = () => {
    setStyleWaiter(3)
    setConversationWaiter(false)
    setNumberBoss(3)
    setTimeout(() => {
      setStyleBoss(2)
      setConversationBoss(true)
      setStyleWaiter(1)
    }, 1000)
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
                <img className={classBoss} src={boss} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationWaiter(true)}}>
                <img className={classWaiter} src={waiter} />
              </div>
            </div>
            }
            {conversationWaiter && <div><Conversation number={1} turnOff={switchBoss} place="kelner" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationWaiter(true)}}>
                <img className={classWaiter} src={waiter} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className={classBoss} src={boss} />
              </div>
            </div>
            }
            {(!conversationBoss && !conversationWaiter) && <div>
              <div onClick={() => {setConversationWaiter(true)}}>
                <img className={classWaiter} src={waiter} />
              </div>
              <div onClick={() => {setConversationBoss(true)}}>
                <img className={classBoss} src={boss} />
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