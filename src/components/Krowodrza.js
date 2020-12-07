import boss from '../assets/szef.png';
import coworker from '../assets/krowodrza-pracownik.png';
import '../App.css';

function Krowodrza() {
    return (
      <div className="main">
        <div className="krowodrza-background">
          <div className="krowodrza-boss">
            <img className="krowodrza-boss-size" src={boss} />
          </div>
          <div className="krowodrza-coworker">
            <img className="krowodrza-coworker-size" src={coworker} />
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Krowodrza;