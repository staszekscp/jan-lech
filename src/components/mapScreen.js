import map from '../assets/1925a.png';
import '../App.css';

function MapScreen() {
  return (
    <div className="map-container">
      <div className="place-icon">
        <div className="overlay">
            ul. Twardowskiego
        </div>
      </div>
      <div className="place-icon-hospital">
        <div className="overlay">
            Szpital w Kobierzynie
        </div>
      </div>
      <div className="place-icon-brewery">
        <div className="overlay">
            Browar Lubicz
        </div>
      </div>
      <div className="place-icon-rogatka">
        <div className="overlay">
            Rogatka na Krowodrzy
        </div>
      </div>
      <div className="place-icon-hawelka">
        <div div className="overlay">
            Restauracja Hawełka
        </div>
      </div>
      <div className="place-icon-jama">
        <div className="overlay">
            Jama Michalika
        </div>
      </div>
      <div className="place-icon-golebia">
        <div className="overlay">
            Konsulat Czechosłowacji
        </div>
      </div>
      <div className="place-icon-bank">
        <div className="overlay">
            Bank Pekao
        </div>
      </div>
    </div>
  );
}

export default MapScreen;