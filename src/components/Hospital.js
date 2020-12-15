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
  const [styleDoctor, setStyleDoctor] = useState(1)
  const [styleNurse, setStyleNurse] = useState(1)

  let classDoctor = styleDoctor === 1 ? "doctor-start" : styleDoctor === 2 ? "doctor-conversation" : "doctor"
  let classNurse = styleNurse === 1 ? "nurse-start" : styleNurse === 2 ? "nurse-conversation" : "nurse"

  const switchToNurse = () => {
    setStyleDoctor(3)
    setConversationDoctor(false)
    if (props.progress.brewery) {
      setNumberNurse(15)
    }
    setTimeout(() => {
      setStyleNurse(2)
      setConversationNurse(true)
      setStyleDoctor(1)
    }, 1000)
  }

  const switchToDoctor = () => {
    setStyleNurse(3)
    setConversationNurse(false)
    if (props.progress.fatGuyInHospital && props.progress.brewery){
      setNumberDoctor(17)
    } else if (props.progress.fatGuyInHospital) {
      setNumberDoctor(10)
    }
    setTimeout(() => {
      setStyleDoctor(2)
      setConversationDoctor(true)
      setStyleNurse(1)
    }, 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      setStyleDoctor(2)
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
              <div >
                <img className={classDoctor} src={doctor} />
              </div>
            </Conversation>
              <div >
                <img className={classNurse} src={nurse} />
              </div>
            </div>
            }
            {conversationNurse && <div><Conversation actionOne={actionOneN} turnOff={switchToDoctor} number={numberNurse} place="pielegniarka" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div >
                <img className={classNurse} src={nurse} />
              </div>
            </Conversation>
              <div >
                <img className={classDoctor} src={doctor} />
              </div>
            </div>
            }
            {(!conversationNurse && !conversationDoctor) && <div><div >
              <img className={classNurse} src={nurse} />
            </div>
            <div >
              <img className={classDoctor} src={doctor} />
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