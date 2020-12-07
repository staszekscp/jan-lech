import doctor from '../assets/szpital-lekarz.png';
import nurse from '../assets/szpital-pielegniarka.png';
import './Hospital.css';

function Hospital() {
    return (
      <div className="main">
        <div className="hospital-background">
          <div className="nurse">
            <img className="nurse-size" src={nurse} />
          </div>
          <div className="doctor">
            <img className="" src={doctor} />
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Hospital;