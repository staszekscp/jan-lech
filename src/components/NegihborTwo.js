import neighborM from '../assets/sasiad-2.png';
import neighborF from '../assets/sasiadka-2.png';
import '../App.css';

function NeighborTwo() {
    return (
      <div className="main">
        <div className="neighbor-two-background">
          <div className="neighbor2">
            <img className="neighbor-size2" src={neighborM} />
          </div>
          <div className="neighbor1">
            <img className="neighbor-size1" src={neighborF} />
          </div>
        </div>
      </div>
    );
  }
  
  export default NeighborTwo;