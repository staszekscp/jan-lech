import {useState, useEffect} from 'react'

import boss from '../assets/szef-browar.png';
import guard from '../assets/straznik-browaru.png';

import Conversation from './Conversation'
import './Brewery.css';

function Brewery(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationBoss, setConversationBoss] = useState(false)
  const [conversationGuard, setConversationGuard] = useState(false)
  const [numberGuard, setNumberGuard] = useState(1)
  const [styleGuard, setStyleGuard] = useState(1)
  const [styleBoss, setStyleBoss] = useState(1)

  let classGuard = styleGuard === 1 ? "brewery-guard-start" : styleGuard === 2 ? "brewery-guard-conversation" : "brewery-guard"
  let classBoss = styleBoss === 1 ? "brewery-boss-start" : styleBoss === 2 ? "brewery-boss-conversation" : "brewery-boss"


  useEffect(() => {
    setTimeout(() => {
      setStyleGuard(2)
      setConversationGuard(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if(props.progress.visitBrewery) {
      setNumberGuard(7)
    }
  }, [])

  const switchToGuard = () => {
    setStyleBoss(3)
    setConversationBoss(false)
    if (props.progress.visitBrewery) {
      setNumberGuard(5)
    }
    setTimeout(() => {
      setStyleGuard(2)
      setConversationGuard(true)
      setStyleBoss(1)
    }, 1000)
  }

  const switchToBoss = () => {
    setStyleGuard(3)
    setConversationGuard(false)
    setTimeout(() => {
      setStyleBoss(2)
      setConversationBoss(true)
      setStyleGuard(1)
    }, 1000)
  }

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    visitBrewery: true
  }))}

  
    return (
      <div className={fadeOut?"out":"main"}>
        <div className="brewery-background">
          {conversationBoss && <div><Conversation progress={props.progress} turnOff={switchToGuard} number={1} place="szef-browar" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div >
                <img className={classBoss} src={boss} />
              </div>
            </Conversation>
              <div >
                <img className={classGuard} src={guard} />
              </div>
            </div>
            }
            {conversationGuard && <div><Conversation progress={props.progress} turnOff={switchToBoss} number={numberGuard} actionOne={actionOne} right={true} place="straznik" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div >
                <img className={classGuard} src={guard} />
              </div>
            </Conversation>
              <div >
                <img className={classBoss} src={boss} />
              </div>
            </div>
            }
            {(!conversationGuard && !conversationBoss) && <div><div >
                <img className={classBoss} src={boss} />
              </div>
              <div >
                <img className={classGuard} src={guard} />
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