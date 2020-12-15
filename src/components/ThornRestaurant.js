import {useState, useEffect} from 'react'

import thorn from '../assets/h-thorn.png';

import Conversation from './Conversation'
import './Thorn.css';

function ThornRestaurant(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)
  const [number, setNumber] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setConversation(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if (props.progress.end && !props.progress.thorn) {
      setNumber(9)
    } else if (props.progress.thorn) {
      setNumber(8)
    } 
  }, [])

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    thorn: true
  }))}

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="thorn-background">
            {conversation ? <Conversation progress={props.progress} actionOne={actionOne} number={number} right={true} place="thorn" current={props.current} back={props.back} setFadeOut={setFadeOut}>
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