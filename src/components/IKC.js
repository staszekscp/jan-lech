import dabrowski from '../assets/dabrowski.png';
import journalist from '../assets/palac-prasy-dziennikarz.png';
import '../App.css';

function IKC() {
    return (
      <div className="main">
        <div className="ikc-background">
          <div className="dabrowski">
            <img className="dabrowski-size" src={dabrowski} />
          </div>
          <div className="journalist">
            <img className="journalist-size" src={journalist} />
          </div>
        </div>
      </div>
      
    );
  }
  
  export default IKC;