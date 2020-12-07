import {useState} from 'react'

import '../App.css';
import options from './ConversationOptions'

function Home(props) {

    const place = props.place
    const [conversationNumber, setConversationNumber] = useState(1)
    let side = "left"
    const [fadeOut, setFadeOut] = useState(false)

    return (
        <div className="option-container">
            <div className="option" onClick={()=>{setConversationNumber(prev => +(prev.toString()+"1"))}}>
                {options[place][conversationNumber].first}
            </div>
            <div className="option" onClick={()=>{setConversationNumber(prev => +(prev.toString()+"2"))}}>
                {options[place][conversationNumber].second}
            </div>
            <div className="option" onClick={()=>{setConversationNumber(prev => +(prev.toString()+"3"))}}>
                {options[place][conversationNumber].third}
            </div>
        </div>
    );
  }
  
  export default Home;