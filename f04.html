<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>04 FF</title>
    <link rel="stylesheet" href="libs/flag-icons-main/css/flag-icons.min.css">
    <link rel="stylesheet" href="libs/font-awesome/css/all.css">
    <link rel="stylesheet" href="css/f01.css">
    <link rel="stylesheet" href="css/eventlistlive.css">
</head>
<body>
   <script src="data/dt-fencinghome01.js"></script>
   <script src="data/eventslist.js"></script>
<script>

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

  const html = eventlist.map(ev => {
     const imgSx   = ev.imgSx         ? `<img src="${ev.imgSx}">`              : `<div class="img-empty"></div>`;
     const imgTeam = ev.team === true ? `<img src="images/team64.gif">`        : `<img src="images/single64.gif">`;
     const imgLive = ev.live === true ? `<img src="images/fencing-live05.gif">`: `<div class="img-empty"></div>`;
  return `
    <div class="event-card" data-id="${ev.id}">
      <table class="event-table">
        <colgroup>
          <col class="col-img-sx">
          <col class="col-text">
          <col class="col-img-team">
          <col class="col-img-live">
        </colgroup>
        <tr>
          <td class="img-sx">${imgSx}</td>
          <td class="text-col">
            <div class="event-header">${ev.date} - ${ev.location} - ${ev.title} - ${ev.category}</div>
            <span class="event-description">Season: ${ev.season} - ${ev.description}</span>
          </td>
          <td class="img-team">${imgTeam}</td>
          <td class="img-live">${imgLive}</td>
        </tr>
      </table>
    </div>
  `;
  }).join('');

  grid.innerHTML = html;

//  // Event listener click
//  grid.addEventListener('click', e => {
//    const card = e.target.closest('.event-card');
//    if (!card) return;
//
//    const id = card.dataset.id;
//    console.log('Hai cliccato sull\'evento con ID:', id);
//
//    const target = 'pools';
//    const fn = contentMap[target];
//    const contentArea = document.getElementById('content-area');
//    contentArea.innerHTML = '';
//
//    if (typeof fn === 'function') {
//      const result = fn(id);
//      if (result instanceof Node) {
//        contentArea.appendChild(result);
//      } else if (typeof result === 'string') {
//        contentArea.innerHTML = result;
//      } else {
//        contentArea.innerHTML = '<p>Contenuto non disponibile</p>';
//      }
//    } else {
//      contentArea.innerHTML = '<p>Funzione non trovata</p>';
//    }
//  });

   grid.addEventListener('click', e => {
     const card = e.target.closest('.event-card');
     if (!card) return;
   
     const id = card.dataset.id;
     console.log('Hai cliccato sull\'evento con ID:', id);
   
     const target = 'pools';
     const fn = menuItems[target];
     const contentArea = document.getElementById('content-area');
     contentArea.innerHTML = '';
   
     // Richiama direttamente Pool con l'id
     const result = Pools(id);
   
     if (result instanceof Node) {
       contentArea.appendChild(result);
     } else if (typeof result === 'string') {
       contentArea.innerHTML = result;
     } else {
       contentArea.innerHTML = '<p>Contenuto non disponibile</p>';
     }
   });

  return container;
}; // end function RaceList

// ---------------------------------------------------------------------
// Function getContentArea
// ---------------------------------------------------------------------
function getContentArea() {
  let contentArea = document.getElementById("content-area");

  // Se non esiste, lo creo e lo aggiungo al body
  if (!contentArea) {
    contentArea = document.createElement("div");
    contentArea.id = "content-area";
    document.body.appendChild(contentArea);
  }

  return contentArea;
}; // end function getContentArea

// ---------------------------------------------------------------------
// Function MenuHandler
// ---------------------------------------------------------------------
function MenuHandler00(menuItems, options = {}) {
  // menuItems: array di oggetti { label: string, enabled: bool, myfunc: function }
  // options: { defaultIndex: number | undefined }

  const container = document.createElement("div");
  container.classList.add("menu-bar");
  document.body.appendChild(container);

  const ul = document.createElement("ul");
  ul.classList.add("menu-tabs");

  const items = [];
  menuItems.forEach(({ label, enabled, myfunc }) => {
    if (!enabled) return; // salto quelli disabilitati
    const li = document.createElement("li");
    li.textContent = label;
    li.classList.add("menu-option");
    ul.appendChild(li);
    items.push({ li, label, myfunc });
  });

  container.appendChild(ul);

  let currentIndex = 0;

  function selectItem(index) {
    items.forEach(({ li }) => li.classList.remove("active"));

    if (items[index]) {
      items[index].li.classList.add("active");
      currentIndex = index;

      const { label, myfunc } = items[index];
      console.log("Selezionato tab:", label);

      const contentArea = getContentArea();
      contentArea.innerHTML = "";

      if (typeof myfunc === "function") {
        console.log("Eseguo funzione associata a:", label);
        const content = myfunc();
        if (content) contentArea.appendChild(content);
      } else {
        console.warn("Nessuna funzione associata a:", label);
      }
    }
  }

  // Assegno i click handler
  items.forEach(({ li }, index) => {
    li.addEventListener("click", () => {
      console.log("Cliccato tab:", items[index].label);
      selectItem(index);
    });
  });

  // Navigazione con frecce
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % items.length;
      selectItem(currentIndex);
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      selectItem(currentIndex);
    }
  });

  // Avvio: carico il tab di default
  const startIndex =
    typeof options.defaultIndex === "number" &&
    options.defaultIndex >= 0 &&
    options.defaultIndex < items.length
      ? options.defaultIndex
      : 0;

  selectItem(startIndex);
}; // end function MenuHandler

