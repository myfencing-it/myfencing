// ---------------------------------------------------------------------
// Author: Fabio D Filippone
// History:
// FFD - 06/07/2025 23:13:16 - v.1.0.0
// FFD - 23/07/2025 21:58:47 - v.1.1.3
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// Function CreateTableau
// ---------------------------------------------------------------------
//function CreateTableau(numColonne, colonnaIniziale) {
//  const headerRow = document.getElementById('headerRow');
//  const dataRow = document.getElementById('dataRow');
//
//  // Crea intestazioni e celle dati
//  for (let i = 0; i < numColonne; i++) {
//    const th = document.createElement('th');
//    th.textContent = "Col " + i;
//    headerRow.appendChild(th);
//
//    const td = document.createElement('td');
//    td.textContent = "Dati " + i;
//    dataRow.appendChild(td);
//  }
//
//  // Scroll automatico alla colonna desiderata
//  window.addEventListener('load', () => {
//    const table = document.getElementById('tabella');
//    const wrapper = document.getElementById('wrapper');
//    const cell = table.rows[0].cells[colonnaIniziale];
//
//    if (cell) {
//      wrapper.scrollLeft = cell.offsetLeft;
//    }
//  });
//}
function CreateTableauOK(numAtleti, colonnaIniziale) {
  const headerRow = document.getElementById('headerRow');
  const dataRow = document.getElementById('dataRow');

  const maxAtleti=Math.pow(2, Math.ceil(Math.log2(numAtleti)));


  // Pulisce righe se esistono già
  if (headerRow && dataRow) {
    headerRow.innerHTML = '';
    dataRow.innerHTML = '';


    //  const maxAtleti=256;
      for (let i = maxAtleti; i >= 1; i = i / 2) {
      const th = document.createElement('th');
      th.textContent = "Tableau " + i;
      if (i === 1) {
        th.textContent = "Winner";
      } else if (i === 2) {
        th.textContent = "Final";
      } else if (i === 4) {
        th.textContent = "Semi-finals";
      } else if (i === 8) {
        th.textContent = "Quarter-finals";
      }
      headerRow.appendChild(th);

      const td = document.createElement('td');
      td.textContent = "Dati Dati Dati DAti " + i;
      dataRow.appendChild(td);
    } // end for intestazione

    // Scroll automatico alla colonna desiderata
    const table = document.getElementById('tabella');
    const wrapper = document.getElementById('wrapper');
    const cell = table.rows[0].cells[colonnaIniziale];

    if (cell && wrapper) {
      wrapper.scrollLeft = cell.offsetLeft;
    }
  } else {
    console.warn('CreateTableau: elementi headerRow o dataRow non trovati.');
  }
}

 
function CreateTableau(numAtleti, colonnaIniziale) {
  const maxAtleti = Math.pow(2, Math.ceil(Math.log2(numAtleti)));

  // Crea nuova tabella con ID per scroll
  const tablea = document.createElement('table');
  tablea.id = 'tabella';
  //table.border = '1';
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // === INTESTAZIONI ===
  const headerRow = document.createElement('tr');
  for (let i = maxAtleti; i >= 1; i = i / 2) {
    const th = document.createElement('th');
    if (i === 1) {
      th.textContent = "Winner";
    } else if (i === 2) {
      th.textContent = "Final";
    } else if (i === 4) {
      th.textContent = "Semi-finals";
    } else if (i === 8) {
      th.textContent = "Quarter-finals";
    } else {
      th.textContent = "Tableau " + i;
    }
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);

  // === RIGHE DI DATI (4 righe con dati casuali) ===
  for (let r = 0; r < 44; r++) {
    const row = document.createElement('tr');
    for (let i = maxAtleti; i >= 1; i = i / 2) {
      const td = document.createElement('td');
      td.textContent    = "Atleta " + Math.floor(Math.random() * 1000);
      td.style.fontSize = '12px';
      td.style.height   = '25px';


      row.appendChild(td);
    }
    tbody.appendChild(row);
  }

  // Aggiunge thead e tbody alla tabella
  tablea.appendChild(thead);
  tablea.appendChild(tbody);

  // Svuota contenitore e inserisce la nuova tabella
  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = ''; // pulisce eventuali tabelle precedenti
  wrapper.appendChild(tablea);

  // Scroll alla colonna desiderata
  const cell = tablea.rows[0].cells[colonnaIniziale];
  if (cell) {
    wrapper.scrollLeft = cell.offsetLeft;
  }
}




