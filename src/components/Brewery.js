import boss from '../assets/szef-browar.png';
import guard from '../assets/straznik-browaru.png';
import '../App.css';

function Brewery() {
    return (
      <div className="main">
        <div className="brewery-background">
          <div className="brewery-boss">
            <img className="brewery-boss-size" src={boss} />
          </div>
          <div className="brewery-guard">
            <img className="brewery-guard-size" src={guard} />
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Brewery;