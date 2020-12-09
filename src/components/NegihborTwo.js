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

  useEffect(() => {
    setTimeout(() => {
      setConversation2(true)
    }, 5000)
  }, [])

  const switchToMaciejowska = () => {
    setConversation2(false)
    if (props.progress.fatGuy) {
      setNumberMaciejowska(11)
    }
    setTimeout(() => {
      setConversation1(true)
    }, 1)
  }

  const switchToMaciejowski = () => {
    setConversation1(false)
    setNumberMaciejowski(10)
    setTimeout(() => {
      setConversation2(true)
    }, 1)
  }

  useEffect(() => {
    if (props.progress.maciejowscy) {
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
              <div onClick={() => {setConversation1(true)}}>
                <img className="neighbor1-conversation" src={neighborF} />
              </div>
            </Conversation>
              <div onClick={() => {setConversation2(true)}}>
                <img className="neighbor2" src={neighborM} />
              </div>
            </div>
            }
            {conversation2 && <div><Conversation actionOne={actionOne} number={numberMaciejowski} turnOff={switchToMaciejowska} right={true} place="maciejowski" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div onClick={() => {setConversation2(true)}}>
                <img className="neighbor2-conversation" src={neighborM} />
              </div>
            </Conversation>
              <div onClick={() => {setConversation1(true)}}>
                <img className="neighbor1" src={neighborF} />
              </div>
            </div>
            }
            {(!conversation1 && !conversation2) && <div><div onClick={() => {setConversation2(true)}}>
                <img className="neighbor2" src={neighborM} />
              </div>
              <div onClick={() => {setConversation1(true)}}>
                <img className="neighbor1" src={neighborF} />
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