import {useState, useEffect} from 'react'

import wife from '../assets/zona-lech.png';
import policjantka from '../assets/policjant.png'
import Conversation from './Conversation'
import './Home.css';

function Home(props) {

  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)
  const [number, setNumber] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setConversation(true)
    }, 5000)
  }, [])

  const turnOff = () => {
    setConversation(false)
  }

  const hospitalTalk = (props.progress.hospital && !props.progress.hospitalResponse)
  const fatGuyTalk = (props.progress.fatGuy && !props.progress.fatGuyResponse)
  const unemployedTalk = (props.progress.unemployed && !props.progress.unemployedResponse)
  
  useEffect(() => {
    if (props.progress.end) {
      setNumber(200)
    } else if (props.progress.moneyProblems) {
      setNumber(100)
    } else if (hospitalTalk && fatGuyTalk && unemployedTalk) {
      setNumber(33)
    } else if (hospitalTalk && fatGuyTalk) {
      setNumber(30)
    } else if (hospitalTalk && unemployedTalk) {
      setNumber(32)
    } else if (hospitalTalk) {
      setNumber(27)
    } else if (fatGuyTalk && unemployedTalk) {
        setNumber(31)
    } else if (fatGuyTalk) {
        setNumber(28)
    } else if (unemployedTalk) {
      setNumber(29)
    } else if (props.progress.basic) {
      setNumber(26)
    }
  }, [])
  

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    basic: true
  }))}

  const actionTwo = () => {
    props.setProgress(prev => ({
    ...prev,
    hospitalResponse: true
  }))}

  const actionThree = () => {
    props.setProgress(prev => ({
    ...prev,
    fatGuyResponse: true
  }))}

  const actionFour = () => {
    props.setProgress(prev => ({
    ...prev,
    unemployedResponse: true
  }))}

  const actionFive = () => {
    props.setProgress(prev => ({
    ...prev,
    bankInfo: true
  }))}

    return (
      <div>
        <div className={fadeOut?"out":"main"}>
          <div className="home-background">
            {conversation ? <Conversation 
              actionOne={actionOne}
              actionTwo={actionTwo}
              actionThree={actionThree}
              actionFour={actionFour}
              actionFive={actionFive}
              number={number} 
              place="home" 
              turnOff={turnOff} 
              current={props.current} 
              back={props.back} 
              setFadeOut={setFadeOut}>
              <div >
                  {props.progress.end? null : !props.progress.moneyProblems ? <img className="wife-conversation" src={wife} /> : <img className="wife-conversation" src={policjantka} />}
              </div>
            </Conversation> :
              <div >
                {props.progress.end? null : !props.progress.moneyProblems ? <img className="wife" src={wife}/> : <img className="wife" src={policjantka}/>}
              </div>}
            <div className="location-overlay">
              Wkraczasz do mieszkania Najchelów
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;