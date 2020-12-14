import {useState, useEffect} from 'react'

import boss from '../assets/szef.png';
import coworker from '../assets/krowodrza-pracownik.png';

import Conversation from './Conversation'
import './Krowodrza.css';

function Krowodrza(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationBoss, setConversationBoss] = useState(false)
  const [conversationCoworker, setConversationCoworker] = useState(false)
  const [numberBoss, setNumberBoss] = useState(1)
  const [numberWorker, setNumberWorker] = useState(1)
  const [styleWorker, setStyleWorker] = useState(1)
  const [styleBoss, setStyleBoss] = useState(1)

  let classWorker = styleWorker === 1 ? "krowodrza-coworker-start" : styleWorker === 2 ? "krowodrza-coworker-conversation" : "krowodrza-coworker"
  let classBoss = styleBoss === 1 ? "krowodrza-boss-start" : styleBoss === 2 ? "krowodrza-boss-conversation" : "krowodrza-boss"


  const switchToWorker = () => {
    setStyleBoss(3)
    setConversationBoss(false)
    if (props.progress.workerConversation) {
      setNumberWorker(4)
    }
    setTimeout(() => {
      setStyleWorker(2)
      setConversationCoworker(true)
      setStyleBoss(1)
    }, 1000)
  }

  const switchToBoss = () => {
    setStyleWorker(3)
    setConversationCoworker(false)
    setNumberBoss(8)
    setTimeout(() => {
      setStyleBoss(2)
      setConversationBoss(true)
      setStyleWorker(1)
    }, 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      setStyleBoss(2)
      setConversationBoss(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if (props.progress.workerConversation){
      setNumberBoss(9)
    }
  }, [])

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    unemployed: true
  }))}

  const actionOneW = () => {
    props.setProgress(prev => ({
    ...prev,
    workerConversation: true
  }))}

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="krowodrza-background">
            {conversationBoss && <div><Conversation turnOff={switchToWorker} actionOne={actionOne} number={numberBoss} right={true} place="szef-krowodrza" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div >
                <img className={classBoss} src={boss} />
              </div>
            </Conversation>
              <div >
                <img className={classWorker} src={coworker} />
              </div>
            </div>
            }
            {conversationCoworker && <div><Conversation turnOff={switchToBoss} actionOne={actionOneW} number={numberWorker} place="pracownik-krowodrza" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div >
                <img className={classWorker} src={coworker} />
              </div>
            </Conversation>
              <div >
                <img className={classBoss} src={boss} />
              </div>
            </div>
            }
            {(!conversationCoworker && !conversationBoss) && <div><div >
                <img className={classBoss} src={boss} />
              </div>
              <div >
                <img className={classWorker} src={coworker} />
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