function MenuHandler01(menuItems, options = {}) {
  const container = document.createElement("div");
  container.classList.add("menu-bar");
  document.body.appendChild(container);

  const ul = document.createElement("ul");
  ul.classList.add("menu-tabs");

  const items = [];
  menuItems.forEach(({ label, enabled, myfunc }) => {
    const li = document.createElement("li");
    li.textContent = label;
    li.classList.add("menu-option");

    if (!enabled) {
      li.classList.add("disabled"); // classe per aspetto disabilitato
    }

    ul.appendChild(li);
    items.push({ li, label, myfunc, enabled });
  });

  container.appendChild(ul);

  let currentIndex = 0;

  function selectItem(index) {
    items.forEach(({ li }) => li.classList.remove("active"));

    if (items[index] && items[index].enabled) {
      items[index].li.classList.add("active");
      currentIndex = index;

      const { label, myfunc } = items[index];
      console.log("Selezionato tab:", label);

      const contentArea = getContentArea();
      contentArea.innerHTML = "";

      if (typeof myfunc === "function") {
        console.log("Eseguo funzione associata a:", label);
        const content = myfunc();
        if (content instanceof Node) {
          contentArea.appendChild(content);
        } else if (typeof content === "string") {
          contentArea.innerHTML = content;
        }
      }
    }
  }

  // Click handler
  items.forEach(({ li }, index) => {
    li.addEventListener("click", () => {
      if (!items[index].enabled) return; // se disabilitato, ignora
      console.log("Cliccato tab:", items[index].label);
      selectItem(index);
    });
  });

  // Funzioni per abilitare/disabilitare item
  this.enableMenuItem = function (label) {
    const item = items.find(i => i.label === label);
    if (item) {
      item.enabled = true;
      item.li.classList.remove("disabled");
    }
  };

  this.disableMenuItem = function (label) {
    const item = items.find(i => i.label === label);
    if (item) {
      item.enabled = false;
      item.li.classList.add("disabled");
    }
  };

  // Navigazione con frecce
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
      do {
        currentIndex = (currentIndex + 1) % items.length;
      } while (!items[currentIndex].enabled);
      selectItem(currentIndex);
    }
    if (e.key === "ArrowLeft") {
      do {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
      } while (!items[currentIndex].enabled);
      selectItem(currentIndex);
    }
  });

  // Avvio: carico il tab di default
  const startIndex =
    typeof options.defaultIndex === "number" &&
    options.defaultIndex >= 0 &&
    options.defaultIndex < items.length
      ? options.defaultIndex
      : 0;

  selectItem(startIndex);
}

function MenuHandler(menuItems, options = {}) {
  const container = document.createElement("div");
  container.classList.add("menu-bar");
  document.body.appendChild(container);

  const ul = document.createElement("ul");
  ul.classList.add("menu-tabs");

  const items = [];
  menuItems.forEach(({ label, enabled, myfunc }) => {
    const li = document.createElement("li");
    li.textContent = label;
    li.classList.add("menu-option");

    if (!enabled) {
      li.classList.add("disabled");
    }

    ul.appendChild(li);
    items.push({ li, label, myfunc, enabled });
  });

  container.appendChild(ul);

  let currentIndex = 0;

  function selectItem(index) {
    items.forEach(({ li }) => li.classList.remove("active"));

    if (items[index] && items[index].enabled) {
      items[index].li.classList.add("active");
      currentIndex = index;

      const { label, myfunc } = items[index];
      console.log("Selezionato tab:", label);

      const contentArea = getContentArea();
      contentArea.innerHTML = "";

      if (typeof myfunc === "function") {
        const content = myfunc();
        if (content instanceof Node) {
          contentArea.appendChild(content);
        } else if (typeof content === "string") {
          contentArea.innerHTML = content;
        }
      }
    }
  }

  // Gestione click
  items.forEach(({ li }, index) => {
    li.addEventListener("click", () => {
      if (!items[index].enabled) return;
      selectItem(index);
    });
  });

  // Navigazione tastiera
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
      do {
        currentIndex = (currentIndex + 1) % items.length;
      } while (!items[currentIndex].enabled);
      selectItem(currentIndex);
    }
    if (e.key === "ArrowLeft") {
      do {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
      } while (!items[currentIndex].enabled);
      selectItem(currentIndex);
    }
  });

  // Funzioni per abilitare/disabilitare
  function enableMenuItem(label) {
    const item = items.find(i => i.label === label);
    if (item) {
      item.enabled = true;
      item.li.classList.remove("disabled");
    }
  }

  function disableMenuItem(label) {
    const item = items.find(i => i.label === label);
    if (item) {
      item.enabled = false;
      item.li.classList.add("disabled");
      if (item.li.classList.contains("active")) {
        item.li.classList.remove("active");
      }
    }
  }

  // Avvio
  const startIndex =
    typeof options.defaultIndex === "number" &&
    options.defaultIndex >= 0 &&
    options.defaultIndex < items.length
      ? options.defaultIndex
      : 0;

  selectItem(startIndex);

  // 🔹 Ritorno un oggetto API
  return {
    enableMenuItem,
    disableMenuItem
  };
}


