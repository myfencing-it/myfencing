// ---------------------------------------------------------------------
// Author: Fabio D Filippone
// History:
// FFD - 06/07/2025 23:13:16 - v.1.0.0
// FFD - 23/07/2025 21:58:47 - v.1.1.3
// FFD - 05/08/2025 23:05:12 - v.1.1.4
// ---------------------------------------------------------------------
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
  console.log('Hai cliccato sull\'evento con ID:', id);

  // 1. Mostra tutte le voci di menu (ma disattiva auto-click iniziale)
  createMenuBar(itemMenu.map(item => item.target), false);

  // 2. Carica manualmente il contenuto desiderato (es. StartRankingPool)
  const target = 'ranking'; // oppure 'pools', 'tableau' ecc. se vuoi cambiarlo
  const fn = contentMap[target];
  console.log('target', target);  

  const contentArea = document.getElementById('content-area');
  contentArea.innerHTML = '';

  if (typeof fn === 'function') {
    const result = fn();
    if (result instanceof Node) {
      console.log('riga 64', result);  

      //TEST
      //contentArea.appendChild(result);
      console.log('Controllo nodo:', result.outerHTML);
      contentArea.innerHTML = ''; // svuoto tutto per sicurezza
      contentArea.innerHTML = result.outerHTML; // forzo come HTML      
      
    } else if (typeof result === 'string') {
      console.log('riga 67');  
      contentArea.innerHTML = result;
    } else {
      console.log('riga 70');  
      contentArea.innerHTML = '<p>Contenuto non disponibile</p>';
    }
  } else {
    contentArea.innerHTML = '<p>Funzione non trovata</p>';
  }

  // 3. Evidenzia la voce attiva nel menu
  setTimeout(() => {
    document.querySelector(`[data-target="${target}"]`)?.classList.add('active');
  }, 0);
});



  return container;
}; // end function RaceList


// ---------------------------------------------------------------------
// Function ScheduledRaces
// ---------------------------------------------------------------------
function ScheduledRaces() {
  const container = document.createElement('div');
  container.className = 'event-list-container';

  const grid = document.createElement('div');
  grid.className = 'event-grid';
  grid.id = 'event-list';

  container.appendChild(grid);

  // Genera gli eventi
  const html = eventsAA.map(ev => `
    <div class="event-card">
      <div class="event-header">
        <strong>${ev.title}</strong>
        <span class="event-description">(${ev.description})</span>
      </div>
      <small>${ev.date} ⏰ ${ev.time}</small>
    </div>
  `).join('');



  grid.innerHTML = html;

  return container;  
}; // end function ScheduledRaces



