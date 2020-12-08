import {useState, useEffect} from 'react'

import doctor from '../assets/szpital-lekarz.png';
import nurse from '../assets/szpital-pielegniarka.png';

import Conversation from './Conversation'
import './Hospital.css';

function Hospital(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationDoctor, setConversationDoctor] = useState(false)
  const [conversationNurse, setConversationNurse] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversationDoctor(true)
    }, 5000)
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="hospital-background">
            {conversationDoctor && <div><Conversation right={true} place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationDoctor(true)}}>
                <img className="doctor-conversation" src={doctor} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationNurse(true)}}>
                <img className="nurse" src={nurse} />
              </div>
            </div>
            }
            {conversationNurse && <div><Conversation place="home" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationNurse(true)}}>
                <img className="nurse-conversation" src={nurse} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationDoctor(true)}}>
                <img className="doctor" src={doctor} />
              </div>
            </div>
            }
            {(!conversationNurse && !conversationDoctor) && <div><div className="nurse" onClick={() => {setConversationNurse(true)}}>
              <img className="nurse" src={nurse} />
            </div>
            <div onClick={() => {setConversationDoctor(true)}}>
              <img className="doctor" src={doctor} />
            </div>
            </div>
            }
          <div className="location-overlay">
              Wchodzisz do jasnego korytarza szpitalnego
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Hospital;