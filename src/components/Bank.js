import director from '../assets/bank-dyrektor.png';
import '../App.css';

function Bank() {
  return (
    <div className="main">
      <div className="bank-background">
        <div className="brewery-boss">
            <img className="brewery-boss-size" src={director} />
        </div>
      </div>
    </div>
    
  );
}

export default Bank;