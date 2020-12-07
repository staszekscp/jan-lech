import client from '../assets/klient-hawelka.png';
import waiter from '../assets/hawelka-kelner.png';
import boss from '../assets/hawelka-wlasciciel.png';
import '../App.css';

function HawelkaRestaurant() {
    return (
      <div className="main">
        <div className="hawelka-background">
          <div className="client">
            <img className="client-size" src={client} />
          </div>
          <div className="waiter">
            <img className="waiter-size" src={waiter} />
          </div>
          <div className="boss-hawelka">
            <img className="boss-hawelka-size" src={boss} />
          </div>
        </div>
      </div>
      
    );
  }
  
  export default HawelkaRestaurant;