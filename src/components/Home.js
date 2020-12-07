import {useState} from 'react'

import wife from '../assets/zona-lech.png';
import Conversation from './Conversation'
import '../App.css';

function Home() {

  const [fadeOut, setFadeOut] = useState(false)
  const [conversation, setConversation] = useState(false)

    return (
      <div className={fadeOut?"out":"main"}>
        <div className="home-background">
          {conversation && <Conversation place="home"/>}
          <div className={conversation?"wife-conversation":"wife"} onClick={() => {setConversation(true)}}>
              <img src={wife} />
          </div>
          {conversation && <div className="backdrop-opacity"/>}
        </div>
      </div>
      
    );
  }
  
  export default Home;