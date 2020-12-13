const options = {
    "home": {
        1: {
            message: "Szczęść Boże, Pan to z policji?",
            first: {
                content: "Dzień dobry. Tak, przodownik Kołodziejczyk, miło mi. Jestem tu w sprawie zaginięcia Pani męża.",
                route: 2,
            },
            second: {
                content: "Owszem, Pani Najchelowa. Przodownik Kołodziejczyk, miło mi. Proszę powiedzieć co się stało.",
                route: 2,
            },
        },
        2: {
            message: "No co się stało, co się stało. Stary się upił i wyszed w środku nocy. Już 7 rano, a jego wciąż ni mo!",
            first: {
                content: "Skoro minęło dopiero kilka godzin, chyba nie ma powodów do niepokoju.",
                route: 3,
            },
            second: {
                content: "Droga Pani Najchelowa, gdybym wiedział, że chodzi o zaginięcie starego pijaka to nie przyjeżdżałbym tak wcześnie.",
                route: 4,
            },
            third: {
                content: "To dlaczego Pani zawiadamiała policję? Dostałem informację, że to poważna sprawa.",
                route: 3,
            }
        },
        3: {
            message: "Panie, myśli Pan, że ja to mam czas, żeby się tak panoszyć po posterunkach? Chodzi o to, że wychodząc wziął z szafy rewolwer. Może komu stać się krzywda jak co po drodze popije.",
            first: {
                content: "Zaraz, zaraz! Bez pozwolenia?",
                route: 5,
            },
            second: {
                content: "No toście mi zepsuli poranek Pani Nejchelowa. Będę teraz musiał szukać Pani męża po całym mieście.",
                route: 6,
            },
        },
        4: {
            message: "Panie, proszę się wyrażać! Mi nie jest do śmiechu, bo Józek wyszed z rewolwerem. Jeszcze komu stanie się krzywda!",
            first: {
                content: "Zaraz, zaraz! Z rewolwerem? Bez pozwolenia? Proszę powiedzieć, co się stało. A w międzyczasie rozpoczniemy przeszukanie mieszkania.",
                route: 7,
            },
            second: {
                content: "No toście mi zepsuli poranek Pani Nejchelowa... Proszę mówić. A nasi chłopcy zaczną przeszukiwać mieszkanie",
                route: 7,
            },
            third: {
                content: "W porządku, przepraszam. Tymczasem proszę powiedzieć, co tu się w zasadzie wydarzyło.",
                route: 8,
            },
        },
        5: {
            message: "Staremu wariatowi różne głupoty do łba przychodziły. Ale teraz to już przesadził! Jak tylko wróci to tak mu zdzielę przez tyn łeb, że się opamiento!",
            first: {
                content: "Niestety będziemy musieli przeszukać Państwa mieszkanie. A tymczasem proszę powiedzieć co się dokładnie stało.",
                route: 7,
            },
            second: {
                content: "No nic. Chłopaki! Zacznijcie przeszukiwać tę ruderę! A Pani - proszę powiedzieć co się w zasadzie wydarzyło",
                route: 7,
            },
        },
        6: {
            message: "No ja mam nadzieję! To Pana obowiązek!",
            first: {
                content: "Już dobrze, już dobrze. Proszę się uspokoić. I proszę opowiedzieć co się stało wczorajszej nocy. A w międzyczasie my rozpoczniemy przeszukiwać mieszkanie.",
                route: 7,
            },
            second: {
                content: "Natomiast teraz Pani obowiązkiem będzie wyjaśnić co się wydarzyło poprzedniej nocy. A my rozpoczniemy przeszukiwanie mieszkania.",
                route: 7,
            },
            third: {
                content: "Owszem. Niestety należy do nich również rozmowa z Panią i proszę uwierzyć, wolałbym już szukać Pani męża. Proszę powiedzieć co się wydarzyło, a my rozpoczniemy przeszukiwanie mieszkania.",
                route: 7,
            },
        },
        7: {
            message: "Chwileczkę, jakie przeszukanie? Nie pozwalam!",
            first: {
                content: "Droga Pani, może Pani mówić co chce, ale to nasza praca. Jeśli będzie Pani stawiać opór to będziemy musieli Panią aresztować.",
                route: 8,
            },
            second: {
                content: "Właśnie przyznała się Pani do nielegalnego posiadania broni. Chce Pani pogorszyć swoją sytuację?",
                route: 8,
            },
        },
        8: {
            message: "Dobrze, dobrze. Róbta co chceta, byle tylko stary nie narobił rabanu.",
            first: {
                content: "Znakomicie. W takim razie proszę powiedzieć co się stało poprzedniej nocy, a my rozpoczniemy przeszukanie. [Każ rozpocząć przeszukanie]",
                route: 9,
            },
        },
        9: {
            message: "Wczoraj coś koło 22 stary zaczoł się wydzierać, bo mu wódka na łeb już weszła. Ja już spała, zaczoł mie szorpać, a jak nie chciałam wyjść do kuchni mu żorcia zrobić to wściek sie i wzioł rewolwer i wyszed na pole. I tyle żem go widziała. Normalnie po takich awanturach to wracał po godzinie. Ale tera? ",
            first: {
                content: "Jasne. Jeśli Pani pozwoli będę miał kilka pytań.",
                route: 501,
            },
        },
        501: {
            message: "Słucham.",
            first: {
                content: "W co mąż był ubrany?",
                route: 11,
            },
            second: {
                content: "Gdzie mąż pracuje?",
                route: 16,
            },
            third: {
                content: "Dokąd mąż zwykł chodzić?",
                route: 21,
            },
        },
        11: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            first: {
                content: "Dziękuję. A gdzie mąż pracuje?",
                route: 12,
            },
            second: {
                content: "W porządku. Może jeszcze Pani powiedzieć dokąd mąż zwykł chodzić?",
                route: 13,
            },
        },
        12: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            first: {
                content: "Dziękuję. Mam jeszcze jedno pytanie. Proszę powiedzieć, dokąd mąż zwykł chodzić?",
                route: 14,
            },
        },
        13: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            first: {
                content: "Dziękuję. W takim razie mam ostatnie pytanie. Gdzie mąż pracuje?",
                route: 15,
            },
        },
        14: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]"
        },
        15: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]"
        },
        16: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            first: {
                content: "Dziękuję. A w co mąż był ubrany?",
                route: 17,
            },
            second: {
                content: "W porządku. Może jeszcze Pani powiedzieć dokąd mąż zwykł chodzić?",
                route: 18,
            },
        },
        17: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            first: {
                content: "Dziękuję. Mam jeszcze jedno pytanie. Proszę powiedzieć, dokąd mąż zwykł chodzić?",
                route: 19,
            },
        },
        18: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            first: {
                content: "Dziękuję. W takim razie mam ostatnie pytanie. W co mąż był ubrany?",
                route: 20,
            },
        },
        19: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]"
        },
        20: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]"
        },
        21: {
            message: "A bo ja wiem, gdzie on łazi. Myśli Pan, że co, że mi się spowiada? Jedyne co wiem, to że czasem na Kazimierz chodzi do tego Żyda, Thorna, do restauracji. A poza tym? Nie wiem, nawet do kościoła nie chodzi. A spróbuj Panie mu to wypomnieć! O Jezu! Wtedy dopiero awanturę robi!",
            first: {
                content: "Dziękuję. A w co mąż był ubrany?",
                route: 22,
            },
            second: {
                content: "W porządku, dziękuję. Proszę jeszcze powiedzieć, gdzie mąż pracuje?",
                route: 23,
            },
        },
        22: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            first: {
                content: "Dziękuję. Mam jeszcze jedno pytanie. Gdzie mąż pracuje?",
                route: 24,
            },
        },
        23: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            first: {
                content: "Dziękuję. W takim razie mam ostatnie pytanie. W co mąż był ubrany?",
                route: 25,
            },
        },
        24: {
            message: "Oo Panie, na Krowodrzy, tam taka rogatka jest, podobna co tu niedaleko u nas, na Twardowskiego. Józek tam robi jako dozorca.",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]"
        },
        25: {
            message: "Jak zwykle, wzioł swoją zieloną marynarkę, taaaką, zwykłą.",
            backMessage: "Dziękuję, to wszystko na teraz. W razie jakichś informacji lub pytań skontaktuję się z Panią. Do widzenia. [Zakończ rozmowę i wyjdź z budynku]"
        },
        26: {
            message: "I co, ma Pan jakieś informacje?",
            backMessage: "Nic konkretnego. Wrócimy jak się czegoś dowiemy. [Zakończ rozmowę i wyjdź z budynku]",
            
        },
        27: {
            message: "I co, ma Pan jakieś informacje?",
            first: {
                content: "Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 50,
            },
        },
        28: {
            message: "I co, wi Pan już coś?",
            first: {
                content: "Owszem. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 701,
            },
        },
        29: { 
            message: "Ma Pan jakieś informacje?",
            first: {
                content: "Mam, droga Pani. Otóż Pani mąż nie pracuje na Krowodrzy od lutego.",
                route: 801,
            },
        },
        30: { 
            message: "Panie, ma Pan jakieś nowe informacje?",
            first: {
                content: "Owszem. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 702,
            },
            second: {
                content: "Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 51,
            }, 
        },
        31: { 
            message: "Panie, ma Pan jakieś nowe informacje?",
            first: {
                content: "Owszem. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 703,
            },
            second: {
                content: "Mam, droga Pani. Otóż Pani mąż nie pracuje na Krowodrzy od lutego.",
                route: 802,
            }, 
        },
        32: {
            message: "I co, wie dowiedział się Pan czegoś?",
            first: {
                content: "Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 52,
            },
            second: {
                content: "Mam, droga Pani. Otóż Pani mąż nie pracuje na Krowodrzy od lutego.",
                route: 803,
            }, 
        },
        33: {
            message: "I co, dowiedział się Pan czegoś?",
            first: {
                content: "Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 53,
            },
            second: { 
                content: "Mam, droga Pani. Otóż Pani mąż nie pracuje na Krowodrzy od lutego.",
                route: 804,
            }, 
            third: { 
                content: "Owszem. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 704,
            },
        },
        50: {
            message: "Brednie! Kto Panu takich głupot naopowiadał?!",
            first: {
                content: "Mam swoje źródła. Myśli Pani, że miesięczna nieobecność pana Józefa pozostanie niezauważona?",
                route: 601,
            },
            second: {
                content: "Dość już tych kłamstw. Chce Pani odnaleźć męża, czy nie?",
                route: 601,
            },
            third: {
                content: "Proszę odpowiedzieć!",
                route: 601,
            },
        },
        51: {
            message: "Brednie! Kto Panu takich głupot naopowiadał?!",
            first: {
                content: "Mam swoje źródła. Myśli Pani, że miesięczna nieobecność pana Józefa pozostanie niezauważona?",
                route: 602,
            },
            second: {
                content: "Dość już tych kłamstw. Chce Pani odnaleźć męża, czy nie?",
                route: 602,
            },
            third: {
                content: "Proszę odpowiedzieć!",
                route: 602,
            },
        },
        52: {
            message: "Brednie! Kto Panu takich głupot naopowiadał?!",
            first: {
                content: "Mam swoje źródła. Myśli Pani, że miesięczna nieobecność pana Józefa pozostanie niezauważona?",
                route: 603,
            },
            second: {
                content: "Dość już tych kłamstw. Chce Pani odnaleźć męża, czy nie?",
                route: 603,
            },
            third: {
                content: "Proszę odpowiedzieć!",
                route: 603,
            },
        },
        53: {
            message: "Brednie! Kto Panu takich głupot naopowiadał?!",
            first: {
                content: "Mam swoje źródła. Myśli Pani, że miesięczna nieobecność pana Józefa pozostanie niezauważona?",
                route: 604,
            },
            second: {
                content: "Dość już tych kłamstw. Chce Pani odnaleźć męża, czy nie?",
                route: 604,
            },
            third: {
                content: "Proszę odpowiedzieć!",
                route: 604,
            },
        },
        601: {
            message: "Dobrze, już dobrze... Co się tak unosi? No był Józek w Kobierzynie, ja go stamtond zabrała, nie bedą mi mojego Józka do prondu podłonczać! A nie mówiłam głośno, bo co by ludzie godoli, że Józek to wariat. Po co mi to, Paaanie, dej Pan spokój...",
            backMessage: "Sprawdzę to. Wrócę do Pani jak będę miał jeszcze jakieś pytania. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        602: {
            message: "Dobrze, już dobrze... Co się tak unosi? No był Józek w Kobierzynie, ja go stamtond zabrała, nie bedą mi mojego Józka do prondu podłonczać! A nie mówiłam głośno, bo co by ludzie godoli, że Józek to wariat. Po co mi to, Paaanie, dej Pan spokój...",
            first: {
                content: "Sprawdzę to. A teraz ostatnia kwestia. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 701,
            },
        },
        603: {
            message: "Dobrze, już dobrze... Co się tak unosi? No był Józek w Kobierzynie, ja go stamtond zabrała, nie bedą mi mojego Józka do prondu podłonczać! A nie mówiłam głośno, bo co by ludzie godoli, że Józek to wariat. Po co mi to, Paaanie, dej Pan spokój...",
            first: {
                content: "Sprawdzę to. A teraz ostatnia kwestia. Dowiedziałem się, że Pani mąż od lutego nie pracuje na Krowodrzy.",
                route: 801,
            },
        },
        604: {
            message: "Dobrze, już dobrze... Co się tak unosi? No był Józek w Kobierzynie, ja go stamtond zabrała, nie bedą mi mojego Józka do prondu podłonczać! A nie mówiłam głośno, bo co by ludzie godoli, że Józek to wariat. Po co mi to, Paaanie, dej Pan spokój...",
            first: {
                content: "Sprawdzę to. Ale przejdźmy do kolejnego tematu. Dowiedziałem się, że Pani mąż od lutego nie pracuje na Krowodrzy.",
                route: 802,
            },
            second: {
                content: "Zobaczymy co mi w szpitalu powiedzą. Ale teraz kolejna sprawa. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 703,
            },
        },
        701: { 
            message: "Aaa to prawda, krenci sie tu taki jedyn. Nie wiem co to za człowiek. Ale co mnie to, Paanie. Do nas nigdy nie wchodził.",
            backMessage: "W porządku, załóżmy, że Pani wierzę. W razie pytań jeszcze się odezwę. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        702: { 
            message: "Aaa to prawda, krenci sie tu taki jedyn. Nie wiem co to za człowiek. Ale co mnie to, Paanie. Do nas nigdy nie wchodził.",
            first: {
                content: "W porządku... A teraz ostatnia kwestia. Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 50,
            },
        },
        703: { 
            message: "Aaa to prawda, krenci sie tu taki jedyn. Nie wiem co to za człowiek. Ale co mnie to, Paanie. Do nas nigdy nie wchodził.",
            first: {
                content: "W porządku... A teraz ostatnia kwestia. Dowiedziałem się, że Pani mąż od lutego nie pracuje na Krowodrzy.",
                route: 801,
            },
        },
        704: {
            message: "Aaa to prawda, krenci sie tu taki jedyn. Nie wiem co to za człowiek. Ale co mnie to, Paanie. Do nas nigdy nie wchodził.",
            first: {
                content: "Proszę się uspokoić. Ale przejdźmy do kolejnego tematu. Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 52,
            },
            second: {
                content: "Proszę się tak nie denerwować. Ale teraz kolejna sprawa. Dowiedziałem się, że Pani mąż od lutego nie pracuje na Krowodrzy.",
                route: 803,
            },
        },
        801: { 
            message: "No co za dziod! A codziennie wyłaził z domu i mówił, że do roboty idzie! Pewnie chlał pod jakimś sklepem! Ale go przez łeb zdzielę jak wróci!",
            backMessage: "Proszę się tak nie denerwować. Jedynie przekazuję informacje. Jeśli coś się pojawi, wrócę do Pani. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        802: {
            message: "No co za dziod! A codziennie wyłaził z domu i mówił, że do roboty idzie! Pewnie chlał pod jakimś sklepem! Ale go przez łeb zdzielę jak wróci!",
            first: {
                content: "Proszę się tak nie denerwować. Jeszcze jedna sprawa. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 701,
            },
        },
        803: {
            message: "No co za dziod! A codziennie wyłaził z domu i mówił, że do roboty idzie! Pewnie chlał pod jakimś sklepem! Ale go przez łeb zdzielę jak wróci!",
            first: {
                content: "Proszę się tak nie denerwować. Jeszcze jedna sprawa. Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 50,
            },
        },
        804: {
            message: "No co za dziod! A codziennie wyłaził z domu i mówił, że do roboty idzie! Pewnie chlał pod jakimś sklepem! Ale go przez łeb zdzielę jak wróci!",
            first: {
                content: "Proszę się uspokoić. Ale przejdźmy do kolejnego tematu. Dowiedziałem się, że Pani mąż niedawno wrócił ze szpitala psychiatrycznego.",
                route: 51,
            },
            second: {
                content: "Proszę się tak nie denerwować. Ale teraz kolejna sprawa. Ponoć ostatnio kręcił się u Państwa jakiś grubawy mężczyzna.",
                route: 703,
            },
        },
        100: {
            message: "Szefie, właśnie mieliśmy się z Panem kontaktować! Dopiero co skończyliśmy przeszukiwanie mieszkania!",
            first: {
                content: "Gdzie jest Najchelowa? Muszę z nią porozmawiać.",
                route: 105, //
            },
            second: {
                content: "I co? Znaleźliście coś?",
                route: 101,
            },
        },
        101: {
            message: "Proszę Pana, jest bardzo źle. Znaleźliśmy w mieszkaniu skrytkę, w której Najchel trzymał materiały wybuchowe!",
            first: {
                content: "Co?!",
                route: 102,
            },
        },
        102: {
            message: "Nam też ciężko w to uwierzyć. Wygląda na to, że robił je sam. Zdecydowaliśmy się aresztować Najchelową, nie wiadomo jaki jest jej związek, a jest mało wiarygodną osobą...",
            first: {
                content: "Cholera... A znaleźliście coś jeszcze?",
                route: 103,
            },
            second: {
                content: "Mogę z nią porozmawiać? To pilne.",
                route: 104, 
            },
        },
        901: {
            message: "Jakiś bagnet, i coś, co wygląda na minę... Ponadto mnóstwo kwitków z Powiatowej Kasy Oszczędnościowej, tej na Pijarskiej. Chyba tam składał oszczędności... Choć wygląda na to, że ostatnio głównie je wypłacał...",
            backMessage: "Doskonale, tej informacji potrzebowałem. Dziękuję za pomoc, dobra robota! [Wyjdź z budynku]"
        },
        104: {
            message: "Obawiam się, że nie w tym momencie... Właśnie zabrano ją do aresztu... Nie mieliśmy wyboru po tym, co tu znaleźliśmy...",
            first: {
                content: "A znaleźliście coś jeszcze?",
                route: 901, 
            },
        },
        105: {
            message: "Obawiam się, że nie porozmawia z nią Pan w tym momencie... Musieliśmy ją aresztować...",
            first: {
                content: "Słucham?!",
                route: 106,
            },
        },
        106: {
            message: "Szefie, nie mieliśmy wyboru. Znaleźliśmy w mieszkaniu skrytkę, w której Najchel trzymał materiały wybuchowe! Wygląda na to, że robił je sam...",
            first: {
                content: "Cholera... A znaleźliście tam coś jeszcze?",
                route: 901,
            },
        },
        107: {
            message: "Szefie, nic tu po Panu! Niech Pan nie traci czasu, Najchel może być wszędzie!",
            backMessage: "Jasne, już idę! [Wyjdź z budynku]"
        },
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
            },
            second: {
                content: "Dobry. Kołodziejczyk, Policja. Chodzi o Pana sąsiada, Józefa Najchela.",
                route: 601,
            },
        },
        601: {
            message: "Andrzej Stelmach, miło mi Panie władzo. Słucham, co chciałby Pan wiedzieć?",
            first: {
                content: "Co Pan wie o Najchelach?",
                route: 3,
            },
            second: {
                content: "Wczoraj, około 22, za ścianą Pana mieszkania ponoć wybuchła awantura. Słyszał Pan coś?",
                route: 10, 
            },
        },
        3: {
            message: "W sumie to niewiele, nie rozmawiamy ze sobą. Najchelowa to znerwicowana kobita, zresztą chyba już miał Pan okazję ją poznać. Cały czas drze się na tego Józka, czasami spać się nie da. Ale ten wcale nie lepszy, o ile nawet nie gorszy. No cóż, jakoś mnie to nie dziwi wiedząc dokąd go wysłali...",
            first: {
                content: "Co ma Pan na myśli?", 
                route: 501,
            }
        },
        501: { //
            message: "Czyli pewnie Najchelowa się nie przyznała... Jakoś mnie to nie dziwi. Proszę Pana, Najchela wysłali ponoć gdzieś do psychiartyka, nie wiem którego, takie burdy robił. Ludzie mówią, że diabła widział. Ja tam nie wiem, ale czasami mam wrażenie jakby go diabeł opętał. W każdym razie jak wrócił to był gorszy niż przedtem.",
            first: {
                content: "To kiedy stamtąd wrócił?",
                route: 4,
            },
            second: {
                content: "Widział diabła? Co to za brednie?",
                route: 5, 
            },
        },
        4: {
            message: "Parę tygodni temu. Łącznie go miesiąc nie było.",
            first: {
                content: "Dziękuję za informację. Wczoraj, około 22, za ścianą Pana mieszkania ponoć wybuchła awantura. Słyszał Pan coś?", 
                route: 6,
            },
            second: {
                content: "Rozumiem. Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 8, 
            },
            },
        5: {
            message: "Proszę Pana, ja tylko przekazuję co ludzie mówią. Osobiście dziwię się, że go nie zostawili w tym szpitalu, bo jeszcze komuś może zrobić krzywdę. Nie było go z miesiąc, a odkąd parę tygodni temu wrócił do domu jest jeszcze gorzej.",
            first: {
                content: "Dziękuję za informację. Wczoraj, około 22, za ścianą Pana mieszkania ponoć wybuchła awantura. Słyszał Pan coś?", 
                route: 6,
            },
            second: {
                content: "Rozumiem. Pan Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 8,
            },
                    },
        6: {
            message: "Trochę. Jakieś krzyki. Trwało to może z 10 minut, a potem ucichło. Ale nie wiem co dokładnie mówili.",
            first: {
                content: "Rozumiem. Pytam, ponieważ Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 7, 
            },
        },
        7: { 
            message: "Zaginął? No proszę... Ale nie, nie mam pojęcia, dokąd mógł pójść.",
            first: {
                content: "No dobrze. A zmieniając temat... Śledzi Pan rozgrywki piłkarskie?",
                route: 701, //
            },
            backMessage: "Dziękuję, bardzo Pan mi pomógł. W razie pytań jeszcze się odezwę. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        8: {
            message: "Zaginął? No proszę... Ale nie, nie mam pojęcia, dokąd mógł pójść.",
            first: {
                content: "No dobrze. Wczoraj, około 22, za ścianą Pana mieszkania ponoć wybuchła awantura. Słyszał Pan coś?", 
                route: 9,
            },
        },
        9: {
            message: "Trochę. Jakieś krzyki. Trwało to może z 10 minut, a potem ucichło. Ale nie wiem co dokładnie mówili.",
            first: {
                content: "Dziękuję. A zmieniając temat... Śledzi Pan rozgrywki piłkarskie?",
                route: 701, 
            },
            backMessage: "Dziękuję, bardzo Pan mi pomógł. W razie pytań jeszcze się odezwę. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        10: {
            message: "Trochę. Jakieś krzyki. Trwało to może z 10 minut, a potem ucichło. Ale nie powiem co dokładnie mówili.",
            first: {
                content: "Często był Pan świadkiem podobnych kłótni?", 
                route: 11, 
            },
            second: {
                content: "Pan Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 14, 
            },
        },
        11: {
            message: "Haha, czy często? Codziennie! Najchelowa to znerwicowana kobita, zresztą chyba już miał Pan okazję ją poznać. Cały czas drze się na tego Józka, czasami spać się nie da. Ale ten wcale nie lepszy, o ile nawet nie gorszy. No cóż, jakoś mnie to nie dziwi wiedząc dokąd go wysłali...",
            first: {
                content: "Co ma Pan na myśli?", 
                route: 502,
            }
        },
        502: { 
            message: "Czyli pewnie Najchelowa się nie przyznała... Jakoś mnie to nie dziwi. Proszę Pana, Najchela wysłali gdzieś do psychiartyka, nie wiem którego, takie burdy robił. Ludzie mówią, że diabła widział. Ja tam nie wiem, ale czasami mam wrażenie jakby go diabeł opętał. W każdym razie jak wrócił to był gorszy niż przedtem.",
            first: {
                content: "To kiedy stamtąd wrócił?",
                route: 12,
            },
            second: {
                content: "Widział diabła? Co to za brednie?",
                route: 13, 
            },
        },
        12: {
            message: "Parę tygodni temu. Łącznie go miesiąc nie było.",
            first: {
                content: "Rozumiem. Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 8, 
            },
        },
        13: {
            message: "Proszę Pana, ja tylko przekazuję co ludzie mówią. Osobiście dziwię się, że go nie zostawili w tym szpitalu, bo jeszcze komuś może zrobić krzywdę. Nie było go z miesiąc, a odkąd parę tygodni temu wrócił do domu jest jeszcze gorzej.",
            first: {
                content: "Rozumiem. Pan Najchel zaginął. Wie Pan dokąd mógł się udać?",
                route: 8,
            },
        },
        14: {
            message: "Zaginął? No proszę... Ale nie, nie mam pojęcia, dokąd mógł pójść. Choć mając świadomość skąd wrócił...",
            first: {
                content: "Co ma Pan na myśli?", 
                route: 503, 
            },
        },
        503: { 
            message: "Czyli pewnie Najchelowa się nie przyznała... Jakoś mnie to nie dziwi. Proszę Pana, Najchela wysłali gdzieś do psychiartyka, nie wiem którego, takie burdy robił. Ludzie mówią, że diabła widział. Ja tam nie wiem, ale czasami mam wrażenie jakby go diabeł opętał. W każdym razie jak wrócił to był gorszy niż przedtem.",
            first: {
                content: "To kiedy stamtąd wrócił?",
                route: 15,
            },
            second: {
                content: "Widział diabła? Co to za brednie?",
                route: 16, 
            },
        },
        15: {
            message: "Parę tygodni temu. Łącznie go miesiąc nie było.",
            first: {
                content: "Dziękuję. A zmieniając temat... Śledzi Pan rozgrywki piłkarskie?",
                route: 701, 
            },
            backMessage: "Dziękuję, bardzo Pan mi pomógł. W razie pytań jeszcze się odezwę. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        16: {
            message: "Proszę Pana, ja tylko przekazuję co ludzie mówią. Osobiście dziwię się, że go nie zostawili w tym psychiatryku, bo jeszcze komuś może zrobić krzywdę. Nie było go z miesiąc, a odkąd parę tygodni temu wrócił do domu jest jeszcze gorzej.",
            first: {
                content: "Dziękuję. A zmieniając temat... Śledzi Pan rozgrywki piłkarskie?",
                route: 701, 
            },
            backMessage: "Dziękuję, bardzo Pan mi pomógł. W razie pytań jeszcze się odezwę. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        20: {
            message: "Witam ponownie, Panie przodowniku. Ma Pan do mnie jeszcze jakieś pytania?",
            first: {
                content: "W sumie to tak. Śledzi Pan może rozgrywki piłkarskie?",
                route: 701, 
            },
            backMessage: "Nie, ale jeśli coś się pojawi to się odezwę. Tymczasem do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        701: {
            message: "Proszę Pana! Największy fan!",
            first: {
                content: "Świetnie! W takim razie miałbym kilka pytań...",
                route: 22, 
            },
            backMessage: "Dobrze wiedzieć. Jak znajdę chwilę to porozmawiamy, ale muszę już iść. Do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"

        },
        21: {
            message: "Witam Pana ponownie! Ma Pan do mnie jakieś pytania?",
            first: {
                content: "Chciałbym jeszcze raz pogadać o piłce.",
                route: 22, 
            },
            backMessage: "Nie, ale jeśli coś się pojawi to się odezwę. Tymczasem do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        22: {
            message: "Jasne, proszę pytać!",
            first: {
                content: "Opowie mi Pan o reprezentacji Polski?",
                route: 30, 
            },
            second: {
                content: "Co słychać w rozgrywkach krajowych?",
                route: 40, 
            },
            third: {
                content: "Jakie kluby macie w Krakowie?",
                route: 50, 
            },
            backMessage: "W sumie, zmieniłem zdanie. Jeszcze się odezwę, ale tymczasem, do widzenia. [Zakończ rozmowę i wyjdź z mieszkania.]"
        },
        30: {
            message: "Jasne! Pewnie Pan pamięta, mieliśmy w 1920 roku grać na Igrzyskach. No ale jak podczas wojny z bolszewikami można było w ogóle o sporcie myśleć? To dlatego dopiero rok później zagraliśmy pierwszy mecz, z Węgrami...",
            first: {
                content: "Proszę kontynuować.",
                route: 31, 
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        31: {
            message: "Graliśmy w Budapeszcie i przegraliśmy 0:1. Choć w sumie... Mogło być lepiej. Bo widzi Pan, tuż po stracie bramki Wacek Kuchar mógł strzelić dla nas gola... Miał przed sobą pustą bramkę, ale ponieważ chwilę wcześniej przypadkiem trącił bramkarza, to zostawił piłkę i postanowił pomóc mu wstać. I bardzo dobrze! Honorowo się zachował, przecież o to w sporcie chodzi!",
            first: {
                content: "I jak szło Polakom później?.",
                route: 32, 
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        32: {
            message: "Potem jeszcze raz zagraliśmy z Węgrami, tym razem u nas, na stadionie Cracovii, w maju 1922... I znowu przegraliśmy. 0:3. No ale w końcu przyszła pora na zwycięstwo! Wygraliśmy w Sztokholmie ze Szwedami 2:1. W ogóle to pierwszego gola strzelił Józek Klotz, stąd, z Krakowa. Zizi na niego mówią. Zna go Pan?",
            first: {
                content: "Nie.",
                route: 33, 
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        33: {
            message: "Chłopak pochodzi z żydowskiej rodziny, ojciec jest szewcem. W ogóle bystry z niego gagatek, studiował nawet medycynę, ale przerwał naukę, bo w 1918 roku zgłosił się na ochotnika do Wojska Polskiego. Nawet z bolszewikami się bił. A potem wrócił do Krakowa i teraz gra w tutejszej Jutrzence...",
            first: {
                content: "A jak szło Polakom w kolejnych meczach?",
                route: 34, 
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        34: {
            message: "Potem już szło różnie. Łącznie do Igrzysk w '24 przegraliśmy 3 mecze, wygraliśmy 2. Jeszcze 3 remisy doszły. Ale Igrzyska w Paryżu to był niestety blamaż... Nasz związek nawet postanowił zmienić terminarz Mistrzowstw Polski, aby tylko można było się do nich w spokoju przygotować, żeby wstydu nie było! A my odpadliśmy już po pierwszym meczu... 0:5. Znowu przeciwko Węgrom... No nic, może uda się na następnych Igrzyskach w Amsterdamie...",
            first: {
                content: "Pozwoli Pan, że zapytam o coś innego?",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        40: { 
            message: "Ehhh, szkoda mówić, takie zamieszanie narobili w tym związku. W ogóle to Polski Związek Piłki Nożnej powstał w 1919 roku i wymyślił sobie jak będą wyglądać te ich 'Mistrzostwa Polski'. Miało być 5 okręgów złożonych z kilku lokalnych zespołów, w których każdy miał grać z każdym po 2 razy. A potem zwycięzcy okręgów mieli się spotkać na turnieju finałowym. No ale wiadomo, z powodu bolszewików cały plan upadł, a turniej finałowy odwołano. Tylko w naszym, krakowskim okręgu udało się zorganizować wszystkie zaplanowane spotkania, a najlepsza okazała się Cracovia...",
            first: {
                content: "Proszę mówić dalej.",
                route: 41,
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        41: { 
            message: "Kolejną edycję, w 1921 roku już, na szczęście, udało się rozegrać. Zasady były te same jak w poprzednim roku. W naszym okręgu Cracovia zdmuchnęła wszystkich, proszę Paaana... Nie mieli sobie równych! Wszystkie mecze wygrali! A na turnieju finałowym to samo! No dobra, z 8 meczy zdarzył im się jeden remis, z Wartą Poznań, ale resztę wygrali. Najwięcej goli tam nastrzelał Józek Kałuża, aż 9! W ogóle nie wiem czy Pan słyszał... Józek rok później miał kłopoty ze zdrowiem, z pieniędzmi... Nawet miał Wisłę zacząć trenować i kończyć karierę jako piłkarz... Na szczęście udało mu się wrócić do gry!",
            first: {
                content: "Proszę powiedzieć coś jeszcze.",
                route: 42,
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        42: { 
            message: "W 1922 roku u nas znowu najlepsza okazała się Cracovia, ale w turnieju finałowym już nie poszło im tak dobrze... Zajęli trzecie miejsce, a mistrzem został Pogoń Lwów. Ale w '23 po raz pierwszy Cracovia nie uzyskała awansu do turnieju finałowego, bo to Wisła okazała się lepsza! Nie powiem, byłem zaskoczony! Ale pięknie grali, zasłużyli. Na turnieju głównym szło im nawet nieźle, dostali się nawet do finału! No ale przegrali tam z Pogonią Lwów, która obroniła tytuł.",
            first: {
                content: "A co z zeszłym rokiem?",
                route: 43,
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        43: { 
            message: "Aaa, proszę Pana, proszę mnie nie denerwować! No PZPN poprzenosił wszystkie mecze w '24 roku, bo uznali, że kadra narodowa ma się do Igrzysk przygotować. Tyle z tego było, że przegraliśmy w pierwszym meczu z Węgrami 0:5 i odpadliśmy z turnieju. A krajowe rozgrywki zaczęły się dopiero jesienią. U nas znowu wygrała Wisła. Teraz trwa turniej finałowy, coś czuję, że może im dobrze pójść... Zwaszcza, że Heniek Reyman jest w niezłej formie...",
            second: {
                content: "Dziękuję za odpowiedź. Zapytam o coś jeszcze...",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        50: { 
            message: "No przede wszystkim Wisła z Cracovią. Oba mają już... jak dobrze liczę 19 lat... Założono je w 1906 roku. Cracovia zdobyła już tytuł mistrza Polski, ale coś czuję, że Wiśle też się to w końcu uda...",
            first: {
                content: "A czy istnieją inne kluby w Krakowie?",
                route: 51,
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        51: { 
            message: "Ależ oczywiście! Liczą się także dwa kluby żydowskie - Jutrzenka i Makkabi. Jutrzenka powstała w 1910 roku i ma swój stadion przy Błoniach. Tam wcześniej, jeszcze za Austriaków, był tor do wyścigów konnych... Swoją drogą to w Jutrzence gra Józek Klotz, ten co strzelił pierwszego gola dla Polaków w historii...",
            first: {
                content: "A co z Makkabi?",
                route: 52,
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        52: { 
            message: "Makkabi powstało w 1909 roku... Mają stadion między ulicą Dietlowską i Koletek. W ogóle to ostatnio na spotkania Cracovii z Wisłą zaczęto mówić 'święta wojna'... Ja do tej pory nie mogę się przyzwyczaić, bo od zawsze tak nazywano mecze Jutrzenki z Makkabi... Bo wie Pan, Jutrzenka związana jest z Bundem, czyli żydowskimi socjalistami, a Makkabi, jako klub syjonistyczny, stoi po drugiej stronie sceny politycznej... Oj nie lubią się, nie lubią...",
            first: {
                content: "To dlaczego na mecze Cracovii z Wisłą zaczęto nazywać mianem 'świętej wojny'?",
                route: 53,
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        53: { 
            message: "Jakoś rok temu zawodnik Cracovii, Ludwik Gintel, przed meczem z Wisłą powiedział do kolegów w szatni: 'No to chodźmy panowie na tę świętą wojnę'. I tak się przyjęło. To w ogóle dość zabawne, bo Gintel wcześniej grał w Jutrzence, więc stamtąd znał to określenie.",
            first: {
                content: "No dobrze, a istnieją jeszcze jakieś inne kluby w Krakowie?",
                route: 54,
            },
            second: {
                content: "Proszę wybaczyć, jednak zapytam o coś innego.",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        54: { 
            message: "Hoho! I to jeszcze ile! Z tym, że większość powstała po wojnie... Z przedwojennych mamy Juvenię na Błoniach, Podgórze... i jeszcze TS Krowodrzę-Modrzejówkę. A potem to tego się namnożyło, proszę Pana! Lauda... znaczy dzisiaj już Garbarnia... Wawel, Dąbski, Korona, Nadwiślan, Prądniczanka, Prokocim, Zwierzyniecki... A i tak nie wiem, czy wymieniłem wszystkie... Choć sam wiele o tych klubach to nie wiem...",
            first: {
                content: "Dziękuję za informacje, chciałbym zapytać o coś jeszcze...",
                route: 22, 
            },
            backMessage: "To wszystko, dziękuję. Do widzenia Panu. [Zakończ rozmowę i wyjdź z mieszkania]"
        },
        
    },
    "maciejowski": {
        1: {
            message: "Panie, kim Pan jest?",
            first: {
                content: "Kołodziejczyk, policja. Mam kilka pytań odnośnie Najchelów.",
                route: 501,
            },
        },
        501: {
            message: "Maciejowski, dobry. Słucham, o co chodzi?",
            first: {
                content: "Proszę mi powiedzieć, co Pan wie o Najchelach?",
                route: 2,
            },
            second: {
                content: "Kiedy po raz ostatni widział Pan Józefa Najchela?",
                route: 6,
            },
            third: {
                content: "Widział Pan coś podejrzanego ostatniej nocy?",
                route: 7,
            },
        },
        2: {
            message: "Wariaty, Panie. Ja tam się do nich nie zbliżam, nie wiadomo co do łba strzeli.",
            first: {
                content: "Miał Pan z nimi jakieś kłopoty?",
                route: 3,
            },
            second: {
                content: "Co ma Pan na myśli?",
                route: 4,
            },
        },
        3: {
            message: "Bo to ino raz. Ja to nie mam do nich siły. Odkąd parę lat temu mi ten wariat żonę zaatakował nie pozwalam im się zbliżyć.",
            first: {
                content: "Co się wydarzyło?",
                route: 5,
            },
        },
        4: {
            message: "No parę lat temu ten cały Józek mi sie na żonę rzucił! Wariaty!",
            first: {
                content: "Co się wydarzyło?",
                route: 5,
            },
        },
        5: {
            message: "Tuż po tym co nas Matka Boska od bolszewików wybawiła to pamięta Pan, nie było co do gara włożyć, od tej Hiszpanki całej ludzie umirali. Sam brata straciłem. A jak kiedyś żona od piekarza wracała to ten Najchel się na nią zaczaił tu, o, za drzewem i rzucił z pięściami. Ale Panie, jak chce Pan wiedzieć więcej o tych Najchelach to żonę pytać. Mnie tam nie obchodzi co oni robią.",
            fourth: {
                content: "W takim razie jeśli Pan pozwoli porozmawiam z Pana żoną.",
                route: 3,
            },
        },
        6: {
            message: "Paaanie, ja się do nich nie zbliżam. Odkąd mi żonę poturbował parę lat temu, to nie chcę mieć z nimi do czynienia.",
            first: {
                content: "Co się wydarzyło?",
                route: 5,
            },
        },
        7: {
            message: "Nie, niczego nie widziałem. Dlaczego Pan pyta?",
            first: {
                content: "Chodzi o Pana sąsiada, Józefa Najchela. Zaginął wczorajszej nocy.",
                route: 8,
            },
        },
        8: {
            message: "Pewnie się schlał i tyle go widzieli. Jak nie wróci to płakać nie bede. Odkąd mi żonę poturbował parę lat temu, to nie chcę mieć z nimi do czynienia.",
            first: {
                content: "Co się wydarzyło?",
                route: 5,
            },
        },
        9: {
            message: "Witam, witam. Co Pana tu ponownie sprowadza?",
            first: {
                content: "Chciałbym porozmawiać o tym, jak wyglądał Kraków po Wielkiej Wojnie.",
                route: 30,
            },
            fourth: {
                content: "Jeśli Pan pozwoli to porozmawiam z Pana żoną.",
                route: 3,
            },
            backMessage: "Przepraszam za kłopot. Muszę iść. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        10: {
            message: "Słucham Pana.",
            first: {
                content: "Chciałbym porozmawiać o tym, jak wyglądał Kraków po Wielkiej Wojnie.",
                route: 30,
            },
            fourth: {
                content: "Przepraszam za zamieszanie. Muszę jeszcze raz zamienić słówko z Pana żoną.",
                route: 3,
            },
            backMessage: "Chciałem się tylko pożegnać. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        30: { 
            message: "Słucham, co chce Pan wiedzieć?",
            first: {
                content: "Pamięta Pan jak ogłoszono w Krakowie niepodległość?",
                route: 40,
            },
            second: {
                content: "Jak wyglądały pierwsze tygodnie niepodległości?",
                route: 50,
            },
            third: {
                content: "Jak krakowianie przeżywali toczące się wtedy wojny?",
                route: 60,
            },
            fourth: {
                content: "Przepraszam, jednak jeśli Pan pozwoli to porozmawiam z Pana żoną.",
                route: 3,
            },
            
        },
        40: {
            message: "Panie, to jedna wielka euforia była. Pewnie Pan pamięta, w październiku '18 roku to już wiadomo było co się świnci. Jakieś rozmowy zaczęli i Austriacy, i Niemcy, żeby ta wojna w końcu się skończyła. Coś tam zaczęli mówić o niepodległości Polski... A bo ja wiem, Panie, co oni tak naprawdę chcieli ugrać? Może mięsa armatniego potrzebowali, ale nie z nami takie numery!.",
            first: {
                content: "Proszę kontynuować.",
                route: 41,
            },
            second: {
                content: "Mogę zapytać o coś innego?",
                route: 30,
            },
            backMessage: "Dziękuję, to już wszystko co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        41: {
            message: "Bo ludzie wyczuli, że tera, albo nigdy. Plotki chodziły, że to Chorwaty, to Czechy, to Madziary coś kombinujo i że chcą niepodległość mieć. No to my mieli być gorsi? W końcu października zaczęły się jakieś rozmowy z Austriakami... Ale będąc grzecznym to niczego się nie wywalczy! Ludzie zaczęli wypowiadać posłuszeństwo cesarzowi! A w końcu Antek Stawarz zorganizował spisek.",
            first: {
                content: "Na czym polegał?",
                route: 42,
            },
            second: {
                content: "Mogę zapytać o coś innego?",
                route: 30,
            },
            backMessage: "Dziękuję, to już wszystko co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        42: {
            message: "Jak usłyszał o przerocie co Czechy u siebie zorganizowały uznał, że też czeba działać. Kazał pani Wisłockiej, u której pomieszkiwał na Placu Lasoty, narobić kokardek biało-czerwonych. Następnego dnia rano, a to był 31 październik, ludzie Stawarza, zbuntowali się w koszarach na Wielickiej i Kalwaryjskiej, przypięli te kokardki od Wisłockiej i ruszyli w stronę Rynku Podgórskiego robiąc hałasu, żeby ludzi pobudzić.",
            first: {
                content: "Co się działo potem?",
                route: 43,
            },
            second: {
                content: "Mogę zapytać o coś innego?",
                route: 30,
            },
            backMessage: "Dziękuję, to już wszystko co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        43: {
            message: "Jakoś przed 8 rano poszli w stronę Rynku Głównego zrywając po drodze te czarne, habsburskie orły. Pamiętam Panie dobrze ten dzień, zimno było, mżawka. Ludzie zaczęli się schodzić na Rynku. W końcu, jakoś pół do dwunasty żeśmy odwach wieży ratuszowej zajęli. Tam zawsze jakiś strażnik austriacki stał. A teraz stanął tam nasz chłopak! Byłem tam Panie, na tym Rynku. Jak normalnie nie płaczę to wtedy nie mogłem się ze szczęścia powstrzymać...",
            second: {
                content: "Dziękuję. Jeśli Pan pozwoli to zapytam o coś innego...",
                route: 30,
            },
            backMessage: "Dziękuję, to już wszystko co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        50: {
            message: "Panie, jak żeśmy się nacieszyli odzyskaniem niepodległości to trzeba było do roboty się wziąć. Nie było łatwo! W sejmie się kłócili, czy orzeł nasz ma mić koronę, czy nie, a nam kartki na jedzenie rozdawali, bo nie było niczego w sklepach. Potem ta epidemia hiszpanki się zaczęła, co mówiłem wcześniej. To głównie w Podgórzu i na Kazimierzu się roznosiła.",
            first: {
                content: "Proszę mówić dalej.",
                route: 51,
            },
            second: {
                content: "Mogę zapytać o coś innego?",
                route: 30,
            },
            backMessage: "Dziękuję, to już wszystko co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        51: {
            message: "Do tego dochodził jeszcze bandytyzm, bezrobocie... Nawet jakaś Straż Obywatelska powstała, żeby bronić magazynów i porządek w miarę trzymać. Bo niektórzy to głowy potracili. Federowicz, prezydent Krakowa, próbował coś tam działać, ale łatwo to nie miał... ",
            second: {
                content: "Dziękuję, chciałbym jeszcze o coś zapytać.",
                route: 30,
            },
            backMessage: "Dziękuję, to już wszystko co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        60: {
            message: "Paaanie, teraz to już mi się te wszystkie wojny mieszajo. Bo jak odzyskali my niepodległość to od razu zaczęli wysyłać ludzi na wschód, żeby z Ukraińcami o Lwów się bili. Potem zaś, na początku 1919 roku, o Cieszyn z Czechami zaczął się spór. Jak zajęli nam Bogumin to w Krakowie wszystkich Czechów internowali, wyobraź sobie Pan! Wszystkich! A jeszcze w 1918 jak brat z bratem przeciwko Austriakom się żeśmy wspólnie buntowali...",
            first: {
                content: "A co się działo później?",
                route: 61,
            },
            second: {
                content: "Dziękuję, chciałbym jeszcze o coś zapytać.",
                route: 30,
            },
            backMessage: "Dziękuję, to już wszystko co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        61: {
            message: "A późni, to zaś z Niemcami o Śląsk trzeba było walczyć. W Krakowie zbiórki dla powstańców robiono, wiece poparcia jakieś organizowano... broszury rozdawano... Nawet ludzi wysyłali z Krakowa, żeby w tym całym plebiscycie głosowali! A jak walki się zaczęły to chyba koło tysiąca młodych z Krakowa poszło się bić o Śląsk. Tak to było dla nas ważne!",
            first: {
                content: "A wojna z bolszewikami?",
                route: 62,
            },
            second: {
                content: "Dziękuję, chciałbym jeszcze o coś zapytać.",
                route: 30,
            },
            backMessage: "Dziękuję, to już wszystko co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
        62: {
            message: "O Panie, w prasie sie rozpisywali na ten temat, ale my na szczęście daleko od frontu byli. Tylko jakoś w lipcu '20 roku, przed bitwą warszawską na Rajskiej w koszarach werbowali ludzi, co by marszałkowi pomóc mogli. Na szczęście my wygrali i bolszewiki teraz nam na głowę nie wchodzo.",
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś jeszcze...",
                route: 30,
            },
            backMessage: "Dziękuję, to już wszystko co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź.]"
        },
    },
    "maciejowska": {
        1: {
            message: "Dzień dobry, słucham Pana.",
            first: {
                content: "Pani mąż wspomniał, że kilka lat temu zaatakował Panią Józef Najchel.",
                route: 6,
            },
        },
        6: {
            message: "*wzdycha* Tak, straszna awantura z tego wyniknęła. Ten cały Najchel chciał mi wyrwać siatkę z jedzeniem. Nieco mnie poszarpał, ale uważam, że mój mąż za bardzo histeryzuje...",
            first: {
                content: "Mam rozumieć, że nie została Pani pobita?",
                route: 2,
            },
            second: {
                content: "Czyli ma Pani jakiś kontakt z Najchelami?",
                route: 7,
            },
            third: {
                content: "Czy widziała Pani coś podejrzanego ostatniej nocy?",
                route: 8, 
            },
        },
        2: {
            message: "Gdzie tam... Tak naprawdę to po całej tej akcji przyszła do mnie Najchelowa przeprosić i wytłumaczyć zachowanie Józka. Nie mówiłam o tym mężowi, ale później im trochę pomagałam. Na przykład nauczyłam ich czytać i pisać. Zanim poszłam pracować do fabryki chciałam zostać nauczycielką.",
            first: {
                content: "To dlaczego Pani nią nie jest?",
                route: 3,
            },
            second: {
                content: "Przychodzę właśnie w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
            },
        },
        3: {
            message: "*smutny śmiech* Co Pan się z księżyca urwał? Do roboty trzeba byo iść, do Cygarfabryki na Dolnych Młynów mnie rodzice posłali jak miałam 14 lat. A potem męża znaleźli, dzieci się pojawiły...",
            first: {
                content: "Proszę wybaczyć mój nietakt. Ale wracając. Pan Józef zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
            },
            second: {
                content: "Praca Cygarfabryce chyba nie należała do najprostszych?",
                route: 4,
            },
            third: {
                content: "A co Pani teraz robi?",
                route: 5,
            }
        },
        4: {
            message: "Mogło być gorzej. Choć wiadomo, po 12 godzinach skręcania cygar dla żołnierzy austriackich co stacjonowali w Krakowie nie było łatwo się ruszać. I tak dzień w dzień. Ale inni mieli gorzej... Mój mąż pracuje teraz u Jankowskiego na Zabłociu. Skrzynie robi. Czasem jak wraca to go nie poznaję, taki zmęczony.",
            first: {
                content: "A czym się Pani obecnie zajmuje?",
                route: 5,
            },
            second: {
                content: "Ale wracając. Przychodzę w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
            },
        },
        5: {
            message: "Zajmuję się domem, wychowuję dzieciaki. Mam nadzieję, że przynajmniej one nie będą musiały harować w jakiejś fabryce.",
            first: {
                content: "Rozumiem. Jednak przychodzę do Państwa w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
            },
        },
        7: {
            message: "Tak. A w zasadzie miałam. Tak naprawdę to po całej tej akcji przyszła do mnie Najchelowa przeprosić i wytłumaczyć zachowanie Józka. Nie mówiłam o tym mężowi, ale później im trochę pomagałam. Na przykład nauczyłam ich czytać i pisać. Zawsze chciałam być nauczycielką.",
            first: {
                content: "To dlaczego Pani nią nie jest?",
                route: 3,
            },
            second: {
                content: "Przychodzę właśnie w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować? A może widziała Pani może coś podejrzanego?",
                route: 501, 
            },
        },
        8: {
            message: "Nie... A dlaczego Pan pyta?",
            first: {
                content: "Przychodzę w sprawie Pana Józefa. Zaginął wczorajszej nocy. Wie Pani gdzie może się teraz znajdować?",
                route: 501, 
            },
        },
        9: {
            message: "Ehhh... Przykro mi to słyszeć. Najchelowie to dość porywcza rodzina. Zwłaszcza Józek. Przypomina mi trochę mojego przełożonego jak pracowałam za młodu w Cygarfabryce na Dolnych Młynów... Też miewał różne napady...",
            first: {
                content: "Może w takim razie wie Pani gdzie może się teraz znajdować?",
                route: 501,
            },
            second: {
                content: "Zdaje się, że wie Pani sporo o Najchelach. Może Józek miał jakichś bliższych znajomych?",
                route: 501, 
            },
        },
        501: {
            message: "Przykro mi, nie wiem. Jedynie kojarzę, że ostatnio kręcił się koło nich jakiś przygrubawy mężczyzna, dobrze ubrany. Ale kim jest? Trzeba pytać Najchelowej.",
            first: {
                content: "W porządku, dziękuję za informacje. Skoro wspomniała Pani o pracy w fabryce to chciałbym o coś zapytać...",
                route: 30,
            },
            fourth: {
                content: "Dziękuję za informacje. Pozwoli Pani, że zanim pójdę porozmawiam jeszcze z Pani mężem?",
                route: 10, 
            },
            backMessage: "Dziękuję za informacje. Jeśli będę miał jakieś pytania zwrócę się do Państwa. [Zakończ rozmowę i odejdź]"
        },
        10: {
            message: "Słucham, co chciałby Pan wiedzieć?",
            first: { 
                content: "W porządku, dziękuję za informacje. Skoro wspomniała Pani o pracy w fabryce to chciałbym o coś zapytać...",
                route: 30,
            },
            fourth: {
                content: "W sumie, to jeszcze porozmawiałbym z Pani mężem, przepraszam za kłopot.",
                route: 10, 
            },
            backMessage: "W sumie to zapytam kiedy indziej. Dziękuję za informacje i do widzenia. [Zakończ rozmowę i odejdź]"
        },
        11: {
            message: "O, to znowu Pan. Słucham, mogę jakoś pomóc?",
            first: { 
                content: "Wspomniała Pani o pracy w fabryce. Chciałbym dowiedzieć się nieco więcej...",
                route: 30,
            },
            fourth: {
                content: "Przepraszam, jednak chcę porozmawiać z Pani mężem.",
                route: 10, 
            },
            backMessage: "W sumie to zapytam kiedy indziej. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        30: {
            message: "Proszę pytać.",
            first: { 
                content: "Gdzie znajdują się fabryki na obszarze Krakowa?",
                route: 40,
            },
            second: {
                content: "Czemu chciała Pani zostać nauczycielką?", 
                route: 50, 
            },
            thire: {
                content: "Czy zdarzyło się Pani strajkować?", 
                route: 60, 
            },
            fourth: {
                content: "Przepraszam, jednak chcę porozmawiać z Pani mężem.",
                route: 10, 
            },
        },
        40: {
            message: "Głównie na Grzegórzkach, na Dąbiu... Za dzielnice przemysłowe można uznać też Zabłocie, Płaszów, Bonarkę...",
            first: { 
                content: "A jakie są największe zakłady w Krakowie?",
                route: 41,
            },
            second: {
                content: "Przepraszam, jednak chcę zapytać o coś innego.",
                route: 10, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        41: {
            message: "Przede wszystkim fabryka Zieleniewskiego. Początkowo mieściła się na Starym Mieście i tam, przy św. Marka, zamontowano pierwszą maszynę parową w mieście. Wiedział Pan o tym? Tam też Zieleniewski robił armaty dla powstańców styczniowych. Potem zakład przenieśli na Krowoderską, a od prawie 20 lat pracują na Grzegórzkach. Robią tam kotły, wagony dla kolei...",
            first: { 
                content: "Może mi Pani powiedzieć coś o innych zakładach?",
                route: 42,
            },
            second: {
                content: "Przepraszam, jednak chcę zapytać o coś innego.",
                route: 10, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        42: {
            message: "Na Borku Fałęckim w Fabryce Solvaya robią sodę, to bodajże jedyna tego typu fabryka w Polsce. Nawet mają specjalną kolejkę co tu do nas, na Zakrzówek do kamieniołomu podjeżdża. Ponadto Górecki na Zabłociu robi jakieś okucia, meble, siatki... Ale znany jest z tego, że Krzyż w Zakopanem postawił na Giewoncie. Ten cały Górecki ma willę przy Romanowicza, mieszka tuż przy swoim zakładzie. Nie zanudzam?",
            first: { 
                content: "Nie, nie, proszę mówić dalej!",
                route: 42,
            },
            second: {
                content: "Nie, nie... ale jednak chcę zapytać o coś innego.",
                route: 10, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        43: {
            message: "Po wojnie w sumie powstało trochę nowych zakładów... Armatur w Łagiewnikach... Optima w Podgórzu produkująca czekoladę, Herbewo na końcu Długiej... długo by wymieniać! Ale to i tak mało! Wie Pan, wśród robotników to co czwarty nie ma roboty! A jak ma, to i tak zarabia tyle co nic. Wyzysk!",
            second: {
                content: "Dziękuję, jednak chcę zapytać o coś innego.",
                route: 10, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        50: {
            message: "Proszę Pana, to nie dlatego, że jakoś bardzo ciągnęło mnie do nauki... Pochodzę z biednej, robotniczej rodziny. Moja ciocia pracowała jako pomoc domowa u jednej z bogatych rodzin w Krakowie. Czasami zabierała mnie ze sobą. Tamtejsza Pani była piękną kobietą, pochodziła z dobrego domu... I była właśnie nauczycielką. Było to uważane za zajęcie dla kobiet z wyższych sfer... Pani ta nie mogła mieć dzieci, więc jak do nich przychodziłam to traktowała mnie jak swoją... Ona nauczyła mnie wszystkiego, co do tej pory umiem.",
            first: { 
                content: "A jak wygląda życie kobiet pochodzących z biedniejzych rodzin?",
                route: 51,
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 10, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        51: {
            message: "Drogi Panie... W najgorszej sytuacji są chłopki... Całe życie zajmują się gospodarstwem, a grosza dzięki temu nie zarobią. A jak chłopa zabraknie... Sama teraz muszę za męża pracować, bo już sił mu brakuje... Wiele biednych kobiet zatrudnia się jako służba domowa, ale najczęściej jak za mąż wyjdą to muszą rzucić pracę i zająć się własnym domem. No i są jeszcze robotnice. Fabrykanci chętnie je zatrudniają, bo kobietom płacą dwa razy mniej niż mężczyznom. Najczęściej pracują w zakładach włókienniczych, ale to też się zmienia...",
            second: {
                content: "Dziękuję za odpowiedź... chciałbym jeszcze zapytać o coś innego.",
                route: 10, 
            },
            backMessage: "Rozumiem... No cóż, to wszystko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        60: {
            message: "Ja nie, ale mój mąż strajkował... Proszę Pana... Co tu się działo dwa lata temu... Pamięta Pan? W '23 roku wybuchł kryzys, ceny rosły jak oszalałe, podatki zresztą też. W sklepach niczego nie było, ani chleba, ani mięsa... W końcu, na początku listopada rozpoczął się strajk powszechny.",
            first: { 
                content: "Proszę mówić dalej.",
                route: 61,
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 10, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        61: {
            message: "Dzień przed zaplanowanym strajkiem przyszła z Warszawy decyzja o zakazie zgromadzeń w, jak to ujęli...? W lokalach zamkniętych. Ale mój mąż i tak chciał protestować i dlatego poszedł pod Dom Robotniczy na Dunajewskiego, tam, przy Plantach. Szedł z innymi robotnikami, a z naprzeciwka nadciągała policja i wojsko...",
            first: { 
                content: "Co się działo dalej?",
                route: 62,
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 10, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        62: {
            message: "Proszę Pana, strasznie się bałam! Mój Janek przyszedł cały zakrwawiony do domu! Mówił, że bili się z wojskiem, że zaczęli strzelać! Że 30 osób zginęło, po obu stronach! Jak można było do tego dopuścić?! Jaki rząd strzela do własnych obywateli?! Tylko proszę o tym nie rozmawiać z moim mężem... Ma chore serce, nie chcę, żeby dodatkowo się denerwował...",
            first: {
                content: "Oczywiście, nie będę o tym wspominać. Ale chciałbym zapytać o coś jeszcze...",
                route: 10, 
            },
            backMessage: "Rozumiem, nie wspomnę o tym. Zresztą i tak muszę już iść. Dziękuję za informacje i do widzenia. [Zakończ rozmowę i odejdź]"
        },
    }, 
    "krogul": {
        1: {
            message: "Czego?",
            first: {
                content: "Przodownik Kołodziejczyk, jestem z policji. Chciałbym zadać kilka pytań o Najchelów.",
                route: 501,
            },
            second: {
                content: "Ale czemu tak niekulturalnie...?",
                route: 501,
            },
            third: {
                content: "Panie, trochę grzeczniej, bo będzie Pan miał kłopoty.",
                route: 501, 
            }
        },
        501: {
            message: "Nic nie wiem, spieprzaj Pan, to moja posesja.",
            first: {
                content: "A skąd Pan wie o co chciałem zapytać?",
                route: 2,
            },
            second: {
                content: "Uważaj Pan z tym językiem, bo się źle to skończy.",
                route: 2, 
            },
        },
        2: {
            message: "*milczy*",
            first: {
                content: "Haloooo?",
                route: 3,
            },
            second: {
                content: "Co to, zabawa w króla ciszy?",
                route: 3,
            },
        },
        3: {
            message: "*dalej milczy*",
            first: {
                content: "Jak Pan nie odpowie na moje pytania to każę Pana aresztować!",
                route: 4,
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
        6: {
            message: "Czego? Wynocha mi z mojej posiadłości!",
            first: {
                content: "Dzień dobry, dzień dobry! Ja w sprawie Majchrzaka. Zna Pan to nazwisko, prawda? ",
                route: 8,
            },
            second: {
                content: "Do Majchrzaka to pewnie się Pan grzeczniej odzywał.",
                route: 8,
            },
        },
        7: {
            message: "No przecież mówiłem wynocha! Nie rozumie?!",
            first: {
                content: "Dzień dobry, dzień dobry! Ja w sprawie Majchrzaka. Zna Pan to nazwisko, prawda? ",
                route: 8,
            },
            second: {
                content: "Do Majchrzaka to pewnie się Pan grzeczniej odzywał!",
                route: 8,
            },
        },
        8: {
            message: "*milczy*",
            first: {
                content: "Dobra, koniec tych żartów. Proszę mi powiedzieć, gdzie może być teraz Najchel.",
                route: 601,
            },
        },
        601: {
            message: "Niech będzie. Powiem Panu coś co może się przydać. Najchel ma kłopoty z pieniędzmi. Latami dostawał jakiś zasiłek. Skąd? Nie mam pojęcia, trzeba żony dopytać. Wydaje mi się, że jakoś rok temu przestali mu go wypłacać...",
            first: {
                content: "Proszę kontynuować.",
                route: 10,
            },
        },
        10: {
            message: "Z tego powodu musiał znaleźć sobie jakąś robotę i tak zatrudnił się na Krowodrzy jako dozorca. A jak go stamtąd wyrzucono to zupełnie stracił rozum. Najpierw wysłano go do Kobierzyna, a kiedy stamtąd wrócił to udawał przed żoną, że wciąż ma pracę... Myślę, że z braku pieniędzy może chcieć napaść na jakiś bank, może sklep. Więcej nie wiem, naprawdę.",
            backMessage: "Nie można było tak od razu? W takim razie czas na rozmowę z Najchelową. [Zakończ rozmowę i odejdź.]"
        },
        11: {
            message: "Nie mam już nic do dodania. Proszę sobie iść. [Odchodzi]",
            backMessage: "Chwileczkę...!"
        }

    },
    "lekarz": {
        1: {
            message: "Dzień dobry, jestem dr Peltzer. Z jakiegoż to powodu policja postanowiła odwiedzić nasz szpital?",
            first: {
                content: "Dzień dobry. Chodzi o jednego z pacjentów. Mówi Panu coś nazwisko Najchel?",
                route: 91,
            },
            second: {
                content: "Dzień dobry Panie doktorze. Może pamięta Pan jednego z pacjentów, nazywał się Najchel.",
                route: 91,
            },
            third: {
                content: "Dzień dobry. Potrzebuję informacji o jednym z pacjentów, Józefie Najchelu.",
                route: 91, 
            }
        },
        2: {
            message: "Dzień dobry, jestem dr Peltzer. Z jakiegoż to powodu policja postanowiła odwiedzić nasz szpital?",
            first: {
                content: "Dzień dobry. Chodzi o jednego z pacjentów. Mówi Panu coś nazwisko Najchel?",
                route: 92,
            },
            second: {
                content: "Dzień dobry Panie doktorze. Może pamięta Pan jednego z pacjentów, nazywał się Najchel.",
                route: 92,
            },
            third: {
                content: "Dzień dobry. Potrzebuję informacji o jednym z pacjentów, Józefie Najchelu.",
                route: 92, 
            }
        },
        91: {
            message: "Najchel... Najchel... Ach, tak! Racja, był tu, nawet niedawno. Leczyliśmy go na chorobę afektywną dwubiegunową...",
            first: {
                content: "W takim razie nie powinien być wciąż na oddziale?",
                route: 4,
            },
            second: {
                content: "I co, tak po prostu wyzdrowiał?",
                route: 4, 
            },
        },
        92: {
            message: "Najchel... Najchel... Ach, tak! Racja, był tu, nawet niedawno. Leczyliśmy go na chorobę afektywną dwubiegunową...",
            first: {
                content: "W takim razie nie powinien być wciąż na oddziale?",
                route: 3,
            },
            second: {
                content: "I co, tak po prostu wyzdrowiał?",
                route: 3, 
            },
        },
        3: {
            message: "Starałem się przekonać jego żonę, że powienien zostać na oddziale, bo coś może się wydarzyć. Ale nie chciała słuchać. Podpisała jedynie dokument, przysięgając, że otoczy go opieką. Nie możemy przetrzymywać pacjentów bez wyroku sądowego.",
            first: {
                content: "To pewnie nie zaskoczy Pana informacja, że Najchel zaginął i nie wiadomo co się z nim stało?",
                route: 5,
            },
            second: {
                content: "Brawo. No to niech Pan wie, że Najchel teraz biega po mieście z rewolwerem za pazuchą. A my nie wiemy gdzie go szukać.",
                route: 5, 
            },
            second: {
                content: "No to się świetnie zaopiekowała jak zeszłej nocy po awanturze wybiegł z rewolwerem w dłoni, krzycząc że kogoś zabije.",
                route: 5, 
            },
        },
        4: {
            message: "Starałem się przekonać jego żonę, że powienien zostać w szpitalu, bo coś może się wydarzyć. Ale nie chciała słuchać. Podpisała jedynie dokument, przysięgając, że otoczy go opieką. Nie możemy przetrzymywać pacjentów bez wyroku sądowego.",
            first: {
                content: "To pewnie nie zaskoczy Pana informacja, że Najchel zaginął i nie wiadomo co się z nim stało?",
                route: 5,
            },
            second: {
                content: "Brawo. No to niech Pan wie, że Najchel teraz biega po mieście z rewolwerem za pazuchą. A my nie wiemy gdzie go szukać.",
                route: 5, 
            },
        },
        5: {
            message: "Słucham?!",
            first: {
                content: "Niestety. Dlatego będę miał kilka pytań.",
                route: 6,
            },
        },
        6: {
            message: "Dobrze, proszę pytać. Postaram się pomóc",
            first: {
                content: "Do czego zdolny jest Najchel?",
                route: 7,
            },
            second: {
                content: "Wie Pan coś, co pomogłoby w odnalezieniu Najchela?",
                route: 8,
            },
            third: {
                content: "Jak wyglądał ostatni pobyt Najchela w szpitalu?",
                route: 9,
            },
        },
        7: {
            message: "Prawdę mówiąc, do wszystkiego. Miewał halucynacje. Często rozmawiał z urojonym przyjacielem, którego przedstawiał jako 'człowieka o koźlich rogach'. Ten 'przyjaciel' często namawiał go do dziwnych rzeczy. Najchel mówił, że pewnego razu kazał mu zaatakować sąsiadkę. Ale proszę porozmawiać z siostrą Zuzanną. To ona bezpośrednio opiekowała się Najchelem.",
            fourth: {
                content: "W porządku, dziękuję za pomoc.",
                route: 6,
            },
        },
        8: {
            message: "Szczerze, nie wiem. Najchel miał urojonego przyjaciela, którego przedstawiał jako 'człowieka o koźlich rogach'. Ten 'przyjaciel' często namawiał go do dziwnych rzeczy. Najchel mówił, że pewnego razu kazał mu zaatakować sąsiadkę. Ale proszę porozmawiać z siostrą Zuzanną. To ona bezpośrednio opiekowała się Najchelem i będzie wiedzieć więcej ode mnie.",
            fourth: {
                content: "W porządku, dziękuję za pomoc.",
                route: 6,
            },
        },
        9: {
            message: "Prawdę mówiąc, nie wyglądało to dobrze. Miewał halucynacje. Często rozmawiał z urojonym przyjacielem, którego przedstawiał jako 'człowieka o koźlich rogach'. Ten 'przyjaciel' często namawiał go do dziwnych rzeczy. Najchel mówił, że pewnego razu kazał mu zaatakować sąsiadkę. Ale proszę porozmawiać z siostrą Zuzanną. To ona bezpośrednio opiekowała się Najchelem.",
            fourth: {
                content: "W porządku, dziękuję za pomoc.",
                route: 6,
            },
        },
        10: {
            message: "Tak?",
            first: {
                content: "Najchela w trakcie pobytu w szpitalu odwiedził jakiś człowiek. Ponoć Pan z nim rozmawiał.",
                route: 11,
            },
        },
        11: {
            message: "*dłuższa pauza, przełyka ślinę* No dobrze... To prawda. Nie wiem jednak jak się nazywa, nie chciał się przedstawić. Poprosił mnie tylko o pewną przysługę...",
            first: {
                content: "No i co to za przysługa?",
                route: 12,
            },
            second: {
                content: "I co, zapomniał Pan mi o tym powiedzieć?",
                route: 13,
            },
        },
        12: {
            message: "*bierze głęboki wdech* Chciał zobaczyć całą dokumentację medyczną Józefa Najchela.",
            first: {
                content: "I dał mu Pan do niej dostęp?",
                route: 14,
            },
            second: {
                content: "Niech zgadnę. Zgodził się Pan.",
                route: 14,
            },
        },
        13: {
            message: "Nie wydawało mi się to istotne...",
            first: {
                content: "Bzdury, przemilczał Pan to specjalnie. Proszę powiedzieć, co to była za przysługa.",
                route: 12,
            },
        },
        14: {
            message: "Nie rozumie Pan! Potrzebowałem pieniędzy!",
            first: {
                content: "Nie obchodzi mnie to, że przyjął Pan łapówkę. Moim zadaniem jest odnaleźć Najchela. Gdzie mogę znaleźć tego człowieka?",
                route: 501,
            },
            second: {
                content: "Oj tam, co się Pan przejmuje. To, że jestem z policji nie znaczy, że mam krystaliczne serce. 1000 złotych i o niczym nie wiem.",
                route: 16,
            },
        },
        501: {
            message: "Nie mogłem pokazać mu dokumentacji w szpitalu. Ktoś mógłby zobaczyć. Dlatego umówiliśmy się w restauracji przy browarze Lubicz. Ale nie wiem nic więcej.",
            first: {
                content: "Dziękuję za informacje. Ale zanim pójdę mam kilka pytań odnośnie służby zdrowia...",
                route: 30,
            },
            fourth: {
                content: "Dziękuję. Jednak zanim pójdę to chciałbym zamienić słówko z siostrą Zuzanną... Mam kilka pytań dotyczących Kościoła...",
                route: 16,
            },
            backMessage: "No dobrze. Dziękuję za informacje. [Zakończ rozmowię i opuść szpital]"
        },
        16: {
            message: "Dobrze, już dobrze... Nie potrzebuję więcej kłopotów... [Wręcza kopertę]",
            first: {
                content: "Wspaniale, akurat zbierałem na nowy samochód. Tymczasem proszę powiedzieć gdzie znajdę tego człowieka.",
                route: 501,
            },
        },
        17: {
            message: "Słucham. Ma Pan jeszcze jakieś pytania?",
            first: {
                content: "Owszem. Mam kilka pytań odnośnie służby zdrowia...",
                route: 30,
            },
            fourth: {
                content: "Chciałbym porozmawiać z siostrą Zuzanną",
                route: 16,
            },
            backMessage: "Nie. Przepraszam za kłopot, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        18: {
            message: "Witam ponownie. Słucham Pana.",
            first: {
                content: "Mam kilka pytań odnośnie służby zdrowia...",
                route: 30,
            },
            fourth: {
                content: "Chciałbym porozmawiać z siostrą Zuzanną",
                route: 16,
            },
            backMessage: "Nie. Przepraszam za kłopot, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        30: {
            message: "Tak...?",
            first: {
                content: "Jak Pan ocenia stan sanitarny miasta?",
                route: 40,
            },
            second: {
                content: "Proszę powiedzieć jaki jest stan służby zdrowia w Krakowie?",
                route: 50,
            },
            third: {
                content: "Co może Pan powiedzieć o tej placówce?",
                route: 60,
            },
            fourth: {
                content: "Jednak chciałbym porozmawiać z siostrą Zuzanną...",
                route: 16,
            },
        },
        40: {
            message: "*wzdycha* No cóż... Pomimo, że jest zdecydowanie lepiej niż kilka lat temu to jest jeszcze wiele do zrobienia... Najgorzej na Kazimierzu i w Podgórzu. Straszna bieda. Widziałem raport, w którym stwierdzono, że jest tam sporo dołów kloacznych, a na przykład przy ul. Estery w mieszkaniu średnio mieszka bodajże 8 osób... Nie dziwię się, że to właśnie tam epidemia Hiszpanki zebrała największe żniwo... Tyfus plamisty też nie jest tam niczym dziwnym...",
            first: {
                content: "Proszę mówić dalej.",
                route: 41
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        41: {
            message: "We wspomnianym raporcie lekarze miejscy dodali, że zaledwie 22% mieszkań odpowiada warunkom higienicznym, a 37% nie nadaje się do zamieszkania. To chyba wiele mówi, prawda? W ogóle to Kraków jest w czołówce miast polskich jeśli chodzi o śmiertelność na nowotwory, gruźlicę, choroby serca, dur brzuszny... 10% niemowląt nie dożywa pierwszych urodzin... Mam nadzieję, że sytuacja ulegnie poprawie, bo czarno to widzę...",
            first: {
                content: "Dziękuję za odpowiedź, rzeczywiście jest niewesoło... Pozwoli Pan, że zapytam o coś innego...",
                route: 30,
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        50: {
            message: "O czystość miasta, zaopatrzenie w wodę, czy dozór nad żywnością w Krakowie dba miejski Urząd Zdrowia. Jeśli chodzi o budynki szpitalne, to znajdują się głównie przy ulicy Kopernika. Choć własną placówkę prowadzą chociażby bonifratrzy, a szpital żydowski znajduje się przy Skawińskiej. Jeszcze podczas wojny na Prądniku otwarto Miejskie Zakłady Sanitarne z sanatorium gruźliczym. Generalnie nie jest aż tak źle...",
            first: {
                content: "A jak w mieście działa pogotowie?",
                route: 51
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        51: {
            message: "W ogóle to nie wiem, czy jest Pan świadom, ale nasze, krakowskie, pogotowie jest drugim najstarszym w Europie, zaraz po tym we Wiedniu. Założono je w 1891 roku i początkowo miało siedzibę w budynku straży pożarnej, tym przy Plantach... Rocznie przeprowadza kilka tysięcy interwencji i obecnie władze myślą o kupnie dodatkowych samochodów, bo póki co ambulansy konne nie poszły w odstawkę...",
            second: {
                content: "Pozwoli Pan, że zapytam o coś innego...",
                route: 30,
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        60: {
            message: "Do początku XX wieku jedynym szpitalem dla umysłowo chorych w Galicji był przepełniony zakład w Kulparkowie pod Lwowem... Było jasne, że trzeba założyć jakiś nowy ośrodek. W końcu, jeszcze kilka lat przed wojną, podjęto decyzję o budowie tego kompleksu, ale pierwszych pacjentów przyjęto dopiero w 1917 roku. Mamy tu wszystko, czego potrzeba. Ogród, kaplicę, piekarnię, pralnię... Łącznie 15 pawilonów i budynki administracyjne.",
            first: {
                content: "Proszę mówić dalej.",
                route: 61
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        61: {
            message: "Mamy tutaj wystarczająco miejsca dla 800 chorych. Prowadzone są także prace, aby powstał pawilon dla pacjentów pracujących. Będziemy w ten sposób chceli pomóc im w powrocie do normalnego życia.",
            second: {
                content: "Dziękuję za informacje. Chciałbym zapytać o coś jeszcze.",
                route: 30,
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
    }, 
    "pielegniarka": {
        1: {
            message: "Niech będzie pochwalony. Widziałam, że rozmawiał Pan z doktorem Peltzerem. W czym mogę pomóc?",
            first: {
                content: "Dzień dobry. Doktor mówi, że jednym z siostry podopiecznych był Józef Najchel...",
                route: 2,
            },
            second: {
                content: "Dzień dobry. Co mi może siostra powiedzieć o Józefie Najchelu?",
                route: 6,
            },
        },
        2: {
            message: "Tak. Biedny człowiek... Opętany przez szatana. A przynajmniej tak wynikało z tego co mówił...",
            first: {
                content: "Chodzi to tego 'przyjaciela' z rogami, tak?",
                route: 3,
            },
            second: {
                content: "Jak dla mnie to po prostu chory psychicznie człowiek, nie żaden szatan.",
                route: 5, 
            },
        },
        3: {
            message: "Tak, ale nie dziwi mnie to... Pan Józef oddalił się od Chrystusa, zupełnie zarzucił wiarę...",
            first: {
                content: "Zgadzam się. Jednak obecnie sytuacja jest bardzo poważna, dlatego musi mi siostra pomóc.",
                route: 4,
            },
            second: {
                content: "Ja też, a jakoś nie widuję żadnych diabłów.",
                route: 5, 
            },
        },
        4: {
            message: "Słucham Pana.",
            first: {
                content:"Co mi może siostra powiedzieć na temat Józefa Najchela?",
                route: 6,
            },
        },
        5: {
            message: "Proszę sobie nie robić kpin z cierpienia innego człowieka!",
            first: {
                content:"Przepraszam, zachowałem się nietaktownie. Muszę siostrę o coś zapytać.",
                route: 4,
            },
            second: {
                content: "Dobrze już, dobrze. Proszę się nie unosić. Czy mogę zadać jedno pytanie?",
                route: 4, 
            },
        },
        6: {
            message: "Był u nas kilka tygodni temu. Opiekowałam się nim niemal codziennie. Niewiele ze mną rozmawiał... Mówił głównie do siebie, a raczej do diabła co w nim siedzi. Biedaczek. Żona go nawet nie odwiedzała. W końcu zdecydowała się go przygarnąć, bo sąsiedzi zaczęli plotkować. Ale raz zjawił się u niego jakiś gość...",
            first: {
                content:"Gość? Kto to był?",
                route: 501,
            },
        },
        501: {
            message: "Jakiś mężczyzna. Nie przedstawił się. Chciał tylko zobaczyć się z Panem Józefem.",
            first: {
                content:"Jak wyglądał?",
                route: 8,
            },
            second: {
                content: "O czym rozmawiali?",
                route: 10,
            },
        },
        8: {
            message: "Wysoki... Przy kości. Elegancki.",
            first: {
                content:"A słyszała siostra o czym rozmawiali?",
                route: 9,
            },
        },
        9: {
            message: "Niestety, nie. Ale widziałam, że potem poszedł do gabinetu doktora Peltzera. Może Pan jego spytać, czy czegoś nie wie.",
            fourth: {
                content: "Tak też zrobię. Dziękuję.",
                route: 10, 
            },
        },
        10: {
            message: "Niestety nie wiem.",
            first: {
                content: "A pamięta siostra jak wyglądał?",
                route: 11, 
            },
        },
        11: {
            message: "Tak, to był taki gruby, wysoki mężczyzna. Elegancki. Doktor Peltzer może wiedzieć coś więcej na jego temat, bo widziałam jak rozmawiali. Proszę się do niego odezwać.",
            fourth: {
                content: "Tak też zrobię. Dziękuję.",
                route: 11, 
            },
        },
        15: {
            message: "Tak? Chciałby Pan ze mną porozmawiać?",
            first: {
                content:"Tak, chciałbym dowiedzieć się więcej o sytuacji kościoła. Mogę zadać kilka pytań?",
                route: 30,
            },
            fourth: {
                content: "Przepraszam. Chciałbym jednak porozmawiać z doktorem Peltzerem.",
                route: 11, 
            },
            backMessage: "Nie, tak naprawdę to już wychodzę. Do widzenia. [Zakończ rozmowię i opuść szpital.]"
        },
        30: {
            message: "Słucham Pana.",
            first: {
                content: "Proszę powiedzieć coś więcej o obecnym życiu Kościoła w Krakowie.",
                route: 40,
            },
            second: {
                content: "Czy może siostra powiedzieć więcej o zakonach w mieście?",
                route: 50, 
            },
            third: {
                content: "Chciałbym dowiedzieć się czegoś więcej o krakowskich placówkach charytatywnych.",
                route: 60, 
            },
            fourth: {
                content: "Przepraszam. Chciałbym jednak porozmawiać z doktorem Peltzerem.",
                route: 11, 
            },
        },
        40: {
            message: "Drogi Panie, najważniejszą dla nas, katolików, informacją jest to, że pod koniec tego Roku Pańskiego powstanie archidiecezja krakowska. Będzie to wielkie wyróżnienie dla naszego miasta. Dodatkowo władze naszego kraju dosłownie 3 miesiące temu zawarły konkordat ze Stolicą Apostolską. To wspaniała informacja!",
            first: {
                content: "Co oznacza podpisanie konkordatu?",
                route: 41,
            },
            second: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        41: {
            message: "Po pierwsze, zapewniono niezależność naszemu Kościołowi oraz jego duchownym w wykonywaniu swojej posługi. Po drugie, wprowadza obowiązek nauczania religii w szkołach. Po trzecie, Kościół ma zostać zwolniony ze wszelkich opłat i podatków, aby nie ograniczać jego świętej misji duszpasterskiej. Nasze państwo będzie również wypłacać emerytury księżom po ich posłudze.",
            first: {
                content: "A co w takim razie zyskała Polska na podpisaniu tej umowy?",
                route: 42,
            },
            second: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        42: {
            message: "Ojciec Święty zaakceptował nowe granice Polski i dopasował do nich granice diecezji. Stolica Apostolska nie będzie również obsadzać cudzoziemcami stanowisk przełożonych zakonów bez zgody polskich władz, a biskupi mają składać przysięgę na wierność Prezydentowi.",
            first: {
                content: "Rozumiem. Mógłbym jednak zapytać o coś innego?",
                route: 30,
            },
            second: {
                content: "Coś mi się wydaje, że Watykan wyszedł na tym nieco lepiej... Mogę zapytać o coś innego?",
                route: 30,
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        50: {
            message: "W Krakowie mieści się ponad 40 zakonów, głównie w centrum miasta. Szkolą kleryków, zajmują się sierotami, organizują szkoły, szpitale... Opiekują się również chorymi i ubogimi. Sama jestem jedną ze służebniczek dębickich. Nasze zgromadzenie opiekuje się chorymi tutaj, w Kobierzynie.",
            first: {
                content: "Powie siostra więcej o zgromadzeniu, do którego należy?",
                route: 51,
            },
            second: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        51: {
            message: "Zgromadzenie służebniczek powstało w Wielkopolsce w połowie XIX wieku. Stamtąd pierwsze siostry trafiły do Dębicy, gdzie założyły ochronkę dla ubogich dziewcząt. Uczyły je czytania, pisania, szycia... Podczas wojny jako pielęgniarki zaczęłyśmy opiekować się pacjentami w szpitalach wojskowych i epidemicznych. A po odzyskaniu niepodległości zdecydowałyśmy się podejować pracę w szpitalach i klinikach psychiatrycznych. W ten sposób trafiłyśmy do Kobierzyna.",
            second: {
                content: "Dziękuję za odpowiedź. Chciałbym zapytać o coś jeszcze.",
                route: 30, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        60: {
            message: "Stowarzyszenie Pań Miłosierdzia przy ulicy Warszawskiej prowadzi schronisko dla ubogich oraz kuchnię, w której wydawane są bezpłatne posiłki. Ponadto przy ulicy Krowoderskiej Róża Łubieńska zarządza stowarzyszeniem wychowującym niechciane dzieci. Zapewne pamięta Pan brata Alberta, co zrobił wiele dobrego w służbie bezdomnym... Sam brat już odszedł do Pana, ale założone przez niego schronisko wciąż funkcjonuje przy Krakowskiej. Nie można też zapomnieć o biskupie Sapiesze.",
            first: {
                content: "Jaka jest jego rola?",
                route: 63,
            },
            second: {
                content: "A czy on w 1914 roku nie sprzeciwiał się Piłsudskiemu zarzucając, że ten chce stworzyć Polskę 'socjalistyczną i żydowską'?",
                route: 61,
            },
            third: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        61: {
            message: "Ksiądz biskup jest po prostu wielkim patriotą i na sercu leżą mu sprawy polskie.",
            first: {
                content: "Rozumiem. A jaka jest jego rola jeśli mowa o działalności charytatywnej?",
                route: 63,
            },
            second: {
                content: "Słyszałem również, że sprzeciwiał się podpisaniu konkordatu przez Polskę, bo chciał pełnej niezależności Kościoła od władzy świeckiej. Dlatego raczej na kapelusz kardynalski od papieża liczyć nie może... A na dodatek jako jedyny przedstawiciel episkopatu polskiego sprzeciwiał się utworzeniu arcybiskupstwa w Krakowie...",
                route: 62,
            },
            third: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        62: {
            message: "A wie Pan ile dobrego uczynił dla zwykłych ludzi?",
            first: {
                content: "Proszę powiedzieć.",
                route: 63,
            },
            second: {
                content: "Jednak wolałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Nie interesuje mnie to, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
        63: {
            message: "Ksiądz biskup już w trakcie wojny założył Komitet Pomocy dla tych, których dotknęły cierpienia związane z działaniami wojennymi. Budowano ochronki, szczepiono ludzi... Rok temu, podczas kryzysu, utworzył kolejny Komitet dający zasiłki ubogim. A w tym roku ponownie zaangażował się w tego typu działania i zaczął wydawać posiłki bezdomnym.",
            second: {
                content: "Rozumiem. Chciałbym jednak zapytać o coś jeszcze.",
                route: 30, 
            },
            backMessage: "Dziękuję za odpowiedź. To wszystko, co chciałem wiedzieć, do widzenia. [Zakończ rozmowię i opuść szpital]"
        },
    }, 
    "szef-krowodrza": {
        1: {
            message: "Dzień dobry. W czym mogę pomóc?",
            first: {
                content: "Dzień dobry. Czy to Pan jest zarządcą tej rogatki?",
                route: 501,
            },
        },
        501: {
            message: "Tak, a o co chodzi?",
            first: {
                content: "Kołodziejczyk, policja. Przychodzę w sprawie jednego z Pańskich podwładnych, Najchela?",
                route: 2,
            },
            second: {
                content: "Jestem z policji. A chodzi o niejakiego Józefa Najchela. Ponoć tu pracuje.",
                route: 2,
            },
        },
        2: {
            message: "No cóż, w takim wypadku mam dla Pana ważną wiadomość. Otóż Najchel nie pracuje u mnie już od... lutego? ",
            first: {
                content: "To dlaczego jego żona twierdzi inaczej?",
                route: 3,
            },
            second: {
                content: "Słucham? To co się w takim razie wydarzyło?",
                route: 7, 
            },
        },
        3: {
            message: "A tego to ja już nie wiem. Pewnie się nie przyznał. Ale ja nie będę płacił komuś, kto mnie wyzywa od najgorszych. Co to, to nie.",
            first: {
                content: "Zatem kiedy po raz ostatni widział Pan Najchela?",
                route: 4,
            },
            second: {
                content: "Czy potem utrzymywał Pan z nim jakiś kontakt?",
                route: 5,
            },
            third: {
                content: "To jak Pana nazwał?",
                route: 6,
            },
        },
        4: {
            message: "Tamtego dnia po raz ostatni. Ale wiem, że jego następca miał wątpliwą przyjemność z nim porozmawiać. Tam stoi. Może powiedzieć nieco więcej.",
            fourth: {
                content: "Dziękuję. Zapytam.",
                route: 4,
            },
        },
        5: {
            message: "*ironicznie* Pewnie, często zachodzimy na pogaduchy do Thorna, by przy okazji zjeść jakiś czulent... Co Pan, na głowę upadł? Jak mnie ktoś od bolszewików wyzywa to nie chcę tego człowieka na oczy widzieć. Ale wiem, że jego następca z nim rozmawiał. Proszę z nim zamienić słówko, może się Pan czegoś dowie.",
            fourth: {
                content: "Dziękuję. Zapytam.",
                route: 4,
            },
        },
        6: {
            message: "Czy uważa to Pan za śmieszne? Bo mnie jakoś nie bawi. Jak chce Pan czegoś się dowiedzieć proszę porozmawiać z następcą Najchela. Tam stoi. On miał okazję się z nim widzieć. ",
            fourth: {
                content: "Dziękuję. Zapytam.",
                route: 4,
            },
        },
        7: {
            message: "Odbierając wypłatę zaczął wyzywać mnie od najgorszych. Nie wiem co w niego wstąpiło. Ale uznałem, że nie będę płacił komuś, kto mnie obraża! Co to, to nie!",
            first: {
                content: "Zatem kiedy po raz ostatni widział Pan Najchela?",
                route: 4,
            },
            second: {
                content: "Czy potem utrzymywał Pan z nim jakiś kontakt?",
                route: 5,
            },
            third: {
                content: "To jak Pana nazwał?",
                route: 6,
            },
        },
        8: {
            message: "Ma Pan jeszcze jakieś pytania?",
            first: {
                content: "Chciałbym porozmawiać z Panem o społeczeństwie Krakowa.",
                route: 30,
            },
            fourth: {
                content: "Jednak jeszcze raz chciałbym pomówić z Pana podwładnym.",
                route: 5,
            },
            backMessage: "Nie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        9: {
            message: "Witam Pana ponownie! Jakieś pytania?",
            first: {
                content: "Chciałbym porozmawiać z Panem o społeczeństwie Krakowa.",
                route: 30,
            },
            fourth: {
                content: "Chciałbym pomówić z Pana podwładnym.",
                route: 5,
            },
            backMessage: "Nie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        30: {
            message: "Proszę pytać.",
            first: {
                content: "Jak wygląda różnorodność religijna i narodowościowa?",
                route: 40,
            },
            second: {
                content: "Co Pan powie o nastrojach politycznych?",
                route: 50,
            },
            third: {
                content: "Jak kształtują się ceny w mieście?",
                route: 60,
            },
            fourth: {
                content: "Chciałbym pomówić z Pana podwładnym.",
                route: 5,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        40: {
            message: "W Krakowie żyje dziś niemal 200 tysięcy osób. Powiem tak: według spisu z '21 roku 3/4 mieszkańców stanowią katolicy, resztę wyznawcy judaizmu. Z tym, że warto zaznaczyć, iż tylko na Kazimierzu mieszka połowa krakowskich Żydów. Ponadto w Krakowie mamy jeszcze około 1500 grekokatolików i 1000 protestanów. ",
            first: {
                content: "A jak wygląda struktura zawodowa?",
                route: 41,
            },
            second: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        41: {
            message: "Połowa mieszkańców jest aktywna zawodowo. Z nich 20% zaliczyć można do inteligencji, 30% pracuje w przemyśle, 20% w handlu... Tutaj prym wiodą Żydzi, choć ich sklepiki najczęściej są małe i przynoszą niewielki dochód. No i na koniec dodam, że aż 16% czynnych zawodowo osób pracuje jako służba domowa.",
            second: {
                content: "Dziękuję za odpowiedź. Chciałbym zapytać o coś jeszcze.",
                route: 30,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        50: {
            message: "No to żeś Pan mi pytanie zadał, nie ma co... Powiem tak: socjaliści nienawidzą narodowców, narodowcy socjalistów i Żydów, z kolei Żydzi głosują na swoich, a wszystkich łączy to, że nienawidzą komunistów. Proste?",
            first: {
                content: "Nie do końca...",
                route: 51,
            },
            second: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        51: {
            message: "No też właśnie. Do tej pory wybory odbyły się dwukrownie - w 1919 i 1922 roku. W obu wypadkach frekwencja wyniosła 67% i wyniki były bardzo podobne. Ogólnie rzecz umując wśród chrześcijan głosy rozkładały się pomiędzy socjalistami, a narodowcami i konserwatystami. I w 1919 i 1922 roku wygrywała prawica zdobywając koło 40% głosów. Za nimi plasowali się socjaliści z 30-procentowym poparciem. A do tego dołączali żydowscy syjoniści z 20% głosów. ",
            first: {
                content: "A kto głosował na kogo?",
                route: 52,
            },
            second: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        52: {
            message: "Socjaliści mogli liczyć na poparcie rodzin robotniczych zamieszkujących głównie nowe dzielnice miasta. Konserwatyści zyskiwali natomiast głosy rodzin, które zamieszkują historyczne centrum Krakowa. Jeśli chodzi o Żydów to głosują głównie syjoniści - marzący jednocześnie o utworzeniu własnego państwa w Palestynie. Ortodoksyjni wyznawcy judaizmu raczej nie interesują się polityką krajową, a skupiają się na własnych sprawach...",
            first: {
                content: "Jakie żydowskie partie polityczne działają w mieście?",
                route: 53,
            },
            second: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        53: {
            message: "Mamy wspomnianych syjonistów skupionych wokół Ozjasza Thona... Dalej partię Mizrachi, która łączy syjonistów z kręgu Żydów ortodoksyjnych. To by była prawica. Nastomiast jeśli chodzi o lewicę to prym wiedzie Bund, czyli Żydowska Partia Socjaldemokratyczna. A między nimi lawiruje jeszcze Hitachdut, czyli uważaj Pan teraz: Syjonistyczna Partia Pracy. Czyli coś, jak połączenie narodowców żydowskich z socjalistami. Nie mam pojęcia jak oni się tam między sobą dogadują...",
            first: {
                content: "A co z komunistami?",
                route: 54,
            },
            second: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        54: {
            message: "Oni stanowią jakiś śladowy odsetek wyborców. W '22 roku otrzymali ledwo pół procenta głosów...",
            second: {
                content: "Dziękuję za informacje. Chciałbym jednak zapytać o coś jeszcze.",
                route: 30,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        60: {
            message: "Lepszym pytaniem byłoby: 'O ile wzrosły ceny w ciągu ostatnich 6 miesięcy?'. A odpowiedź brzmi: 'O 22%'. Okropna drożyzna. Robotnik zarabia jakieś 110-140 złotych, urzędnik niewiele więcej, a jak z tego rodzinę utrzymać? Od tego jeszcze 10% musi odtrącić na ubezpieczenia emerytalne, podatki... A od 30 do 60 złotych przeznaczyć na czynsz...",
            first: {
                content: "Wciąż nie odpowiedział Pan na moje pytanie.",
                route: 61,
            },
            second: {
                content: "Chciałbym zapytać o coś innego.",
                route: 30,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        61: {
            message: "Przecież odpowiadam, proszę dać mi skończyć! No dobrze. Chleb - 50 groszy. Mleko - 45 groszy za litr. Za jajko musi Pan dać 10 groszy. Kilogram kawy to 6,60 złotego, herbata 15 złotych, kilogram masła 6,50. Oszaleli! Za kiełbasę 3 złote, mięso wołowe 1,80, ser 1,30...",
            second: {
                content: "Dziękuję za odpowiedź, chciałbym zapytać o coś jeszcze.",
                route: 30,
            },
            backMessage: "To już wszytko, co chciałem wiedzieć. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
    }, 
    "pracownik-krowodrza" : {
        1: {
            message: "Słucham?",
            first: {
                content: "Dzień dobry. Pana szef mówi, że widział się Pan z Józefem Najchelem, tym co tu pracował wcześniej.",
                route: 501,
            },
        },
        501: {
            message: "A co Panu naopowiadał? Pewnie, że ten cały Najchel go bolszewikiem nazwał i nie mógł ujmy na honorze znieść, szefunio wielki.",
            first: {
                content: "Widzę, że nie pała Pan miłością do swojego szefa...",
                route: 3,
            },
            second: {
                content: "Takiej odpowiedzi się nie spodziewałem, przyznaję.",
                route: 3,
            },
        },
        3: {
            message: "Przepraszam... Po prostu nie mogę pogodzić się z tym, że wylądowałem tym miejscu... Zdawałem na architekturę i co? Skończyłem jako jakiś dozorca w rogatce na końcu świata... No dobrze, ale pytał Pan o Najchela. No był tutaj, ale dosłownie przez chwilę, i to parę tygodni temu... Nawet nie zdążyłem się mu dobrze przyjrzeć. Chciał się widzieć z szefem, tyle. Więcej go nie widziałem.",
            first: {
                content: "Dziękuję za informacje. Chciałbym jednak zamienić w takim razie z Panem słówko o architekturze...",
                route: 30,
            },
            fourth: {
                content: "No dobrze. Dziękuję za odpowiedź. Porozmawiam jeszcze z Pana przełożonym.",
                route: 4,
            },
            backMessage: "Dziękuję, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        4: {
            message: "Tak?",
            first: {
                content: "Chciałbym zamienić z Panem słówko o architekturze...",
                route: 30,
            },
            fourth: {
                content: "Przepraszam za zamieszanie. Porozmawiam jeszcze z Pana przełożonym.",
                route: 3,
            },
            backMessage: "W sumie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        30: {
            message: "Tak?",
            first: {
                content: "Jakie są główne inwestycje prowadzone w mieście?",
                route: 40,
            },
            second: {
                content: "W jakim kierunku ewoluuje architektura krakowska?",
                route: 50,
            },
            fourth: {
                content: "Przepraszam za zamieszanie. Porozmawiam jeszcze z Pana przełożonym.",
                route: 3,
            },
            backMessage: "W sumie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        40: {
            message: "Po pierwsze, władze postanowiły zlikwidować twierdzę Kraków, która ograniczała rozwój przestrzenny miasta. Otworzyły się przed nami nowe możliwości. Tuż przed wojną wytyczono Aleje Trzech Wieszczów, gdzie obecnie prowadzone są intensywne prace budowlane... Aleje powstały w miejscu, gdzie biegł nasyp kolei obwodowej. Tam też kończył się kiedyś Kraków, bo dalej, za nasypemm, mieściły się już tylko forty Twierdzy Kraków, jak chociażby te na Kleparzu.",
            first: {
                content: "Proszę mówić dalej.",
                route: 41,
            },
            second: {
                content: "Chciałbym jednak porozmawiać o czymś innym.",
                route: 30,
            },
            backMessage: "W sumie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        41: {
            message: "Aleje zainspirowane zostały wiedeńskimi Ringami i będzie to reprezentacyjna część miasta. Właśnie tam budowany jest na przykład olbrzymi gmach Akademii Górniczo-Hutniczej. Wykupiono też parcelę pod Muzeum Narodowe. W nadchodzących latach to pewnie tam powstaną najnowocześniejsze gmachy użyteczności publicznej Krakowa... Zresztą, zobaczymy jak będzie. ",
            first: {
                content: "A co się dzieje w innych częściach miasta?",
                route: 42,
            },
            second: {
                content: "Chciałbym jednak porozmawiać o czymś innym.",
                route: 30,
            },
            backMessage: "W sumie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        42: {
            message: "Niedawno na Wielopolu były prowadzone intensywne prace. Od strony Plant wzniesiono Pałac Prasy, od Dietlowskiej gmach Banku PKO. Jak już mowa o bankach to właśnie ukończono budynek Banku Polskiego przy Basztowej i giełdy przy Mikołajskiej. Zbudowano też Izbę Skarbową na Skarbowej, Kasę Chorych na Batorego... A przy Kopernika powstała szkoła pielęgniarek. Generalnie dość sporo się dzieje...",
            first: {
                content: "Chciałbym jednak porozmawiać o czymś innym.",
                route: 30,
            },
            backMessage: "W sumie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        50: {
            message: "Tuż po wojnie trzymano się jeszcze historyzmu, ale ta epoka odchodzi do lamusa. Historyzm już się krakowianom przejadł, secesja również... Można zauważyć uspokojenie form architektonicznych. Proszę porównać Teatr Słowackiego z nowo wybudowanym Teatrem Bagatela. Ogromna różnica. A oba budynki dzieli zaledwie 35 lat... W ogóle Bagatelę założył Marian Dąbrowski, redaktor naczelny Ilustrowanego Kuryera Codziennego, może będzie miał Pan okazję go spotkać...",
            first: {
                content: "Proszę kontynuować.",
                route: 51,
            },
            second: {
                content: "Chciałbym jednak porozmawiać o czymś innym.",
                route: 30,
            },
            backMessage: "W sumie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        51: {
            message: "W każdym razie, obecnie wyróżniłbym trzy nurty stylistyczne dominujące w mieście. Pierwszym jest styl, powiedzmy, dworkowy inspirowany tradycją szlachecką. Przykłady może Pan znaleźć pod numerem 31 przy Krupniczej, przy Placu Axentowicza oraz na budowanym na Olszy osiedlu Oficerskim w okolicach ulicy Mogilskiej. Kolejny nurt to monumentalne budowle mające pokazać siłę naszego kraju, takie jak banki, czy Izba Skarbowa. Osobiście mnie to śmieszy, bo ludzie nie mają co jeść, inflacja galopuje, a władze stawiają gmachy wielkości stadionu...",
            first: {
                content: "A trzeci nurt?",
                route: 52,
            },
            second: {
                content: "Chciałbym jednak porozmawiać o czymś innym.",
                route: 30,
            },
            backMessage: "W sumie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
        52: {
            message: "To polska odmiana art deco. Przykładem może być budynek Banku Przemysłowego przy Rynku, czy Dom Profesorów UJ na granicy Parku Krakowskiego. Coś zupełnie innego, nieco kontrowersyjnego. Bo jak prostą formą przekonać tych, co piękno widzą jedynie w przepychu...?",
            second: {
                content: "Chciałbym porozmawiać jeszcze o czymś innym.",
                route: 30,
            },
            backMessage: "W sumie, to by było na tyle. Do widzenia. [Zakończ rozmowę i odejdź]"
        },
    },
    "thorn": {
        1: {
            message: "Szolem alejchem! Dzień dobry! Hirsz Thorn, właściciel. Niestety jeszcze wcześnie rano, otwieramy później. Zapraszam po 10!",
            first: {
                content: "Dzień dobry. Dziękuję, ale nie przychodzę, aby się stołować. Potrzebuję informacji.",
                route: 501,
            },
            second: {
                content: "Dobry, dobry. Z tym, że przychodzę z do Pana pytaniem dotyczącym jednego z klientów.",
                route: 501,
            },
            third: {
                content: "Co to za miejsce? Nigdy tu nie byłem.",
                route: 2,
            },
        },
        501: {
            message: "Tak? Słucham zatem.",
            first: {
                content: "Kojarzy Pan Józefa Najchela?",
                route: 3,
            },
        },
        2: {
            message: "Ooo, Pan chyba nie z Krakowa. To moja restauracja. Założyłem ją w 5659 roku. Znaczy przepraszam, dla Was, chrześcijan, to będzie w... 1899 roku, wybaczy Pan. W każdym razie podajemy najlepsze dania żydowskie - czulent, faszerowane szczupaki, gęsie szyjki... Ale strudla też Pan dostanie! ",
            first: {
                content: "Kiedyś na pewno się zajrzę! Ale teraz potrzebuję informacji o jednym z klientów.",
                route: 501,
            },
            second: {
                content: "Dziękuję, ale wolę schabowego. W każdym razie przyszedłem w sprawie pewnego klienta.",
                route: 501,
            },
        },
        3: {
            message: "Kojarzę... A co się stało?",
            first: {
                content: "Pan Najchel zaginął, staram się go odnaleźć. Wie Pan może gdzie może teraz przebywać?",
                route: 4,
            },
            second: {
                content: "Drogi Panie Thorn, Najchel zaginął. Widział go Pan ostatnio?",
                route: 6,
            },
        },
        4: {
            message: "Niestety. Nie miałem z nim bliższego kontaktu. Zresztą, moi synowie, którzy zazwyczaj obsługują gości też nie mieli okazji go poznać. Zawsze przychodził samemu na czulent.",
            first: {
                content: "A kiedy go Pan widział po raz ostatni?",
                route: 5,
            },
        },
        5: {
            message: "Dawno, kilka miesięcy temu. Pan Józef przychodził zazwyczaj w szabat, zresztą jak większość gojów. Moja restauracja jest otwarta, ale jak ktoś chcie zapłacić to musi wrócić kiedy indziej. W szabat nie mogę tykać pieniędzy. Niestety więcej Panu nie potrafię powiedzieć.",
            first: {
                content: "Dziękuję. A zanim pójdę powie mi Pan coś więcej o życiu żydowskim w Krakowie?",
                route: 30,
            },
            backMessage: "W takim razie dziękuję. Jeśli pojawią się jakieś pytania to wrócę. Do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        6: {
            message: "Niestety, po raz ostatni kilka miesięcy temu. Pan Józef przychodził zazwyczaj w szabat, zresztą jak większość gojów. Moja restauracja jest otwarta, ale jak ktoś chcie zapłacić to musi wrócić kiedy indziej. W szabat nie mogę tykać pieniędzy.",
            first: {
                content: "A może wie Pan gdzie może teraz przebywać?",
                route: 7,
            },
        },
        7: {
            message: "Niestety. Nie miałem z nim bliższego kontaktu. Zresztą, moi synowie, którzy zazwyczaj obsługują gości też nie mieli okazji go poznać. Zawsze przychodził samemu na czulent. Niestety nie potrafię Panu więcej powiedzieć.",
            first: {
                content: "Dziękuję. A zanim pójdę powie mi Pan coś więcej o życiu żydowskim w Krakowie?",
                route: 30,
            },
            backMessage: "W takim razie dziękuję. Jeśli pojawią się jakieś pytania to wrócę. Do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        8: {
            message: "Witam Pana ponownie! Jak mogę pomóc?",
            first: {
                content: "Chciałbym porozmawiać z Panem o życiu żydowskim w Krakowie.",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        30: {
            message: "Witam Pana ponownie! Jak mogę pomóc?",
            first: {
                content: "Jak się kształtują stosunki między Żydami a chrześcijanami?",
                route: 40,
            },
            second: {
                content: "Proszę powiedzieć coś więcej o społeczeństwie krakowskich Żydów.",
                route: 50,
            },
            third: {
                content: "Jakie są najważniejsze potacie ze środowiska krakowskich Żydów?",
                route: 60,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        40: {
            message: "Różnie bywa, drogi Panie. Mi żaden szajgec nigdy krwi nie napsuł. Do mnie do restauracji często przychodzą chrześcijanie, a jak nie mogę przyjąć od nich zapłaty z powodu szabasu to zawsze wracają, aby uregulować rachunek. Zawsze! Ale to nie znaczy, że wszystko jest git. ",
            first: {
                content: "Proszę mówić dalej.",
                route: 41,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        41: {
            message: "Drogi Panie, jeszcze przed wojną nasłuchałem się okropności. Szanowny Panie, ja to się już nawet śmiałem, że ja to nie lubię gazet żydowskich czytać, bo tam to tylko o tym, że tu pogrom na Żydach, tam pobili Żyda, tam zaś szykanowali... A w innych to czytam, że Żydzi nad światem panują, że same z nas bogacze są! Drogi Panie, od razu człowiek lepiej się czuje jak się dowiaduje, że światem rządzi!",
            first: {
                content: "W takim razie to nieprawda?",
                route: 42,
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        42: {
            message: "Niech no się Pan rozejrzy. Tu, w Kroke, znaczy w Krakowie, co czwarty to Żyd. A żyjemy głównie na Kazimierzu, gdzie straszna bieda panuje. Straszna. Ja mam tyle szczęścia, że jeszcze do czegoś dojść się udało. Ale inni? Nawet w raportach lekarze mówią, że w dzielnicy żydowskiej, w sztetlu naszym, bieda w oczy kłuje. Mówią ludzie, że światem rządzimy. A dla pobożnego Żyda najważniejsze to Torę studiować. Ostatnio też zaczęto nas wyzywać, że za bolszewikami jesteśmy. A przecież niejeden Żyd za Polin, za Polskę walczył! I życie stracił!",
            first: {
                content: "Proszę mówić dalej.",
                route: 43,
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        43: {
            message: "Szanowny Panie, ja w życiu mnóstwo porządnych Polaków spotkałem. Znam też mnóstwo Żydów co za pełnoprawnych Polaków się uważa. Ale pewne grupy, zwłaszcza endeckie, podburzyć jest łatwo... Na przykład ostatnio, jakoś dwa lata temu była dyskusja, czy Żydzi powinni mieć taki sam dostęp na uniwersytety co chrześcijanie. Jak rektor Uniwersyettu Jagiellońskiego, Natanson - Żyd swoją drogą - się temu sprzeciwił to mu bombę pod dom podłożyli, słyszał Pan? A potem tu, na Krakowskiej, tyle że pod numerem 23, w hotelu Kellera, kolejny wybuch! Nie wie Pan jak strasznie się wtedy wszyscy baliśmy, że i na nas trafi. W końcu trzecia, i póki co ostatnia, wybuchła na Orzeszkowej, pod redakcją żydowskiej gazety, Nowego Dziennika... Od tego czasu jest raczej spokój...",
            second: {
                content: "Pozwoli Pan, że zapytam o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        50: {
            message: "Szanowny Panie, długo by opowiadać! Czasem myślę, że Kazimierz to jak inny kraj jest. Teraz z Panem po polsku mówię, a wystarczy, że przejdę się na drugą stronę ulicy i tylko jidysz usłyszeć mogę. Niektórzy nawet polskiego dobrze nie znają, bo całe życie tylko z innymi Żydami się trzymali. Ale czemu się dziwić? W domu jidysz, w sklepie jidysz, w chederze jidysz... Jak ktoś jest pobożny i chce zgodnie z Torą żyć, to nawet nie musi poza Kazimierz głowy wychylać. Ale tutaj mowa jest tylko o mitnagedim, chasidim... ortodoksyjnych Żydach można powiedzieć. To ci co pejsy noszą, brody, chałaty. Ale Kroke jest też domem dla żydowskich liberałów, którym powoli bliżej do Polaków, niż do Żydów.",
            first: {
                content: "Co ma Pan na myśli?",
                route: 51,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        51: {
            message: "Po żydowsku już nie mówią, nawet szynkę zdarza im się zjeść... Nie wszyscy, oczywiście, ale jednak... No i w to wszystko jeszcze wplątali się syjoniści, którym marzy się utworzenie państwa żydowskiego. Wśród nich znajdzie Pan i ortodoksów, i liberałów... Drogi Panie, teraz to ciężko się w tym wszystkim połapać, kto jak bardzo pobożny, kto dba o koszerne jedzenie, kto w jakim języku mówi. Co rodzina, to inne podejście. ",
            first: {
                content: "Proszę powiedzieć coś o tutejszej gminie żydowskiej.",
                route: 52,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        52: {
            message: "Szanowny Panie, mamy w Krakowie dwie gminy - kazimierską z siedzibą przy Skawińskiej 2 i podgórską. Rok temu odbyły się wybory i na czele naszej gminy stanął ponownie doktor Landau, prawnik. A także w końcu - po dwudziestu latach oczekiwania! - zdecydowano kto zostanie naczelnym rabbi Krakowa. Stanowisko powierzono rabbiemu Józefowi Kornitzerowi. ",
            first: {
                content: "Jakie instytucje żydowskie znajdują się w mieście?",
                route: 53,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        53: {
            message: "Dla sierot mamy zakład przy ulicy Dietlowskiej, kilka burs... Istnieje też wiele instytucji charytatywnych, które pomagają matkom, starcom, biednym w ich niedoli... Przy Skawińskiej mamy szpital żydowski. No i szkoły, w tym tę założoną przez panią Szenirer. Czy już o niej wspominałem?",
            first: {
                content: "Nie, proszę mówić.",
                route: 54,
            },
            second: {
                content: "Tak, ale chciałbym jeszcze usłyszeć coś o innych szkołach żydowskich.",
                route: 56,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        54: {
            message: "To wspaniała kobieta. Jeszcze kilka lat temu w zakładzie szewskim, tu obok, zaczęła szkolić dziewczęta z pobożnych rodzin. A jeszcze do niedawna edukacja w ogóle nie była dla nich dostępna. Pobożni Żydzi dbali tylko o edukację chłopców, co by mogli w przyszłości Torę i Talmud studiować. A jak nakazano wszystkim, bez wyjątku, dziewczynkom też, do szkoły iść to musiały być posyłane do szkół świeckich, gdzie oddalały się od naszej wiary...",
            first: {
                content: "W tym tkwił zatem problem?",
                route: 54,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        55: {
            message: "Jak najbardziej, szanowny Panie. Bo proszę sobie wyobrazić. Taka dziewczynka wraca do domu po 7 latach nauki w szkole, gdzie poznaje historię, geografię, języki, koleżanki... a nie wie nic o własnej religii! I taka dziewczynka potem ma wyjść za chłopca z żydowskiej rodziny, który nauki w chederze pobierał... Dlatego pani Szenirer postanowiła założyć szkołę dla dziewczynek, gdzie oprócz przedmiotów świeckich można też zgłębić historię Palestyny, Torę... W tym roku wiem, że przy Skałce założyła seminarium nauczycielskie. Bystra kobieta...",
            first: {
                content: "A czy są jeszcze jakieś inne szkoły?",
                route: 56,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        56: {
            message: "Najsłynniejsze jest Gimnazjum Hebrajskie przy ulicy Podbrzezie. Tam posyłają swoje dzieci głównie zwolennicy syjonizmu i zamożniejsze rodziny. Natomiast dla dzieci z bardziej pobożnych rodzin powstało Gimnazjum Tachkemoni na Miodowej.",
            third: {
                content: "Dziękuję, chciałbym zapytać o coś jeszcze...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        60: {
            message: "Przede wszystkim pan Ozjasz Thon, poseł wybrany do sejmu polskiego. Wielki patriota, zarówno polski jak i żydowski. To on był jednym z organizatorów pierwszego Światowego Kongresu Syjonistycznego w Bazylei... Nie pojechał tam zresztą, bo przejmował wtedy obowiązki rabina przy synagodze Tempel. Był też w Wersalu na czele delegacji żydowskiej jak podpisywano słynne traktaty. Publikuje też w Nowym Dzienniku, jedynej żydowskiej gazety codziennej w języku polskim. Ze społeczników wymieniłbym jeszcze Różę Rockową zajmującą się sierotami na Dietlowskiej. I oczywiście Sarę Szenirer... Czy już Panu o niej mówiłem?",
            first: {
                content: "Nie.",
                route: 61,
            },
            second: {
                content: "Tak.",
                route: 63,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        61: {
            message: "Wspaniała kobieta. Jeszcze kilka lat temu w zakładzie szewskim, tu obok, zaczęła szkolić dziewczęta z pobożnych rodzin. A jeszcze do niedawna edukacja w ogóle nie była dla nich dostępna. Pobożni Żydzi dbali tylko o edukację chłopców, co by mogli w przyszłości Torę i Talmud studiować. A jak nakazano wszystkim, bez wyjątku, dziewczynkom też, do szkoły iść to musiały być posyłane do szkół świeckich, gdzie oddalały się od naszej wiary...",
            first: {
                content: "W tym tkwił zatem problem?",
                route: 62,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        62: {
            message: "Jak najbardziej, szanowny Panie. Bo proszę sobie wyobrazić. Taka dziewczynka wraca do domu po 7 latach nauki w szkole, gdzie poznaje historię, geografię, języki, koleżanki... a nie wie nic o własnej religii! I taka dziewczynka potem ma wyjść za chłopca z żydowskiej rodziny, który nauki w chederze pobierał... Dlatego pani Szenirer postanowiła założyć szkołę dla dziewczynek, gdzie oprócz przedmiotów świeckich można też zgłębić historię Palestyny, Torę... W tym roku wiem, że przy Skałce założyła seminarium nauczycielskie. Bystra kobieta...",
            first: {
                content: "Proszę mówić dalej.",
                route: 63,
            },
            third: {
                content: "Jednak chciałbym zapytać o coś innego...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },
        63: {
            message: "Ważną postacią dla Krakowa jest Józef Sare, wiceprezydent miasta i architekt. Studiował we Wiedniu i to on projektował na przykład jeden z budynków Wydziału Lekarskiego Uniwesytetu Jagiellońskiego. To ten przy Grzegórzeckiej. I pomyśleć, że to jeden z tych wydziałów, który chce wprowadzić ograniczenia dla studentów żydowskich! Ponadto spod jego pióra wyszedł projekt dla Gimnazjum św. Anny, Gimnazjum króla Sobieskiego, Urzędu Wojewódzkiego... O, a tutaj, na Krakowskiej, pod 'dziewiątką', mieszka też Poldek Infeld. Chwalił się, że jak studiował w Berlinie to samego Einsteina poznał. Ja to myślę, że będzie z niego wielki naukowiec, może kiedyś z tym Einsteinem książkę napisze...",
            third: {
                content: "Dziękuję za informacje. Pozwoli Pan, że zapytam o coś jeszcze...",
                route: 30,
            },
            backMessage: "Przepraszam najmocniej, ale muszę już iść. Do wiedzenia. [Zakończ rozmowę i wyjdź]"
        },

    },
    "straznik": {
        1: {
            message: "Hola, hola! To zamknięta impreza!",
            first: {
                content: "Kołodziejczyk, policja. Albo mnie Pan wpuści, albo wszytskich aresztuję. Pana wybór.",
                route: 501,
            },
            second: {
                content: "Zaraz Pan będzie na zamkniętej imprezie, tyle że w areszcie na Montelupich. Policja.",
                route: 501,
            },
            third: {
                content: "Żeby człowiek nie mógł się spokojnie o 8 rano wódki napić? Skandal! Proszę mnie natychmiast wpuścić!",
                route: 2,
            },
        },
        501: {
            message: "Przepraszam, nie wiedziałem. Naprawdę, przepraszam!",
            first: {
                content: "No już dobrze. Szukam jednego z klientów. Gruby, wysoki facet, elegancko ubrany.",
                route: 3,
            },
            second: {
                content: "Proszę jak od razu złagodniał. A taki chojrak przed chwilą. No dobrze. Szukam grubego, wysokiego i eleganckiego faceta. Widział go Pan?",
                route: 4,
            },
        },
        2: {
            message: "*zbliża się* Jak Ci zaraz pokażę...",
            first: {
                content: "Koniec tych żartów. Kołodziejczyk, policja.",
                route: 501,
            },
            second: {
                content: "Jeszcze jeden krok i zawiozę Pana na Montelupich. Policja.",
                route: 501,
            },
        },
        3: {
            message: "Proszę Pana, tak to wygląda połowa naszych klientów. Jak Pan chce, to może Pan porozmawiać z kierownikiem, on zna stałych bywalców. To ten, w okularach, może będzie w stanie bardziej pomóc.",
            fourth: {
                content: "Dziękuję. Tak też zrobię.",
                route: 2,
            },
        },
        4: {
            message: "Proszę sobie nie kpić! Ja tylo wykonuję swoją pracę! A co do tego człowieka to właśnie opisał Pan połowę naszych klientów. Jak Pan chce może porozmawiać z kierownikiem, on zna stałych bywalców. To ten, w okularach, może będzie w stanie bardziej pomóc.",
            fourth: {
                content: "Dziękuję. Tak też zrobię.",
                route: 2,
            },
        },
        5: {
            message: "I dowiedział się Pan czegoś?",
            first: {
                content: "Tak, muszę iść do... jak to ujął...? 'Hawełek i Michalików'. Wie Pan co to znaczy?",
                route: 6,
            },
            second: {
                content: "Właściwie to chciałem jeszcze porozmawiać z Panem... Co to za miejsce?",
                route: 30,
            },
            backMessage: "Tak, wiem dokąd mam iść, w razie pytań wrócę. Do widzenia. [Zakończ rozmowę i wyjdź.]"
        },
        6: {
            message: "Coś czuję, że jest Pan spoza Krakowa, skoro Pan tego nie wie... Chodzi oczywiście o restaurację Antoniego Hawełki na Rynku i Jamę Michalika na Floriańskiej.",
            first: {
                content: "Dziękuję. Jeszcze zanim pójdę pozwoli Pan, że zapytam: Co to jest za miejsce?",
                route: 30,
            },
            backMessage: "Dziękuję, to by było na tyle, w razie pytań jeszcze wrócę. Do widzenia. [Zakończ rozmowę i wyjdź.]"
        },
        7: {
            message: "Dzień dobry, Pan znowu do kierownika? Niestety, nie jest w stanie rozmawiać, zupełnie pijany...",
            first: {
                content: "Właściwie to chciałem porozmawiać z Panem... Co to za miejsce?",
                route: 30,
            },
            backMessage: "Rozumiem. W takim razie do widzenia. [Zakończ rozmowę i wyjdź.]"
        },
        30: {
            message: "Restauracja najlepszego browaru w Krakowie! Piwo zaczęto tu warzyć już hoho! W 1840 roku! Browar założył szwajcarski piwowar, Rudolf Jenny. Już za czasów austriackich produkowano tu najlepsze piwo w całej Galicji. Swoją drogą jak cesarz, Franciszek Józef, odwiedzał Kraków to był pod wrażeniem tego, jak ustrojono nasz browar. Ponoć zapalono nawet ognie bengalskie! To dopiero musiało być widowisko!",
            first: {
                content: "Proszę mówić dalej.",
                route: 31,
            },
            backMessage: "Dziękuję za informacje. Muszę już iść do widzenia. [Zakończ rozmowę i wyjdź.]"
        },
        31: {
            message: "Pod koniec XIX wieku dla oświetlenia budynku browarnego, warzelni, administracji i naszego placu uruchomiono elektrownię, jedną z pierwszych w Krakowie. Ostatecznie kompleks kupił pan Jan Götz, to ten sam, co założył słynny browar w Okocimiu. I tak pozostało do dziś...",
            backMessage: "Dziękuję za informacje! Niestety muszę już iść, do widzenia. [Zakończ rozmowę i wyjdź.]"
        },
    }, 
    "szef-browar": {
        1: {
            message: "*lekko podpity* A tso Pan tu robi? Kto Pana wpuścił?",
            first: {
                content: "Pana strażnik był tak miły, że pozwolił mi wejść. Kołodziejczyk, policja.",
                route: 2,
            },
            second: {
                content: "Dzień dobry. Proszę Pana, to ja będę zadawać pytania, jestem z policji.",
                route: 2,
            },
        },
        2: {
            message: "Aaaa to szepraszam, panie władco.",
            first: {
                content: "Skup się Pan. Szukam jednego z klientów. Wysoki, gruby, elegancki. Kojarzy Pan?",
                route: 4,
            },
            second: {
                content: "Co za jełop.",
                route: 3,
            },
        },
        3: {
            message: "E-e-e! Tylko nie jeop! Prosze tu mi się zachować!",
            first: {
                content: "Dobrze już, dobrze. Skup się Pan. Szukam jednego z klientów. Wysoki, gruby, elegancki. Kojarzy Pan?",
                route: 4,
            },
        },
        4: {
            message: "A coś więcej?",
            first: {
                content: "Wiem, że jakiś czas temu umówił się tutaj z doktorem Peltzerem.",
                route: 5,
            },
        },
        5: {
            message: "Aaaaa, no jasne! Wiem, o którego ch... *czka* o którego chodzi. Proszę tylko *przykłada palec do ust* ciiiiiiiiii! Nikomu nie mówić, zwłaszcza policji! To Bogdan Majchrzak. Czasem tu przychodzi, nie wiem czym się zajmuje, ale wiem, że się szlaja po tych, no Hawełkach, Michalikach...",
            first: {
                content: "Co to jakiś cholerny duch, że nikt nie wie jak się nazywa?",
                route: 6,
            },
            second: {
                content: "To zna Pan Peltzera?",
                route: 7,
            },
            third: {
                content: "Hawełkach i Michalikach?",
                route: 8,
            },
        },
        6: {
            message: "A bo ja wiem? Pytaj Pan u Hawełki, albo u Michalika może tam Pan go znajdziesz. A ja... *czka* muszę już iść, poczeba wzywa! [Odchodzi.]",
            fourth: {
                content: "[Podejdź do wyjścia]",
                route: 5,
            },
        },
        7: {
            message: "Może znam, a może nie znam! Nie no, znam, znam, moja siostra do niego chodziła. Ale ja... *czka* muszę już iść, poczeba wzywa! [Odchodzi.]",
            fourth: {
                content: "[Podejdź do wyjścia]",
                route: 5,
            },
        },
        8: {
            message: "Co Pan, z choinki sie urwał? Hawełkach i Michalikach! Ale *czka* tera to muszę iść, poczeba wzywa! [Odchodzi.]",
            fourth: {
                content: "[Podejdź do wyjścia]",
                route: 5,
            },
        },
    },
    "mehoffer": {
        1: {
            message: "Dzień dobry. Nie widziałem tu Pana wcześniej. Jestem Józef Mehoffer.",
            first: {
                content: "Dzień dobry! To zaszczyt Pana poznać! Przodownik Kołodziejczyk, policja.",
                route: 501,
            },
            second: {
                content: "Dobry. Nie dziwię się, bo nigdy tu nie byłem. Kołodziejczyk, policja.",
                route: 601,
            },
        },
        501: {
            message: "Policja? Słucham, w czym mogę pomóc.",
            first: {
                content: "Drogi Panie Mehoffer. Szukam pewnego człowieka, nazywa się Bogdan Majchrzak, ponoć zdarza mu się tutaj bywać. Z opisu wiem, że jest wysoki i ma nadwagę",
                route: 2,
            },
            second: {
                content: "Czy zna Pan może człowieka o imieniu Bogdan Majchrzak? Podobno czasami tutaj przychodzi. Ponoć jest wysoki i swoje waży.",
                route: 2,
            },
        },
        601: {
            message: "Jest Pan bardzo niekulturalny... Ale słucham, proszę pytać.",
            first: {
                content: "Szukam Bogdana Majchrzaka. Wysoki, gruby. Zna go Pan?",
                route: 3,
            },
            second: {
                content: "Dostałem informację, że bywa tutaj Bogdan Majchrzak. Taki wysoki, przy kości. Kojarzy Pan takie nazwisko?",
                route: 3,
            },
        },
        2: {
            message: "Nie, nie kojarzę, przykro mi. Ale może Tadeusz będzie coś wiedział, proszę jego zapytać.",
            first: {
                content: "Dziękuję. Ale zanim pójdę... Był Pan rektorem Akademii Sztuk Pięknych... Co Pan myśli o systemie szkolnictwa?",
                route: 30,
            },
            fourth: {
                content: "Dziękuję za informację, tak też zrobię.",
                route: 3,
            },
        },
        3: {
            message: "Nie, nie kojarzę, przykro mi. Ale może Tadeusz będzie coś wiedział, proszę jego zapytać. Tylko więcej kultury!",
            first: {
                content: "Dobrze. Ale zanim pójdę... Był Pan rektorem Akademii Sztuk Pięknych... Co Pan myśli o systemie szkolnictwa?",
                route: 30,
            },
            fourth: {
                content: "Tak też zrobię.",
                route: 2,
            },
        },
        10: {
            message: "Dzień dobry. Nie widziałem tu Pana wcześniej. Jestem Józef Mehoffer.",
            first: {
                content: "Dzień dobry! To dla mnie zaszczyt. Jestem Kołodziejczyk, z policji.",
                route: 502,
            },
            second: {
                content: "No nie dziwię się, że mnie Pan nie widział, bo nie chodzę do jakichś 'jam'.",
                route: 602,
            },
        },
        502: {
            message: "O proszę, miło Pana poznać. Słucham, w czym mogę pomóc?",
            first: {
                content: "Drogi Panie Mehoffer. Był Pan rektorem Akademii Sztuk Pięknych, co może Pan powiedzieć na temat szkolnictwa w Krakowie?",
                route: 30,
            },
            fourth: {
                content: "Jeśli Pan pozwoli to porozmawiam z panem Tadeuszem.",
                route: 2,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        602: {
            message: "To nie jest jakaś tam 'jama'! To tutaj spotykali i spotykają się najwięksi artyści Krakowa! Jak Pan śmie!",
            first: {
                content: "Bardzo przepraszam, nie chciałem nikogo urazić... Proszę wybaczyć...",
                route: 11,
            },
            second: {
                content: "Najwięksi artyści? Chyba Pan żartuje! Niby kto tutaj przychodził?",
                route: 701,
            },
        },
        701: {
            message: "Proszę natychmiast wyjść. Nie ma tu miejsca dla kogoś takiego, jak Pan.",
            backMessage: "W porządku. Do widzenia. [Wyjdź]"
        },
        11: {
            message: "Już dobrze, słucham. W czym mogę pomóc?",
            first: {
                content: "Drogi Panie Mehoffer. Był Pan rektorem Akademii Sztuk Pięknych, co może Pan powiedzieć na temat szkolnictwa w Krakowie?",
                route: 30,
            },
            fourth: {
                content: "Jeśli Pan pozwoli to porozmawiam z panem Tadeuszem.",
                route: 2,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        12: {
            message: "Tak?",
            first: {
                content: "Drogi Panie Mehoffer. Był Pan rektorem Akademii Sztuk Pięknych, co może Pan powiedzieć na temat szkolnictwa w Krakowie?",
                route: 30,
            },
            fourth: {
                content: "Jeśli Pan pozwoli to jednak wrócę do pana Tadeusza.",
                route: 2,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        13: {
            message: "Witam ponownie. Ma Pan do mnie jeszcze jakieś pytania?",
            first: {
                content: "Drogi Panie Mehoffer. Był Pan rektorem Akademii Sztuk Pięknych, co może Pan powiedzieć na temat szkolnictwa w Krakowie?",
                route: 30,
            },
            fourth: {
                content: "Jeśli Pan pozwoli to porozmawiam z panem Tadeuszem.",
                route: 2,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        30: {
            message: "Słucham zatem.",
            first: {
                content: "Jak wygląda stan educkacji na poziomie podstawowym?",
                route: 40,
            },
            second: {
                content: "Co może Pan powiedzieć na temat edukacji w szkole średniej?",
                route: 50,
            },
            third: {
                content: "Jak Pan ocenia uczelnie wyższe w Krakowie?",
                route: 60,
            },
            fifth: {
                content: "Czy może Pan powiedzieć coś o sobie?",
                route: 70,
            },
            fourth: {
                content: "Jeśli Pan pozwoli to porozmawiam z panem Tadeuszem.",
                route: 2,
            },
        },
        40: {
            message: "Po wojnie w całym kraju wprowadzono obowiązek szkolny. Wcześniej nie obejmował on dzieci z dawnej Kongresówki. U nas, w Małopolsce, mamy dwa rodzaje szkół powszechych - 6-letnie wiejskie oraz 7-letnie miejskie. To akurat system odziedziczony jeszcze z czasów austriackich. Obecnie w Krakowie mamy niemalże 70 szkół kształcących na poziomie elementarnym, z czego większość jest publiczna, a co za tym idzie - bezpłatna. Na szczęście większość ma do dyspozycji własne budynki, choć część szkół musi wynajmować sale lekcyjne, a przy Dietlowskiej czy Miodowej dzieci uczą się w prowizorycznych szkołach barakowych...",
            first: {
                content: "A jak wygląda nauka?",
                route: 41,
            },
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        41: {
            message: "Program obejmuje naukę religii, języka ojczystego, rachunków z geometrii, przyrody, geografii, historii, rysunków, robót, śpiewu i gimnastyki, z tym, że większość zajęć pojawia się doopiero w trzeciej klasie. Wcześniej dzieci muszą nauczyć się czytać i pisać. W miastach szkoły wprowadzają obowiązek noszenia mundurków, lecz na wsiach najczęściej nie da się tego zrealizować... Rodziców często nie stać nawet na buty, a co dopiero na wyrafinowany mundurek... Na wsiach dzieci uczy także najczęściej jeden nauczyciel, a w Krakowie średnio na szkołę przypada ich ponad siedmiu.",
            first: {
                content: "Czy są jeszcze jakieś problemy?",
                route: 42,
            },
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        42: {
            message: "Głównie na wsich. Tam często rodzice jedynie z obowiązku zapisują swoje dzieci do szkół, a potem, jak potrzeba rąk do pracy w polu, to już się więcej nie posyłają ich na lekcje. W wielu miejscach problemem jest też odległość, którą dzieci muszą pokonać, aby dotrzeć do szkoły. Czasami może to być kilka kilometów. Natomiast nauczyciele pracujący na wsiach często nie mają odpowiedniego przygotowania do zawodu. ",
            second: {
                content: "Dziękuję. Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        50: {
            message: "Obecnie nauka w gimnazjum trwa 8 lat. Nie jest jednak bezpłatna i dlatego dostępna jest jedynie dla dzieci z bogatszych rodzin. Może Pan się dziwić, dlaczego nauka w szkole powszechnej trwa 7, a w gimnazjum aż 8 lat. Tak naprawdę to już po ukończeniu 4 klasy szkoły powszechnej rodzice mogą posłać swoje dzieci do płatnego gimnazjum, decyzja należy do nich. Mają do wyboru placówki skupiające się bardziej na przedmiotach humanistycznych lub matematyczno-przyrodniczych.",
            first: {
                content: "Jakie gimnazja funkcjonują w Krakowie?",
                route: 51,
            },
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        51: {
            message: "Najstarszym jest Gimnazjum św. Anny, do którego sam uczęszczałem. Ponadto mamy Gimnazjum św. Jacka przy Siennej, kolejna placówka mieści się przy Sobieskiego... W Krakowie mamy również szkoły realne kładące nacisk na umiejętności praktyczne, seminaria nauczycielskie i gimnazja prywatne. Nie można również zapominać o prestiżowym Gimnazjum Hebrajskim przy Brzozowej!",
            second: {
                content: "Dziękuję za odpowiedź. Jeśli Pan pozwoli to zapytam o coś jeszcze.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        60: {
            message: "Tuż po wojnie sytuacja nie wyglądała dobrze... Uniwersytet Jagielloński nie miał pieniędzy na opłacanie czynszu za wynajmowane lokale. Obserwatorium astrnomiczne stało bez elektryczności, klinika otolaryngologiczna groziła zawaleniem. Stropy podparto tam prowizorycznymi belkami, proszę sobie wyobrazić! Słyszałem, że na wykłady do sali chemii lekarskiej przychodzi ponad setka osób. A miejsca jest zaledwie dla czterdziestki. Natomiast w Collegium Maius, tam dziś mieści się biblioteka UJ, przecieka dach...",
            first: {
                content: "Ale chyba pojawiają się jakieś pozytywy?",
                route: 61,
            },
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        61: {
            message: "Oczywiście. Niedawno utworzono Wydział Rolniczy,, Studium Pedagogiczne... W tym roku zostanie otwarta Szkoła Pielęgniarek i Higienistek. Słyszałem również o planach założenia Studium Wychowania Fizycznego",
            first: {
                content: "Słyszałem, że Uniwersytet chce wprowadzić ograniczenia dla studentów pochodzenia żydowskiego?",
                route: 41,
            },
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        62: {
            message: "Owszem, dwa lata temu prowadzono na ten temat dość gwałtowne rozmowy... Z przykrością muszę stwierdzić, że władze Wydziału Prawa, na którym sam zresztą studiowałem, poparły ten pomysł opowiadając się za ograniczeniami. Kto wie, być może gdyby nie presja ze strony społeczności międzynarodowej to tak dyskryminujące prawo weszłoby w życie.",
            first: {
                content: "Co może Pan powiedzieć o innych uczelniach wyższych w mieście?",
                route: 41,
            },
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        63: {
            message: "Tuż po wojnie założono w Krakowie Akademię Górniczą, którą niedawno przemianowano na Akademię Górniczo-Hutniczą. Co przykre, ta uczelnia akurat nie zgadza się na przyjmowanie Żydów do swojej społeczności akademickiej. Obecnie trwa budowa gmachu głównego, bo do tej pory zajęcia odbywają się w budynkach Uniwersytetu Jagiellońskiego i innych wynajmowanych pomieszczeniach.",
            first: {
                content: "Wciąż nie powiedział Pan nic o Akademii Sztuk Pięknych...",
                route: 41,
            },
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        64: {
            message: "Nasza uczelnia - będąc najstarszą tego typu instytucją w Polsce - niedawno obchodziła 100-lecie swojego istnienia... Wyjątkowym zbiegiem okoliczności był to jednocześnie rok, w którym nasz kraj odzyskał niepodległość. Mieliśmy zatem co świętować! Akademia najwięcej zawdzięcza jednak świętej pamięci profesorowi Matejce, dzięki któremu powstał okazały gmach, tu, niedaleko, za Barbakanem. Jednak w porównaniu z innymi uczelniami nie szkolimy tysięcy, a jednie 100-200 wyjątkowo uzdolnionych artystów, a od niedawna również kobiety.",
            second: {
                content: "Dziękuję za odpowiedź. Miałbym do Pana jeszcze jedno pytanie...",
                route: 2,
            },
            backMessage: "Dziękuję za informacje. Tymczasem muszę już iść, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        70: {
            message: "Miło mi, że Pan pyta. Urodziłem się w Ropczycach, mam 57 lat. Moja rodzina ma korzenie austriackie, a moi rodzice przybyli do Krakowa niewiele po moim narodzeniu. Uczyłem się w tutejszym Gimnazjum św. Anny, potem rozpocząłem studia prawnicze na Uniwersytecie Jagiellońskim. Przyjęto mnie również na Akademię, wtedy jeszcze Szkołę Sztuk Pięknych. Później przeniosłem się do Paryża, gdzie mieszkałem z moim przyjacielem Stanisławem Wyspiańskim. Tam dzieliliśmy pracownię, tam też poznałem moją przyszłą żonę, Jadwigę.",
            first: {
                content: "Proszę mówić dalej.",
                route: 71,
            },
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },
        71: {
            message: "Oprócz malarstwa, podobnie zresztą do Wyspiańskiego, zainteresowałem się witrażami. Wspólnie stworzyliśmy te, które można zobaczyć w krakowskim kościele mariackim. Tam też pod okiem naszego mistrza profesora Matejki pomagaliśmy przy malowaniu gwieździstej polichromii. W powszechnej opinii najważniejszym moim dziełem są jednak - wciąż nieukończone - witraże w kościele św. Mikołaja w szwajcarskim Fryburgu... Przez cztery lata piastowałem również urząd rektora Akademii Sztuk Pięknych, gdzie wykładam do dziś.",
            second: {
                content: "Jeśli Pan pozwoli to zapytam o coś innego.",
                route: 2,
            },
            backMessage: "Niestety muszę już iść. Dziękuję za pomoc, do widzenia [Zakończ rozmowę i wyjdź]"
        },

    }, 
    "zelenski": {
        801: {
            message: "Dzień dobry, Tadeusz Boy-Żeleński. Jak dobrze słyszałem szuka Pan jakiegoś Bogdana Majchrzaka. Niestety nie znam takiego człowieka.",
            first: {
                content: "Rozumiem... Ale korzystając z okazji. Chyba zna Pan to miejsce od podszewki. Co mi może Pan na jego temat powiedzieć?",
                route: 30,
            },
            fourth: {
                content: "Szkoda. W takim razie pozwoli Pan, że porozmawiam jeszcze z panem Mehofferem.",
                route: 4,
            },
            backMessage: "Rozumiem, szkoda. W każdym razie dziękuję i do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        802: {
            message: "Dzień dobry, Tadeusz Boy-Żeleński. Jak dobrze słyszałem szuka Pan jakiegoś Bogdana Majchrzaka. Niestety nie znam takiego człowieka. I niestety słyszałem jak się Pan odnosił do profesora Mehoffera. Trochę ogłady!",
            first: {
                content: "Przepraszam za swoje zachowanie... Ale korzystając z okazji. Chyba zna Pan to miejsce od podszewki. Co mi może Pan na jego temat powiedzieć?",
                route: 30,
            },
            second: {
                content: "Bez przesady. To mam się teraz wszystkim kłaniać?",
                route: 701,
            },
            fourth: {
                content: "Proszę wybaczyć. W takim razie pozwoli Pan, że porozmawiam jeszcze z panem Mehofferem.",
                route: 4,
            },
            backMessage: "Rozumiem, szkoda. W każdym razie dziękuję i do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        701: {
            message: "Proszę natychmiast wyjść. Nie mam zamiaru rozmawiać z kimś takim, jak Pan. Nie ma tu dla Pana miejsca.",
            backMessage: "W porządku. Do widzenia. [Wyjdź]"
        },
        803: {
            message: "Dzień dobry, Tadeusz Boy-Żeleński. Ma Pan do mnie jakieś pytania?",
            first: {
                content: "Owszem. Chyba zna Pan Jamę Michalika od podszewki. Co mi może Pan na jego temat powiedzieć?",
                route: 30,
            },
            fourth: {
                content: "Proszę wybaczyć, jednak porozmawiam jeszcze z panem Mehofferem.",
                route: 4,
            },
            backMessage: "Po namyśle jednak nie mam. Przepraszam za kłopot i do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        4: {
            message: "O, to znowu Pan, miło mi. Słucham.",
            first: {
                content: "Proszę mi powiedzieć coś więcej na temat Jamy Michalika.",
                route: 30,
            },
            fourth: {
                content: "Proszę wybaczyć, jednak porozmawiam jeszcze z panem Mehofferem.",
                route: 4,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot i do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        30: {
            message: "Co prawda pan Michalik nie mieszka już w Krakowie, ale pamiętam go doskonale. Pochodzi ze Lwowa. Ponoć ojciec posłał go na nauki do jednej z tamtejszych cukierni jako karę za złe stopnie w szkole... Pewnie się zdziwił, kiedy okazało się, że pan Jan pokochał zawód cukiernika. Do Krakowa Michalik przybył w 1895 roku. Wynajął lokal przy Floriańskiej i tak zaczęła się historia tego miejsca... Początkowo Jama funkcjonowała jako Cukiernia Lwowska. A potem pojawiliśmy się my... ",
            first: {
                content: "Co ma Pan na myśli?",
                route: 31,
            },
            fourth: {
                content: "Proszę wybaczyć, jednak wrócę do pana Mehoffera.",
                route: 4,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot i do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        31: {
            message: "Wcześniej artyści spotykali się u Turlińskiego, na Szpitalnej. Ale po upadku tamtego miejsca studenci Akademii Sztuk Pięknych musieli znaleźć sobie nowe miejsce spotkań... I tak trafili do Michalika. To zabawne, że Michalik zakładając to miejsce liczył, że to jego wyroby przyciągną do niego klientów. Silił się na różne sztuczki, reklamy... Ale krakowianie nie tolerują reklam, drażnią ich. Z czasem Jama Michalika przestawała być cukiernią, a stawała się kawiarnią, w której przesiadywali ludzie sztuki. Nie powiem, chyba Michalik nie był z tego powodu zachwycony!",
            first: {
                content: "Proszę powiedzieć coś więcej o Panu Michaliku.",
                route: 32,
            },
            fourth: {
                content: "Proszę wybaczyć, jednak wrócę do pana Mehoffera.",
                route: 4,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot i do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        32: {
            message: "Jest to bardzo zasadniczy człowiek, chyba ostatni, który chciałby mieć do czynienia z artystami! Poważny, spokojny, skromny, nie lubił hałasu, brzydził się pijaństwem. I dbał o swoje interesy, oj dbał! Pewnego razu powysyłał swoim stałym klientom, tym, którzy zostawili u niego majątek weswania płatnicze za nieuregulowane rachunki. Przez adwokata!",
            first: {
                content: "Naprawdę?",
                route: 35,
            },
            fourth: {
                content: "Proszę wybaczyć, jednak wrócę do pana Mehoffera.",
                route: 4,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot i do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        35: {
            message: "Nie inaczej! Później zaczął zatrudniać kelnerów, którzy mieli dbać o to, aby klienci zawsze płacili na czas. Ale to nie znaczy, że Michalik miał jakąś awersję do artystów! W takim wypadku nie odważyłby się powierzyć organizacji wystroju swojej kawiarni własnym klientom! Michalik prowadził ją przez łącznie 20 lat... W końcu, podczas wojny, postanowił sprzedać 'Jamę' i wyprowadził się do Poznania. To już nie to samo miejsce co kiedyś...",
            first: {
                content: "Dlaczego Pan tak uważa?",
                route: 33,
            },
            fourth: {
                content: "Proszę wybaczyć, jednak wrócę do pana Mehoffera.",
                route: 4,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot i do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        
        33: {
            message: "Jednak klimat tego miejsca kojarzy się przede wszystkim z naszą młodością... 20 lat temu mój brat z przyjaciółmi założyli tu kabaret Zielony Balonik. Ja dołączyłem do niego rok później. Dbaliśmy, aby tylko osoby z zaproszeniem mogły zobaczyć owoce naszej pracy. Obśmiewaliśmy, komentowaliśmy, wystawialiśmy nawet własne szopki... Ale wszystko ma swój koniec, prawda? Ostatni raz wystąpiliśmy 10 lat temu.",
            first: {
                content: "Kto był stałym gościem tego miejsca?",
                route: 34,
            },
            fourth: {
                content: "Proszę wybaczyć, jednak wrócę do pana Mehoffera.",
                route: 4,
            },
            backMessage: "Jednak muszę już iść. Przepraszam za kłopot i do widzenia. [Zakończ rozmowę i wyjdź]"
        },
        34: {
            message: "Chyba każdy ze środowiska artystycznego Krakowa... Swego czasu własny stolik miał tutaj Wyspiański... Jamę odwiedział też marszałek Piłsudski z małżonką... Zobaczymy, może w przyszłości 'Jama' powróci do swoich korzeni... Kto wie?",
            fourth: {
                content: "Dziękuję za informacje, chciałbym jeszcze porozmawiać z panem Mehofferem.",
                route: 4,
            },
            backMessage: "Muszę już iść. Dziękuję za informacje i do widzenia. [Zakończ rozmowę i wyjdź]"
        }
    }, 
    "macharski": {
        1: {
            message: "Dzień dobry. Leopold Macharski. Jak mogę pomóc?",
            first: {
                content: "Dzień dobry! Przodownik Kołodziejczyk, z policji. Przychodzę w sprawie jednego z klientów restauracji. Mowa o Bogdanie Majchrzaku.",
                route: 501,
            },
            second: {
                content: "Kołodziejczyk, policja. Miło mi. Szukam informacji na temat Bogdana Majchrzaka.",
                route: 501,
            },
            third: {
                content: "Dzień dobry! Przodownik Kołodziejczyk, policja. Pan jest tu szefem?",
                route: 2,
            },
        },
        501: {
            message: "Hmmm... Coś mi mówi to nazwisko... Ale może niech Pan lepiej zapyta Wadowskiego, to jeden z naszych kelnerów. On ma lepszą pamięć do twarzy.",
            fourth: {
                content: "Świetnie, w takim razie już się do niego zwracam.",
                route: 1,
            },
        },
        2: {
            message: "Nie do końca. Właścicielem jest mój stryj, Franciszek Aleksander Macharski. Jednak ze względu na jego wiek teraz to ja zajmuję się tutejszą restauracją i delikatesmi.",
            first: {
                content: "W takim razie chyba może mi Pan pomóc. Potrzebuję informacji na temat niejakiego Bogdana Majchrzaka.",
                route: 501,
            },
            second: {
                content: "Rozumiem. Zatem proszę o pomoc. Otóż szukam jednego z Państwa klientów, Bogdana Majchrzaka.",
                route: 501,
            },
        },
        3: {
            message: "Dowiedział się Pan czegoś?",
            first: {
                content: "Tak, wiem już wszystko. Ale przed wyjściem chciałbym Pana zapytać co to za miejsce?",
                route: 30,
            },
            backMessage: "Tak, dlatego muszę już iść! Do widzenia! [Zakończ rozmowę i wyjdź]"
        },
        4: {
            message: "Witam ponownie! Ma Pan jakieś pytania?",
            first: {
                content: "Tak. Chciałbym Pana zapytać co to za miejsce?",
                route: 30,
            },
            backMessage: "Nie, jednak to by było na tyle. Przepraszam za kłopot. Do widzenia! [Zakończ rozmowę i wyjdź]"
        },
        30: {
            message: "Historia tego miejsca zaczęła się niemalże 50 lat temu... W 1876 roku Antoni Hawełka postanowił założyć sklep z artykułami kolonialnymi w jednej z kamienic rynkowych. Po pięciu latach przeniósł się do kamiennicy 'Pod Krzysztofory' otwierając jednocześnie restaurację. Stała się ona znana przede wszystkim jako bar śniadaniowy, w którym serwowano słynne piętrowe kanapki, którymi zachwycał się sam Sienkiewicz...",
            first: {
                content: "Proszę mówić dalej.",
                route: 31,
            },
            backMessage: "To wszystko, co chciałem wiedzieć. Do widzenia! [Zakończ rozmowę i wyjdź]"
        },
        31: {
            message: "Pan Antoni zmarł bezpotomnie w 1894 roku, a po nim miejsce to przejął jego zaufany pracownik, a mój stryj - Franciszek Macharski. To on tuż przed wojną przeniósł restaurację w obecne miejsce, do Pałacu Spiskiego. Nasz lokal często odwiedzają wybitni profesorowie, artyści, literaci, dziennikarze... Mam nadzieję, że i mi uda się kontynuować tę tradycję. Kto wie, może jeśli doczekam się syna to dam mu na imię Franciszek, po stryju... A kiedyś przejmie po mnie to miejsce?",
            backMessage: "Dziękuję, to wszystko, co chciałem wiedzieć. Do widzenia! [Zakończ rozmowę i wyjdź]"
        },
    }, 
    "kelner": {
        1: {
            message: "Witam w restauracji Hawełka! Stolik dla jednej osoby?",
            first: {
                content: "Dzień dobry! Dziękuję, ale nie będę jadł. Potrzebuję za to informacji.",
                route: 3,
            },
            second: {
                content: "A co Pan, stolarz, że mi stół oferuje? Hehe.",
                route: 2,
            },
            third: {
                content: "Nie, dla piętnastu... Co Pan, ślepy? Przecież samemu przyszedłem.",
                route: 2,
            },
        },
        2: {
            message: "Doprawdy zabawne...",
            first: {
                content: "Ja się uśmiałem. Ale teraz na poważnie. Potrzebuję informacji.",
                route: 3,
            },
            second: {
                content: "Przepraszam, w sumie zachowałem się nietaktownie. Jestem tutaj z w sprawie jednego z klientów.",
                route: 3,
            },
        },
        3: {
            message: "Słucham, cóż chciałby Pan wiedzieć?",
            first: {
                content: "Czy kojarzy Pan niejakiego Bogdana Majchrzaka?",
                route: 4,
            },
        },
        4: {
            message: "Oczywiście, bywa tutaj dość często.",
            first: {
                content: "W końcu jakiś konkret! Czy widział go Pan w towarzystwie starszego mężczyzny?",
                route: 5,
            },
            second: {
                content: "Nareszcie, ktoś coś wie! Wie Pan o nim coś więcej?",
                route: 10, 
            },
            third: {
                content: "Już myślałem, że nie znajdę nikogo, kto by coś wiedział! Proszę powiedzieć, gdzie mogę go znaleźć?",
                route: 14, 
            },
        },
        5: {
            message: "To zależy, kogo uznać za starszego... Ale nie, raczej nie. Najczęściej przychodzi z kobietami.",
            first: {
                content: "Czy może mi Pan powiedzieć o nim coś więcej?",
                route: 6,
            },
            second: {
                content: "Wie Pan gdzie mogę go znaleźć?",
                route: 8, 
            },
        },
        6: {
            message: "Niewiele, raczej nie rozmawiamy ze sobą. Wiem tyle, że jest dziennikarzem i pracuje dla Ilustrowanego Kuriera Codziennego.",
            first: {
                content: "Wie Pan gdzie mogę go znaleźć?",
                route: 7,
            },
        },
        7: {
            message: "O tej godzinie na pewno znajdzie go Pan w redakcji Kuriera w Pałacu Prasy na Wielopolu.",
            fourth: {
                content: "Wspaniale, dziękuję za informacje! [Podejdź do drzwi.]",
                route: 6,
            },
        },
        8: {
            message: "Z tego co wiem to pracuje w redakcji Ilustrowanego Kuriera Codziennego, w Pałacu Prasy na Wielopolu. O tej godzinie powinien tam być. ",
            first: {
                content: "Wie Pan o nim coś więcej?",
                route: 7,
            },
        },
        9: {
            message: "Nie, nie rozmawiamy ze sobą... Poza tym to dość gburowaty typ.",
            fourth: {
                content: "Wspaniale, dziękuję za informacje! [Podejdź do drzwi.]",
                route: 6,
            },
        },
        10: {
            message: "Niezbyt wiele... To dość gburowaty typ, aż się odechciewa rozmowy. Wiem tyle, że pracuje dla Ilustrowanego Kuriera Codziennego, jest tam dziennikarzem.",
            first: {
                content: "Czy widział go Pan w towarzystwie starszego mężczyzny?",
                route: 11,
            },
            second: {
                content: "Wie Pan gdzie mogę go znaleźć?",
                route: 12, 
            },
        },
        11: {
            message: "To zależy, kogo uznać za starszego... Ale nie, raczej nie. Najczęściej przychodzi z kobietami.",
            first: {
                content: "A wie Pan gdzie mogę go znaleźć?",
                route: 7, 
            },
        },
        12: {
            message: "O tej godzinie na pewno znajdzie go Pan w redakcji Kuriera w Pałacu Prasy na Wielopolu.",
            first: {
                content: "Widział go Pan może kiedyś w towarzystwie starszego mężczyzny?",
                route: 13, 
            },
        },
        13: {
            message: "To zależy, kogo uznać za starszego... Ale nie, raczej nie. Najczęściej przychodzi z kobietami.",
            fourth: {
                content: "Wspaniale, dziękuję za informacje! [Podejdź do drzwi.]",
                route: 6,
            },
        },
        14: {
            message: "Z tego co wiem to pracuje w redakcji Ilustrowanego Kuriera Codziennego, w Pałacu Prasy na Wielopolu. O tej godzinie powinien tam być.",
            first: {
                content: "Czy widział go Pan w towarzystwie starszego mężczyzny?",
                route: 15,
            },
            second: {
                content: "Wie Pan o nim coś więcej?",
                route: 16, 
            },
        },
        15: {
            message: "To zależy, kogo uznać za starszego... Ale nie, raczej nie. Najczęściej przychodzi z kobietami.",
            first: {
                content: "Czy wie Pan może o nim coś więcej?",
                route: 9, 
            },
        },
        16: {
            message: "Nie, nie rozmawiamy ze sobą... Poza tym to dość gburowaty typ.",
            first: {
                content: "A czy widział go Pan w towarszystwie starszego mężczyzny?",
                route: 13, 
            },
        },

    },
    "dabrowski": {
        1: {
            message: "Dzień dobry, Marian Dąbrowski. W czym mogę Panu służyć?",
            first: {
                content: "Dzień dobry, policja. Szukam jednego z Pana pracowsników, Bogdana Majchrzaka.",
                route: 501, 
            },
            second: {
                content: "Wow, niezły hol.",
                route: 2, 
            },
            third: {
                content: "Dzień dobry. Pan jest redaktorem naczelnym Kuryera, prawda?.",
                route: 4, 
            },
        },
        2: {
            message: "Prawda? Bardzo się cieszę, że udało się tutaj przenieść redakcję mojego Kuryera. Jesteśmy świeżo po przeprowadzce.",
            first: {
                content: "Pan jest redaktorem naczelnym, czy się nie mylę?",
                route: 4,
            },
            second: {
                content: "Co to za budynek?",
                route: 3,
            },
            third: {
                content: "Imponujące. Ale nie przyszedłem podziwiać architektury. Szukam Bogdana Majchrzaka.",
                route: 501,
            },
        },
        3: {
            message: "Projekt Stryjeński, Mączyński, rok 1921. Jedni nazywają go Bazarem Polskim - bo pierwotnie chciano tu urządzić dom handlowy. Niektórym przypomina statek, to przezywają go 'Krążownikiem Wielopole'. Ale mi najbardziej podoba się Pałac Prasy.",
            first: {
                content: "Pan jest redaktorem naczelnym Kuryera, prawda?",
                route: 4,
            },
            second: {
                content: "Kawał architektury, nie powiem. Ale ja w innej sprawie. Szukam Bogdana Majchrzaka.",
                route: 501,
            },
        },
        4: {
            message: "Nawet nie redaktorem, a jego założycielem! Już od 1910 roku informujemy obywateli o tym, co się dzieje w kraju i poza nim!",
            first: {
                content: "Rozumiem. Ale na rozmowy przyjdzie jeszcze czas. Teraz chciałbym porozmawiać z Bogdanem Majchrzakiem.",
                route: 501,
            },
        },
        501: {
            message: "Ahh, co ten Bogdan nabroił? Mam nadzieję, że nic poważnego... W każdym razie tam jest, widzę, że dopiero co przyszedł, jeszcze w płaszczu stoi.",
            fourth: {
                content: "Dziękuję za informacje. A teraz jeśli Pan pozwoli, porozmawiam z panem Majchrzakiem.",
                route: 4,
            },
        },
        5: {
            message: "Dość głośno się Panowie zachowywali...",
            first: {
                content: "Przepraszam najmocniej. Zanim pójdę chciałbym jednak o coś zapytać o wydarzenia ostatnich lat...",
                route: 30,
            },
            backMessage: "Przepraszam, ale muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        6: {
            message: "Witam ponownie! W czym mogę pomóc",
            first: {
                content: "Chciałbym porozmawiać z Panem o wydarzeniach z ostatnich lat...",
                route: 30,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        30: {
            message: "Co Pana interesuje? Afera dojlidzka? Zamach na Narutowicza? A może ostatnie wydarzenia w Wilnie?",
            first: {
                content: "O co chodziło w aferze dojlidzkiej?",
                route: 40,
            },
            second: {
                content: "Chciałbym dowiedzieć się więcej o zamachu na prezydenta Narutowicza.",
                route: 50,
            },
            third: {
                content: "Chcę zapytać o wydarzenia w Wilnie.",
                route: 60,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        31: {
            message: "Słucham Pana.",
            first: {
                content: "O co chodziło w aferze dojlidzkiej?",
                route: 40,
            },
            second: {
                content: "Chciałbym dowiedzieć się więcej o zamachu na prezydenta Narutowicza.",
                route: 50,
            },
            third: {
                content: "Chcę zapytać o wydarzenia w Wilnie.",
                route: 60,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        40: {
            message: "O pieniądze szanowny Panie, jak zawsze. Ponieważ właścicielka majątków pod Białymstokiem, hrabina Zofia Rydygier, nie chciała po wojnie przyjąć polskiego obywatelstwa to była zmuszona do zaakceptowania konsekwencji swojej decyzji. W świetle prawa musiała pozbyć się swojego majątku. Tak też zrobiła.",
            first: {
                content: "I to cała afera?",
                route: 40,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        41: {
            message: "Oj nieee, drogi Panie, to dopiero początek. Las sprzedała hrabina Naumowi Cukerowi w październiku 1920 roku. Natomiast reszty pozbyła się rok później na rzecz Polsko-Amerykańskiego Banku Ludowego, który to zaoferował hrabinie 75 milionów marek polskich. Akcjonariuszami banku byli tymczasem politycy PSL-u, którzy dokonali transakcji z pominięciem mnóstwa formalności...",
            first: {
                content: "Czy była to duża kwota?",
                route: 42,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        42: {
            message: "Powiedziałbym, że za tak olbrzymi majątek cena była bardzo korzystna. Ale to jeszcze nic. Chcąc obłowić się jeszcze bardziej politycy PSL-u - łąmiąc prawo - podzielili obszar na mniejsze parcele i zaczęli go sprzedawać chłopom. A myśli Pan, że ludowcy zaoferowali im jakąś korzystną cenę? A skądże! Tacy z nich ludowcy, że chcieli sprzedawać ziemię z 20-krotną przebitką!",
            first: {
                content: "I kto się zainteresował tą sprawą?",
                route: 43,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        43: {
            message: "Prasa, rzecz jasna. Aby pozbyć się problemu, po nagłośnieniu afery, łaskawcy obniżyli cenę do 800% wartości zakupu ziemi. A ponieważ to i tak było tanowczo za wiele jak na możliwości finansowe tamtejszych rolników to ostatecznie sprzedali dobra dojlidzkie księciu Jerzemu Rafałowi Lubomirskiemu. Za 160 milionów marek. I proszę sobie wyobrazić - pomimo wielokrotnego naruszania prawa w wyniku afery tylko jedna osoba została zdymisjonowana, a reszta pozostała bezkarna.",
            second: {
                content: "Chciałbym jednak pomówić jeszcze o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        50: {
            message: "Strasznie przykra sprawa. W listopadzie 1922 roku odbyły się wygrane przez prawicę wybory, pamięta Pan... A już 9 grudnia parlament miał zdecydować, kto zostanie prezydentem naszego kraju. Wystawiono 5 kandydatów, zwycięzca musiał otrzymać ponad połowę głosów posłów i senatorów. Wydawało się, że wygra Zamoyski, kandydat prawicy... Już w pierwszej turze otrzymał ponad 40% głosów.",
            first: {
                content: "I co się potem stało?",
                route: 51,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        51: {
            message: "Od drugiej tury kandydat z najmniejszą liczbą głosów odpadał z rywalizacji. Najpierw odpadł Daszyński z Polskiej Partii Socjalistyczej, później kandydat wystawiony przez mniejszości narodowe - Jan Baudoin de Courtenay. W kolejnej zaś ludowiec, Stanisław Wojciechowski. I tak ostatecznie zostało tylko dwóch kandydatków - Zamoyski wystawiony przez prawicę, oraz Naturowicz z lewicującego skrzydła PSL-u. I ku zaskoczeniu wsyztskich wygrał Narutowicz zyskując w ostatniej turze 56% głosów...",
            first: {
                content: "Chyba nie było to rozstrzygnięcie, które zadowoliło wszystkich?",
                route: 52,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        52: {
            message: "Wręcz przeciwnie! Już tego samego dnia pod sejmem odbył się protest studentów. Potem protestujący poszli pod dom, gdzie mieści się redakcja Gazety Warszawskiej. Tam poseł endecki, Sadzewicz, zaczął wprowadzać w błąd obywateli twierdząc, że Narutowicz ledwo dwa dnie wcześniej otrzymał obywatelstwo polskie - mimo, że od dwóch lat był ministrem robót publicznych.",
            first: {
                content: "Co się działo dalej?",
                route: 53,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        53: {
            message: "Zaczęto na Narutowicza nagonkę twierdząc, że jego wybór na prezydenta to sprawka Żydów, Niemców i Ukraińców. A to dopiero początek... Mówiono, że Narutowicz nie jest Polakiem, że jest pachołkiem światowej finansjery, wrogiem polskości, masonem, niewierzącym emigrantem, złodziejem, żydowskim pachołkiem. Z dnia na dzień sytuacja stawała się bardziej napięta... Wysyłano pogróżki...",
            first: {
                content: "Proszę kontnuować.",
                route: 54,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        54: {
            message: "Tydzień po wyborze, dokładnie 16 grudnia prezydent Narutowicz miał wziąć udział w dorocznym otwarciu salonu sztuki w warszawskiej Zachęcie. Na uroczystość zaproszono również sympatyzującego z narodowcami artystę, Eligiusza Niewiadomskiego. Narutowicz dotarł do Zachęty chwilę po godzinie 12. Gdy będący w znakomitym nastroju prezydent podziwiał jeden z obrazów podszedł do niego ambasador angielski w Polsce. Wie Pan jak wyglądała ostatnia rozmowa Narutowicza?",
            first: {
                content: "Nie.",
                route: 55,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        55: {
            message: "Żona ambasadora powiedziała po francusku: 'Pozwoli mi Pan pogratulować, Panie prezydencie.'. Narutowicz odparł: 'Raczej złożyć kondolencje'... Niewiele później padły trzy strzały. Zabójcą okazał się Niewiadomski. Nie uciekał, nie bronił się. Później przyznał, że planował też zamach na marszałka Piłsudskiego...",
            first: {
                content: "Jakie były reakcje na zamach?",
                route: 56,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        56: {
            message: "Prawica uznała oczywiście Niewiadomskiego za niepoczytalnego szaleńca uznając tylko jego za winnego i odpowiedzialnego za zabójstwo. Ale gazety związane z endecją głosiły niemalże pochwałę tego czynu, proszę sobie wyobrazić! A winnym morderstwa obwiniono samego Narutowicza prezentując mordercę jako ofiarę! Tutaj, w Krakowie zdarzały się nawet msze za Niewiadomskiego. Tak, proszę Pana! Za Radziekowskiego, za zabójcę! Po jednym z takich nabożeństw, u franciszkanów, środowiska lewicowe zogranizowały wiec na Rynku krzycząc antykościelne hasła. Potem poszli pod Pałac Biskupi, gdzie powybijali okna. To samo zrobili zresztą pod endeckim Gońcem Krakowskim...",
            first: {
                content: "Czyli odpowiedzialnością za nagonkę na prezydenta obarczano również prasę?",
                route: 56,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        57: {
            message: "Ale nie Kuryera, drogi Panie! Kiedy wybrano świętej pamięci prezydenta u nas trwał strajk drukarzy, niczego nie mogliśmy publikować! Kończąc ten temat",
            first: {
                content: "No dobrze. Pozwoli Pan, że zapytam o coś jeszcze?",
                route: 56,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        60: {
            message: "Dwa tygodnie temu, 6 maja, podczas egzaminu maturalnego w wileńskim Gimnazjum imienia Lelewela jeden z uczniów, Stanisław Ławrynowicz, nie reagował na upomnienia komisji, która nakazywała mu zaprzestania rozmowy z kolegą obok. W końcu dyrektor Gimnazjum, Biegański, odebrał Ławrynowiczowi arkusz egzaminacyjny...",
            first: {
                content: "I co się działo dalej?",
                route: 61,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        61: {
            message: "Uczeń wyciągnął broń i oddał dwa strzały w kierunku dyrektora... Biegański nie został poważnie ranny, a inni uczniowie rzucili się, aby unieruchomić Ławrynowicza. A ten, wierzgając się, dał radę wyciągnąć granat z kieszeni, którego rzucił przed siebie. W wyniku wybuchu zginął napastnik oraz dwóch innych uczniów. Ale to nie wszystko...",
            first: {
                content: "Jak to?",
                route: 62,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        62: {
            message: "Po eksplozji z ławki wstał przyjaciel Ławrynowicza, Obrąpalski, wydobył broń i zaczął strzelać w kierunku komisji egzaminacyjnej. W brzuch trafił nauczyciela fizyki, który zginął potem w szpitalu. Obrąpalski próbował uciec. Wybiegł na korytarz, chciał rzucić za siebie kolejny granat, ale szczęściwie nie zadziałał zapalnik. Wtedy też podniósł broń i zabił się strzałem w głowę.",
            first: {
                content: "Co wykazało śledztwo?",
                route: 63,
            },
            second: {
                content: "Chciałbym jednak pomówić o czymś innym.",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        63: {
            message: "Śledztwo prowadzi prokurator Hołownia. Przy zwłokach Ławrynowicza znaleziono jeszcze dwa granaty, ale to i tak nic w porównianiu z tym, co znajdowało się u niego w domu. Cała kolekcja. Zamach był zresztą zaplanowany, bo w jednym ze szkolnych pomieszczeń znaleziono kolejne granaty, spory ładunek wybuchowy i list pożegnalny jednego ze sprawców... Może dowiemy się jeszcze czegoś, gdy śledztwo dobiegnie końca.",
            first: {
                content: "Rozumiem, chciałbym jednak zapytać o coś jeszcze...",
                route: 31,
            },
            backMessage: "Przepraszam, jednak muszę już iść. [Zakończ rozmowę i opuść budynek]"
        },
        
    }, 
    "majchrzak": {
        1: {
            message: "Słucham.",
            first: {
                content: "Trochę się Pana naszukałem. Kołodziejczyk, policja.",
                route: 2,
            },
            second: {
                content: "Miło w końcu Pana zobaczyć. Trochę się o panu nasłuchałem zanim przyszło nam się poznać. Jestem przodownik Kołodziejczyk z policji.",
                route: 2,
            },
        },
        2: {
            message: "Majchrzak. A o co chodzi?",
            first: {
                content: "Przychodzę w sprawie Józefa Najchela.",
                route: 3,
            },
            second: {
                content: "Kiedy po raz ostatni widział się Pan z Józefem Najchelem?",
                route: 3,
            },
            third: {
                content: "Gdzie jest Józef Najchel?",
                route: 3,
            },
        },
        3: {
            message: "Zaraz, zaraz! A skąd Pan wie, że znam jakiegoś Najchela? Pierwsze słyszę!",
            first: {
                content: "Nie mam czasu na jakieś gierki. Proszę odpowiedzieć.",
                route: 4,
            },
            second: {
                content: "Jak Pana aresztuję za utrudnianie śledztwa to się Panu odechce kłamać.",
                route: 5,
            },
            third: {
                content: "To ja zadaję pytania. Po prostu wiem.",
                route: 4,
            },
        },
        4: {
            message: "Nie znam żadnego Najchela, proszę dać mi spokój!",
            first: {
                content: "Kręcił się Pan koło jego domu, zaglądał w jego dokumentację medyczną, odwiedził w szpitalu w Kobierzynie. Naprawdę, myśli Pan, że się wywinie od odpowiedzi?",
                route: 5,
            },
            second: {
                content: "Kłamie Pan. Jak nie uzyskam odpowiedzi to nie będzie już tak miło, bo następnym razem porozmawiamy na komisariacie.",
                route: 5,
            },
        },
        5: {
            message: "Dobrze, już dobrze! Piszę reportaż o chorobach psychicznych. Przyglądałem się Najchelowi, aby poznać jego zaburzenie nieco bliżej... Wie Pan jak by się sprzedawał materiał o kimś, kto widzi kozy z głową człowieka?",
            first: {
                content: "Chyba 'człowieka o koźlich rogach'.",
                route: 6,
            },
            second: {
                content: "W takim razie muszę zadać kilka pytań.",
                route: 7,
            },
        },
        6: {
            message: "Tak, tak, jedno i to samo.",
            first: {
                content: "No dobrze. Ale będę musiał zadać kilka pytań.",
                route: 7,
            },
        },
        7: {
            message: "Pytaj Pan.",
            first: {
                content: "Jak dobrze zna Pan Józefa Najchela?",
                route: 8,
            },
            second: {
                content: "Kiedy po raz ostatni widział Pan Najchela?",
                route: 9,
            },
            third: {
                content: "Czy Najchel miał jakichś przyjaciół lub wrogów?",
                route: 10,
            },
        },
        8: {
            message: "Niezbyt dobrze, z tym człowiekiem nie da się rozmawiać. Straszny choleryk. A czemu Pan pyta?",
            first: {
                content: "Najchel zaginął wczorajszej nocy. Próbuję go odnaleźć zanim zrobi sobie lub komuś krzywdę.",
                route: 12,
            },
        },
        9: {
            message: "Widziałem jakoś tydzień temu, rozmawiałem ze przed dwoma miesiącami jak jeszcze był w szpitalu.",
            first: {
                content: "Co ma Pan na myśli mówiąc, że 'widział' go Pan tydzień temu?",
                route: 11,
            },
        },
        10: {
            message: "Przyjaciół? Dobre sobie. To nie jest typ, który mógłby mieć przyjaciół. Wrogów już prędzej, ale to wiadomo, nie był to jakiś spokojniaszek. A czemu Pan pyta?",
            first: {
                content: "Najchel zaginął wczorajszej nocy. Próbuję go odnaleźć zanim zrobi sobie lub komuś krzywdę.",
                route: 12,
            },
        },
        11: {
            message: "Byłem na Twardowskiego. A czemu Pan pyta?",
            first: {
                content: "Najchel zaginął wczorajszej nocy. Próbuję go odnaleźć zanim zrobi sobie lub komuś krzywdę.",
                route: 12,
            },
        },
        12: {
            message: "Słucham? I co, nie wiecie gdzie jest? To szajbus! Ja jak chciałem się czegoś o nim dowiedzieć to próbowałem z nim rozmawiać, ale z tym człowiekiem nie da się zamienić słowa. Dlatego zacząłem wypytywać jego sąsiada, Krogula, o to, co się u Najchelów w domu działo. Niech Pan z nim porozmawia, on może coś wiedzieć.",
            first: {
                content: "Krogul? To ten co mieszka obok?",
                route: 13,
            },
            second: {
                content: "A co, Pan niby nie wie? Przecież pisze Pan o nim reportaż!",
                route: 15,
            },
            fourth: {
                content: "Tak zrobię. [Odejdź w stronę wyjścia.]",
                route: 12,
            }
        },
        13: {
            message: "Co Pan, nie rozumie znaczenia słowa sąsiad? Tak, to ten co mieszka obok.",
            first: {
                content: "I co, tak po prostu zgodził się na współpracę?",
                route: 14,
            },
            second: {
                content: "I zgodził się bez problemu?",
                route: 14,
            },
        },
        14: {
            message: "Panie, każdy ma swoją cenę. A Krogul to chętnie w łapę brał, oj brał...",
            fourth: {
                content: "W takim razie muszę porozmawiać z tym całym Krogulem. Do widzenia. [Odejdź w stronę wyjścia.]",
                route: 12,
            }
        },
        15: {
            message: "Niech Pan porozmawia z Krogulem. Ja nie mam pojęcia gdzie Najchel może teraz być.",
            fourth: {
                content: "Dobrze, ale będę miał Pana na oku... Do widzenia. [Odejdź w stronę wyjścia.]",
                route: 12,
            }
        },
    },
    "bank": {
        1: {
            message: "Dzień dobry, Marian Ostaszewski, jestem dyrektorem tej placówki. W czym mogę pomóc?",
            first: {
                content: "Dzień dobry, Kołodziejczyk, policja. Potrzebuję informacji o jednym z Państwa klientów.",
                route: 501, 
            },
        },
        501: {
            message: "Poproszę o godność rzeczonego klienta.",
            first: {
                content: "Józef Najchel.",
                route: 2, 
            },
        },
        2: {
            message: "*wyszukuje informacji* Najchel... Najchel...",
            first: {
                content: "Przepraszam, ale trochę mi się spieszy.",
                route: 3, 
            },
            second: {
                content: "*poczekaj*",
                route: 3, 
            },
        },
        3: {
            message: "Najchel, jest. Z dokumentów wynika, że do zeszłego roku pobierał regularne świadczenia przekazywane przez konsulat Czechosłowacji w Krakowie. Była to renta pobierana z uwagi na wypadek, który Pan Najchel przeżył jak pracował w odlewni żelaza w Witkowicach, niedaleko Ostrawy. Dziwne... Powinno być to dożywotnie świadczenie...",
            first: {
                content: "Wie Pan z jakiego powodu przestano mu je wypłacać?",
                route: 4, 
            },
            second: {
                content: "Czy coś jeszcze jest Pan w stanie stamtąd wyczytać?",
                route: 5, 
            },
        },
        4: {
            message: "Nie wiem. Możliwe, że pan Najchel po prostu otworzył rachunek w innej placówce. Ale osobiście pytałbym u źródła. Konsulat, który wysyłał pieniądze znajduje się przy Gołębiej.",
            first: {
                content: "Dziękuję. Jeszcze jedna sprawa... Ma Pan chwilę, aby porozmawiać o sytuacji ekonomicznej?",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        5: {
            message: "Niestety, nic szczególnego. Na Pana miejscu pytałbym o te nieścisłości u źródła. Konsulat, który wysyłał pieniądze znajduje się przy Gołębiej.",
            first: {
                content: "Dziękuję. Jeszcze jedna sprawa... Ma Pan chwilę, aby porozmawiać o sytuacji ekonomicznej?",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        6: {
            message: "Witam ponownie! Ma Pan jeszcze jakieś pytania?",
            first: {
                content: "Owszem. Chciałbym z Panem pomówić o sytuacji ekonomicznej...",
                route: 30, 
            },
            backMessage: "Nie, jednak nie mam. Przepraszam za zamieszanie. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        30: {
            message: "Proszę pytać, słucham.",
            first: {
                content: "Proszę powiedzieć kilka słów o krakowskim handlu.",
                route: 40, 
            },
            second: {
                content: "Czy może Pan przybliżyć sytuację bankowości w Krakowie?",
                route: 50, 
            },
            third: {
                content: "Jak Pan ocenia sytuację ekonomiczną?",
                route: 60, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        40: {
            message: "Obecną sytuację mogę chyba opisać jednym słowem. Tragiczna. Tuż po wojnie brakowało intergacji z innymi częściami Polski, codziennością były problemy aprowizacyjne... Sam Kraków też tracił na znaczeniu. Dziś kupcy muszą mierzyć się z konkurencją Śląska, zwłaszcza Katowic. A co gorsza nie mamy bezpośredniego połączenia kolejowego z Warszawą. Podróż do stolicy trwa 9 godzin... ",
            first: {
                content: "Rozumiem. A jeśli chodzi o sam Kraków... Gdybym chciał się wybrać na zakupy, to dokąd mam się udać?",
                route: 41, 
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        41: {
            message: "W Sukiennicach kupi Pan artykuły galanteryjne, zabawki, pamiątki... Przed Kościołem Mariackim handluje się kwiatami,  owocami... W okresie bożonarodzeniowym również ozdobami choinkowymi. A na wielkanoc cukrowymi barankami, czy koszyczkami na święconkę. Nieco dalej, przy wylocie ul. św. Jana kupi Pan wełniane skarpety, koronki, hafty... Ogólnie rzecz ujmując wyroby ludowe. A przy wieży ratuszowej handluje się drobiem. Zarówno żywym jak i bitym.",
            first: {
                content: "A poza Rynkiem?",
                route: 42, 
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        42: {
            message: "Po jarzyny proszę udać się na Mały Rynek, a kramy mięsne są przy Placu Słowiańskim. Na Starym Kleparzu można znaleźć wyroby koszykarskie, bednarskie... oraz zwierzęta. Koty, psy, króliki, gołębie... Natomiast po drugiej stronie ulicy Długiej, na Nowym Kleparzu może Pan kupić także artykuły rymarskie, liny, siano, słomę czy zboże.",
            first: {
                content: "Nie wspomniał Pan nic o Kazimierzu i Podgórzu.",
                route: 43, 
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        43: {
            message: "Po ryby proszę udać się przed Synagogę Izaaka. Jeśli chciałby Pan kupić drób i warzywa to może także iść na Plac Nowy lub na Wolnicę. Ponadto na Kazimierzu, na Placu Bawół, odbywa się handel starzyzną. A w Podgórzu, na Placu Zgody kupi Pan nabiał, jarzyny, wyroby gliniane... Przy placu Serkowskiego odbywa się handel sianem, słomą, zbożem. Natomiast Rynek Podgórski ciężko zdefiniować... Kupi Pan tam niemalże wszystko.",
            second: {
                content: "Dziękuję. Chciałbym jeszcze zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        50: {
            message: "Obecne dwa banki państwowe realizują duże inwestycje w Krakowie. Tu, niedaleko Barbakanu powstaje gmach nowo powołanego Banku Polskiego. Natomiast przy ulicy Wielopole właśnie ukończono budynek Pocztowej Kasy Oszczędności i już rozpoczęto wznoszenie budynku mieszkalnego dla jej pracowników, który będzie mieścił się przy ulicy Zyblikiewicza. Ponadto na w Krakowie mieszczą się banki akcyjne i domy bankowe. Przed rokiem wzniesiono również budynek giełdy przy ul. Mikołajskiej",
            first: {
                content: "A gdzie właśnie się znajdujemy?",
                route: 51, 
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        51: {
            message: "Jesteśmy w budnynku Komunalnej Kasy Oszczędnościowej powiatu krakowskiego. Rozwijamy wśród ludności zmysł oszczędnościowy, ułatwiamy gromadzenie oszczędności, udostępniamy kredyty. Nasza placówka nie jest jednak jedyną komunalną kasą oszczędności w mieście. Druga znajduje się przy ul. Szpitalnej i zasłużyła się między innymi angażując się w wykupienie Wawelu z rąk austriackich. W końcu, być może Pan nie wie, ale do początku XX wieku stacjonowało tam wojsko zaborcy. Ponadto kasa przeznaczyła środki na remonty zamku, kaplicy Zygmuntowskiej, budowę łazni, akademików... Podgórze też ma swoją komunalną kasę oszczędności, mieście się przy Józefińskiej.",
            first: {
                content: "A gdzie właśnie się znajdujemy?",
                route: 51, 
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        60: {
            message: "Mam swoje obawy, choć obecna sytuacja jest dużo lepsza niż kilka lat temu. Po wojnie ogromnym problemem była kwestia integracji obszaru Polski. W końcu wcześniej nasz kraj był podzielony między trzech zaborców mających inne spojrzenia na politykę gospodarczą. Jednocześnie prowadzone były działania wojenne w celu ustalenia ostatecznych granic Rzeczpospolitej. Pochłaniało to olbrzymie kwoty, na początku 1920 roku stanowiło nawet 60% wydatków państwa. Powszechnymi zjawiskami był głód, choroby, drożyzna, reglamentacja towarów... W końcu, jak sytuacja się nieco ustabilizowała, można było racjonalniej podejść do zagadnień gospodarczych. Niestety nie wyszło to najlepiej...",
            first: {
                content: "Co ma Pan na myśli?",
                route: 61, 
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        61: {
            message: "Pokłosiem działań wojennych był stopniowo pogłębiany deficyt budżetowy. Kiepska sytuacja powojenna napędzała strajki organizowane w całej Polsce. Kłopoty próbowano łatać dodrukiem pieniądza, co napędzało inflację, która ostatecznie przerodziła się w hiperinflację. Kryzys gospodarczy przyniół tragiczne wydarzenia tutaj, w Krakowie. Dwa lata temu protestujący starli się z policją i wojskiem. Zginęło ponad 30 osób. Ostatecznie rząd poszedł po rozum do głowy i przeprowadził reformy. Powołano Bank Polski i jak Pan dobrze pamięta starą walutę, markę przemianowano na złotego. Ale myślę, że to nie koniec kłopotów...",
            first: {
                content: "Dlaczego?",
                route: 62, 
            },
            second: {
                content: "Jednak chciałbym zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
        62: {
            message: "Obecnie połowa polskiego handlu związana jest bezpośrednio z Republiką Weimarską. Niemcy odbierają od 80% produkowanego przez nas węgla. Niestety w styczniu tego roku wygasła klauzula największego uprzywilejowania nałożona na Republikę Weimarską postanowieniami traktatu wersalskiego. Dawało to państwom Entanty, w tym Polsce, uprzywilejowaną pozycję na rynku niemieckim. Jednak ten okres to już przeszłość. Za miesiąc zakończy się również zwolnienie z cła węgla polskiego wwożonego do Niemiec. Obawiam się, że wojna celna stanie się faktem, a to poważnie odbije się na naszej gospodarce...",
            second: {
                content: "Mam te same obawy... Chciałbym jeszcze zapytać o coś innego.",
                route: 30, 
            },
            backMessage: "Dziękuję za pomoc. Wrócę w razie jakichkolwiek pytań. Do widzenia [Zakończ rozmowę i wyjdź z budynku]"
        },
    } 
}

export default options