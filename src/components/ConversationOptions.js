
const options = {
    "home": {
        backMessage: "Zakończ rozmowę i wyjdź z budynku.",
        1: {
            message: "Co tu Panie, spieprzaj Pan!",
            first: {
                content: "Srolem trolem",
                route: 11,
                action: (act) => {act()}
            },
            second: {
                content: "Srolem trolem",
                route: 12,
                action: () => {}
            },
            third: {
                content: "Srolem trolem",
                route: 13,
                action: () => {}
            },
            fourth: {
                content: "Srolem trolem",
                route: 13,
                action: (act) => {act()}
            }
        },
        11: {
            first: {
                content: "Terefere1",
                route: 1,
                action: () => {}
            },
            second: {
                content: "Terefere1",
                route: 1,
                action: () => {}
            },
            third: {
                content: "Terefere1",
                route: 1,
                action: () => {}
            }
        },
        12: {
            first: {
                content: "Terefere2",
                route: 1,
                action: () => {}
            },
            second: {
                content: "Terefere2",
                route: 1,
                action: () => {}
            },
            third: {
                content: "Terefere2",
                route: 1,
                action: () => {}
            },
        },
        13: {
            first: {
                content: "Terefere3",
                route: 1,
                action: () => {}
            },
            second: {
                content: "Terefere3",
                route: 1,
                action: () => {}
            },
            third: {
                content: "Terefere3",
                route: 1,
                action: () => {}
            }
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