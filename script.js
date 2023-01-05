let svaPitanja = [
    {
        tekst: 'Koliko godina je imala Neda Arneric kada se pojavila prvi put u pozoristu?',
        odgovori: [10, 15, 20, 25],
        indeks_korektnog_odgovora: 1
    },
    {
        tekst: 'Bafinov zaliv zapljuskuje obale kojeg ostrava?',
        odgovori: ['Islanda', 'Irske', 'Grenlanda', 'Krfa'],
        indeks_korektnog_odgovora: 2
    },
    {
        tekst: 'Koje godine je Knezevina Crna Gora postala kraljevina?',
        odgovori: [1905, 1900, 1910, 1895],
        indeks_korektnog_odgovora: 2
    },
    {
        tekst: 'Koje godine je zapocelo prvo veliko Kolumbovo putovanje na zapad?',
        odgovori: [1484, 1495, 1488, 1492],
        indeks_korektnog_odgovora: 3
    },
    {
        tekst: 'Vilijam Simington je poznat kao konstruktor?',
        odgovori: ['Prvog parnog broda', 'Prvog parnog aviona', 'Prve parne lokomotive', 'Prvog parnog automobila'],
        indeks_korektnog_odgovora: 0
    },
    {
        tekst: 'Prva osvojena medalja na ZOI u Sarajevu 1984. za SFR Jugoslaviju je bila?',
        odgovori: ['Zlatna', 'Bronzana', 'Srebrna'],
        indeks_korektnog_odgovora: 2
    },
    {
        tekst: 'Koji igrač je igrao samo u Milanu čitavu svoju karijeru, i to čak 25 godina što je najduži period vernosti jednom klubu u istoriji?',
        odgovori: ['Andrea Pirlo', 'Paolo Maldini', 'Gebbaro Gattuso', 'Zlatan Ibrahimovic'],
        indeks_korektnog_odgovora: 1
    },
    {
        tekst: 'Konsenzus je?',
        odgovori: ['Dzentlmenski odgovor', 'Jednoglasno donosenje odluka', 'Nametanje odluka', 'Nasilno preuzimanje vlasti'],
        indeks_korektnog_odgovora: 1
    },
    {
        tekst: 'Reka Una se uliva u reku Savu kod?',
        odgovori: ['Gradiske', 'jasenovca', 'Kostajnice'],
        indeks_korektnog_odgovora: 1
    },
    {
        tekst: 'Koliko nastavaka ima film "Sam u kući"?',
        odgovori: [6, 5, 4, 3, 2],
        indeks_korektnog_odgovora: 1
    },
    {
        tekst: 'Prvih nekoliko meseci, mladunče miša hrani se uglavnom?',
        odgovori: ['Biljem', 'Mesom', 'Majcinim mlekom', 'Insektima'],
        indeks_korektnog_odgovora: 2
    },
    {
        tekst: 'Koje godine je donesen Milanski edikt ?',
        odgovori: [313, 323, 333, 343],
        indeks_korektnog_odgovora: 0
    },
    {
        tekst: 'U kojem veku su se preci Bugara, ili Protobugari, doselili na Balkansko poluostrvo?',
        odgovori: ['4.veku', '3.veku', '7.veku', '5.veku'],
        indeks_korektnog_odgovora: 2
    },
    {
        tekst: 'U kojem veku je stvarao Petar Iljič Čajkovski?',
        odgovori: [19, 18, 17, 16],
        indeks_korektnog_odgovora: 0
    },
    {
        tekst: 'Koji američki predsednik se nalazi na novčanici od 20 dolara?',
        odgovori: ['Dzejms Medison', 'Abraham Linkoln', 'Endru Dzekson'],
        indeks_korektnog_odgovora: 2
    }
]

let bezDuplikata = niz => {
    let sredjenNiz = []
    let nizPitanja = []
    let randomVrednost
    for (let i = 0; sredjenNiz.length < 5; i++) {
        randomVrednost = Math.floor(Math.random() * niz.length)
        if (nizPitanja.includes(randomVrednost)) {
            continue
        }
        nizPitanja.push(randomVrednost)
        sredjenNiz.push(niz[randomVrednost])
    }
    return sredjenNiz
}

let kreirajPitanja = (divIspis, divResenja, nizBezDuplikata, svaPitanja) => {
    divIspis.textContent = ''
    divResenja.textContent = ''
    nizBezDuplikata = []
    nizBezDuplikata = bezDuplikata(svaPitanja)
    for (let i = 0; i < nizBezDuplikata.length; i++) {
        let divPitanje = document.createElement('div')
        divPitanje.classList.add('divPitanje')
        let divOdgovor = document.createElement('div')
        divOdgovor.classList.add('divOdgovor')
        let pitanje = document.createElement('p')
        pitanje.textContent = (i + 1) + '. ' + nizBezDuplikata[i].tekst
        for (let j = 0; j < nizBezDuplikata[i].odgovori.length; j++) {
            let noviRed = document.createElement('br')
            let ponudjeniOdgovor = document.createElement('label')
            ponudjeniOdgovor.classList.add('label')
            ponudjeniOdgovor.textContent = nizBezDuplikata[i].odgovori[j]
            let radioOdgovor = document.createElement('input')
            radioOdgovor.type = 'radio'
            radioOdgovor.value = ponudjeniOdgovor.textContent
            radioOdgovor.name = 'odg' + i + 1
            if (j == 0) {
                radioOdgovor.setAttribute('checked', '')
            }
            divOdgovor.append(radioOdgovor, ponudjeniOdgovor, noviRed)
        }
        divPitanje.append(pitanje, divOdgovor)
        divIspis.append(divPitanje)
    }
    return nizBezDuplikata
}

let nizBezDuplikata = []
let novaPitanja = document.getElementById('novaPitanja')
let posaljiOdgovore = document.getElementById('posalji')

let divIspis = document.getElementById('ispis')
let divResenja = document.getElementById('resenja')

nizBezDuplikata = kreirajPitanja(divIspis, divResenja, nizBezDuplikata, svaPitanja)
novaPitanja.addEventListener('click', () => {
    nizBezDuplikata = kreirajPitanja(divIspis, divResenja, nizBezDuplikata, svaPitanja)
})


posaljiOdgovore.addEventListener('click', () => {

    let nizRadio = document.querySelectorAll('input[type="radio"]')
    let nizOdabranih = []
    for (let i = 0; i < nizRadio.length; i++) {
        if (nizRadio[i].checked)
            nizOdabranih.push(nizRadio[i])
    }
    for (let i = 0; i < nizOdabranih.length; i++) {
        let pResenje = document.createElement('p')
        if (nizOdabranih[i].value == nizBezDuplikata[i].odgovori[nizBezDuplikata[i].indeks_korektnog_odgovora]) {
            pResenje.textContent = `Tacno ste odgovorili na ${i + 1}. pitanje.`
            pResenje.classList.add('tacanOdgovor')
        } else {
            pResenje.textContent = `Niste tacno odgovorili na ${i + 1}. pitanje.`
            pResenje.classList.add('netacanOdgovor')
        }
        divResenja.appendChild(pResenje)

    }
    for(let i = 0; i < nizRadio.length; i++){
        nizRadio[i].setAttribute('disabled', '')
    }
})