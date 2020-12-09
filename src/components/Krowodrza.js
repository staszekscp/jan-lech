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

  const switchToWorker = () => {
    setConversationBoss(false)
    if (props.progress.workerConversation) {
      setNumberWorker(4)
    }
    setTimeout(() => {
      setConversationCoworker(true)
    }, 1)
  }

  const switchToBoss = () => {
    setConversationCoworker(false)
    setNumberBoss(8)
    setTimeout(() => {
      setConversationBoss(true)
    }, 1)
  }

  useEffect(() => {
    setTimeout(() => {
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
              <div onClick={() => {setConversationBoss(true)}}>
                <img className="krowodrza-boss-conversation" src={boss} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationCoworker(true)}}>
                <img className="krowodrza-coworker" src={coworker} />
              </div>
            </div>
            }
            {conversationCoworker && <div><Conversation turnOff={switchToBoss} actionOne={actionOneW} number={numberWorker} place="pracownik-krowodrza" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
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