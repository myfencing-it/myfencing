// ---------------------------------------------------------------------
// Author: Fabio D Filippone
// History:
// FFD - 06/07/2025 23:13:16 - v.1.0.0
// FFD - 23/07/2025 21:58:47 - v.1.1.3
// ---------------------------------------------------------------------



// Funzione per creare tabella come nodo DOM
function creaTabellaConIntestazione44() {
  const intestazioni = ["Posizione", "Squadra", "Punti"];
  const dati = [
    [1, "Squadra A", 15],
    [2, "Squadra B", 12],
    [3, "Squadra C", 10]
  ];

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  intestazioni.forEach(h => {
    const th = document.createElement("th");
    th.textContent = h;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  dati.forEach(riga => {
    const tr = document.createElement("tr");
    riga.forEach(cella => {
      const td = document.createElement("td");
      td.textContent = cella;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table;
}

function creaTabellaConIntestazioneJS() {
  const intestazioni = ["Posizione", "Squadra", "Punti"];
  const dati = [
    [1, "Squadra A", 15],
    [2, "Squadra B", 12],
    [3, "Squadra C", 10]
  ];

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  table.style.border = "1px solid black";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  intestazioni.forEach(h => {
    const th = document.createElement("th");
    th.textContent = h;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    th.style.backgroundColor = "#f2f2f2";
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  dati.forEach(rowData => {
    const tr = document.createElement("tr");
    rowData.forEach(cellData => {
      const td = document.createElement("td");
      td.textContent = cellData;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table;
}


function creaTabellaConIntestazione() {
  const intestazioni = ["Posizione", "Squadra", "Punti"];
  const dati = [
    [1, "Squadra A", 15],
    [2, "Squadra B", 12],
    [3, "Squadra C", 10]
  ];

  let html = '<table class="classifica-tabella" border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%;">';

  // Intestazione
  html += '<thead><tr>';
  intestazioni.forEach(intestazione => {
    html += `<th>${intestazione}</th>`;
  });
  html += '</tr></thead>';

  // Corpo tabella
  html += '<tbody>';
  dati.forEach(riga => {
    html += '<tr>';
    riga.forEach(cell => {
      html += `<td>${cell}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody>';

  html += '</table>';

  return html;
};


function creaTabellaConIntestazioneOK() {
  const headers = ['Nome', 'Punteggio', 'Posizione'];
  const rows = [
    ['Mario Rossi', 95, 1],
    ['Luca Bianchi', 87, 2],
    ['Giulia Verdi', 82, 3]
  ];

  let html = '<table border="1" style="border-collapse: collapse; width: 100%;">';
  
  // Intestazione
  html += '<thead><tr>';
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr></thead>';
  
  // Corpo
  html += '<tbody>';
  rows.forEach(row => {
    html += '<tr>';
    row.forEach(cell => {
      html += `<td>${cell}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';

  return html;
}


function creaTabellaConIntestazione1() {
	console.log("18");
  let classificaHTML = '<h2>Classifica Attuale</h2><ul>';	
  const intestazioni = ["Posizione", "Squadra", "Punti"]; // array interno

  const table = document.createElement("table");
  table.classList.add("classifica-tabella");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  intestazioni.forEach(intestazione => {
    const th = document.createElement("th");
    th.textContent = intestazione;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  document.body.appendChild(table);
}

// ---------------------------------------------------------------------
// Function ClassificaFinale
// ---------------------------------------------------------------------
//function ClassificaFinale() {
//  if (!Array.isArray(giocatorib)) {
//    return '<p>Errore: dati classifica non disponibili.</p>';
//  }
//
//  const table = document.createElement("table");
//  table.classList.add("classifica-tabella");
//
//  // Aggiungi l'intestazione
//  //table.appendChild(thead);
//
//  // Crea tbody dinamicamente (esempio)
//  const tbody = document.createElement("tbody");
//
//giocatoric.forEach(giocatore => {
//  const tr = document.createElement("tr");
//
//  [giocatore.position, giocatore.rank, giocatore.athleta, giocatore.clubcode, giocatore.club]
//    .forEach(val => {
//      const td = document.createElement("td");
//      td.textContent = val;
//      tr.appendChild(td);
//    });
//
//  tbody.appendChild(tr);
//});
//
//table.appendChild(tbody);
//
//// Infine, inserisci tutto nel contenitore
//document.getElementById("contenitore").appendChild(table);
//
//
//  giocatorib.forEach(giocatore => {
//    classificaHTML += `
//      <tr>
//        <td>${giocatore.position}</td>
//        <td>${giocatore.rank}</td>
//        <td>${giocatore.athleta}</td>
//        <td>${giocatore.clubcode}</td>
//        <td>${giocatore.club}</td>
//      </tr>
//    `;
//  });
//
//  classificaHTML += `
//          </tbody>
//        </table>
//      </div>
//    </div>
//  `;
//
//  return classificaHTML;
//}


// ---------------------------------------------------------------------
// Function ClassificaFinale
// ---------------------------------------------------------------------
function ClassificaFinale() {
  if (!Array.isArray(giocatorib)) {
    return '<p>Errore: dati classifica non disponibili.</p>';
  }

  let classificaHTML = `
    <div class="classifica-container">
      <h2>Classifica Finale</h2>
      <div class="table-wrapper">
        <table class="classifica-tabella">
          <thead>
            <tr>
              <th>Posizione</th>
              <th>Rank</th>
              <th>Nome Atleta</th>
              <th>Codice Club</th>
              <th>Club</th>
            </tr>
          </thead>
          <tbody>
  `;

  giocatorib.forEach(giocatore => {
    classificaHTML += `
      <tr>
        <td>${giocatore.position}</td>
        <td>${giocatore.rank}</td>
        <td>${giocatore.athleta}</td>
        <td>${giocatore.clubcode}</td>
        <td>${giocatore.club}</td>
      </tr>
    `;
  });

  classificaHTML += `
          </tbody>
        </table>
      </div>
    </div>
  `;

  return classificaHTML;
}


// ---------------------------------------------------------------------
// Function ClassificaIniziale
// ---------------------------------------------------------------------
function ClassificaIniziale() {
  // Genera un HTML per la classifica
  let classificaHTML = '<h2>Classifica Attuale</h2><ul>';
  giocatorib.forEach(giocatore => {
    //classificaHTML += `<li>${giocatore.nome} - Punteggio: ${giocatore.punteggio} - Punteggio: ${giocatore.position} ${giocatore.rank} ${giocatore.athleta} ${giocatore.clubcode} ${giocatore.club}</li>`;
    classificaHTML += `<li>${giocatore.position} ${giocatore.rank} ${giocatore.athleta} ${giocatore.clubcode} ${giocatore.club}</li>`;    
  });
  classificaHTML += '</ul>';
  return classificaHTML;
}



// Questa funzione è un'alternativa per la generazione del contenuto dei pools.
// Invece di generare il contenuto al caricamento dello script,
// lo generiamo solo quando l'utente clicca sulla voce "pools".
function generaContenutoPools() {
  console.log("Stai generando il contenuto dei pools!");
  
  let poolContent = '<p><strong>Pools</strong></p>';
  for (let i = 1; i <= 60; i++) {
    poolContent += `Riga ${i}<br>`;
  }
  return poolContent;
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

  const label = document.createElement("span");
  label.className   = "label";
  label.textContent = labelTesto;

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
// Function createMenuBar
// ---------------------------------------------------------------------
function createMenuBar() {
  const menu = document.createElement('div');
  menu.className = 'menu-bar';

  const tabs = document.createElement('nav');
  tabs.className = 'menu-tabs';

  itemMenu.forEach(opt => {
    const div = document.createElement('div');
    div.className = 'menu-option';
    div.setAttribute('data-target', opt.target);
    div.textContent = opt.name;

    div.addEventListener('click', () => {
      const contentArea = document.getElementById('content-area');

      const fnOrHTML = contentMap[opt.target];

      if (typeof fnOrHTML === 'function') {
        // Invoca la funzione, supponiamo ritorni nodo DOM o stringa
        const result = fnOrHTML();
        contentArea.innerHTML = ''; // Pulisci prima
        if (result instanceof Node) {
          contentArea.appendChild(result);
        } else if (typeof result === 'string') {
          contentArea.innerHTML = result;
        } else {
          contentArea.innerHTML = '<p>Contenuto non disponibile</p>';
        }
      } else if (typeof fnOrHTML === 'string') {
        contentArea.innerHTML = fnOrHTML;
      } else {
        contentArea.innerHTML = '<p>Contenuto non disponibile</p>';
      }

      // Gestisci classe active
      document.querySelectorAll('.menu-option').forEach(el => el.classList.remove('active'));
      div.classList.add('active');
    });

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

  // Simula click sul primo elemento per mostrare contenuto iniziale
  setTimeout(() => {
    document.querySelector('.menu-option')?.click();
  }, 0);
};







function createMenuBar00() {
  const menu = document.createElement('div');
  menu.className = 'menu-bar';

  const tabs = document.createElement('nav');
  tabs.className = 'menu-tabs';

  itemMenu.forEach(opt => {
    const div = document.createElement('div');
    div.className = 'menu-option';
    div.setAttribute('data-target', opt.target);
    div.textContent = opt.name;

    div.addEventListener('click', () => {
      const contentArea = document.getElementById('content-area');
      contentArea.innerHTML = contentMap[opt.target] || '<p>Contenuto non trovato</p>';

      document.querySelectorAll('.menu-option').forEach(el => el.classList.remove('active'));
      div.classList.add('active');
    });

    tabs.appendChild(div);
  });

  menu.appendChild(tabs);
  document.body.appendChild(menu);

  const contentArea = document.createElement('div');
  contentArea.id = 'content-area';
  document.body.appendChild(contentArea);

  // Mostra contenuto iniziale
  setTimeout(() => {
    document.querySelectorAll('.menu-option')[0]?.click();
  }, 0);
}; // end function createMenuBar

 
// ---------------------------------------------------------------------
// Function ClassificaIniziale
// ---------------------------------------------------------------------
function ClassificaInizialeBIS() {
  const table = document.createElement("table");

  const caption = document.createElement("caption");
  caption.textContent = "Classifica";
  table.appendChild(caption);

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Posizione", "Rank", "Atleta", "Codice Club", "Club"];
  
  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  atleti.forEach(atleta => {
    const row = document.createElement("tr");

    const tdPosition = document.createElement("td");
    tdPosition.textContent = atleta.position;
    row.appendChild(tdPosition);

    const tdRank = document.createElement("td");
    tdRank.textContent = atleta.rank;
    row.appendChild(tdRank);

    const tdNome = document.createElement("td");
    tdNome.textContent = atleta.athleta;
    row.appendChild(tdNome);

    const tdCode = document.createElement("td");
    tdCode.textContent = atleta.clubcode;
    row.appendChild(tdCode);

    const tdClub = document.createElement("td");
    tdClub.textContent = atleta.club;
    row.appendChild(tdClub);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  return table;
}


// =====================================================================
//             MAIN
// =====================================================================
const contentMap = {
  home: () => '<p>1 Benvenuto nella Home.</p>',
  ranking: ClassificaIniziale,                  // funzione, non chiamata
  pools: generaContenutoPools,                  // funzione, non chiamata
  rankingpools: creaTabellaConIntestazioneJS,   // funzione, non chiamata
  tableau: creaTabellaConIntestazione44,        // funzione, non chiamata
  finalranking: ClassificaFinale                // funzione, non chiamata
};

// Inizializza tutto a caricamento completato
window.addEventListener('DOMContentLoaded', () => {
  TitleBar();      // Crea la barra del titolo
  createMenuBar(); // Crea il menu e attiva il caricamento dei contenuti
});


div.addEventListener('click', () => {
  const contentArea = document.getElementById('content-area');
  const fn = contentMap[opt.target];

  if (typeof fn === 'function') {
    const result = fn();

    // Se è un nodo DOM (elemento), appendilo; altrimenti metti innerHTML
    if (result instanceof Node) {
      contentArea.innerHTML = '';   // pulisco
      contentArea.appendChild(result);
    } else if (typeof result === 'string') {
      contentArea.innerHTML = result;
    } else {
      contentArea.textContent = 'Contenuto non valido';
    }
  } else if (typeof fn === 'string') {
    contentArea.innerHTML = fn;
  } else {
    contentArea.innerHTML = '<p>Contenuto non trovato</p>';
  }

  document.querySelectorAll('.menu-option').forEach(el => el.classList.remove('active'));
  div.classList.add('active');
});


