import {useState, useEffect} from 'react'

import doctor from '../assets/szpital-lekarz.png';
import nurse from '../assets/szpital-pielegniarka.png';

import Conversation from './Conversation'
import './Hospital.css';

function Hospital(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversationDoctor, setConversationDoctor] = useState(false)
  const [conversationNurse, setConversationNurse] = useState(false)
  const [numberDoctor, setNumberDoctor] = useState(1)
  const [numberNurse, setNumberNurse] = useState(1)

  const switchToNurse = () => {
    setConversationDoctor(false)
    if (props.progress.brewery) {
      setNumberNurse(15)
    }
    setTimeout(() => {
      setConversationNurse(true)
    }, 1)
  }

  const switchToDoctor = () => {
    setConversationNurse(false)
    if (props.progress.fatGuyInHospital && props.progress.brewery){
      setNumberDoctor(17)
    } else if (props.progress.fatGuyInHospital) {
      setNumberDoctor(10)
    }
    setTimeout(() => {
      setConversationDoctor(true)
    }, 1)
  }

  useEffect(() => {
    setTimeout(() => {
      setConversationDoctor(true)
    }, 5000)
  }, [])

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    brewery: true
  }))}

  const actionOneN = () => {
    props.setProgress(prev => ({
    ...prev,
    fatGuyInHospital: true
  }))}

  useEffect(() => {
    if (props.progress.brewery) {
      setNumberDoctor(18)
    } else if (props.progress.krogul) {
      setNumberDoctor(2)
    }
  })

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="hospital-background">
            {conversationDoctor && <div><Conversation actionOne={actionOne} turnOff={switchToNurse} number={numberDoctor} right={true} place="lekarz" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversationDoctor(true)}}>
                <img className="doctor-conversation" src={doctor} />
              </div>
            </Conversation>
              <div onClick={() => {setConversationNurse(true)}}>
                <img className="nurse" src={nurse} />
              </div>
            </div>
            }
            {conversationNurse && <div><Conversation actionOne={actionOneN} turnOff={switchToDoctor} number={numberNurse} place="pielegniarka" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
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