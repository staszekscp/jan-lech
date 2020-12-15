import {useState, useEffect} from 'react'

import director from '../assets/bank-dyrektor.png';

import Conversation from './Conversation'
import './Bank.css';

function Bank(props) {
  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)
  const [number, setNumber] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setConversation(true)
    }, 5000)
  }, [])

  useEffect(() => {
    if (props.progress.bank) {
      setNumber(6)
    } 
  }, [])

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    bank: true
  }))}


  return (
    <div className={fadeOut?"out":"main"}>
      <div className="bank-background">
        {conversation ? <Conversation progress={props.progress} actionOne={actionOne} number={number} place="bank" current={props.current} back={props.back} setFadeOut={setFadeOut}>
          <div >
            <img className="bank-boss-conversation" src={director} />
          </div>
          </Conversation> :
          <div >
            <img className="bank-boss" src={director} />
          </div>}
          <div className="location-overlay">
              Wkraczasz do budynku Powiatowej Kasy Oszczędności przy ul. Pijarskiej
          </div>
      </div>
    </div>
    
  );
}

export default Bank;