// ---------------------------------------------------------------------
// Function FooterBar
// ---------------------------------------------------------------------
function FooterBar() {
  const footer = document.createElement("div");
  footer.className = "footer-bar";

  const left = document.createElement("div");
  left.className = "left";
  //left.textContent = " " + new Date().getFullYear() + " - Tutti i diritti riservati";

  const center = document.createElement("div");
  center.className = "center";
  center.textContent = "Created by FDF";

  const right = document.createElement("div");
  right.className = "right";

  footer.appendChild(left);
  footer.appendChild(center);
  footer.appendChild(right);

  document.body.appendChild(footer);
}; // end function FooterBar

// ---------------------------------------------------------------------
// Function TitleBar
// ---------------------------------------------------------------------
function TitleBar() {
  const titolo       = datiTT.title;
  const logoSrc      = "images/fencing-logo.png";
  const bar          = document.createElement("div");
  bar.className      = "title-bar";

  const left         = document.createElement("div");
  left.className     = "left";
  left.textContent   = "Season: " + datiTT.season;

  const center       = document.createElement("div");
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
// Function Ranking Pools
// ---------------------------------------------------------------------
function RankingPools() {
  const div = document.createElement('div');
  div.textContent = "Ranking Pools!";
  return div;
}; // end function rankingPools

// ---------------------------------------------------------------------
// Function AthletaRanking
// ---------------------------------------------------------------------
function AthletaRanking() {
  let poolContent = `<p><strong>Athleta Ranking</strong></p>`;
  for (let i = 1; i <= 60; i++) {
    poolContent += `Riga ${i}<br>`;
  }
  const div = document.createElement('div');
  div.innerHTML = `Pool dell'evento con ID <br>` + poolContent;
  return div;  
}

// ---------------------------------------------------------------------
// Function Pools
// ---------------------------------------------------------------------
function Pools() {
  menu.enableMenuItem("Pools");
  menu.enableMenuItem("Ranking Pools");  
  console.log ("302");
  let poolContent = `<p><strong>Pools</strong></p>`;
  for (let i = 1; i <= 10; i++) {
    poolContent += `Pools Riga ${i}<br>`;
  }
  const div = document.createElement('div');
  div.innerHTML = `309 EventID <br>` + poolContent;
  return div;
}
// ---------------------------------------------------------------------
// Function RankingPools
// ---------------------------------------------------------------------
function RankingPools() {
  let poolContent = `<p><strong>Ranking Pools</strong></p>`;
  for (let i = 1; i <= 14; i++) {
    poolContent += `RankingPools ${i}<br>`;
  }
  const div = document.createElement('div');
  div.innerHTML = `EventID <br>` + poolContent;
  return div;
}

// =====================================================================
//             MAIN
// =====================================================================
function MAIN() {  };

const menuItems = [
  { label: "Home",            enabled: true,  myfunc: RaceList          },
  { label: "Athleta Ranking", enabled: true,  myfunc: AthletaRanking    },
  { label: "Pools",           enabled: false, myfunc: Pools             },
  { label: "Ranking Pools",   enabled: false, myfunc: RankingPools      },
  { label: "TableauA",        enabled: false, myfunc: () => { /*...*/ } },
  { label: "TableauB",        enabled: false, myfunc: () => { /*...*/ } },
  { label: "Final Ranking",   enabled: false, myfunc: () => { /*...*/ } },
  { label: "Altro",           enabled: false, myfunc: RaceList      }
];

TitleBar();
FooterBar();
const menu = MenuHandler(menuItems, { defaultIndex: 0 });



</script>
</body>
</html>
