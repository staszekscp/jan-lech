import {useState, useEffect} from 'react'

import zelenski from '../assets/boy-zelenski.png';
import mehoffer from '../assets/mehoffer.png';

import Conversation from './Conversation'
import './Jama.css';

function JamaMichalika(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationMehoffer, setConversationMehoffer] = useState(false)
  const [conversationZelenski, setConversationZelenski] = useState(false)
  const [numberMehoffer, setNumberMehoffer] = useState(1)
  const [numberZelenski, setNumberZelenski] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setConversationMehoffer(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if (props.progress.jamaPolite || props.progress.jamaImpolite) {
      setNumberMehoffer(13)
    } else if (props.progress.hawelka) {
      setNumberMehoffer(10)
    }
  }, [])

  const switchToZelenski = () => {
    setConversationMehoffer(false)
    if (props.progress.zelenski) {
      setNumberZelenski(4)
    } else if (props.progress.hawelka) {
      setNumberZelenski(803)
    } else if (props.progress.jamaImpolite) {
      setNumberZelenski(802)
    } else if (props.progress.jamaPolite) {
      setNumberZelenski(801)
    }
    setTimeout(() => {
      setConversationZelenski(true)
    }, 1)
  }

  const switchToMehoffer = () => {
    setConversationZelenski(false)
    setNumberMehoffer(12)
    setTimeout(() => {
      setConversationMehoffer(true)
    }, 1)
  }

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    jamaPolite: true
  }))}
  const actionTwo = () => {
    props.setProgress(prev => ({
    ...prev,
    jamaImpolite: true
  }))}
  const actionThree = () => { // ZRÓB ŻEBY JAMA ZNIKAŁA!
    props.setProgress(prev => ({
    ...prev,
    visitBrewery: true
  }))}
  const actionFour = () => {
    props.setProgress(prev => ({
    ...prev,
    zelenski: true
  }))}

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="jama-background">
        {conversationMehoffer && <div><Conversation number={numberMehoffer} turnOff={switchToZelenski} actionOne={actionOne} actionTwo={actionTwo} actionThree={actionThree} right={true} place="mehoffer" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationMehoffer(true)}}>
                <img className="mehoffer-conversation" src={mehoffer} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationZelenski(true)}}>
                <img className="zelenski" src={zelenski} />
              </div>
            </div>
            }
            {conversationZelenski && <div><Conversation number={numberZelenski} turnOff={switchToMehoffer} actionThree={actionThree} actionFour={actionFour} place="zelenski" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
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