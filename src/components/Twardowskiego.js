import {useState} from 'react'

import options from './ConversationOptions'
import '../App.css';

function Twardowskiego(props) {

  const conversationNumber = 1
  const [fadeOut, setFadeOut] = useState(false)
  const place="twardowskiego"
  
    return (
      <div className={fadeOut?"out":"main"}>
        <div className="twardowskiego-background">
          <div className="backdrop-opacity-twardowskiego">
            <div className="message-twardowskiego mg">
                {options[place][conversationNumber].message}
            </div>
            <div className="option-twardowskiego" onClick={()=>{
              setTimeout(() => {
                props.current(false)
                props.setHome(true)
              }, 2000)
              setFadeOut(true)
              }
            }>
                {options[place][conversationNumber].first.content}
            </div>
            <div className="option-twardowskiego" onClick={()=>{
              setTimeout(() => {
                props.current(false)
                props.setNeighborOne(true)
              }, 2000)
              setFadeOut(true)
              }
            }>
                {options[place][conversationNumber].second.content}
            </div>
            {options[place][conversationNumber].third && <div className="option-twardowskiego" onClick={()=>{
              setTimeout(() => {
                props.current(false)
                props.setNeighborTwo(true)
              }, 2000)
              setFadeOut(true)
              }
            }>
                {options[place][conversationNumber].third.content}
            </div>}
            {options[place][conversationNumber].fourth && <div className="option-twardowskiego" onClick={()=>{
              setTimeout(() => {
                props.current(false)
                props.setNeighborThree(true)
              }, 2000)
              setFadeOut(true)
              }
            }>
                {options[place][conversationNumber].fourth.content}
            </div>}
            <div className="option-twardowskiego back-message" 
                onClick={()=>{
                    setTimeout(() => {
                      props.current(false)
                      props.back(true)
                    }, 2000)
                    setFadeOut(true)
                    }
                }>
                {options[place].backMessage}
            </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Twardowskiego;