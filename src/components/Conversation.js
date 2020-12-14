import {useEffect, useState} from 'react'

import '../App.css';
import options from './ConversationOptions'

function Home(props) {

    const place = props.place
    const [conversationNumber, setConversationNumber] = useState(props.number)
    const right = props.right
    const [fadeOut, setFadeOut] = useState(false)
    const [goAway, setGoAway] = useState(false)

    const backdropClass = goAway ? "backdrop-opacity-back" : "backdrop-opacity"

    const classLeft = goAway ? "option-container-back" : "option-container"
    const classRight = goAway ? "option-container-right-back" : "option-container-right"

    const containerClass = right ? classRight : classLeft

    const stepBack = () => {
        setGoAway(true)
        setTimeout(() => {
            setGoAway(false)
            props.turnOff()
        }, 1000)
    }

    useEffect(() => {
        if (conversationNumber > 500 && conversationNumber < 600) {
            props.actionOne()
        }
        if (conversationNumber > 600 && conversationNumber < 700) {
            props.actionTwo()
        }
        if (conversationNumber > 700 && conversationNumber < 800) {
            props.actionThree()
        }
        if (conversationNumber > 800 && conversationNumber < 900) {
            props.actionFour()
        }
        if (conversationNumber > 900 && conversationNumber < 1000) {
            props.actionFive()
        }
    }, [conversationNumber])

    return (
        <div >
            <div className={backdropClass}>
                <div className={fadeOut ? "fade" : null}>
                <div className={containerClass}>
                    <div className="message width-max">
                        {options[place][conversationNumber].message}
                    </div>
                    {options[place][conversationNumber].first && <div className="option width-max" onClick={()=>{
                        setFadeOut(true)
                        setTimeout(() => {
                            setConversationNumber(options[place][conversationNumber].first.route)
                            window.scrollTo(0,0)
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
                            window.scrollTo(0,0)
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
                            window.scrollTo(0,0)
                        }, 1000)
                        setTimeout(() => {
                            setFadeOut(false)
                        }, 2000)
                        }}>
                        {options[place][conversationNumber].third.content}
                    </div>}
                    {options[place][conversationNumber].fifth && <div className="option width-max" onClick={()=>{
                        setFadeOut(true)
                        setTimeout(() => {
                            setConversationNumber(options[place][conversationNumber].fifth.route)
                            window.scrollTo(0,0)
                        }, 1000)
                        setTimeout(() => {
                            setFadeOut(false)
                        }, 2000)
                        }}>
                        {options[place][conversationNumber].fifth.content}
                    </div>}
                    {options[place][conversationNumber].fourth && <div className="option width-max" onClick={()=>{
                        setFadeOut(true)
                        setTimeout(() => {
                            setConversationNumber(options[place][conversationNumber].fourth.route)
                            window.scrollTo(0,0)
                            stepBack()
                        }, 1000)
                        setTimeout(() => {
                            setFadeOut(false)
                        }, 2000)
                        }}>
                        {options[place][conversationNumber].fourth.content}
                    </div>}
                   
                    {options[place][conversationNumber].backMessage && <div className="option width-max back-message"
                        onClick={()=>{
                            setTimeout(() => {
                                props.current(false)
                                props.back(true)
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