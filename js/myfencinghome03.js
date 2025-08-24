// ---------------------------------------------------------------------
// Author: Fabio D Filippone
// History:
// FFD - 06/07/2025 23:13:16 - v.1.0.0
// FFD - 23/07/2025 21:58:47 - v.1.1.3
// FFD - 05/08/2025 23:05:12 - v.1.1.4
// FFD - 09/08/2025 17:13:27 - v.1.2.0
// ---------------------------------------------------------------------
function rankingPoolsFunction() {
  const div = document.createElement('div');
  div.textContent = "Contenuto ranking pools!";
  return div;
}
// ---------------------------------------------------------------------
// Function TitleBar
// ---------------------------------------------------------------------
function TitleBar() {
  const categoria = datiTT.category;
  const titolo = datiTT.title;
  const logoSrc = "images/fencing-logo.png";
  const labelTesto = datiTT.date;

  const bar = document.createElement("div");
  bar.className = "title-bar";

  const left = document.createElement("div");
  left.className   = "left";
  left.textContent = categoria;

  const center = document.createElement("div");
  center.className   = "center";
  center.textContent = titolo;

  const right = document.createElement("div");
  right.className = "right";

  let today = new Date();
        today = today.toLocaleDateString('it-IT');

  const label = document.createElement("span");
  label.className   = "label";
  label.textContent = today;

  const img = document.createElement("img");
  img.src = logoSrc;
  img.alt = "Logo";

  right.appendChild(label);
  right.appendChild(img);

  bar.appendChild(left);
  bar.appendChild(center);
  bar.appendChild(right);

  document.body.prepend(bar);
}; // end function TitleBar

// ---------------------------------------------------------------------
// Function FooterBar
// ---------------------------------------------------------------------
function FooterBar() {
  const footer = document.createElement("div");
  footer.className = "footer-bar";

  const left = document.createElement("div");
  left.className = "left";
  //left.textContent = "© " + new Date().getFullYear() + " - Tutti i diritti riservati";

  const center = document.createElement("div");
  center.className = "center";
  center.textContent = "Created by FDF";

  const right = document.createElement("div");
  right.className = "right";
  
//  const img = document.createElement("img");
//  img.src = "images/fencing-logo.png"; // Puoi cambiare il path
//  img.alt = "Logo";
//  right.appendChild(img);

  footer.appendChild(left);
  footer.appendChild(center);
  footer.appendChild(right);

  document.body.appendChild(footer);
}

// ---------------------------------------------------------------------
// Function Gironi
// ---------------------------------------------------------------------
function Gironi(eventId) {
// Abilita le voci extra quando entri in pools
  enableMenuItem('pools');
  enableMenuItem('rankingpools');
  enableMenuItem('tableau');
  enableMenuItem('altro');
  enableMenuItem('finalranking');  
 
  // Evidenzia "pools" come selezionata
  document.querySelectorAll('.menu-option').forEach(el => el.classList.remove('active'));
  const poolsItem = document.querySelector(`.menu-option[data-target="pools"]`);
  if (poolsItem) poolsItem.classList.add('active');
 
 
  let poolContent = `<p><strong>Pools funzione Gironi fff</strong></p>`;

  const div = document.createElement('div');
  div.textContent = `Pool dell'evento con ID: ${eventId}\n`;

  for (let i = 1; i <= 60; i++) {
    poolContent += `Riga ${i}<br>`;
  }

  // Uso innerHTML perché poolContent contiene tag <p> e <br>
  div.innerHTML = `Pool dell'evento con ID: ${eventId}<br>` + poolContent;

  return div;
}

 





