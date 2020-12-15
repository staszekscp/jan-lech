import {useState, useEffect} from 'react'

import Conversation from './Conversation'
import neighborM from '../assets/sasiad-2.png';
import neighborF from '../assets/sasiadka-2.png';
import './NeighborTwo.css';

function NeighborTwo(props) {

  const [fadeOut, setFadeOut] = useState(false)
  const [conversation1, setConversation1] = useState(false)
  const [conversation2, setConversation2] = useState(false)
  const [numberMaciejowski, setNumberMaciejowski] = useState(1)
  const [numberMaciejowska, setNumberMaciejowska] = useState(1)
  const [styleMaciejowski, setStyleMaciejowski] = useState(1)
  const [styleMaciejowska, setStyleMaciejowska] = useState(1)

  let classMaciejowski = styleMaciejowski === 1 ? "neighbor2-start" : styleMaciejowski === 2 ? "neighbor2-conversation" : "neighbor2"
  let classMaciejowska = styleMaciejowska === 1 ? "neighbor1-start" : styleMaciejowska === 2 ? "neighbor1-conversation" : "neighbor1"


  useEffect(() => {
    setTimeout(() => {
      setStyleMaciejowski(2)
      setConversation2(true)
    }, 5000)
  }, [])

  const switchToMaciejowska = () => {
    setStyleMaciejowski(3)
    setConversation2(false)
    if (props.progress.fatGuy) {
      setNumberMaciejowska(11)
    } else if (props.progress.end) {
      setNumberMaciejowska(502)
    }
    setTimeout(() => {
      setStyleMaciejowska(2)
      setConversation1(true)
      setStyleMaciejowski(1)
    }, 1000)
  }

  const switchToMaciejowski = () => {
    setStyleMaciejowska(3)
    setConversation1(false)
    setNumberMaciejowski(10)
    setTimeout(() => {
      setStyleMaciejowski(2)
      setConversation2(true)
      setStyleMaciejowska(1)
    }, 1000)
  }

  useEffect(() => {
    if (props.progress.end && !props.progress.maciejowscy) {
      setNumberMaciejowski(12)
    } else if (props.progress.end) {
      setNumberMaciejowski(11)
    } else if (props.progress.maciejowscy) {
      setNumberMaciejowski(9)
    }
  })

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    maciejowscy: true
  }))}

  const actionOneF = () => {
    props.setProgress(prev => ({
    ...prev,
    fatGuy: true
  }))}


    return (
      <div>
        <div className={fadeOut?"out":"main"}>
          <div className="neighbor-two-background">
            {conversation1 && <div><Conversation actionOne={actionOneF} number={numberMaciejowska} turnOff={switchToMaciejowski} place="maciejowska" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div >
                <img className={classMaciejowska} src={neighborF} />
              </div>
            </Conversation>
              <div >
                <img className={classMaciejowski} src={neighborM} />
              </div>
            </div>
            }
            {conversation2 && <div><Conversation actionOne={actionOne} number={numberMaciejowski} turnOff={switchToMaciejowska} right={true} place="maciejowski" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div >
                <img className={classMaciejowski} src={neighborM} />
              </div>
            </Conversation>
              <div >
                <img className={classMaciejowska} src={neighborF} />
              </div>
            </div>
            }
            {(!conversation1 && !conversation2) && <div><div >
                <img className={classMaciejowski} src={neighborM} />
              </div>
              <div >
                <img className={classMaciejowska} src={neighborF} />
              </div>
            </div>
            }
            <div className="location-overlay">
              Podchodzisz do ogrodzenia gospodarstwa Maciejowskich
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default NeighborTwo;