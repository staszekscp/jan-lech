
const options = {
    "home": {
        1: {
            message: "Szczęść Boże, Pan to z policji?",
            first: {
                content: "Dzień dobry. Tak, jestem tu w sprawie zaginięcia Pani męża.",
                route: 2,
                action: () => {}
            },
            second: {
                content: "Owszem, Pani Najchelowa. Sprawa wygląda dość podejrzanie. Proszę powiedzieć co się stało.",
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
                route: 50,
                action: () => {}
            },
        },
        50: {
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
            message: "I co, ma Pan jakieś infomracje?",
            backMessage: "Jeszcze nic konkretnego. Wrócimy jak się czegoś dowiemy. [Zakończ rozmowę i wyjdź z budynku]",
            
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
    }
}

export default options