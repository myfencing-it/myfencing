<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>10 FF</title>
    <link rel="stylesheet" href="libs/flag-icons-main/css/flag-icons.min.css">
    <link rel="stylesheet" href="libs/font-awesome/css/all.css">
    <link rel="stylesheet" href="css/myfencing-pool02.css">
    <link rel="stylesheet" href="css/myfencing-home02.css">
    <link rel="stylesheet" href="css/events.css">
    <link rel="stylesheet" href="VECCHIO-BUONO/css/FFDtemplate06.css">    
</head>
<body>
   <script src="data/dt-fencing-home02.js"></script>
   <script src="data/dt-events-list.js"></script>
   <script src="data/dt-events-1-FMM.js"></script>
   <script src="js/myfencing-pool02.js"></script>
   <script src="rank01.js"></script>   
<script>


// ---------------------------------------------------------------------
// Function updateTitleBar
// ---------------------------------------------------------------------
function updateTitleBar(newText) {
  if (mytitle) mytitle.textContent = newText;  
}
// ---------------------------------------------------------------------
// Function TitleBar
// ---------------------------------------------------------------------
function TitleBar(title) {
//  mytitle.textContent = title.textContent;
  const logoSrc      = "images/fencing-logo.png";
  const bar          = document.createElement("div");
  bar.className      = "title-bar";

  const left         = document.createElement("div");
  left.className     = "left";
  left.textContent   = "Season: " + ddgeneral.season;
        mytitle      = document.createElement("div"); 
  mytitle.className   = "center";

  mytitle.textContent = title || atob("RmVuY2luZyBJdGFsaWFuIENoYW1waW9uc2hpcHM=");

  const right        = document.createElement("div");
  right.className    = "right";

  let today = new Date();
      today = today.toLocaleDateString('it-IT');

  const label       = document.createElement("span");
  label.className   = "label";
  label.textContent = today;

  const img = document.createElement("img");
        img.src = logoSrc;
        img.alt = "Logo";

  right.appendChild(label);
  right.appendChild(img);

  bar.appendChild(left);
  bar.appendChild(mytitle);
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
  left.textContent = atob("RmVuY2luZyBJdGFsaWFuIENoYW1waW9uc2hpcHM=");

  const center = document.createElement("div");
  center.className = "center";
  center.textContent =atob("IkNyZWF0ZWQgYnkgRkRGIiANCg==");

  const right = document.createElement("div");
  right.className = "right";

  footer.appendChild(left);
  footer.appendChild(center);
  footer.appendChild(right);

  document.body.appendChild(footer);
}; // end function FooterBar

//---------------------------------------------------------------------
//Function Pools
// ---------------------------------------------------------------------
function Pools() {
  const contentArea = document.getElementById("content-area");
  const nrPools = Object.keys(dati).length;
  Object.keys(dati).forEach(id => {
        //const tabella = Pool(dati[id]);
        const tabella = createPoolTable(id, dati[id]);        
        contentArea.appendChild(tabella);
  });
}

// ---------------------------------------------------------------------
// Categories:  
// ---------------------------------------------------------------------
function Categories() {
  const container = document.createElement("div");
  container.className = "schedule-container";

  if (!menuContext.eventId) {
    container.textContent = "Seleziona prima un evento!";
    return container;
  }

  const title = document.createElement("h2");
  title.textContent = menuContext.eventTitle || "Evento";
  title.className = "event-schedule-title";
  container.appendChild(title);

y

  grid.className = "event-schedule-grid";
  container.appendChild(grid);

  // Caricamento dati
  loadData(menuContext.eventId).then(() => {
    const html = eventcats.map(ev => `
      <div class="scheduled-card" data-id="${ev.id}" data-title="${ev.title}">
        <div class="event-header">
          <strong>${ev.title}</strong>
          <span class="event-description">(${ev.description})</span>
        </div>
        <small>${ev.date} ⏰ ${ev.time}</small>
      </div>
    `).join('');

    grid.innerHTML = html;

    // Click sulle card
    grid.addEventListener("click", e => {
      const card = e.target.closest(".scheduled-card");
      if (!card) return;

      menuContext.eventCategory = card.dataset.title;
      console.log("Click card - eventCategory:", menuContext.eventCategory);

      // Abilita Pools e seleziona nel menu
      menu.enableMenuItem("Pools");
      menu.selectByLabel("Pools");
    });
  });

  return container;
}

