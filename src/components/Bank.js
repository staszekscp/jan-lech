import director from '../assets/bank-dyrektor.png';
import './Bank.css';

function Bank() {
  return (
    <div className="main">
      <div className="bank-background">
        <div className="bank-boss">
            <img className="bank-boss-size" src={director} />
        </div>
      </div>
    </div>
    
  );
}

export default Bank;