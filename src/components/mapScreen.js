import {useState} from 'react'
import '../App.css';

function MapScreen(props) {

const [fadeOut, setFadeOut] = useState(false)

  return (
    <div className={fadeOut?"out":"main"}>
      <div className="map-container">
        <div className="place-icon">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setTwardowskiego(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              ul. Twardowskiego
          </div>
        </div>
        <div className="place-icon-hospital">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setHospital(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              Szpital w Kobierzynie
          </div>
        </div>
        <div className="place-icon-brewery">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setBrewery(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              Browar Lubicz
          </div>
        </div>
        <div className="place-icon-rogatka">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setKrowodrza(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              Rogatka na Krowodrzy
          </div>
        </div>
        <div className="place-icon-hawelka">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setHawelka(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              Restauracja Hawełka
          </div>
        </div>
        <div className="place-icon-jama">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setJama(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              Jama Michalika
          </div>
        </div>
        <div className="place-icon-golebia">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setConsulate(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              Konsulat Czechosłowacji
          </div>
        </div>
        <div className="place-icon-bank">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setBank(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              Bank Pekao
          </div>
        </div>
        <div className="place-icon-ikc">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setIkc(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              Pałac Prasy
          </div>
        </div>
        <div className="place-icon-thorna">
          <div className="overlay" 
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  props.setThorn(true)
                  props.setMapScreen(false)
                }, 3000)
              }
            }>
              Restauracja Thorna
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default MapScreen;