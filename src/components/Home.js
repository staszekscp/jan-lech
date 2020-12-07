import {useState, useEffect} from 'react'

import wife from '../assets/zona-lech.png';
import Conversation from './Conversation'
import './Home.css';

function Home(props) {

  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setConversation(true)
    }, 5000)
  }, [])
  

    return (
      <div>
        <div className={fadeOut?"out":"main"}>
          <div className="home-background">
            {conversation ? <Conversation place="home" current={props.current} back={props.back} setFadeOut={setFadeOut}>
              <div onClick={() => {setConversation(true)}}>
                  <img className="wife-conversation" src={wife} />
              </div>
            </Conversation> :
            <div onClick={() => {setConversation(true)}}>
              <img className="wife" src={wife} />
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