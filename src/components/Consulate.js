import {useState, useEffect} from 'react'

import worker from '../assets/konsulat-pracownica.png';

import Conversation from './Conversation'
import './Consulate.css';

function Consulate(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversation(true)
    }, 5000)
  }, [])

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    end: true
  }))}

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="consulate-background">
        {conversation ? <Conversation number={1} actionOne={actionOne} place="konsulat" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
              <div>
                <img className="worker-consulate-conversation" src={worker} />
              </div>
            </Conversation> :
            <div>
              <img className="worker-consulate" src={worker} />
            </div>
            }
            <div className="location-overlay">
              Wchodzisz do konsulatu Czechosłowacji na Gołębiej
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Consulate;