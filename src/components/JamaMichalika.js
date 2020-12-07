import boy from '../assets/boy-zelenski.png';
import mehoffer from '../assets/mehoffer.png';
import './Jama.css';

function JamaMichalika() {
    return (
      <div className="main">
        <div className="jama-background">
          <div className="boy-zelenski">
            <img className="" src={boy} />
          </div>
          <div className="mehoffer">
            <img className="mehoffer-size" src={mehoffer} />
          </div>
        </div>
      </div>
    );
  }
  
  export default JamaMichalika;