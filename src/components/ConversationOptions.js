
const options = {
    "home": {
        1: {
            message: "Szczęść Boże, Pan to z policji?",
            first: {
                content: "Dzień dobry. Tak, przodownik Kołodziejczyk, miło mi. Jestem tu w sprawie zaginięcia Pani męża.",
                route: 2,
                action: () => {}
            },
            second: {
                content: "Owszem, Pani Najchelowa. Przodownik Kołodziejczyk, miło mi. Proszę powiedzieć co się stało.",
                route: 2,
                action: () => {}
            },
        },
        2: {
            message: "No co się stało, co się stało. Stary się upił i wyszed w środku nocy. Już 7 rano, a jego wciąż ni mo!",
            first: {
                content: "Skoro minęło dopiero kilka godzin, chyba nie ma powodów do niepokoju.",
                route: 3,
                action: () => {}
            },
            second: {
                content: "Droga Pani Najchelowa, gdybym wiedział, że chodzi o zaginięcie starego pijaka to nie przyjeżdżałbym tak wcześnie.",
                route: 4,
                action: () => {}
            },
            third: {
                content: "To dlaczego Pani zawiadamiała policję? Dostałem informację, że to poważna sprawa.",
                route: 3,
                action: () => {}
            }
        },
        3: {
            message: "Panie, myśli Pan, że ja to mam czas, żeby się tak panoszyć po posterunkach? Chodzi o to, że wychodząc wziął z szafy rewolwer. Może komu stać się krzywda jak co po drodze popije.",
            first: {
                content: "Zaraz, zaraz! Bez pozwolenia?",
                route: 5,
                action: () => {}
            },
            second: {
                content: "No toście mi zepsuli poranek Pani Nejchelowa. Będę teraz musiał szukać Pani męża po całym mieście.",
                route: 6,
                action: () => {}
            },
        },
        4: {
            message: "Panie, proszę się wyrażać! Mi nie jest do śmiechu, bo Józek wyszed z rewolwerem. Jeszcze komu stanie się krzywda!",
            first: {
                content: "Zaraz, zaraz! Z rewolwerem? Bez pozwolenia? Proszę powiedzieć, co się stało. A w międzyczasie rozpoczniemy przeszukanie mieszkania.",
                route: 7,
                action: () => {}
            },
            second: {
                content: "No toście mi zepsuli poranek Pani Nejchelowa... Proszę mówić. A nasi chłopcy zaczną przeszukiwać mieszkanie",
                route: 7,
                action: () => {}
            },
            third: {
                content: "W porządku, przepraszam. Tymczasem proszę powiedzieć, co tu się w zasadzie wydarzyło.",
                route: 8,
                action: () => {}
            },
        },
        5: {
            message: "Staremu wariatowi różne głupoty do łba przychodziły. Ale teraz to już przesadził! Jak tylko wróci to tak mu zdzielę przez tyn łeb, że się opamiento!",
            first: {
                content: "Niestety będziemy musieli przeszukać Państwa mieszkanie. A tymczasem proszę powiedzieć co się dokładnie stało.",
                route: 7,
                action: () => {}
            },
            second: {
                content: "No nic. Chłopaki! Zacznijcie przeszukiwać tę ruderę! A Pani - proszę powiedzieć co się w zasadzie wydarzyło",
                route: 7,
                action: () => {}
            },
            third: {
                content: "W porządku. Tymczasem proszę powiedzieć co tu się wydarzyło.",
                route: 9,
                action: () => {}
            },
        },
        6: {
            message: "No ja mam nadzieję! To Pana obowiązek!",
            first: {
                content: "Już dobrze, już dobrze. Proszę się uspokoić. I proszę opowiedzieć co się stało wczorajszej nocy. A w międzyczasie my rozpoczniemy przeszukiwać mieszkanie.",
                route: 7,
                action: () => {}
            },
            second: {
                content: "Natomiast teraz Pani obowiązkiem będzie wyjaśnić co się wydarzyło poprzedniej nocy. Proszę.",
                route: 9,
                action: () => {}
            },
            third: {
                content: "Owszem. Niestety należy do nich również rozmowa z Panią i proszę uwierzyć, wolałbym już szukać Pani męża. Proszę powiedzieć co się wydarzyło, a my rozpoczniemy przeszukiwanie mieszkania.",
                route: 7,
                action: () => {}
            },
        },
        7: {
            message: "Chwileczkę, jakie przeszukanie? Nie pozwalam!",
            first: {
                content: "Droga Pani, może Pani mówić co chce, ale to nasza praca. Jeśli będzie Pani stawiać opór to będziemy musieli Panią aresztować.",
                route: 8,
                action: () => {}
            },
            second: {
                content: "Właśnie przyznała się Pani do nielegalnego posiadania broni. Chce Pani pogorszyć swoją sytuację?",
                route: 8,
                action: () => {}
            },
            third: {
                content: "Niech będzie, zostawimy mieszkanie w spokoju. Proszę jednak powiedzieć co się stało poprzedniej nocy.",
                route: 9,
                action: () => {}
            },
        },
        8: {
            message: "Dobrze, dobrze. Róbta co chceta, byle tylko stary nie narobił rabanu.",
            first: {
                content: "Znakomicie. W takim razie proszę powiedzieć co się stało poprzedniej nocy, a my rozpoczniemy przeszukanie. [każ rozpocząć przeszukanie]",
                route: 9,
                action: () => {}
            },
        },
        9: {
            message: "Wczoraj coś koło 22 stary zaczoł się wydzierać, bo mu wódka na łeb już weszła. Ja już spała, zaczoł mie szorpać, a jak nie chciałam wyjść do kuchni mu żorcia zrobić to wściek sie i wzioł rewolwer i wyszed na pole. I tyle żem go widziała. Normalnie po takich awanturach to wracał po godzinie. Ale tera? ",
            first: {
                content: "Jasne. Jeśli Pani pozwoli będę miał kilka pytań.",
                route: 501,
                action: () => {}
            },
        },
        501: {
            message: "Słucham.",
            first: {
                content: "W co mąż był ubrany?",
                route: 11,
                action: () => {}
            },
            second: {
                content: "Gdzie mąż pracuje?",
                route: 16,
                action: () => {}
            },
            third: {
                content: "Dokąd mąż zwykł chodzić?",
                route: 21,
                action: () => {}
            },
        },
        11: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            first: {
                content: "Dziękuję. A gdzie mąż pracuje?",
                route: 12,
                action: () => {}
            },
            second: {
                content: "W porządku. Może jeszcze Pani powiedzieć dokąd mąż zwykł chodzić?",
                route: 13,
                action: () => {}
            },
        },
        12: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            first: {
                content: "Dziękuję. Mam jeszcze jedno pytanie. Proszę powiedzieć, dokąd mąż zwykł chodzić?",
                route: 14,
                action: () => {}
            },
        },
        13: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            first: {
                content: "Dziękuję. W takim razie mam ostatnie pytanie. Gdzie mąż pracuje?",
                route: 15,
                action: () => {}
            },
        },
        14: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]",
            action: () => {}
        },
        15: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]",
            action: () => {}
        },
        16: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            first: {
                content: "Dziękuję. A w co mąż był ubrany?",
                route: 17,
                action: () => {}
            },
            second: {
                content: "W porządku. Może jeszcze Pani powiedzieć dokąd mąż zwykł chodzić?",
                route: 18,
                action: () => {}
            },
        },
        17: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            first: {
                content: "Dziękuję. Mam jeszcze jedno pytanie. Proszę powiedzieć, dokąd mąż zwykł chodzić?",
                route: 19,
                action: () => {}
            },
        },
        18: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            first: {
                content: "Dziękuję. W takim razie mam ostatnie pytanie. W co mąż był ubrany?",
                route: 20,
                action: () => {}
            },
        },
        19: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]",
            action: () => {}
        },
        20: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]",
            action: () => {}
        },
        21: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            first: {
                content: "Dziękuję. A w co mąż był ubrany?",
                route: 22,
                action: () => {}
            },
            second: {
                content: "W porządku, dziękuję. Proszę jeszcze powiedzieć, gdzie mąż pracuje?",
                route: 23,
                action: () => {}
            },
        },
        22: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            first: {
                content: "Dziękuję. Mam jeszcze jedno pytanie. Gdzie mąż pracuje?",
                route: 24,
                action: () => {}
            },
        },
        23: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            first: {
                content: "Dziękuję. W takim razie mam ostatnie pytanie. W co mąż był ubrany?",
                route: 25,
                action: () => {}
            },
        },
        24: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]",
            action: () => {}
        },
        25: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]",
            action: () => {}
        },
        26: {
            message: "I co, ma Pan jakieś informacje?",
            backMessage: "Jeszcze nic konkretnego. Wrócimy jak się czegoś dowiemy. [Zakończ rozmowę i wyjdź z budynku]",
            
        },
        27: {
            message: "I co, ma Pan jakieś informacje?",
            first: {
                content: "Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 25,
                action: () => {}
            },            
        },
        28: {
            message: "I co, dowiedział się Pan czegoś?",
            first: {
                content: "Owszem. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 25,
                action: () => {}
            },            
        },
        29: {
            message: "Panie, ma Pan jakieś nowe informacje?",
            first: {
                content: "Owszem. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 25,
                action: () => {}
            },
            second: {
                content: "Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 25,
                action: () => {}
            }, 
        }
    },
    "twardowskiego": {
        backMessage: "Wróć do mapy Krakowa.",
        1: {
            message: "Znajdujesz się na ul. Twardowskiego. Dokąd chcesz się udać?",
            first: {
                content: "Mieszkanie Najchela",
                route: 11
            },
            second: {
                content: "Mieszkanie Stelmacha",
                route: 12
            },
            third: {
                content: "Gospodarstwo Maciejowskiego",
                route: 13
            },
            fourth: {
                content: "Posesja Krogula",
                route: 13
            }
        }
    },
    "stelmach": {
        1: {
            message: "Dzień dobry, Pan w jakiej sprawie?",
            first: {
                content: "Dzień dobry. Przodownik Kołodziejczyk z Policji. Ja w sprawie pana Józefa Najchela",
                route: 601,
                action: () => {}
            },
            second: {
                content: "Dobry. Kołodziejczyk, Policja. Chodzi o Pana sąsiada, Józefa Najchela.",
                route: 601,
                action: () => {}
            },
        },
        601: {
            message: "Andrzej Stelmach, miło mi Panie władzo. Słucham, co chciałby Pan wiedzieć?",
            first: {
                content: "Co Pan wie o Najchelach?",
                route: 3,
                action: () => {}
            },
            second: {
                content: "Wczoraj, około 22, za ścianą Pana mieszkania ponoć wybuchła awantura. Słyszał Pan coś?",
                route: 10, 
                action: () => {}
            },
        },
        3: {
            message: "W sumie to niewiele, nie rozmawiamy ze sobą. Najchelowa to znerwicowana kobita, zresztą chyba już miał Pan okazję ją poznać. Cały czas drze się na tego Józka, czasami spać się nie da. Ale ten wcale nie lepszy, o ile nawet nie gorszy. No cóż, jakoś mnie to nie dziwi wiedząc dokąd go wysłali...",
            first: {
                content: "Co ma Pan na myśli?", 
                route: 501,
                action: () => {}
            }
        },
        501: { //
            message: "Czyli pewnie Najchelowa się nie przyznała... Jakoś mnie to nie dziwi. Proszę Pana, Najchela wysłali ponoć gdzieś do psychiartyka, nie wiem którego, takie burdy robił. Ludzie mówią, że diabła widział. Ja tam nie wiem, ale czasami mam wrażenie jakby go diabeł opętał. W każdym razie jak wrócił to był gorszy niż przedtem.",
            first: {
                content: "To kiedy stamtąd wrócił?",
                route: 4,
                action: () => {}
            },
            second: {
                content: "Widział diabła? Co to za brednie?",
                route: 5, 
                action: () => {}
            },
        },
        4: {
            message: "Parę tygodni temu. Łącznie go miesiąc nie było.",
            first: {
                content: "Dziękuję za informację. Wczoraj, około 22, za ścianą Pana mieszkania ponoć wybuchła awantura. Słyszał Pan coś?", 
                route: 6,
                action: () => {}
            },
            second: {
                content: "Rozumiem. Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 8, 
                action: () => {}
            },
            },
        5: {
            message: "Proszę Pana, ja tylko przekazuję co ludzie mówią. Osobiście dziwię się, że go nie zostawili w tym szpitalu, bo jeszcze komuś może zrobić krzywdę. Nie było go z miesiąc, a odkąd parę tygodni temu wrócił do domu jest jeszcze gorzej.",
            first: {
                content: "Dziękuję za informację. Wczoraj, około 22, za ścianą Pana mieszkania ponoć wybuchła awantura. Słyszał Pan coś?", 
                route: 6,
                action: () => {}
            },
            second: {
                content: "Rozumiem. Pan Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 8,
                action: () => {}
            },
                    },
        6: {
            message: "Trochę. Jakieś krzyki. Trwało to może z 10 minut, a potem ucichło. Ale nie wiem co dokładnie mówili.",
            first: {
                content: "Rozumiem. Pytam, ponieważ Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 7, 
                action: () => {}
            },
        },
        7: { 
            message: "Zaginął? No proszę... Ale nie, nie mam pojęcia, dokąd mógł pójść.",
            first: {
                content: "No dobrze. A zmieniając temat... Śledzi Pan rozgrywki piłkarskie?",
                route: 701, //
                action: () => {}
            },
            backMessage: "Dziękuję, bardzo Pan mi pomógł. W razie pytań jeszcze się odezwę. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        8: {
            message: "Zaginął? No proszę... Ale nie, nie mam pojęcia, dokąd mógł pójść.",
            first: {
                content: "No dobrze. Wczoraj, około 22, za ścianą Pana mieszkania ponoć wybuchła awantura. Słyszał Pan coś?", 
                route: 9,
                action: () => {}
            },
        },
        9: {
            message: "Trochę. Jakieś krzyki. Trwało to może z 10 minut, a potem ucichło. Ale nie wiem co dokładnie mówili.",
            first: {
                content: "Dziękuję. A zmieniając temat... Śledzi Pan rozgrywki piłkarskie?",
                route: 701, //
                action: () => {}
            },
            backMessage: "Dziękuję, bardzo Pan mi pomógł. W razie pytań jeszcze się odezwę. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        10: {
            message: "Trochę. Jakieś krzyki. Trwało to może z 10 minut, a potem ucichło. Ale nie powiem co dokładnie mówili.",
            first: {
                content: "Często był Pan świadkiem podobnych kłótni?", 
                route: 11, 
                action: () => {}
            },
            second: {
                content: "Pan Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 14, 
                action: () => {}
            },
        },
        11: {
            message: "Haha, czy często? Codziennie! Najchelowa to znerwicowana kobita, zresztą chyba już miał Pan okazję ją poznać. Cały czas drze się na tego Józka, czasami spać się nie da. Ale ten wcale nie lepszy, o ile nawet nie gorszy. No cóż, jakoś mnie to nie dziwi wiedząc dokąd go wysłali...",
            first: {
                content: "Co ma Pan na myśli?", 
                route: 502,
                action: () => {}
            }
        },
        502: { //
            message: "Czyli pewnie Najchelowa się nie przyznała... Jakoś mnie to nie dziwi. Proszę Pana, Najchela wysłali gdzieś do psychiartyka, nie wiem którego, takie burdy robił. Ludzie mówią, że diabła widział. Ja tam nie wiem, ale czasami mam wrażenie jakby go diabeł opętał. W każdym razie jak wrócił to był gorszy niż przedtem.",
            first: {
                content: "To kiedy stamtąd wrócił?",
                route: 12,
                action: () => {}
            },
            second: {
                content: "Widział diabła? Co to za brednie?",
                route: 13, 
                action: () => {}
            },
        },
        12: {
            message: "Parę tygodni temu. Łącznie go miesiąc nie było.",
            first: {
                content: "Rozumiem. Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 8, 
                action: () => {}
            },
        },
        13: {
            message: "Proszę Pana, ja tylko przekazuję co ludzie mówią. Osobiście dziwię się, że go nie zostawili w tym szpitalu, bo jeszcze komuś może zrobić krzywdę. Nie było go z miesiąc, a odkąd parę tygodni temu wrócił do domu jest jeszcze gorzej.",
            first: {
                content: "Rozumiem. Pan Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 8,
                action: () => {}
            },
        },
        14: {
            message: "Zaginął? No proszę... Ale nie, nie mam pojęcia, dokąd mógł pójść. Choć mając świadomość skąd wrócił...",
            first: {
                content: "Co ma Pan na myśli?", 
                route: 503, 
                action: () => {}
            },
        },
        503: { //
            message: "Czyli pewnie Najchelowa się nie przyznała... Jakoś mnie to nie dziwi. Proszę Pana, Najchela wysłali gdzieś do psychiartyka, nie wiem którego, takie burdy robił. Ludzie mówią, że diabła widział. Ja tam nie wiem, ale czasami mam wrażenie jakby go diabeł opętał. W każdym razie jak wrócił to był gorszy niż przedtem.",
            first: {
                content: "To kiedy stamtąd wrócił?",
                route: 15,
                action: () => {}
            },
            second: {
                content: "Widział diabła? Co to za brednie?",
                route: 16, 
                action: () => {}
            },
        },
        15: {
            message: "Parę tygodni temu. Łącznie go miesiąc nie było.",
            first: {
                content: "Dziękuję. A zmieniając temat... Śledzi Pan rozgrywki piłkarskie?",
                route: 701, //
                action: () => {}
            },
            backMessage: "Dziękuję, bardzo Pan mi pomógł. W razie pytań jeszcze się odezwę. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        16: {
            message: "Proszę Pana, ja tylko przekazuję co ludzie mówią. Osobiście dziwię się, że go nie zostawili w tym psychiatryku, bo jeszcze komuś może zrobić krzywdę. Nie było go z miesiąc, a odkąd parę tygodni temu wrócił do domu jest jeszcze gorzej.",
            first: {
                content: "Dziękuję. A zmieniając temat... Śledzi Pan rozgrywki piłkarskie?",
                route: 701, //
                action: () => {}
            },
            backMessage: "Dziękuję, bardzo Pan mi pomógł. W razie pytań jeszcze się odezwę. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        20: {
            message: "Witam ponownie, Panie przodowniku. Ma Pan do mnie jeszcze jakieś pytania?",
            first: {
                content: "W sumie to tak. Śledzi Pan może rozgrywki piłkarskie?",
                route: 701, //
                action: () => {}
            },
            backMessage: "Nie, ale jeśli coś się pojawi to się odezwę. Tymczasem do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        701: {
            message: "Proszę Pana! Największy fan!",
            first: {
                content: "Świetnie! W takim razie miałbym kilka pytań...",
                route: 22, // O PIŁCE NOŻNEJ!
                action: () => {}
            },
            backMessage: "Dobrze wiedzieć. Jak znajdę chwilę to porozmawiamy, ale muszę już iść. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"

        },
        21: {
            message: "Witam Pana ponownie! Ma Pan do mnie jakieś pytania?",
            first: {
                content: "Chciałbym jeszcze raz pogadać o piłce.",
                route: 22, //
                action: () => {}
            },
            backMessage: "Nie, ale jeśli coś się pojawi to się odezwę. Tymczasem do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        22: {
            message: "A zatem o czym chciałby Pan pogadać?",
            first: {
                content: "ggg",
                route: 701, //
                action: () => {}
            },
            backMessage: "W sumie, zmieniłem zdanie. Jeszcze się odezwę, ale tymczasem, do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
    },
    "maciejowski": {
        1: {
            message: "Panie, kim Pan jest?",
            first: {
                content: "Kołodziejczyk, policja. Mam kilka pytań odnośnie Najchelów.",
                route: 501,
                action: () => {}
            },
        },
        501: {
            message: "Maciejowski, dobry. Słucham, o co chodzi?",
            first: {
                content: "Proszę mi powiedzieć, co Pan wie o Najchelach?",
                route: 2,
                action: () => {}
            },
            second: {
                content: "Kiedy po raz ostatni widział Pan Józefa Najchela?",
                route: 6,
                action: () => {}
            },
            third: {
                content: "Widział Pan coś podejrzanego ostatniej nocy?",
                route: 7,
                action: () => {}
            },
        },
        2: {
            message: "Wariaty, Panie. Ja tam się do nich nie zbliżam, nie wiadomo co do łba strzeli.",
            first: {
                content: "Miał Pan z nimi jakieś kłopoty?",
                route: 3,
                action: () => {}
            },
            second: {
                content: "Co ma Pan na myśli?",
                route: 4,
                action: () => {}
            },
        },
        3: {
            message: "Bo to ino raz. Ja to nie mam do nich siły. Odkąd parę lat temu mi ten wariat żonę zaatakował nie pozwalam im się zbliżyć.",
            first: {
                content: "Co się wydarzyło?",
                route: 5,
                action: () => {}
            },
        },
        4: {
            message: "No parę lat temu ten cały Józek mi sie na żonę rzucił! Wariaty!",
            first: {
                content: "Co się wydarzyło?",
                route: 5,
                action: () => {}
            },
        },
        5: {
            message: "Tuż po tym co nas Matka Boska od bolszewików wybawiła to pamięta Pan, nie było co do gara włożyć, od tej Hiszpanki całej ludzie umirali. Sam brata straciłem. A jak kiedyś żona od piekarza wracała to ten Najchel się na nią zaczaił tu, o, za drzewem i rzucił z pięściami. Ale Panie, jak chce Pan wiedzieć więcej o tych Najchelach to żonę pytać. Mnie tam nie obchodzi co oni robią.",
            first: {
                content: "Powie coś Pan więcej o tym, co się wtedy działo w Krakowie?",
                route: 30,
                action: () => {}
            },
            fourth: {
                content: "W takim razie jeśli Pan pozwoli porozmawiam z Pana żoną.",
                route: 3,
                action: () => {}
            },
            backMessage: "Dziękuję za informacje. Wrócę jeśli będę mieć jakieś pytania. [Zakończ rozmowę i odejdź.]"
        },
        6: {
            message: "Paaanie, ja się do nich nie zbliżam. Odkąd mi żonę poturbował parę lat temu, to nie chcę mieć z nimi do czynienia.",
            first: {
                content: "Co się wydarzyło?",
                route: 5,
                action: () => {}
            },
        },
        7: {
            message: "Nie, niczego nie widziałem. Dlaczego Pan pyta?",
            first: {
                content: "Chodzi o Pana sąsiada, Józefa Najchela. Zaginął wczorajszej nocy.",
                route: 8,
                action: () => {}
            },
        },
        8: {
            message: "Pewnie się schlał i tyle go widzieli. Jak nie wróci to płakać nie bede. Odkąd mi żonę poturbował parę lat temu, to nie chcę mieć z nimi do czynienia.",
            first: {
                content: "Co się wydarzyło?",
                route: 5,
                action: () => {}
            },
        },
        9: {
            message: "Witam, witam. Co Pana tu ponownie sprowadza?",
            first: {
                content: "Chciałbym porozmawiać o tym, jak wyglądał Kraków po Wielkiej Wojnie.",
                route: 30,
                action: () => {}
            },
            fourth: {
                content: "Jeśli Pan pozwoli to porozmawiam z Pana żoną.",
                route: 3,
                action: () => {}
            },
            backMessage: "Przepraszam za kłopot. Muszę iść. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        10: {
            message: "Słucham Pana.",
            first: {
                content: "Chciałbym porozmawiać o tym, jak wyglądał Kraków po Wielkiej Wojnie.",
                route: 30,
                action: () => {}
            },
            fourth: {
                content: "Przepraszam za zamieszanie. Muszę jeszcze raz zamienić słówko z Pana żoną.",
                route: 3,
                action: () => {}
            },
            backMessage: "Chciałem się tylko pożegnać. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        30: { // KRAKÓW PO I WOJNIE ŚWIATOWEJ
            message: "Słucham, co chce Pan wiedzieć?",
            first: {
                content: "Co się wydarzyło?",
                route: 5,
                action: () => {}
            },
            
        },
    },
    "maciejowska": {
        1: {
            message: "Dzień dobry, słucham Pana.",
            first: {
                content: "Pani mąż wspomniał, że kilka lat temu zaatakował Panią Józef Najchel.",
                route: 6,
                action: () => {}
            },
        },
        6: {
            message: "*wzdycha* Tak, straszna awantura z tego wyniknęła. Ten cały Najchel chciał mi wyrwać siatkę z jedzeniem. Nieco mnie poszarpał, ale uważam, że mój mąż za bardzo histeryzuje...",
            first: {
                content: "Mam rozumieć, że nie została Pani pobita?",
                route: 2,
                action: () => {}
            },
            second: {
                content: "Czyli ma Pani jakiś kontakt z Najchelami?",
                route: 7,
                action: () => {}
            },
            third: {
                content: "Czy widziała Pani coś podejrzanego ostatniej nocy?",
                route: 8, 
                action: () => {}
            },
        },
        2: {
            message: "Gdzie tam... Tak naprawdę to po całej tej akcji przyszła do mnie Najchelowa przeprosić i wytłumaczyć zachowanie Józka. Nie mówiłam o tym mężowi, ale później im trochę pomagałam. Na przykład nauczyłam ich czytać i pisać. Zanim poszłam pracować do fabryki chciałam zostać nauczycielką.",
            first: {
                content: "To dlaczego Pani nią nie jest?",
                route: 3,
                action: () => {}
            },
            second: {
                content: "Przychodzę właśnie w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
                action: () => {}
            },
        },
        3: {
            message: "*smutny śmiech* Co Pan się z księżyca urwał? Do roboty trzeba byo iść, do Cygarfabryki na Dolnych Młynów mnie rodzice posłali jak miałam 14 lat. A potem męża znaleźli, dzieci się pojawiły...",
            first: {
                content: "Proszę wybaczyć mój nietakt. Ale wracając. Pan Józef zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
                action: () => {}
            },
            second: {
                content: "Praca Cygarfabryce chyba nie należała do najprostszych?",
                route: 4,
                action: () => {}
            },
            third: {
                content: "A co Pani teraz robi?",
                route: 5,
                action: () => {}
            }
        },
        4: {
            message: "Mogło być gorzej. Choć wiadomo, po 12 godzinach skręcania cygar dla żołnierzy austriackich co stacjonowali w Krakowie nie było łatwo się ruszać. I tak dzień w dzień. Ale inni mieli gorzej... Mój mąż pracuje teraz u Jankowskiego na Zabłociu. Skrzynie robi. Czasem jak wraca to go nie poznaję, taki zmęczony.",
            first: {
                content: "A czym się Pani obecnie zajmuje?",
                route: 5,
                action: () => {}
            },
            second: {
                content: "Ale wracając. Przychodzę w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
                action: () => {}
            },
        },
        5: {
            message: "Zajmuję się domem, wychowuję dzieciaki. Mam nadzieję, że przynajmniej one nie będą musiały harować w jakiejś fabryce.",
            first: {
                content: "Rozumiem. Jednak przychodzę do Państwa w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
                action: () => {}
            },
        },
        7: {
            message: "Tak. A w zasadzie miałam. Tak naprawdę to po całej tej akcji przyszła do mnie Najchelowa przeprosić i wytłumaczyć zachowanie Józka. Nie mówiłam o tym mężowi, ale później im trochę pomagałam. Na przykład nauczyłam ich czytać i pisać. Zawsze chciałam być nauczycielką.",
            first: {
                content: "To dlaczego Pani nią nie jest?",
                route: 3,
                action: () => {}
            },
            second: {
                content: "Przychodzę właśnie w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
                action: () => {}
            },
        },
        8: {
            message: "Nie... A dlaczego Pan pyta?",
            first: {
                content: "Przychodzę w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować?",
                route: 501, 
                action: () => {}
            },
        },
        9: {
            message: "Ehhh... Przykro mi to słyszeć. Najchelowie to dość porywcza rodzina. Zwłaszcza Józek. Przypomina mi trochę mojego przełożonego jak pracowałam za młodu w Cygarfabryce na Dolnych Młynów... Też miewał różne napady...",
            first: {
                content: "Może w takim razie wie Pani gdzie może się teraz znajdować?",
                route: 501,
                action: () => {}
            },
            second: {
                content: "Zdaje się, że wie Pani sporo o Najchelach. Może Józek miał jakichś bliższych znajomych?",
                route: 501, 
                action: () => {}
            },
        },
        501: {
            message: "Przykro mi, nie wiem. Jedynie kojarzę, że ostatnio kręcił się koło nich jakiś przygrubawy mężczyzna, dobrze ubrany. Ale kim jest? Trzeba pytać Najchelowej.",
            first: {
                content: "W porządku, dziękuję za informacje. Skoro wspomniała Pani o pracy w fabryce to chciałbym o coś zapytać...",
                route: 10,
                action: () => {}
            },
            fourth: {
                content: "Dziękuję za informacje. Pozwoli Pani, że zanim pójdę porozmawiam jeszcze z Pani mężem?",
                route: 10, 
                action: () => {}
            },
            backMessage: "Dziękuję za informacje. Jeśli będę miał jakieś pytania zwrócę się do Państwa. [Zakończ rozmowę i odejdź]"
        },
        10: {
            message: "Słucham, co chciałby Pan wiedzieć?",
            first: { // PYTANIA O PRZEMYSŁ, PRACĘ
                content: "W porządku, dziękuję za informacje. Skoro wspomniała Pani o pracy w fabryce to chciałbym o coś zapytać...",
                route: 601,
                action: () => {}
            },
            fourth: {
                content: "W sumie, to jeszcze porozmawiałbym z Pani mężem, przepraszam za kłopot.",
                route: 10, 
                action: () => {}
            },
            backMessage: "W sumie to zapytam kiedy indziej. Dziękuję za informacje i do widzenia. [Zakończ rozmowę i odejdź]"
        },
        11: {
            message: "O, to znowu Pan. Słucham, mogę jakoś pomóc?",
            first: { 
                content: "Wspomniała Pani o pracy w fabryce. Chciałbym dowiedzieć się nieco więcej...",
                route: 10,
                action: () => {}
            },
            fourth: {
                content: "Przepraszam, jednak chcę porozmawiać z Pani mężem.",
                route: 10, 
                action: () => {}
            },
            backMessage: "W sumie to zapytam kiedy indziej. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
    },
    "krogul": {
        1: {
            message: "Czego?",
            first: {
                content: "Przodownik Kołodziejczyk, jestem z policji. Chciałbym zadać kilka pytań o Najchelów.",
                route: 501,
                action: () => {}
            },
            second: {
                content: "Ale czemu tak niekulturalnie...?",
                route: 501,
                action: () => {}
            },
            third: {
                content: "Panie, trochę grzeczniej, bo będzie Pan miał kłopoty.",
                route: 501, 
                action: () => {}
            }
        },
        501: {
            message: "Nic nie wiem, spieprzaj Pan, to moja posesja.",
            first: {
                content: "A skąd Pan wie o co chciałem zapytać?",
                route: 2,
                action: () => {}
            },
            second: {
                content: "Uważaj Pan z tym językiem, bo się źle to skończy.",
                route: 2, 
                action: () => {}
            },
        },
        2: {
            message: "*milczy*",
            first: {
                content: "Haloooo?",
                route: 3,
                action: () => {}
            },
            second: {
                content: "Co to, zabawa w króla ciszy?",
                route: 3,
                action: () => {}
            },
        },
        3: {
            message: "*dalej milczy*",
            first: {
                content: "Jak Pan nie odpowie na moje pytania to każę Pana aresztować!",
                route: 4,
                action: () => {}
            },
            backMessage: "Aaa szkoda czasu... [Odejdź]"
        },
        4: {
            message: "Wiem, po coście tu przyleźli. Najchelowi wczoraj odwaliło. Darł mordę, że kogoś zabije. Potem odszedł w kierunku miasta. Więcej nie wiem. Teraz dajcie mi spokój, zajęty jestem. Do widzenia.",
            backMessage: "Do widzenia. [Odejdź]"
        },
        5: {
            message: "Przecież mówiłem, żeby nie przeszkadzać! Nie wiem co się stało z tym ochlejmordą!",
            backMessage: "Dobrze, w porządku. Do widzenia. [Odejdź]"
        },
    },
    "lekarz": {
        1: {
            message: "Dzień dobry, jestem dr Piltz. Z jakiegoż to powodu policja postanowiła odwiedzić nasz szpital?",
            first: {
                content: "Dzień dobry. Chodzi o jednego z pacjentów. Mówi Panu coś nazwisko Najchel?",
                route: 61,
                action: () => {}
            },
            second: {
                content: "Dzień dobry Panie doktorze. Może pamięta Pan jednego z pacjentów, nazywał się Najchel.",
                route: 61,
                action: () => {}
            },
            third: {
                content: "Dzień dobry. Potrzebuję informacji o jednym z pacjentów, Józefie Najchelu.",
                route: 61, 
                action: () => {}
            }
        },
        2: {
            message: "Dzień dobry, jestem dr Piltz. Z jakiegoż to powodu policja postanowiła odwiedzić nasz szpital?",
            first: {
                content: "Dzień dobry. Chodzi o jednego z pacjentów. Mówi Panu coś nazwisko Najchel?",
                route: 62,
                action: () => {}
            },
            second: {
                content: "Dzień dobry Panie doktorze. Może pamięta Pan jednego z pacjentów, nazywał się Najchel.",
                route: 62,
                action: () => {}
            },
            third: {
                content: "Dzień dobry. Potrzebuję informacji o jednym z pacjentów, Józefie Najchelu.",
                route: 62, 
                action: () => {}
            }
        },
        61: {
            message: "Najchel... Najchel... Ach, tak! Racja, był tu, nawet niedawno. Leczyliśmy go na chorobę afektywną dwubiegunową...",
            first: {
                content: "W takim razie nie powinien być wciąż na oddziale?",
                route: 4,
                action: () => {}
            },
            second: {
                content: "I co, tak po prostu wyzdrowiał?",
                route: 4, 
                action: () => {}
            },
        },
        62: {
            message: "Najchel... Najchel... Ach, tak! Racja, był tu, nawet niedawno. Leczyliśmy go na chorobę afektywną dwubiegunową...",
            first: {
                content: "W takim razie nie powinien być wciąż na oddziale?",
                route: 3,
                action: () => {}
            },
            second: {
                content: "I co, tak po prostu wyzdrowiał?",
                route: 3, 
                action: () => {}
            },
        },
        3: {
            message: "Starałem się przekonać jego żonę, że powienien zostać na oddziale, bo coś może się wydarzyć. Ale nie chciała słuchać. Podpisała jedynie dokument, przysięgając, że otoczy go opieką. Nie możemy przetrzymywać pacjentów bez wyroku sądowego.",
            first: {
                content: "To pewnie nie zaskoczy Pana informacja, że Najchel zaginął i nie wiadomo co się z nim stało?",
                route: 5,
                action: () => {}
            },
            second: {
                content: "Brawo. No to niech Pan wie, że Najchel teraz biega po mieście z rewolwerem za pazuchą. A my nie wiemy gdzie go szukać.",
                route: 5, 
                action: () => {}
            },
            second: {
                content: "No to się świetnie zaopiekowała jak zeszłej nocy po awanturze wybiegł z rewolwerem w dłoni, krzycząc że kogoś zabije.",
                route: 5, 
                action: () => {}
            },
        },
        4: {
            message: "Starałem się przekonać jego żonę, że powienien zostać w szpitalu, bo coś może się wydarzyć. Ale nie chciała słuchać. Podpisała jedynie dokument, przysięgając, że otoczy go opieką. Nie możemy przetrzymywać pacjentów bez wyroku sądowego.",
            first: {
                content: "To pewnie nie zaskoczy Pana informacja, że Najchel zaginął i nie wiadomo co się z nim stało?",
                route: 5,
                action: () => {}
            },
            second: {
                content: "Brawo. No to niech Pan wie, że Najchel teraz biega po mieście z rewolwerem za pazuchą. A my nie wiemy gdzie go szukać.",
                route: 5, 
                action: () => {}
            },
        },
        5: {
            message: "Słucham?!",
            first: {
                content: "Niestety. Dlatego będę miał kilka pytań.",
                route: 6,
                action: () => {}
            },
        },
        6: {
            message: "Dobrze, proszę pytać. Postaram się pomóc",
            first: {
                content: "Do czego zdolny jest Najchel?",
                route: 7,
                action: () => {}
            },
            second: {
                content: "Wie Pan coś, co pomogłoby w odnalezieniu Najchela?",
                route: 8,
                action: () => {}
            },
            third: {
                content: "Jak wyglądał ostatni pobyt Najchela w szpitalu?",
                route: 9,
                action: () => {}
            },
        },
        7: {
            message: "Prawdę mówiąc, do wszystkiego. Miewał halucynacje. Często rozmawiał z urojonym przyjacielem, którego przedstawiał jako 'człowieka o koźlich rogach'. Ten 'przyjaciel' często namawiał go do dziwnych rzeczy. Najchel mówił, że pewnego razu kazał mu zaatakować sąsiadkę. Ale proszę porozmawiać z siostrą Zuzanną. To ona bezpośrednio opiekowała się Najchelem.",
            fourth: {
                content: "W porządku, dziękuję za pomoc.",
                route: 6,
                action: () => {}
            },
        },
        8: {
            message: "Szczerze, nie wiem. Najchel miał urojonego przyjaciela, którego przedstawiał jako 'człowieka o koźlich rogach'. Ten 'przyjaciel' często namawiał go do dziwnych rzeczy. Najchel mówił, że pewnego razu kazał mu zaatakować sąsiadkę. Ale proszę porozmawiać z siostrą Zuzanną. To ona bezpośrednio opiekowała się Najchelem i będzie wiedzieć więcej ode mnie.",
            fourth: {
                content: "W porządku, dziękuję za pomoc.",
                route: 6,
                action: () => {}
            },
        },
        9: {
            message: "Prawdę mówiąc, nie wyglądało to dobrze. Miewał halucynacje. Często rozmawiał z urojonym przyjacielem, którego przedstawiał jako 'człowieka o koźlich rogach'. Ten 'przyjaciel' często namawiał go do dziwnych rzeczy. Najchel mówił, że pewnego razu kazał mu zaatakować sąsiadkę. Ale proszę porozmawiać z siostrą Zuzanną. To ona bezpośrednio opiekowała się Najchelem.",
            fourth: {
                content: "W porządku, dziękuję za pomoc.",
                route: 6,
                action: () => {}
            },
        },
        10: {
            message: "Tak?",
            first: {
                content: "Najchela w trakcie pobytu w szpitalu odwiedził jakiś człowiek. Ponoć Pan z nim rozmawiał.",
                route: 11,
                action: () => {}
            },
        },
        11: {
            message: "*dłuższa pauza, przełyka ślinę* No dobrze... To prawda. Nie wiem jednak jak się nazywa, nie chciał się przedstawić. Poprosił mnie tylko o pewną przysługę...",
            first: {
                content: "No i co to za przysługa?",
                route: 12,
                action: () => {}
            },
            second: {
                content: "I co, zapomniał Pan mi o tym powiedzieć?",
                route: 13,
                action: () => {}
            },
        },
        12: {
            message: "*bierze głęboki wdech* Chciał zobaczyć całą dokumentację medyczną Józefa Najchela.",
            first: {
                content: "I dał mu Pan do niej dostęp?",
                route: 14,
                action: () => {}
            },
            second: {
                content: "Niech zgadnę. Zgodził się Pan.",
                route: 14,
                action: () => {}
            },
        },
        13: {
            message: "Nie wydawało mi się to istotne...",
            first: {
                content: "Bzdury, przemilczał Pan to specjalnie. Proszę powiedzieć, co to była za przysługa.",
                route: 12,
                action: () => {}
            },
        },
        14: {
            message: "Nie rozumie Pan! Potrzebowałem pieniędzy!",
            first: {
                content: "Nie obchodzi mnie to, że przyjął Pan łapówkę. Moim zadaniem jest odnaleźć Najchela. Gdzie mogę znaleźć tego człowieka?",
                route: 501,
                action: () => {}
            },
            second: {
                content: "Oj tam, co się Pan przejmuje. To, że jestem z policji nie znaczy, że mam krystaliczne serce. 1000 złotych i o niczym nie wiem.",
                route: 16,
                action: () => {}
            },
        },
        501: {
            message: "Nie mogłem pokazać mu dokumentacji w szpitalu. Ktoś mógłby zobaczyć. Dlatego umówiliśmy się w restauracji przy browarze Lubicz. Ale nie wiem nic więcej.",
            first: {
                content: "Dziękuję za informacje. Ale zanim pójdę mam kilka pytań odnośnie służby zdrowia...",
                route: 30,
                action: () => {}
            },
            fourth: {
                content: "Dziękuję. Jednak zanim pójdę to chciałbym zamienić słówko z siostrą Zuzanną... Mam kilka pytań dotyczących Kościoła...",
                route: 16,
                action: () => {}
            },
            backMessage: "No dobrze. Dziękuję za informacje. [Zakończ rozmowię i opuść szpital]"
        },
        16: {
            message: "Dobrze, już dobrze... Nie potrzebuję więcej kłopotów... [Wręcza kopertę]",
            first: {
                content: "Wspaniale, akurat zbierałem na nowy samochód. Tymczasem proszę powiedzieć gdzie znajdę tego człowieka.",
                route: 501,
                action: () => {}
            },
        },
        17: {
            message: "Słucham. Ma Pan jeszcze jakieś pytania?",
            first: {
                content: "Owszem. Mam kilka pytań odnośnie służby zdrowia...",
                route: 30,
                action: () => {}
            },
            fourth: {
                content: "Chciałbym porozmawiać z siostrą Zuzanną",
                route: 16,
                action: () => {}
            },
            backMessage: "Nie. Przepraszam za kłopot, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        18: {
            message: "Witam ponownie. Słucham Pana.",
            first: {
                content: "Mam kilka pytań odnośnie służby zdrowia...",
                route: 30,
                action: () => {}
            },
            fourth: {
                content: "Chciałbym porozmawiać z siostrą Zuzanną",
                route: 16,
                action: () => {}
            },
            backMessage: "Nie. Przepraszam za kłopot, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
    },
    "pielegniarka": {
        1: {
            message: "Niech będzie pochwalony. Widziałam, że rozmawiał Pan z doktorem Piltzem. W czym mogę pomóc?",
            first: {
                content: "Dzień dobry. Doktor mówi, że jednym z Pani podopiecznych był Józef Najchel...",
                route: 2,
                action: () => {}
            },
            second: {
                content: "Dzień dobry. Co mi może Pani powiedzieć o Józefie Najchelu?",
                route: 6,
                action: () => {}
            },
        },
        2: {
            message: "Tak. Biedny człowiek... Opętany przez szatana. A przynajmniej tak wynikało z tego co mówił...",
            first: {
                content: "Chodzi to tego 'przyjaciela' z rogami, tak?",
                route: 3,
                action: () => {}
            },
            second: {
                content: "Jak dla mnie to po prostu chory psychicznie człowiek, nie żaden szatan.",
                route: 5, 
                action: () => {}
            },
        },
        3: {
            message: "Tak, ale nie dziwi mnie to... Ponoć do kościoła nigdy nie chodził...",
            first: {
                content: "Zgadzam się. Jednak obecnie sytuacja jest bardzo poważna, dlatego musi mi Pani pomóc.",
                route: 4,
                action: () => {}
            },
            second: {
                content: "Ja też nie chodzę, a jakoś nie widuję żadnych diabłów.",
                route: 5, 
                action: () => {}
            },
        },
        4: {
            message: "Słucham Pana.",
            first: {
                content:"Co mi może Pani powiedzieć na temat Józefa Najchela?",
                route: 6,
                action: () => {}
            },
        },
        5: {
            message: "Proszę sobie nie robić kpin z cierpienia innego człowieka!",
            first: {
                content:"Przepraszam, zachowałem się nietaktownie. Muszę Panią o coś zapytać.",
                route: 4,
                action: () => {}
            },
            second: {
                content: "Dobrze już, dobrze. Proszę się nie unosić. Czy mogę zadać jedno pytanie?",
                route: 4, 
                action: () => {}
            },
        },
        6: {
            message: "Był u nas kilka tygodni temu. Opiekowałam się nim niemal codziennie. Niewiele ze mną rozmawiał... Mówił głównie do siebie, a raczej do diabła co w nim siedzi. Biedaczek. Żona go nawet nie odwiedzała. W końcu zdecydowała się go przygarnąć, bo sąsiedzi zaczęli plotkować. Ale raz zjawił się u niego jakiś gość...",
            first: {
                content:"Gość? Kto to był?",
                route: 501,
                action: () => {}
            },
        },
        501: {
            message: "Jakiś mężczyzna. Nie przedstawił się. Chciał tylko zobaczyć się z Panem Józefem.",
            first: {
                content:"Jak wyglądał?",
                route: 8,
                action: () => {}
            },
            second: {
                content: "O czym rozmawiali?",
                route: 10,
                action: () => {}
            },
        },
        8: {
            message: "Wysoki... Przy kości. Elegancki.",
            first: {
                content:"A słyszała Pani o czym rozmawiali?",
                route: 9,
                action: () => {}
            },
        },
        9: {
            message: "Niestety, nie. Ale widziałam, że potem poszedł do gabinetu doktora Piltza. Może Pan jego spytać, czy czegoś nie wie.",
            fourth: {
                content: "Tak też zrobię. Dziękuję.",
                route: 10, 
                action: () => {}
            },
        },
        10: {
            message: "Niestety nie wiem.",
            first: {
                content: "A pamięta Pani jak wyglądał?",
                route: 11, 
                action: () => {}
            },
        },
        11: {
            message: "Tak, to był taki gruby, wysoki mężczyzna. Elegancki. Doktor Piltz może wiedzieć coś więcej na jego temat, bo widziałam jak rozmawiali. Proszę się do niego odezwać.",
            fourth: {
                content: "Tak też zrobię. Dziękuję.",
                route: 11, 
                action: () => {}
            },
        },
        15: {
            message: "Tak? Chciałby Pan ze mną porozmawiać?",
            first: {
                content:"Tak, chciałbym dowiedzieć się więcej o sytuacji kościoła. Mogę zadać kilka pytań?",
                route: 30,
                action: () => {}
            },
            fourth: {
                content: "Przepraszam. Chciałbym jednak porozmawiać z doktorem Piltzem.",
                route: 11, 
                action: () => {}
            },
            backMessage: "Nie, tak naprawdę to już wychodzę. Do widzenia. [Zakończ rozmowię i opuść szpital.]"
        }
    }
}

export default options