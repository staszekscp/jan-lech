import {useEffect, useState} from 'react'

import './App.css';

function EndGameScreen(props) {

    const [fadeOut, setFadeOut] = useState(false)
    const [fadeOut2, setFadeOut2] = useState(false)
    const [startGame, setStartGame] = useState(false)
    const [info, setInfo] = useState(false)

  return (
    <div className="backdrop">
      <div className={fadeOut2?"out":"main"}>
        <div className="main-screen">
            <div className={fadeOut?"out2":"fade"}>
            <div className="additional-container"><div className="explanation-container" >
                    <h3>23 maja 1925 roku chwilę po godzinie 10 55-letni Jan Lech dokonał zamachu na gmach Konsulatu Czechosłowacji przy ulicy Gołębiej w Krakowie.</h3>
                    <p>Jan Lech od 1900 roku przecował w hucie żelaza w Witkowicach na terytorium ówczesnych Austro-Węgier. Tam uległ wypadkowi, za co otrzymywał zasiłek, który władze czeskie wstrzymały w 1924 roku. Później pracował jako dozorca w rogatce na Krowodrzy, skąd został zwolniony za obrażenie przełożonego. Utrzymaniem domu przy Twardowskiego musiała zająć się żona. Rozgoryczony Lech postanowił jeszcze raz domagać się wznowienia wypłaty zasiłku. Był 23 maja 1925 roku.</p>
                    <p>Mężczyzna wkroczył do konsulatu po godzinie 10. Sprawiał wrażenie człowieka pobudzonego i nieobliczalnego. Gdy poproszono go o okazanie dokumentów odparł, że 'służył cesarzowi i musi otrzymać wizę'. Gdy zaczął się awanturować został wyrzucony z budynku przez woźnego Kołodziejczyka. </p>
                    <p>W tym momencie Lech dobył rewolwer i spod pachy strzelił w kierunku woźnego. Kołodziejczyk przeszedł jeszcze 30 kroków, do rogu Gołębiej i Jagiellońskiej, gdzie wypowiedział swoje ostatnie słowa: 'Ratujcie mnie, bo mię zabił' po czym osunął się na ziemię. Natomiast Lech ponownie podszedł pod bramę konsulatu. Postrzelił wybiegającego z budynku urzędnika, a następnie przez otwarte okno wrzucił do konsulatu wykonaną przez siebie bombę. Na szczęście nie eksplodowała.</p>
                    <p>Lech tymczasem podszedł jeszcze do zwłok woźnego, ujął go za rękę i powiedział: 'Żal mi niewinnego człowieka' . Zamachowca obezwładnił chwilę później pracujący przy Gołębiej murarz, Stanisław Z.</p>
                    <p>Śledztwo wykazało, że Jan Lech w domu trzymał spore ilości materiałów wybuchowych. Sąsiedzi zeznali również, że mężczyzna był maniakiem ich kolekcjonowania. Ponadto poinformowali policję o problemach psychicznych Lecha. Okazało się, że z terapii w Kobierzynie odebrała go jego żona...</p>
                    <p>Wykorzystane w grze nazwisko 'Najchel' To anagram od Jana Lecha.</p>
                    <p>Jeśli chcesz możesz wrócić do gry, aby dowiedzieć się więcej o Krakowie z 1925 roku.</p>
                <div className="button-upper" onClick={()=>{
                            setTimeout(() => {
                                props.current(false)
                                props.back(true)
                            }, 2000)
                            setFadeOut2(true)
                            }
                        }>Wróć do mapy Krakowa.</div>
            </div></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EndGameScreen;