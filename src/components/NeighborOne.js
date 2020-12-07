import {useState} from 'react'

import neighbor from '../assets/sasiad-3.png';
import '../App.css';

function NeighborOne() {

  const [fadeOut, setFadeOut] = useState(false)

    return (
      <div className="main">
        <div className="neighbor-one-background">
          <div className="wife">
            <img src={neighbor} />
          </div>
        </div>
      </div>
    );
  }
  
  export default NeighborOne;