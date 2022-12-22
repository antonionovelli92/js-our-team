/*
Ciao ragazzi,
    esercizio di oggi: Our Team
nome repo: js - our - team
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
  !  MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
  !  MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
  !  MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card / schede e rendere la pagina gradevole(potete usare lo screen in allegato come spunto
Consigli del giorno:
        Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! 
*/




const staffElement = document.getElementById('name');
const roleElement = document.getElementById('ruoli');

// Creo la lista dello staff:

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        src: 'img/wayne-barnett-founder-ceo.jpg'
    }, {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        src: 'img/angela-caroll-chief-editor.jpg'
    }, {
        name: 'Walter Gordon',
        role: 'Office Manager',
        src: 'img/walter-gordon-office-manager.jpg'
    }, {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        src: 'img/angela-lopez-social-media-manager.jpg'
    }, {
        name: 'Scott Estrada',
        role: 'Developer',
        src: 'img/scott-estrada-developer.jpg'
    }, {
        name: 'Barbara Ramos',
        role: 'Graphic Design',
        src: 'img/barbara-ramos-graphic-designer.jpg'
    }
]

const teamList = document.querySelector('.team-container');

let listItems = '';

// Stampare su console i dati di tutti i memebri:
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    listItems += `
    <div class="team-card">
        <div class="card-image">
            <img src="${member.src}" alt="${member.name}">
        </div>
           <div class="card-text">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        </div> 
    </div>
`;

    console.log(member.name);
    console.log(member.role);
    console.log(member.src);


}
teamList.innerHTML = listItems;



//     //! ad ogni giro la singola "key", in questo caso non va bene a causa di un diverso dato alla fine, l'immagine.
//     for (let key in member) {
//         console.log(member[key]);
//     }