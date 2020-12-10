import {useState, useEffect} from 'react'

import dabrowski from '../assets/dabrowski.png';
import majchrzak from '../assets/marian.png';

import Conversation from './Conversation'
import './IKC.css';

function IKC(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationDabrowski, setConversationDabrowski] = useState(false)
  const [conversationMajchrzak, setConversationMajchrzak] = useState(false)
  const [numberDabrowski, setNumberDabrowski] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setConversationDabrowski(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if(props.progress.visitIkc) {
      setNumberDabrowski(6)
    }
  }, [])

  const switchToDabrowski = () => {
    setConversationMajchrzak(false)
    setNumberDabrowski(5)
    setTimeout(() => {
      setConversationDabrowski(true)
    }, 1)
  }

  const switchToMajchrzak = () => {
    setConversationDabrowski(false)
    setTimeout(() => {
      setConversationMajchrzak(true)
    }, 1)
  }

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    visitIkc: true
  }))}

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="ikc-background">
            {conversationDabrowski && <div><Conversation number={numberDabrowski} turnOff={switchToMajchrzak} actionOne={actionOne} right={true} place="dabrowski" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationDabrowski(true)}}>
                <img className="dabrowski-conversation" src={dabrowski} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationMajchrzak(true)}}>
                <img className="journalist" src={majchrzak} />
              </div>
            </div>
            }
            {conversationMajchrzak && <div><Conversation number={1} turnOff={switchToDabrowski} place="majchrzak" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationMajchrzak(true)}}>
                <img className="journalist-conversation" src={majchrzak} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationDabrowski(true)}}>
                <img className="dabrowski" src={dabrowski} />
              </div>
            </div>
            }
            {(!conversationDabrowski && !conversationMajchrzak) && <div><div onClick={() => {setConversationDabrowski(true)}}>
                <img className="dabrowski" src={dabrowski} />
              </div>
              <div onClick={() => {setConversationMajchrzak(true)}}>
                <img className="journalist" src={majchrzak} />
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