// ---------------------------------------------------------------------
// Function creaTabellaConTitolo
// ---------------------------------------------------------------------
function creaTabellaConTitolo() {
  // 1. Titolo
  const titolo = document.createElement("h2");
  titolo.textContent = "RankingPools id=" +eventid ;
  titolo.style.marginBottom = "10px";

  // 2. Tabella
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  table.style.border = "1px solid black";

  const thead = document.createElement("thead");
  const intestazioni = ["Posizione", "Squadra", "Punti"];
  const headerRow = document.createElement("tr");
  intestazioni.forEach(testo => {
    const th = document.createElement("th");
    th.textContent = testo;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    th.style.backgroundColor = "#f2f2f2";
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // 3. Corpo tabella
  const tbody = document.createElement("tbody");
  const dati = [
    [1, "Squadra A", 15],
    [2, "Squadra B", 12],
    [3, "Squadra C", 10],
    [1, "Squadra A", 15],
    [2, "Squadra B", 12],
    [3, "Squadra C", 10],
    [1, "Squadra A", 15],
    [2, "Squadra B", 12],
    [3, "Squadra C", 10],
    [1, "Squadra A", 15],
    [2, "Squadra B", 12],
    [3, "Squadra C", 10]
  ];
  dati.forEach(riga => {
    const tr = document.createElement("tr");
    riga.forEach(val => {
      const td = document.createElement("td");
      td.textContent = val;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  // 4. Contenitore
  const container = document.createElement("div");
  container.appendChild(titolo);
  container.appendChild(table);

  return container; // 👈 ritorna il contenitore con titolo + tabella
}

// ---------------------------------------------------------------------
// Function RaceList
// ---------------------------------------------------------------------
function RaceList() {
  const container = document.createElement('div');
  container.className = 'racelist-container scrollable-container';

  const grid = document.createElement('div');
  grid.className = 'event-grid event-list-single-column';
  grid.id = 'event-list';

  container.appendChild(grid);

  // Genera gli eventi
  const html = eventlist.map(ev => `
    <div class="event-card" data-id="${ev.id}">    
      <div class="event-header">
        ${ev.date} - ${ev.location} - ${ev.title} - ${ev.category}
      </div>
      <span class="event-description">Season: ${ev.season} - ${ev.description}</span>
    </div>
  `).join('');

  grid.innerHTML = html;

grid.addEventListener('click', e => {
  console.log('35');  // Per test visivo
  const card = e.target.closest('.event-card');
  if (!card) return;

  const id = card.dataset.id;
  let eventid = card.dataset.id;
  console.log('Hai cliccato sull\'evento con ID:', id);

  // Qui aggiorno il menu con le voci extra della modalità pool
  //createOrUpdateMenuBar('pool', 'pools'); // 'pools' è la voce predefinita da selezionare

  // Carica manualmente il contenuto
  const target = 'pools';
  const fn = contentMap[target];
  console.log('target', target);  

  const contentArea = document.getElementById('content-area');
  contentArea.innerHTML = '';

  if (typeof fn === 'function') {
    const result = fn(eventid);
    
    if (result instanceof Node) {
      console.log('riga 64', result);
      contentArea.appendChild(result);
    } else if (typeof result === 'string') {
      contentArea.innerHTML = result;
    } else {
      console.log('riga 70');  
      contentArea.innerHTML = '<p>Contenuto non disponibile</p>';
    }
  } else {
    contentArea.innerHTML = '<p>Funzione non trovata</p>';
  }
});

  return container;
}; // end function RaceList



function createOrUpdateMenuBar(functionName = 'default', defaultTarget = 'home', eventId = null) {
  const enabledTargets = menuConfigByFunction[functionName] || menuConfigByFunction.default;
console.log('261  enabledTargets:', enabledTargets);
  // Copia array per evitare modifiche sull'originale
  const menuItems = [...itemMenuHome2];

  // Rimuovi menu precedente
  const oldMenu = document.querySelector('.menu-bar');
  if (oldMenu) oldMenu.remove();

  // Crea contenitore menu
  const menu = document.createElement('div');
  menu.className = 'menu-bar';

  const tabs = document.createElement('nav');
  tabs.className = 'menu-tabs';

  // Crea le voci di menu
  menuItems.forEach(opt => {
    const div = document.createElement('div');
    div.className = 'menu-option';
    div.setAttribute('data-target', opt.target);
    div.textContent = opt.name;

    // Disabilita voci non abilitate nella config
    if (enabledTargets.length && !enabledTargets.includes(opt.target)) {
      div.classList.add('disabled');
      div.style.pointerEvents = 'none';
      div.style.opacity = '0.5';
    } else {
//      div.addEventListener('click', () => {
//         console.log(`290 Cliccato menu: ${opt.target}`); // LOG 1
//
//        const contentArea = document.getElementById('content-area');
//        const fnOrHTML = contentMap[opt.target];
//        contentArea.innerHTML = '';
//
//      // Log per vedere quale div è stato cliccato
//      console.log('Div cliccato:', div);
//      console.log('Classe div:', div.className);
//      console.log('Contenuto mappa funzione:', contentMap[opt.target]);
//
//
//
//        if (typeof fnOrHTML === 'function') {
//          // Passa eventId solo se definito e funzione lo accetta
//          const result = (fnOrHTML.length > 0 && eventId !== null) ? fnOrHTML(eventId) : fnOrHTML();
//
//          if (result instanceof Node) {
//            contentArea.appendChild(result);
//          } else if (typeof result === 'string') {
//            contentArea.innerHTML = result;
//          } else {
//            contentArea.innerHTML = '<p>2 Contenuto non disponibile</p>';
//          }
//        } else if (typeof fnOrHTML === 'string') {
//          contentArea.innerHTML = fnOrHTML;
//        } else {
//          contentArea.innerHTML = '<p>1 Contenuto non disponibile</p>';
//        }
//
//        // Aggiorna la selezione visiva del menu
//        document.querySelectorAll('.menu-option').forEach(el => el.classList.remove('active'));
//        div.classList.add('active');
//      });
div.addEventListener('click', () => {
  console.log(`Cliccato menu: ${opt.target}`);

  // Aggiorna il menu chiamando di nuovo la funzione con il nuovo functionName
  createOrUpdateMenuBar(opt.target, opt.target, eventId);
  
  // Carica il contenuto subito (oppure lascia che createOrUpdateMenuBar lo faccia col setTimeout)
  const contentArea = document.getElementById('content-area');
  const fnOrHTML = contentMap[opt.target];
  contentArea.innerHTML = '';

  if (typeof fnOrHTML === 'function') {
    const result = (fnOrHTML.length > 0 && eventId !== null) ? fnOrHTML(eventId) : fnOrHTML();

    if (result instanceof Node) {
      contentArea.appendChild(result);
    } else if (typeof result === 'string') {
      contentArea.innerHTML = result;
    } else {
      contentArea.innerHTML = '<p>2 Contenuto non disponibile</p>';
    }
  } else if (typeof fnOrHTML === 'string') {
    contentArea.innerHTML = fnOrHTML;
  } else {
    contentArea.innerHTML = '<p>1 Contenuto non disponibile</p>';
  }

  document.querySelectorAll('.menu-option').forEach(el => el.classList.remove('active'));
  div.classList.add('active');
});


    }

    tabs.appendChild(div);
  });

  menu.appendChild(tabs);
  document.body.appendChild(menu);

  // Crea content-area se non esiste
  let contentArea = document.getElementById('content-area');
  if (!contentArea) {
    contentArea = document.createElement('div');
    contentArea.id = 'content-area';
    document.body.appendChild(contentArea);
  }

  // Attiva voce predefinita (simula click)
  setTimeout(() => {
    const defaultItem = document.querySelector(`.menu-option[data-target="${defaultTarget}"]`);
    if (defaultItem && !defaultItem.classList.contains('disabled')) {
      defaultItem.click();
    }
  }, 0);
}


// ---------------------------------------------------------------------
// Helper interni: abilitare/disabilitare singole voci
// ---------------------------------------------------------------------
function enableMenuItem(target) {
  const item = document.querySelector(`.menu-option[data-target="${target}"]`);
  if (item) {
    item.classList.remove('disabled');
    item.style.pointerEvents = 'auto';
    item.style.opacity = '1';
  }
}

function disableMenuItem(target) {
  const item = document.querySelector(`.menu-option[data-target="${target}"]`);
  if (item) {
    item.classList.add('disabled');
    item.style.pointerEvents = 'none';
    item.style.opacity = '0.5';
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  }
}

// =====================================================================
//             MAIN
// =====================================================================
function MAIN() {  };

// Riferimento globale per contenere il menu (per rimuoverlo facilmente)
let currentMenu     = null;
let eventid         = null;
let selectedEventId = null;

 

const itemMenuHome2 = [
  { name: "Home",            target: "home"         },
  { name: "Athleta Ranking", target: "ranking"      },
  { name: "Pools1",           target: "pools"        },
  { name: "Ranking Pools2",   target: "rankingpools" },
  { name: "Tableau3",         target: "tableau"      },
  { name: "altro4",           target: "altro"        },
  { name: "Final Ranking5",   target: "finalranking" }
];


const contentMap = {
  home:         RaceList,
  ranking:      creaTabellaConTitolo,
  pools:        Gironi,
  rankingpools: rankingPoolsFunction,
  tableau:      Gironi,
  altro:        Gironi,
  finalranking: Gironi
};

// Configurazione: quali voci sono abilitate per ogni funzione
const menuConfigByFunction = {
  default:      ['home', 'ranking', 'pools', 'rankingpools', 'tableau', 'altro', 'finalranking'],
  home:         ['home', 'ranking'], // solo queste due voci visibili all'inizio
  pools:        ['home', 'ranking', 'pools', 'rankingpools', 'tableau', 'altro', 'finalranking'],
  rankingpools: ['home', 'ranking', 'pools', 'rankingpools', 'tableau', 'altro', 'finalranking'],
  tableau:      ['home', 'ranking', 'pools', 'rankingpools', 'tableau', 'altro', 'finalranking'],
  altro:        ['home', 'ranking', 'pools', 'rankingpools', 'tableau', 'altro', 'finalranking'],
  finalranking: ['home', 'ranking', 'pools', 'rankingpools', 'tableau', 'altro', 'finalranking'],
};


// Inizializza tutto
window.addEventListener('DOMContentLoaded', () => {
  TitleBar();
  FooterBar();
  createOrUpdateMenuBar('home', 'home');
});