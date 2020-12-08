import {useState, useEffect} from 'react'

import thorn from '../assets/h-thorn.png';

import Conversation from './Conversation'
import './Thorn.css';

function ThornRestaurant(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversation(true)
    }, 5000)
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="thorn-background">
            {conversation ? <Conversation right={true} place="home" current={props.current} back={props.back} setFadeOut={setFadeOut}>
            <div onClick={() => {setConversation(true)}}>
              <img className="thorn-conversation" src={thorn} />
            </div>
            </Conversation> :
            <div onClick={() => {setConversation(true)}}>
              <img className="thorn" src={thorn} />
            </div>}
            <div className="location-overlay">
              Wchodzisz do restauracji Hirsza Thorna przy Krakowskiej 13
          </div>
        </div>
      </div>
    );
  }
  
  export default ThornRestaurant;