import {useState} from 'react'

import MapScreen from './components/mapScreen';
import Bank from './components/Bank';
import Brewery from './components/Brewery';
import Consulate from './components/Consulate';
import Hawelka from './components/HawelkaRestaurant';
import Home from './components/Home';
import IKC from './components/IKC';
import Jama from './components/JamaMichalika';
import Krowodrza from './components/Krowodrza';
import NeighborOne from './components/NeighborOne';
import NeighborTwo from './components/NegihborTwo';
import NeighborThree from './components/NeighborThree';
import Thorn from './components/ThornRestaurant';
import Twardowskiego from './components/Twardowskiego';
import Hospital from './components/Hospital';

import './App.css';

function Game() {

const [mapScreen, setMapScreen] = useState(false)
const [bank, setBank] = useState(false)
const [brewery, setBrewery] = useState(false)
const [consulate, setConsulate] = useState(false)
const [hawelka, setHawelka] = useState(false)
const [home, setHome] = useState(true)
const [ikc, setIkc] = useState(false)
const [jama, setJama] = useState(false)
const [krowodrza, setKrowodrza] = useState(false)
const [neighborOne, setNeighborOne] = useState(false)
const [neighborTwo, setNeighborTwo] = useState(false)
const [neighborThree, setNeighborThree] = useState(false)
const [thorn, setThorn] = useState(false)
const [twardowskiego, setTwardowskiego] = useState(false)
const [hospital, setHospital] = useState(false)


  return (
    <div className="backdrop">
      <div className="main">
        <div className="main-overlay"/>
        {mapScreen && <MapScreen 
        setMapScreen={setMapScreen}
        setBank={setBank}
        setBrewery={setBrewery}
        setConsulate={setConsulate}
        setHawelka={setHawelka}
        setIkc={setIkc}
        setJama={setJama}
        setKrowodrza={setKrowodrza}
        setThorn={setThorn}
        setTwardowskiego={setTwardowskiego}
        setHospital={setHospital}/>}
        {bank && <Bank />}
        {brewery && <Brewery />}
        {hawelka && <Hawelka />}
        {consulate && <Consulate />}
        {home && <Home />}
        {ikc && <IKC />}
        {jama && <Jama />}
        {krowodrza && <Krowodrza />}
        {neighborOne && <NeighborOne />}
        {neighborTwo && <NeighborTwo />}
        {neighborThree && <NeighborThree />}
        {thorn && <Thorn />}
        {twardowskiego && <Twardowskiego />}
        {hospital && <Hospital />}
      </div>
    </div>
  );
}

export default Game;