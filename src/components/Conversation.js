import {useEffect, useState} from 'react'

import '../App.css';
import options from './ConversationOptions'

function Home(props) {

    const place = props.place
    const [conversationNumber, setConversationNumber] = useState(props.number)
    const right = props.right
    const [fadeOut, setFadeOut] = useState(false)

    const stepBack = () => {
        props.turnOff()
    }

    useEffect(() => {
        if (conversationNumber === 50) {
            props.actionOne()
        }
    }, [conversationNumber])
    

   


    return (
        <div >
            <div className="backdrop-opacity">
                <div className={fadeOut ? "fade" : null}>
                <div className={right ? "option-container-right" : "option-container"}>
                    <div className="message width-max">
                        {options[place][conversationNumber].message}
                    </div>
                    {options[place][conversationNumber].first && <div className="option width-max" onClick={()=>{
                        setFadeOut(true)
                        setTimeout(() => {
                            setConversationNumber(options[place][conversationNumber].first.route)
                            options[place][conversationNumber].first.action()
                        }, 1000)
                        setTimeout(() => {
                            setFadeOut(false)
                        }, 2000)
                        }}>
                        {options[place][conversationNumber].first.content}
                    </div>}
                    {options[place][conversationNumber].second && <div className="option width-max" onClick={()=>{
                        setFadeOut(true)
                        setTimeout(() => {
                            setConversationNumber(options[place][conversationNumber].second.route)
                            options[place][conversationNumber].second.action()
                        }, 1000)
                        setTimeout(() => {
                            setFadeOut(false)
                        }, 2000)
                        }}>
                        {options[place][conversationNumber].second.content}
                    </div>}
                    {options[place][conversationNumber].third && <div className="option width-max" onClick={()=>{
                        setFadeOut(true)
                        setTimeout(() => {
                            setConversationNumber(options[place][conversationNumber].third.route)
                            options[place][conversationNumber].third.action()
                        }, 1000)
                        setTimeout(() => {
                            setFadeOut(false)
                        }, 2000)
                        }}>
                        {options[place][conversationNumber].third.content}
                    </div>}
                    {options[place][conversationNumber].fourth && <div className="option width-max" onClick={()=>{
                        setFadeOut(true)
                        setTimeout(() => {
                            setConversationNumber(options[place][conversationNumber].fourth.route)
                            options[place][conversationNumber].fourth.action(stepBack)
                        }, 1000)
                        setTimeout(() => {
                            setFadeOut(false)
                        }, 2000)
                        }}>
                        {options[place][conversationNumber].fourth.content}
                    </div>}
                    {options[place][conversationNumber].fifth && <div className="option width-max" onClick={()=>{
                        setFadeOut(true)
                        setTimeout(() => {
                            setConversationNumber(options[place][conversationNumber].fifth.route)
                            options[place][conversationNumber].fifth.action(stepBack)
                        }, 1000)
                        setTimeout(() => {
                            setFadeOut(false)
                        }, 2000)
                        }}>
                        {options[place][conversationNumber].fifth.content}
                    </div>}
                    {options[place][conversationNumber].backMessage && <div className="option width-max"
                        onClick={()=>{
                            setTimeout(() => {
                                props.current(false)
                                props.back(true)
                                options[place][conversationNumber].action()
                            }, 2000)
                            props.setFadeOut(true)
                            }
                        }>
                        {options[place][conversationNumber].backMessage}
                    </div>}
                </div>
            </div>
            {props.children}
            </div>
        </div>
    );
  }
  
  export default Home;