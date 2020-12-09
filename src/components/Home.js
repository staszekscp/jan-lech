import {useState, useEffect} from 'react'

import wife from '../assets/zona-lech.png';
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
  
  useEffect(() => {
    if (props.progress.basic && props.progress.hospital && props.progress.fatGuy) {
      setNumber(29)
    } else if (props.progress.basic && props.progress.fatGuy) {
      setNumber(28)
    } else if (props.progress.basic && props.progress.hospital) {
      setNumber(27)
    } else if (props.progress.basic) {
      setNumber(26)
    }
  }, [])
  

  const actionOne = () => {
    props.setProgress(prev => ({
    ...prev,
    basic: true
  }))}

    return (
      <div>
        <div className={fadeOut?"out":"main"}>
          <div className="home-background">
            {conversation ? <Conversation 
              actionOne={actionOne}
              number={number} 
              place="home" 
              turnOff={turnOff} 
              current={props.current} 
              back={props.back} 
              setFadeOut={setFadeOut}>
              <div onClick={() => {setConversation(true)}}>
                  <img className="wife-conversation" src={wife} />
              </div>
            </Conversation> :
              <div onClick={() => {setConversation(true)}}>
                <img className="wife" src={wife}/>
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