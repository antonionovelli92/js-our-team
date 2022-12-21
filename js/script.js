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

const teams = [
    {
        staff: [
            { firstName: 'Wayne', lastName: 'Barnett', role: 'Founder & CEO', photo: `img` },
            { firstName: 'Angela', lastName: 'Caroll', role: 'Chied Editor', photo: `img` },
            { firstName: 'Walter', lastName: 'Gordon', role: 'Office Manager', photo: `img` },
        ]
    },
    {
        staff: [
            { firstName: 'Angela', lastName: 'Lopez', role: 'Social Media Manager', photo: `img` },
            { firstName: 'Scott', lastName: 'Estrada', role: 'Developer', photo: `img` },
            { firstName: 'Barbara', lastName: 'Ramos', role: 'Graphic Designer', photo: `img` },
        ]
    },

];
console.table(teams)