// ---------------------------------------------------------------------
// Function ClassificaIniziale
// ---------------------------------------------------------------------
function ClassificaIniziale() {
  // 1. Titolo
  const titolo = document.createElement("h2");
  titolo.textContent = "Classifica Iniziale";
  titolo.classList.add("FFDRankingHeaderTitle");

  // 2. Contenitore scrollabile per la tabella
  const scrollContainer = document.createElement("div");
        scrollContainer.style.maxHeight = "600px";
        scrollContainer.style.overflowY = "auto";
        scrollContainer.style.border    = "1px solid red";


        scrollContainer.style.width = "800px";       // o un'altra larghezza a tua scelta
        scrollContainer.style.marginLeft = "0";      // niente margine a sinistra
        scrollContainer.style.marginRight = "auto";  // spinge tutto verso sinistra

  // 3. Tabella
  const Rtable = document.createElement("Rtable");
  Rtable.style.borderCollapse = "collapse";
  Rtable.style.width = "100%";

  // Fissa la larghezza delle colonne
  Rtable.style.RtableLayout = "fixed";

  // 4. Intestazioni
  const thead = document.createElement("thead");
  const intestazioni = ["Pos", "Rank", "Athleta", "Club", "Clubname"];
  const headerRow = document.createElement("tr");
  intestazioni.forEach(testo => {
    const th = document.createElement("th");
    th.textContent = testo;
    th.style.position= "sticky";
    th.classList.add("FFDRankingHeaderTable");
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  Rtable.appendChild(thead);

  // 5. Corpo tabella
  const tbody = document.createElement("tbody");
   giocatorib.forEach(giocatore => {
       const tr = document.createElement("tr");

       const cpos = document.createElement("td");
       cpos.textContent     = giocatore.position;
       cpos.style.fontSize  = "13px";
       cpos.style.textAlign = "right";
       cpos.style.border    = "1px solid #ccc";
       cpos.style.padding   = "5px";
       cpos.style.minWidth  = "40px";
       tr.appendChild(cpos); // Aggiungi al <tr>

       const crank = document.createElement("td");
       crank.textContent = giocatore.rank;
       crank.style.minWidth  = "40px";
       crank.style.fontSize  = "13px";
       crank.style.textAlign = "right";
       crank.style.border    = "1px solid #ccc";
       crank.style.padding   = "5px";

       tr.appendChild(crank);

       if (giocatore.clubcode.startsWith("EE")) {
           let cc = country.find(c => c.cio === giocatore.clubcode.slice(2, 5));
           giocatore.flag=cc.flag;
       };

       const cathleta = document.createElement("td");
             cathleta.style.minWidth  = "250px";
             cathleta.style.fontSize  = "13px";
             cathleta.style.textAlign = "left";
             cathleta.style.border    = "1px solid #ccc";
             cathleta.style.padding   = "5px";
       const flag    = document.createElement("span");
             flag.classList.add("fi", `fi-${giocatore.flag}`);
             flag.style.marginRight = "6px";
             cathleta.appendChild(flag);

             const img = document.createElement("img");
             img.style.height        = "16px";
             img.style.marginRight   = "6px";
             img.style.verticalAlign = "middle";
             if (giocatore.position === 1) {
               img.src = "../images/goldmedal64.gif";
             } else if (giocatore.position === 2) {
               img.src = "../images/silvermedal64.gif";
             } else if (giocatore.position === 3) {
               img.src = "../images/bronzemedal64.gif";
             } else if (giocatore.position === 4) {
               img.src = "../images/bronzemedal64.gif";
             };
             cathleta.appendChild(img);
             cathleta.appendChild(document.createTextNode(giocatore.athleta));
             tr.appendChild(cathleta);

       const cclubc = document.createElement("td");
             cclubc.textContent     = giocatore.clubcode;
             cclubc.style.minWidth  = "70px";
             cclubc.style.fontSize  = "13px";
             cclubc.style.textAlign = "left";
             cclubc.style.border    = "1px solid #ccc";
             cclubc.style.padding   = "5px";
             tr.appendChild(cclubc);

       const cclub = document.createElement("td");
             cclub.textContent     = giocatore.club;
             cclub.style.fontSize  = "13px";
             cclub.style.textAlign = "left";
             cclub.style.border    = "1px solid #ccc";
             cclub.style.padding   = "5px";
             tr.appendChild(cclub);

             tbody.appendChild(tr);
   });

   Rtable.appendChild(tbody);

  // 6. Contenitore finale
  scrollContainer.appendChild(Rtable);
  const container = document.createElement("div");
  container.appendChild(titolo);
  container.appendChild(scrollContainer);

  return container;
}


function altro() {
  // 1. Titolo
  const titolo = document.createElement("h2");
  titolo.textContent = "Classifica Torneo";
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


function creaTabellaConTitolo() {
  // 1. Titolo
  const titolo = document.createElement("h2");
  titolo.textContent = "Classifica Torneo";
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







function ClassificaIniziale0() {
console.log("47");
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

// ---------------------------------------------------------------------
// Function StartRankingPool
// ---------------------------------------------------------------------
function StartRankingPool() {
    const myDiv = document.createElement("div");
          myDiv.classList.add("RankingTable-Container");
    const title = document.createElement("h2");
          title.textContent = "Classifica Iniziale 3";
          title.classList.add("FFDRankingHeaderTitle");
          myDiv.appendChild(title);
    const coeffd = document.createElement("p");
          coeffd.textContent     = "text";
          coeffd.style.textAlign = "right";
          myDiv.appendChild(coeffd);

    const myWrapperDiv = document.createElement("div");
          myWrapperDiv.classList.add("RankingTable-Wrapper");

    const RTable = document.createElement("table");
          RTable.classList.add("RankingTable");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const intestazioni = ["Pos", "Rank", "Athleta","","Anno","Club", "Club Name", "Points"];
    intestazioni.forEach(testo => {
        const th = document.createElement("th");
        th.textContent = testo;
        if (testo === "Athleta") th.style.borderRight  = "none";
        if (testo === "")  th.style.borderLeft   = "none";
        headerRow.appendChild(th);
    });

    const tbody = document.createElement("tbody");
          StartRanking.forEach(rowData => {
          const row = document.createElement("tr");
          const td1 = document.createElement("td");
                td1.textContent = rowData.position;
                td1.style.textAlign = "right";
                row.appendChild(td1);
          const td2 = document.createElement("td");
                td2.textContent = rowData.rank;
                td2.style.textAlign = "right";
                row.appendChild(td2);
          const td3 = document.createElement("td");

          if (rowData.clubcode.startsWith("EE")) {
              let cc = country.find(c => c.cio === rowData.clubcode.slice(2, 5));
              rowData.flag=cc.flag;
          };

          const flag = document.createElement("span");
                flag.classList.add("fi", `fi-${rowData.flag}`);
                flag.style.marginRight = "6px";
                td3.appendChild(flag);
                td3.appendChild(document.createTextNode(rowData.athleta));

                row.appendChild(td3);
                td3.style.borderRight   = "none";
           const td4 = document.createElement("td");
              // td4.textContent = "xxx"; // Podium
                 td4.style.borderLeft = "none";

          const img = document.createElement("img");
                img.style.height        = "16px";
                img.style.marginRight   = "6px";
                img.style.verticalAlign = "middle";
                if (rowData.position === 1) {
                   img.src = "../images/goldmedal64.gif";
                } else if (rowData.position === 2) {
                   img.src = "../images/silvermedal64.gif";
                } else if (rowData.position === 3) {
                   img.src = "../images/bronzemedal64.gif";
                } else if (rowData.position === 4) {
                   img.src = "../images/bronzemedal64.gif";
                };
                td4.appendChild(img);
                row.appendChild(td4);
          const td5 = document.createElement("td");
                td5.textContent = rowData.yob;
                row.appendChild(td5);

          const td6 = document.createElement("td");
                td6.textContent = rowData.clubcode;
                row.appendChild(td6);

          const td7 = document.createElement("td");
                td7.textContent = rowData.club;
                row.appendChild(td7);
          const td8 = document.createElement("td");
                td8.textContent = "14,789";
                td8.style.textAlign = "right";
                row.appendChild(td8);
          tbody.appendChild(row);
       }); // forEach giocatoric

    RTable.appendChild(tbody);
    thead.appendChild(headerRow);
    RTable.appendChild(thead);
    myWrapperDiv.appendChild(RTable);
    myDiv.appendChild(myWrapperDiv);
    document.body.appendChild(myDiv);

    return myDiv;
} // end function StartRankingPool

// ---------------------------------------------------------------------
// Function FinalRanking
// ---------------------------------------------------------------------
function FinalRanking() {
    const myDiv = document.createElement("div");
          myDiv.classList.add("RankingTable-Container");
    const title = document.createElement("h2");
          title.textContent = "Classifica Finale";
          title.classList.add("FFDRankingHeaderTitle");
          myDiv.appendChild(title);
    const coeffd = document.createElement("p");
          coeffd.textContent     = "text";
          coeffd.style.textAlign = "right";
          myDiv.appendChild(coeffd);

    const myWrapperDiv = document.createElement("div");
          myWrapperDiv.classList.add("RankingTable-Wrapper");

    const RTable = document.createElement("table");
          RTable.classList.add("RankingTable");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const intestazioni = ["Pos", "Rank", "Athleta","","Anno","Club", "Club Name", "Points"];
    intestazioni.forEach(testo => {
        const th = document.createElement("th");
        th.textContent = testo;
        if (testo === "Athleta") th.style.borderRight  = "none";
        if (testo === "")  th.style.borderLeft   = "none";
        headerRow.appendChild(th);
    });

    const tbody = document.createElement("tbody");
          StartRanking.forEach(rowData => {
          const row = document.createElement("tr");
          const td1 = document.createElement("td");
                td1.textContent = rowData.position;
                td1.style.textAlign = "right";
                row.appendChild(td1);
          const td2 = document.createElement("td");
                td2.textContent = rowData.rank;
                td2.style.textAlign = "right";
                row.appendChild(td2);
          const td3 = document.createElement("td");

          if (rowData.clubcode.startsWith("EE")) {
              let cc = country.find(c => c.cio === rowData.clubcode.slice(2, 5));
              rowData.flag=cc.flag;
          };

          const flag = document.createElement("span");
                flag.classList.add("fi", `fi-${rowData.flag}`);
                flag.style.marginRight = "6px";
                td3.appendChild(flag);
                td3.appendChild(document.createTextNode(rowData.athleta));

                row.appendChild(td3);
                td3.style.borderRight   = "none";
           const td4 = document.createElement("td");
              // td4.textContent = "xxx"; // Podium
                 td4.style.borderLeft = "none";

          const img = document.createElement("img");
                img.style.height        = "16px";
                img.style.marginRight   = "6px";
                img.style.verticalAlign = "middle";
                if (rowData.position === 1) {
                   img.src = "../images/goldmedal64.gif";
                } else if (rowData.position === 2) {
                   img.src = "../images/silvermedal64.gif";
                } else if (rowData.position === 3) {
                   img.src = "../images/bronzemedal64.gif";
                } else if (rowData.position === 4) {
                   img.src = "../images/bronzemedal64.gif";
                };
                td4.appendChild(img);
                row.appendChild(td4);
          const td5 = document.createElement("td");
                td5.textContent = rowData.yob;
                row.appendChild(td5);

          const td6 = document.createElement("td");
                td6.textContent = rowData.clubcode;
                row.appendChild(td6);

          const td7 = document.createElement("td");
                td7.textContent = rowData.club;
                row.appendChild(td7);
          const td8 = document.createElement("td");
                td8.textContent = "14,789";
                td8.style.textAlign = "right";
                row.appendChild(td8);
          tbody.appendChild(row);
       }); // forEach giocatoric

    RTable.appendChild(tbody);
    thead.appendChild(headerRow);
    RTable.appendChild(thead);
    myWrapperDiv.appendChild(RTable);
    myDiv.appendChild(myWrapperDiv);
    document.body.appendChild(myDiv);

    return myDiv;
} // end function FinalRanking


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
} // end function ClassificaFinale

// ---------------------------------------------------------------------
// Function Gironi
// ---------------------------------------------------------------------
function Gironi() {
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
// Function createMenuBar
// ---------------------------------------------------------------------
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
          contentArea.innerHTML = '<p>2Contenuto non disponibile</p>';
        }
      } else if (typeof fnOrHTML === 'string') {
        contentArea.innerHTML = fnOrHTML;
      } else {
        contentArea.innerHTML = '<p>1 Contenuto non disponibile</p>';
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
  setTimeout(() => {document.querySelector('.menu-option')?.click();}, 0);

}; // end function createMenuBar


// Funzione aggiornata per creare/rimuovere il menu
function createMenuBar01(visibleTargets = ['home', 'ranking']) {
  // Rimuovo vecchio menu se presente
  if (currentMenu) currentMenu.remove();

  const menu = document.createElement('div');
  menu.className = 'menu-bar';



//function createMenuBar(visibleTargets = ['home', 'ranking']) {
//  const menu = document.createElement('div');
//  menu.className = 'menu-bar';

  const tabs = document.createElement('nav');
  tabs.className = 'menu-tabs';

  const extraTargets = ['pools', 'rankingpools', 'tableau', 'altro', 'finalranking'];

  itemMenu.forEach(opt => {
    // Mostra solo se incluso nei target visibili
    if (!visibleTargets.includes(opt.target)) return;

    const div = document.createElement('div');
    div.className = 'menu-option';
    div.setAttribute('data-target', opt.target);
    div.textContent = opt.name;

    div.addEventListener('click', () => {
      const contentArea = document.getElementById('content-area');
      const fnOrHTML = contentMap[opt.target];

      // Pulisci area contenuto
      contentArea.innerHTML = '';

      // Carica contenuto
      if (typeof fnOrHTML === 'function') {
        const result = fnOrHTML();
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

      // Evidenzia la voce attiva
      document.querySelectorAll('.menu-option').forEach(el => el.classList.remove('active'));
      div.classList.add('active');

      // Se clicchiamo una voce "extra", rigenera il menu completo
      if (extraTargets.includes(opt.target)) {
        const menuParent = document.querySelector('.menu-bar');
        if (menuParent) menuParent.remove();

        // Mostra TUTTI i menu (basato su itemMenu)
        const allTargets = itemMenu.map(item => item.target);
        createMenuBar(allTargets);

        // Imposta attiva quella cliccata (simula click)
        setTimeout(() => {
          document.querySelector(`[data-target="${opt.target}"]`)?.click();
        }, 0);
      }
    });

    tabs.appendChild(div);
  });

//  menu.appendChild(tabs);
//  document.body.appendChild(menu);
//
//  // Crea content-area se non esiste
//  let contentArea = document.getElementById('content-area');
//  if (!contentArea) {
//    contentArea = document.createElement('div');
//    contentArea.id = 'content-area';
//    document.body.appendChild(contentArea);
//  }
//
//  // Simula click sul primo elemento visibile
//  setTimeout(() => {
//    document.querySelector('.menu-option')?.click();
//  }, 0);
//}

menu.appendChild(tabs);
  document.body.appendChild(menu);

  // Memorizza riferimento al menu corrente
  currentMenu = menu;

  // Crea content-area se non esiste
  let contentArea = document.getElementById('content-area');
  if (!contentArea) {
    contentArea = document.createElement('div');
    contentArea.id = 'content-area';
    document.body.appendChild(contentArea);
  }

  // Simula click sul primo elemento visibile
  setTimeout(() => {
    document.querySelector('.menu-option')?.click();
  }, 0);
}

function createMenuBar(visibleTargets = ['home', 'ranking']) {
  // Rimuovo vecchio menu se presente
  if (currentMenu) currentMenu.remove();

  const menu = document.createElement('div');
  menu.className = 'menu-bar';

  const tabs = document.createElement('nav');
  tabs.className = 'menu-tabs';

  const extraTargets = ['pools', 'rankingpools', 'tableau', 'altro', 'finalranking'];

  itemMenu.forEach(opt => {
    if (!visibleTargets.includes(opt.target)) return;

    const div = document.createElement('div');
    div.className = 'menu-option';
    div.setAttribute('data-target', opt.target);
    div.textContent = opt.name;

    div.addEventListener('click', () => {
      const contentArea = document.getElementById('content-area');
      const fnOrHTML = contentMap[opt.target];

      contentArea.innerHTML = '';

      if (typeof fnOrHTML === 'function') {
        const result = fnOrHTML();
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

      document.querySelectorAll('.menu-option').forEach(el => el.classList.remove('active'));
      div.classList.add('active');

      // Se clicchiamo una voce "extra", rigenera il menu completo
      if (extraTargets.includes(opt.target)) {
        if (currentMenu) currentMenu.remove();
        const allTargets = itemMenu.map(item => item.target);
        createMenuBar(allTargets);
        setTimeout(() => {
          document.querySelector(`[data-target="${opt.target}"]`)?.click();
        }, 0);
      }
    });

    tabs.appendChild(div);
  });

  menu.appendChild(tabs);
  document.body.appendChild(menu);

  currentMenu = menu;

  let contentArea = document.getElementById('content-area');
  if (!contentArea) {
    contentArea = document.createElement('div');
    contentArea.id = 'content-area';
    document.body.appendChild(contentArea);
  }

  setTimeout(() => {
    document.querySelector('.menu-option')?.click();
  }, 0);
}


// =====================================================================
//             MAIN
// =====================================================================
// Riferimento globale per contenere il menu (per rimuoverlo facilmente)
let currentMenu = null;

const itemMenu = [
  { name: "Home",         target: "home" },
  { name: "Athleta Ranking",       target: "ranking" },
  { name: "Pools",         target: "pools" },
  { name: "Ranking Pools", target: "rankingpools" },
  { name: "Tableau",       target: "tableau" },
  { name: "altro",         target: "altro" },  
  { name: "Final Ranking", target: "finalranking" }
];

const contentMap = {
  home:         RaceList,
  ranking:      StartRankingPool,
  pools:        Gironi,
  rankingpools: creaTabellaConTitolo,
  tableau:      ScheduledRaces,   
  altro:        altro,
  finalranking: FinalRanking
};

// Inizializza tutto
window.addEventListener('DOMContentLoaded', () => {
  TitleBar();      // Crea la barra del titolo
  //createMenuBar(); // Crea il menu e attiva il caricamento dei contenuti
  createMenuBar(['home', 'ranking']);
});