// ---------------------------------------------------------------------
// Function RaceList
// ---------------------------------------------------------------------
function RaceList() {
  //mytitle.textContent = "fabio";
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

  grid.addEventListener('click', e => {
    const card = e.target.closest('.event-card');
    if (!card) return;


    menuContext.eventId = card.dataset.id;
    const evento = eventlist.find(ev => String(ev.id) === String(menuContext.eventId));
    menuContext.eventTitle = evento.location + ' - ' + evento.title;
    console.log("173 - RaceList - Click evento con ID:" + menuContext.eventId);
    menu.enableMenuItem("Categories");
    menu.selectByLabel("Categories");

    const result = Categories();
    //const result = Categories(menuContext.eventId,menuContext.eventTitle);

    const contentArea = document.getElementById("content-area");
    contentArea.innerHTML = "";

    if (result instanceof Node) {
      contentArea.appendChild(result);
    } else if (typeof result === "string") {
      contentArea.innerHTML = result;
    } else {
      contentArea.innerHTML = "<p>Contenuto non disponibile</p>";
    }
  });

  return container;
}; // end function RaceList


// ---------------------------------------------------------------------
// Function loadData
// ---------------------------------------------------------------------
function loadData(id) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `data/dt-events-${id}.js`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Errore caricando script'));
    document.head.appendChild(script);
  });
}

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
// Function menuHandler
// ---------------------------------------------------------------------
function menuHandler(menuItems, options = {}) {
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

  function getContentArea() {
    let contentArea = document.getElementById("content-area");
    if (!contentArea) {
      contentArea = document.createElement("div");
      contentArea.id = "content-area";
      document.body.appendChild(contentArea);
    }
    return contentArea;
  }

  function selectItem(index) {
    items.forEach(({ li }) => li.classList.remove("active"));

    if (items[index] && items[index].enabled) {
      items[index].li.classList.add("active");
      currentIndex = index;

      const { label, myfunc } = items[index];
      //console.log("260 menuHandler - selectItem - Selezionato tab:", label);

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
    disableMenuItem,
    selectItem, // <-- aggiunto
    selectByLabel: label => {
      const index = items.findIndex(i => i.label === label);
      if (index !== -1) selectItem(index);
    },
    getCurrentIndex: () => currentIndex
  };
}; // end function menuHandler

// ---------------------------------------------------------------------
// Function AthletaRanking
// ---------------------------------------------------------------------
function AthletaRanking() {
  menu.disableMenuItem("Pools");
  menu.disableMenuItem("Categories");
  let poolContent = `<p><strong>Athleta Ranking</strong></p>`;
  for (let i = 1; i <= 60; i++) {
    poolContent += `Riga ${i}<br>`;
  }
  const div = document.createElement('div');
  div.innerHTML = `Pool dell'evento con ID <br>` + poolContent;
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
}; // end function RankingPools

// ---------------------------------------------------------------------
// Function Ranking Pools
// ---------------------------------------------------------------------
function RankingPools01() {
  const div = document.createElement('div');
  div.textContent = "Ranking Pools!";
  return div;
}; // end function rankingPools


// =====================================================================
//             MAIN
// =====================================================================
function MAIN() {  };
let   mytitle;
const menuContext = { eventId: null,eventTitle: null, eventCategory: null};

const menuItems = [
  { label: "Home",            enabled: true,  myfunc: RaceList          },
  { label: "Athleta Ranking", enabled: true,  myfunc: myStartRankingPool    }, //AthletaRanking
  { label: "Categories",      enabled: false, myfunc: Categories    },
  { label: "Pools",           enabled: false, myfunc: Pools             },
  { label: "Ranking Pools",   enabled: false, myfunc: RankingPools      },
  { label: "TableauA",        enabled: false, myfunc: () => { /*...*/ } },
  { label: "TableauB",        enabled: false, myfunc: () => { /*...*/ } },
  { label: "Final Ranking",   enabled: false, myfunc: () => { /*...*/ } },
  { label: "Altro",           enabled: false, myfunc: RaceList      }
];

TitleBar();
FooterBar();
const menu = menuHandler(menuItems, { defaultIndex: 0 });

</script>
</body>
</html>
 