//DESTRUCTURATION EN JS

/*const pays = ['RDC', 'France', 'Angola'];

const [drc, french, angola] = pays
alert(drc)
alert(french)

const objet = { pays: 'RDC', capital: 'Kinshasa', province: 26 };
const message = presentation(objet)
alert(message)

function presentation({ pays, capital, province }) {
    const message = pays + '/' + capital + '  a ' + province + 'provinces';
    return message;
}*/

// Opérateur de propagation

/*let pays = ['RDC', 'France', 'Angola']
let pays2 = ["congo", "Benin"]
let pays3 = [...pays, ...pays2]

alert(pays3)*/

//avec les objets

/*const identiite = {
    nom: 'Josué',
    age: '24 ans'
}

const profession = {
    poste: 'Programmeur',
    salaire: '500 USD'

}

const agent = {...identiite, ...profession }

for (let cle in agent) {
    alert(cle + '  =  ' + agent[cle])
}*/

//une fonction collback

/*const hello = nom => alert(" hello" + nom)
const salut = nom => alert(' salut' + nom)
const bonjour = nom => alert(" bonjour" + nom)

function message(callback) {
    let nom = prompt('Saisissez votre nom')

    callback(nom)
}

message(hello)*/

//FONCTION A n Argument

/*const addition = (...params) => {
    let som = 0
    for (let value of params) {
        som += value
    }
    return som
}

let somme = addition(4, 7)
alert(somme)*/

/*const presentation = (...params) => {
    let texte = ""
    for (let value of params) {
        texte += "" + value
    }
    return texte
}

let profil = presentation("jean", "tandu", "Musa")
alert(profil)*/

//NEW FUNCTION

/*const addition = new Function('a', 'b', 'return a+b')
const message = new Function('alert("Welcome")')
let somme = addition(4, 7)
alert(somme)
message()*/

//DATE ET HEURE

/*let now = new Date(3600 * 24 * 1000);
alert(now)*/

/*let now = new Date("2020-11-24");
alert(now)*/

/*let now = new Date(2023, 10, 25, 9, 45, 30, 700);
alert(now.getDate())*/

/*let today = new Date();
today.setHours(0);
alert(today)

today.setHours(0, 0, 0, 0);
alert(today);

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert(date)*/

//Recuperer simplement la date

/*const now = new Date()
alert(now.toDateString())
alert(now.toLocaleDateString())*/

// NOTIONS DES CLASS

/*class User {
    constructor(nom, age) {
        this.nom = nom
        this.age = age
    }
}

let user1 = new User('John', 14)
let user2 = new User('jenny', 23)

alert(user2.nom)*/

//les methodes

/*class User {
    constructor(nom, age) {
        this.nom = nom
        this.age = age
    }

    presentation() {
        return 'je me nomme ' + this.nom + ' j\'ai ' + this.age + ' ans'
    }
}

let user1 = new User('John', 14)
let user2 = new User('jenny', 23)

alert(user1.presentation())*/

/*class User {
    constructor(nom, age) {
        this.nom = nom
        this.age = age
    }

    presentation(texte) {
        return texte + ' ' + this.nom + ' j\'ai ' + this.age + ' ans'
    }
}

let user1 = new User('John', 14)
let user2 = new User('jenny', 23)

alert(user1.presentation('je suis'))*/

class User {
    constructor(nom, age) {
        this.nom = nom
        this.age = age
    }

    presentation() {
        return 'je me nomme ' + this.nom + ' j\'ai ' + this.age + ' ans'
    }
}

class Agent extends User {
    constructor(poste, nom, age) {
        super(nom, age)
        this.poste = poste
    }

    static hello() {
        alert('Bonjour manasse')
    }

    travail() {
        return 'je travaille comme ' + this.poste
    }
}

let agent1 = new Agent('Programmeur', 'Tshims', 34)
alert(agent1.travail())

alert(agent1.presentation('je suis'))
alert(Agent.hello())