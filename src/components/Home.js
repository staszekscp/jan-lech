import wife from '../assets/zona-lech.png';
import '../App.css';

function Home() {
    return (
      <div className="home-background">
        <div className="wife">
          <img src={wife} />
        </div>
      </div>
    );
  }
  
  export default Home;