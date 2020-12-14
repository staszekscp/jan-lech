import {useEffect, useState} from 'react'

import bank from './assets/bank-in.jpg'
import song from './assets/HonkyTonkin.mp3'
import './App.css';

function MainScreen(props) {

    const [fadeOut, setFadeOut] = useState(false)
    const [fadeOut2, setFadeOut2] = useState(false)
    const [startGame, setStartGame] = useState(false)
    const [info, setInfo] = useState(false)

  return (
    <div className="backdrop">
      <div className={fadeOut2?"out":"main"}>
        <div className="main-screen">
            <div className={fadeOut?"out2":"fade"}>
            {(!startGame && !info) && <div className="additional-container"><div className="title-container">
                Kraków, 1925
            </div>
            <div className="lower-container">
                <div className="button-upper" onClick={()=>{
                            setTimeout(() => {
                                setStartGame(true)
                            }, 1000)
                            setFadeOut(true)
                            }
                        }>Zacznij</div>
                <div className="button-lower" onClick={()=>{
                            setTimeout(() => {
                                setInfo(true)
                            }, 1000)
                            setFadeOut(true)
                            }
                        }>O grze</div>
            </div></div>}
            {startGame && <div className="additional-container"><div className="explanation-container" >
                <h1>Kraków, 1925</h1>
                <p>Jest dokładnie 23 maja 1925 roku. Nazywsz się Feliks Kołodziejczyk, jesteś młodym policjantem w stopniu przodownika. O 6 rano przybywasz na komisariat, gdzie dowiadujesz się o zaginięciu starszego mężczyzny, Józefa Najchela, zamieszkałego przy ulicy Twardowskiego w Krakowie. Zostajesz niezwłocznie wysłany, aby porozmawiać z jego żoną. </p>
                <p>Twoim zadaniem jest ustalić, gdzie może przebywać jej mąż.</p>
                <p className="last-p">Oraz poznać nieco bliżej przedwojenny Kraków...</p>
                <div className="button-upper" onClick={()=>{
                            setTimeout(() => {
                                props.current(false)
                                props.forward(true)
                            }, 2000)
                            setFadeOut2(true)
                            }
                        }>Rozpocznij</div>
            </div></div>}
            {info && <div className="additional-container"><div className="explanation-container" >
                    <p>Kraków, 1925 to gra dialogowa, w której wcielasz się w postać przedwojennego policjanta w celu odnalezienia zaginionego człowieka.</p>
                    <p>W trakcie rozgrywki masz okazję porozmawiać z mieszkańcami miasta na różne tematy dotyczące polityki, życia codziennego oraz ówczesnej sytuacji w Polsce. Zaznaczam, iż dialogi są WYŁĄCZNIE moją inwencją twórczą. Niemniej przekazywane przez postacie informacje starałem się rzetelnie weryfikować. Głównym źródłem, z którego korzystałem były "Dzieje Krakowa. Tom 4.".</p>
                    <p>Gra inspirowana jest prawdziwymi wydarzeniami, lecz większość postaci jest fikcyjna. Wyjątek stanowią: Marian Dąbrowski, Hirsz Thorn (zdjęcie prawdziwe), Leopold Macharski (zdjęcie najprawdopodobniej nieprawdziwe), Józef Mehoffer oraz Tadeusz Boy-Żeleński. Ponownie jednak zaznaczam, iż wypowiadane przez postacie kwestie zostały przeze mnie wymyślone.</p>
                    <p>Źródłem zdecydowanej większości fotografii jest portal fotopolska.eu. Wyjątek stanowi zmodyfikowana fotografia rogatki krowoderskiej. Oryginał:</p>
                    <p className="wrap">https://commons.wikimedia.org/wiki/File:Krak%C3%B3w_W%C5%82adys%C5%82awa_%C5%81okietka_32_Rogatka_miejska_Pod_Figur%C4%85.JPG</p>
                <div className="button-upper" onClick={()=>{
                            setTimeout(() => {
                                setInfo(false)
                            }, 1000)
                            setFadeOut(false)
                            }
                        }>Wróć</div>
            </div></div>}
        </div>
      </div>
    </div>
    </div>
  );
}

export default MainScreen;