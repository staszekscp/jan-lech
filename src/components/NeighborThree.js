import {useState, useEffect} from 'react'

import Conversation from './Conversation'
import neighbor from '../assets/sasiad-1.png';
import './NeighborThree.css';

function NeighborThree(props) {

  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)
  const [number, setNumber] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setConversation(true)
    }, 5000)
  }, [])

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    krogul: true
  }))}
  const actionTwo = () => {
    props.setProgress(prev => ({
    ...prev,
    moneyProblems: true
  }))}

  useEffect(() => {
    if (props.progress.end) {
      setNumber(200)
    } else if (props.progress.moneyProblems) {
      setNumber(11)
    } else if (props.progress.visitIkc && props.progress.krogul) {
      setNumber(7)
    } else if (props.progress.visitIkc) {
      setNumber(6)
    } else if (props.progress.krogul) {
      setNumber(5)
    } 
  }, [])

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="neighbor-three-background" >
          {conversation ? <Conversation actionOne={actionOne} actionTwo={actionTwo} number={number} place="krogul" current={props.current} back={props.back}  setFadeOut={setFadeOut}>
          <div onClick={() => {setConversation(true)}}>
            {!props.progress.end && <img className="krogul-conversation" src={neighbor} />}
          </div>
          </Conversation> :
          <div onClick={() => {setConversation(true)}}>
            {!props.progress.end && <img className="krogul" src={neighbor} />}
          </div>}
          
          <div className="location-overlay">
            Zbliżasz się do posesji Krogula
          </div>
        </div>
      </div>
    );
  }
  
  export default NeighborThree;