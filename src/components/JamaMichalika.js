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
  const [styleMehoffer, setStyleMehoffer] = useState(1)
  const [styleZelenski, setStyleZelenski] = useState(1)

  let classMehoffer = styleMehoffer === 1 ? "mehoffer-start" : styleMehoffer === 2 ? "mehoffer-conversation" : "mehoffer"
  let classZelenski = styleZelenski === 1 ? "zelenski-start" : styleZelenski === 2 ? "zelenski-conversation" : "zelenski"

  useEffect(() => {
    setTimeout(() => {
      setStyleMehoffer(2)
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
    setStyleMehoffer(3)
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
      setStyleZelenski(2)
      setConversationZelenski(true)
      setStyleMehoffer(1)
    }, 1000)
  }

  const switchToMehoffer = () => {
    setStyleZelenski(3)
    setConversationZelenski(false)
    setNumberMehoffer(12)
    setTimeout(() => {
      setStyleMehoffer(2)
      setConversationMehoffer(true)
      setStyleZelenski(1)
    }, 1000)
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
  const actionThree = () => { 
    props.setProgress(prev => ({
    ...prev,
    jamaNoEntry: true
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
              <div >
                <img className={classMehoffer} src={mehoffer} />
              </div>
            </Conversation>
              <div >
                <img className={classZelenski} src={zelenski} />
              </div>
            </div>
            }
            {conversationZelenski && <div><Conversation number={numberZelenski} turnOff={switchToMehoffer} actionThree={actionThree} actionFour={actionFour} place="zelenski" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div >
                <img className={classZelenski} src={zelenski} />
              </div>
            </Conversation>
              <div >
                <img className={classMehoffer} src={mehoffer} />
              </div>
            </div>
            }
            {(!conversationMehoffer && !conversationZelenski) && <div><div >
                <img className={classZelenski} src={zelenski} />
              </div>
              <div >
                <img className={classMehoffer} src={mehoffer} />
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