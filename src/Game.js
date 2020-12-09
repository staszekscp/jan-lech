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

const [progress, setProgress] = useState({
  basic: false,
  hospital: false,
  stelmach: false,
  football: false,
  maciejowscy: false,
  fatGuy: false,
  krogul: false,
  fatGuyInHospital: false,
  brewery: false,
  unemployed: false,
  workerConversation: false,
  bombs: false,
  job: false,
  bank: false
})

const [mapScreen, setMapScreen] = useState(false)
const [bank, setBank] = useState(false)
const [brewery, setBrewery] = useState(false)
const [consulate, setConsulate] = useState(false)
const [hawelka, setHawelka] = useState(false)
const [home, setHome] = useState(false)
const [ikc, setIkc] = useState(false)
const [jama, setJama] = useState(false)
const [krowodrza, setKrowodrza] = useState(true)
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
        {bank && <Bank 
          current={setBank}
          back={setMapScreen}/>}
        {brewery && <Brewery 
          current={setBrewery}
          back={setMapScreen}/>}
        {hawelka && <Hawelka 
          current={setHawelka}
          back={setMapScreen}/>}
        {consulate && <Consulate 
          current={setConsulate}
          back={setMapScreen}/>}
        {home && <Home                              //
          current={setHome}
          back={setTwardowskiego}
          progress={progress}
          setProgress={setProgress}/>}
        {ikc && <IKC 
          current={setIkc}
          back={setMapScreen}/>}
        {jama && <Jama 
          current={setJama}
          back={setMapScreen}/>}
        {krowodrza && <Krowodrza                    //
          current={setKrowodrza}
          back={setMapScreen}
          progress={progress}
          setProgress={setProgress}/>}
        {neighborOne && <NeighborOne                //
          current={setNeighborOne}
          back={setTwardowskiego}
          progress={progress}
          setProgress={setProgress}/>}
        {neighborTwo && <NeighborTwo                //
          current={setNeighborTwo}
          back={setTwardowskiego}
          progress={progress}
          setProgress={setProgress}/>}
        {neighborThree && <NeighborThree            //
          current={setNeighborThree}
          back={setTwardowskiego}
          progress={progress}
          setProgress={setProgress}/>}
        {thorn && <Thorn 
          current={setThorn}
          back={setMapScreen}/>}
        {twardowskiego && <Twardowskiego            //
          setHome={setHome}
          setNeighborOne={setNeighborOne}
          setNeighborTwo={setNeighborTwo}
          setNeighborThree={setNeighborThree}
          current={setTwardowskiego}
          back={setMapScreen}/>}
        {hospital && <Hospital                       //
          current={setHospital}
          back={setMapScreen}
          progress={progress}
          setProgress={setProgress}/>} 
      </div>
    </div>
  );
}

export default Game;