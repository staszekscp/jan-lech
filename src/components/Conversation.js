import {useState} from 'react'

import '../App.css';
import options from './ConversationOptions'

function Home(props) {

    const place = props.place
    const [conversationNumber, setConversationNumber] = useState(1)
    let side = "left"
    const [fadeOut, setFadeOut] = useState(false)

    return (
        <div>
            <div className="backdrop-opacity">
                <div className="option-container">
                    <div className="message">
                        {options[place][conversationNumber].message}
                    </div>
                    <div className="option" onClick={()=>{
                        setConversationNumber(options[place][conversationNumber].first.route)
                        }}>
                        {options[place][conversationNumber].first.content}
                    </div>
                    <div className="option" onClick={()=>{
                        setConversationNumber(options[place][conversationNumber].second.route)
                        }}>
                        {options[place][conversationNumber].second.content}
                    </div>
                    {options[place][conversationNumber].third && <div className="option" onClick={()=>{
                        setConversationNumber(options[place][conversationNumber].third.route)
                        }}>
                        {options[place][conversationNumber].third.content}
                    </div>}
                    {options[place][conversationNumber].fourth && <div className="option" onClick={()=>{
                        setConversationNumber(options[place][conversationNumber].third.route)
                        }}>
                        {options[place][conversationNumber].fourth.content}
                    </div>}
                    <div className="option" 
                        onClick={()=>{
                            setTimeout(() => {
                                props.current(false)
                                props.back(true)
                            }, 2000)
                            props.setFadeOut(true)
                            }
                        }>
                        {options[place].backMessage}
                    </div>
                </div>
                {props.children}
            </div>
            
        </div>
    );
  }
  
  export default Home;