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
            <div className="message">
                {options[place][conversationNumber].message}
            </div>
            <div className="option" onClick={()=>{
                props.current(false)
                props.setHome(true)
              }
            }>
                {options[place][conversationNumber].first.content}
            </div>
            <div className="option" onClick={()=>{
                props.current(false)
                props.setNeighborOne(true)
              }
            }>
                {options[place][conversationNumber].second.content}
            </div>
            {options[place][conversationNumber].third && <div className="option" onClick={()=>{
                props.current(false)
                props.setNeighborTwo(true)
              }
            }>
                {options[place][conversationNumber].third.content}
            </div>}
            {options[place][conversationNumber].fourth && <div className="option" onClick={()=>{
                props.current(false)
                props.setNeighborThree(true)
              }
            }>
                {options[place][conversationNumber].fourth.content}
            </div>}
            <div className="option" 
                onClick={()=>{
                    props.current(false)
                    props.back(true)
                    }
                }>
                {options[place].backMessage}
            </div>
        </div>
      </div>
    );
  }
  
  export default Twardowskiego;