// ---------------------------------------------------------------------
// Function initMenuBar
// ---------------------------------------------------------------------
function initMenuBar(config = {}) {
const {
    contentMap = {
      home: '<p>Benvenuto nella Home.</p>',
      ranking: '<p>I nostri servizi includono...</p>',
      pools: () => {
  contentArea.innerHTML = `
    <div id="wrapper" style="overflow-x: auto; max-width: 100%;">
      <table id="tabella" border="1" style="min-width: 800px;">
        <thead><tr id="headerRow"></tr></thead>
        <tbody><tr id="dataRow"></tr></tbody>
      </table>
    </div>
  `;
  CreateTableau(25, 1);
},
      poolsranking: '<p>Contattaci via email a info@example.com</p>',
      tableau: '<p>cdfdfd via email a info@example.com</p>',
      finalranking: '<p>cdfdfd via email a info@example.com</p>',
    },
    contentAreaId = 'content-area',
    defaultTarget = 'pools'
  } = config;

  const menuitemMenu = document.querySelectorAll('.menu-option');
  const contentArea  = document.getElementById(contentAreaId);
  const indicator    = document.querySelector('.menu-indicator');

  if (!contentArea || menuitemMenu.length === 0 || !indicator) {
    console.warn('initMenuBar: elementi mancanti.');
    return;
  }

  function setActive(target) {
      menuitemMenu.forEach(opt => {
        console.log('Cliccato:', target);
        const isTarget = opt.getAttribute('data-target') === target;
        opt.classList.toggle('active', isTarget);
        if (isTarget) {
          // Posiziona l’indicatore
          const rect = opt.getBoundingClientRect();
          const parentRect = opt.parentElement.getBoundingClientRect();
          indicator.style.left = (rect.left - parentRect.left) + 'px';
          indicator.style.width = rect.width + 'px';
        }
      });

      const content = contentMap[target];
      if (typeof content === 'function') {
        content(); // esegui la funzione
      } else if (typeof content === 'string') {
        contentArea.innerHTML = content;
      } else {
        console.warn(`Contenuto non valido per target "${target}"`);
      }
  }

  menuitemMenu.forEach(option => {
    option.addEventListener('click', () => {
      const target = option.getAttribute('data-target');
      setActive(target);
    });
  });

  // Imposta opzione iniziale
  setActive(defaultTarget);
}; // end function initMenuBar

// ---------------------------------------------------------------------
// Function TitleBar
// ---------------------------------------------------------------------
function TitleBar() {
  const categoria = datiTT.category;
  const titolo = datiTT.title;
  const logoSrc = "images/fencing-logo.png"; // URL assoluto
  const labelTesto = datiTT.date;

  const bar = document.createElement("div");
  bar.className = "title-bar";

  const left = document.createElement("div");
  left.className = "left";
  left.textContent = categoria;

  const center = document.createElement("div");
  center.className = "center";
  center.textContent = titolo;

  const right = document.createElement("div");
  right.className = "right";

  // Creo la label e la aggiungo prima dell'immagine
  const label = document.createElement("span");
  label.className = "label";
  label.textContent = labelTesto;

  const img = document.createElement("img");
  img.src = logoSrc;
  img.alt = "Logo";
  img.onerror = () => console.error("Errore nel caricamento immagine:", img.src);
  img.onload  = () => console.log("Immagine caricata correttamente:", img.src);

  right.appendChild(label);  // aggiungo la label
  right.appendChild(img);    // aggiungo l'immagine dopo

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
    tabs.appendChild(div);
  });

  const indicator = document.createElement('div');
  indicator.className = 'menu-indicator';
  tabs.appendChild(indicator);

  menu.appendChild(tabs);
  document.body.appendChild(menu);

  const contentArea = document.createElement('div');
  contentArea.id = 'content-area';
  contentArea.style.marginTop = '60px'; // spazio per non coprire
 // contentArea.style.padding = '20px';
  contentArea.style.fontSize = '18px';
  contentArea.style.color = '#333';
  document.body.appendChild(contentArea);
}

// ---------------------------------------------------------------------
// Function loadScriptsSequentially
// ---------------------------------------------------------------------
function loadScriptsSequentially(urls, callback) {
  if (!urls.length) {
    callback && callback();
    return;
  }

  const [first, ...rest] = urls;
  const script = document.createElement('script');
  script.src = first;
  script.onload = () => loadScriptsSequentially(rest, callback);
  script.onerror = () => console.error(`Errore nel caricamento di ${first}`);
  document.head.appendChild(script);

}; // end function loadScriptsSequentially

// --------------------------------
//             MAIN
// --------------------------------
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM completamente caricato");

  TitleBar();        // Crea la title bar
  createMenuBar();   // Crea menu-bar e content-area
  initMenuBar();     // Inizializza gli eventi sul menu
  //CreateTableau(50, 9); // Crea la tabella
});




// Esempio: crea 50 colonne e parte dalla colonna 9
//CreateTableau(50, 9);
