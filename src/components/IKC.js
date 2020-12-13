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
  const [styleDabrowski, setStyleDabrowski] = useState(1)
  const [styleMajchrzak, setStyleMajchrzak] = useState(1)

  let classDabrowski = styleDabrowski === 1 ? "dabrowski-start" : styleDabrowski === 2 ? "dabrowski-conversation" : "dabrowski"
  let classMajchrzak = styleMajchrzak === 1 ? "journalist-start" : styleMajchrzak === 2 ? "journalist-conversation" : "journalist"


  useEffect(() => {
    setTimeout(() => {
      setStyleDabrowski(2)
      setConversationDabrowski(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if(props.progress.visitIkc) {
      setNumberDabrowski(6)
    }
  }, [])

  const switchToDabrowski = () => {
    setStyleMajchrzak(3)
    setConversationMajchrzak(false)
    setNumberDabrowski(5)
    setTimeout(() => {
      setStyleDabrowski(2)
      setConversationDabrowski(true)
      setStyleMajchrzak(1)
    }, 1000)
  }

  const switchToMajchrzak = () => {
    setStyleDabrowski(3)
    setConversationDabrowski(false)
    setTimeout(() => {
      setStyleMajchrzak(2)
      setConversationMajchrzak(true)
      setStyleDabrowski(1)
    }, 1000)
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
                <img className={classDabrowski} src={dabrowski} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationMajchrzak(true)}}>
                <img className={classMajchrzak} src={majchrzak} />
              </div>
            </div>
            }
            {conversationMajchrzak && <div><Conversation number={1} turnOff={switchToDabrowski} place="majchrzak" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationMajchrzak(true)}}>
                <img className={classMajchrzak} src={majchrzak} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationDabrowski(true)}}>
                <img className={classDabrowski} src={dabrowski} />
              </div>
            </div>
            }
            {(!conversationDabrowski && !conversationMajchrzak) && <div><div onClick={() => {setConversationDabrowski(true)}}>
                <img className={classDabrowski} src={dabrowski} />
              </div>
              <div onClick={() => {setConversationMajchrzak(true)}}>
                <img className={classMajchrzak} src={majchrzak} />
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