// ---------------------------------------------------------------------
// Author: Fabio D Filippone
// History:
// FFD - 06/07/2025 23:13:16 - v.1.0.0
// FFD - 23/07/2025 21:58:47 - v.1.1.3
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// Function TitleBar
// ---------------------------------------------------------------------
function TitleBar(t1,t2,t3) {

   const bar = document.createElement("div");
         bar.className = "title-bar";
   const left = document.createElement("div");
         left.className = "left";
         left.textContent = t1;
   const center = document.createElement("div");
         center.className = "center";
         center.textContent = t2;
   const right = document.createElement("div");
         right.className = "right";
   const img = document.createElement("img");
         img.src  = 'images/fencing-logo.png'
         img.alt = "Logo";
         img.style.height = "50px";
         img.style.cursor = "pointer";
         img.style.cursor = "pointer"; // se vuoi che sembri cliccabile
         right.appendChild(img);

         bar.appendChild(left);
         bar.appendChild(center);
         bar.appendChild(right);

   document.body.appendChild(bar);

};

// ---------------------------------------------------------------------
// Function updateContainerVisibility
// ---------------------------------------------------------------------
function createPoolTabWrapper(PoolTab) {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.appendChild(PoolTab);
  const container = document.createElement('div');
  container.id = 'Container-' + PoolTab.id;
  Object.assign(container.style, {
    display: 'none',
    justifyContent: 'space-between',
    marginTop: '10px',
    gap: '10px',
    flexWrap: 'wrap',
    width: '100%',
    flex: '1',
    alignItems: 'flex-start',
    flexDirection: 'row',
    boxSizing: 'border-box',
    //padding: '10px 0',
    //border: '1px solid red',
    //backgroundColor: 'yellow'
  });

  // Crea left-container
  const leftContainer = document.createElement('div');
  leftContainer.className = 'left-container';
  Object.assign(leftContainer.style, {
    flex: '1',
    minWidth: '45%',
    //border: '1px solid red',
    //backgroundColor: '#e0f7fa'
  });

  // Crea right-container
  const rightContainer = document.createElement('div');
  rightContainer.className = 'right-container';
  Object.assign(rightContainer.style, {
    flex: '1',
    minWidth: '45%',
    //border: '1px solid yellow',
    //backgroundColor: '#f1f8e9'
  });

  // Inserisci i due container interni
  container.appendChild(leftContainer);
  container.appendChild(rightContainer);

  // Inserisci il container nel wrapper
  wrapper.appendChild(container);

  // Inserisci nel DOM
  document.body.appendChild(wrapper);

  // Ritorna i riferimenti se servono
  return {
    wrapper,
    container,
    leftContainer,
    rightContainer
  };

}

// ---------------------------------------------------------------------
// Function BoutTab
// ---------------------------------------------------------------------
function BoutTab(detail, PoolTab) {
  const PoolDetTab = "PoolDetTab-" + PoolTab.id;

  let table = document.getElementById(PoolDetTab);

  // Cerca o crea il wrapper
  let wrapper = PoolTab.parentElement;
  if (!wrapper || !wrapper.classList.contains('wrapper')) {
    const result = createPoolTabWrapper(PoolTab);
    wrapper = result.wrapper;
  }

  // Cerca o crea il container
  let container = document.getElementById('Container-' + PoolTab.id);
  if (!container) {
    container = document.createElement('div');
    container.id = 'Container-' + PoolTab.id;
    Object.assign(container.style, {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
      gap: '10px',
      flexWrap: 'wrap',
      width: '100%',
      flex: '1',
      alignItems: 'flex-start',
      flexDirection: 'row',
      boxSizing: 'border-box',
      padding: '10px 0',
      border: '1px solid red',
      backgroundColor: 'cyan'
    });

    // Crea il left-container
    const leftContainer = document.createElement('div');
    leftContainer.className = 'left-container';
    Object.assign(leftContainer.style, {
      flex: '1 1 45%',
      minWidth: '300px',
      boxSizing: 'border-box',
      border: '1px solid blue',
      backgroundColor: '#e0f7fa'
    });

    container.appendChild(leftContainer);
    wrapper.appendChild(container);
  }

  const leftDiv = container.querySelector('.left-container');

  // Se la tabella non esiste, la creo
  if (!table) {
    table = document.createElement("table");
    table.id = PoolDetTab;
    Object.assign(table.style, {
      marginTop: "10px",
      border: "1px solid #ccc",
      borderCollapse: "collapse",
      display: "table",
      visibility: "visible",
      opacity: "1",
      pointerEvents: "auto",
      width: "100%"
    });

    // Tab Header
    const thead     = document.createElement('thead');
    const header    = ["Atleta1", "Atleta2", "3", "4"];
    const headerRow = document.createElement("tr");
    // Tab Header 00
    const th0 = document.createElement("th");
          th0.classList.add("th-lista-assalti");
          headerRow.appendChild(th0);
    // Tab Header 01
    const th1 = document.createElement("th");
          th1.textContent = "Athleta";
          th1.classList.add("th-lista-assalti");
          headerRow.appendChild(th1);
    // Tab Header 02
    const th2 = document.createElement("th");
          th2.textContent = "Athleta";
          th2.classList.add("th-lista-assalti");
          headerRow.appendChild(th2);
    // Tab Header 03
    const th3 = document.createElement("th");
          th3.classList.add("th-lista-assalti");
          th3.style.borderRight = "none";
          headerRow.appendChild(th3);
    // Tab Header 04
    const th4 = document.createElement("th");
          th4.style.borderLeft = "none";
          th4.classList.add("th-lista-assalti");
          headerRow.appendChild(th4);

    thead.appendChild(headerRow);
    table.appendChild(thead);
    // Tab Body
    const tbody = document.createElement("tbody");
          detail.forEach((row, i) => {
          console.log("196 riga" +  row[0] + "-" +  row[1] + "-" +  row[2]  + "-" +  row[3]);
    // Tab Row
    let color1 = "black";
    let color2 = "black";
        row[2] = parseFloat(row[2].slice(1));
        row[3] = parseFloat(row[3].slice(1));

if (row[2] > row[3]) {
console.log("maggiore");
     color1 = "green";
     color2 = "red";
	} else {
console.log("minore");
     color1 = "red";
     color2 = "green"; 
	};
    const Row   = document.createElement("tr");
    const row00 = document.createElement("td");
          row00.textContent    = i +1 ;
          row00.style.fontSize = "10px";
          headerRow.appendChild(row00);
          Row.appendChild(row00);
    const row0 = document.createElement("td");
          row0.textContent = row[0];
          row0.classList.add("tr-lista-assalti");
          row0.style.color = color1;
          headerRow.appendChild(row0);
          Row.appendChild(row0);
    const row1 = document.createElement("td");
          row1.textContent = row[1];
          row1.classList.add("tr-lista-assalti");
          row1.style.color = color2;
          headerRow.appendChild(row1);
          Row.appendChild(row1);
    const row2 = document.createElement("td");
          row2.textContent =row[2];
          row2.style.color = color1;          
          headerRow.appendChild(row2);
          Row.appendChild(row2);
    const row3 = document.createElement("td");
          row3.textContent = row[3];
          row3.style.color = color2;                    
          headerRow.appendChild(row3);
          Row.appendChild(row3);

          tbody.appendChild(Row);
    });


//if (atleta.value[i][0] === "V") cval.style.color = "green";
//               if (atleta.value[i][0] === "D") cval.style.color = "red";
//               if (atleta.value[i][0] === "V") atleta.won++;


    table.appendChild(tbody);
    leftDiv.appendChild(table);

  } else {
    // Se esiste, alterno visibilità
    const isHidden = table.style.visibility === "hidden";
    table.style.visibility = isHidden ? "visible" : "hidden";
    table.style.opacity = isHidden ? "1" : "0";
    table.style.pointerEvents = isHidden ? "auto" : "none";
    table.style.display = isHidden ? "table" : "none"; // Nasconde solo la tabella, non il contenitore
  }
} // End Function BoutTab

// ---------------------------------------------------------------------
// Function RefereeTab
// ---------------------------------------------------------------------
function RefereeTab(PoolTab, referees) {
  const RefereeTabId = "RefereeTab-" + PoolTab.id;
  let table = document.getElementById(RefereeTabId);

  // Cerca o crea il wrapper
  let wrapper = PoolTab.parentElement;
  if (!wrapper || !wrapper.classList.contains('wrapper')) {
    const result = createPoolTabWrapper(PoolTab);
    wrapper = result.wrapper;
  }

  // Cerca o crea il container
  let container = document.getElementById('Container-' + PoolTab.id);
  if (!container) {
    container = document.createElement('div');
    container.id = 'Container-' + PoolTab.id;
    Object.assign(container.style, {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
      gap: '10px',
      flexWrap: 'wrap',
      width: '100%',
      flex: '1',
      alignItems: 'flex-start',
      flexDirection: 'row',
      boxSizing: 'border-box',
      padding: '10px 0',
      // border: '1px solid red',
      // backgroundColor: 'cyan'
    });

    // Left container (se vuoi aggiungere qualcosa)
    const leftContainer = document.createElement('div');
    leftContainer.className = 'left-container';
    Object.assign(leftContainer.style, {
      flex: '1',
      border: '1px solid blue',
      minWidth: '45%',
      backgroundColor: '#e0f7fa'
    });




    // Right container (dove mettiamo la tabella)
    const rightContainer = document.createElement('div');
    rightContainer.className = 'right-container';
    Object.assign(rightContainer.style, {
      flex: '1',
      border: '1px solid green',
      minWidth: '45%',
      backgroundColor: '#f1f8e9'
    });


    container.appendChild(leftContainer);
    container.appendChild(rightContainer);
    wrapper.appendChild(container);
  }

  // Trova right-container
  const rightDiv = container.querySelector('.right-container');
  if (!rightDiv) {
    console.error("Right container non trovato");
    return;
  }

if (!table) {
  table = document.createElement("table");
  table.id = RefereeTabId;
  Object.assign(table.style, {
    border: "1px solid #ccc",
    borderCollapse: "collapse",
    display: "table",
    visibility: "visible",
    opacity: "1",
    pointerEvents: "auto",
    width: "auto",
    marginLeft: "auto"
  });










const tbody = document.createElement('tbody');
  referees.forEach(referee => {
    const tr = document.createElement("tr");

    const crole = document.createElement("td");
    crole.textContent = referee.role;
    Object.assign(crole.style, {
      fontSize: "12px",
      textAlign: "left",
      border: '1px solid #ccc',
      padding: '5px',
      whiteSpace: 'nowrap'
    });

 const cname = document.createElement("td");
    Object.assign(cname.style, {
      fontSize: "12px",
      textAlign: "left",
      border: '1px solid #ccc',
      padding: '5px',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    });

    const flag = document.createElement("span");
    flag.classList.add("fi", `fi-${referee.flag.toLowerCase()}`);
    cname.appendChild(flag);
    cname.appendChild(document.createTextNode(referee.referee));

    tr.appendChild(crole);
    tr.appendChild(cname);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  rightDiv.appendChild(table);


} else {
  // Toggle visibilità tabella
  const isHidden = table.style.visibility === "hidden" || table.style.display === "none";
  table.style.visibility = isHidden ? "visible" : "hidden";
  table.style.opacity   = isHidden ? "1" : "0";
  table.style.pointerEvents = isHidden ? "auto" : "none";
  table.style.display = isHidden ? "table" : "none";
}
} // End Function RefereeTab



// ---------------------------------------------------------------------
// Function showPool
// ---------------------------------------------------------------------
function showPool(dati, detail, pool,referees) {
console.log("350" + referees);
  const PoolTab = document.createElement("table");
  const thead   = document.createElement("thead");
  const tbody   = document.createElement("tbody");
        PoolTab.id = pool.nr;
console.log("pool.nr ",) + pool.nr      ;
  // ------------------------------------------------
  // Tab Header 01
  // ------------------------------------------------
  const streep = (pool.streepcolor === "" || pool.streepcolor === undefined)
  ? pool.streepnr
  : pool.streepnr + " (" +pool.streepcolor + ")";
  const PoolTabHeader1 = document.createElement("tr");
  const headersRow1 = ["Pool " + pool.nr, "Streep " + streep,"time " + pool.time];
  headersRow1.forEach(text => {
  const th = document.createElement("th");
        th.textContent = text;
        th.classList.add("FFTabHeader1Cell");
        if (text.startsWith("Pool")) {
            th.style.fontWeight = "bold";
            th.style.fontStyle  = "normal";
        };
        if (text.startsWith("Streep")) th.colSpan = 3;
        if (text.startsWith("time")) {
            th.colSpan = dati.length-1;
            th.style.textAlign  = "right";
        };
        PoolTabHeader1.appendChild(th);
   });
  thead.appendChild(PoolTabHeader1);

  // ------------------------------------------------
  // Tab Header 02 #007bff
  // ------------------------------------------------
  const PoolTabHeader2 = document.createElement("tr");
    let headersRow2  = ["Athleta", "Rank", "Club"];
        if (pool.country) headersRow2[2] = "NAT";
console.log("384 pool.country " + pool.country);
        for (let i = 0; i < dati.length; i++)  headersRow2.push(i+1);
        for (let i = dati.length ; i < 8; i++) headersRow2.push("");
        headersRow2.push("TS", "RS", "Diff", "","V", "V/M");
        headersRow2.forEach(text => {
  const th = document.createElement("th");
        th.textContent = text;
        if (text !== "" ) th.classList.add("FFTabHeader2Cell");
        if (text  == "" ) th.style.border = "none";
        PoolTabHeader2.appendChild(th);
  });
  thead.appendChild(PoolTabHeader2);

  // ------------------------------------------------
  // Tab Rows
  // ------------------------------------------------
  let j=0;
  dati.forEach((atleta, index) => {
    const tr = document.createElement("tr");
    // Athleta
          atleta.club = atleta.club ?? null;
    const catleta = document.createElement("td");
    const flag    = document.createElement("span");
          flag.classList.add("fi", `fi-${atleta.flag.toLowerCase()}`);
          flag.style.marginRight = "6px";
          catleta.appendChild(flag);
          catleta.appendChild(document.createTextNode(atleta.atleta));
          catleta.classList.add("colAtheta");
          if (j === 0)  catleta.style.minWidth = "250px";
          tr.appendChild(catleta);
    // Rank
    const crank = document.createElement("td");
          crank.textContent = atleta.rank;
          crank.style.fontSize  = "12px";
          crank.style.textAlign = "right";
          tr.appendChild(crank);
    // Club
    const cclub = document.createElement("td");
          cclub.textContent     = atleta.club;
          cclub.style.textAlign = "left";
          cclub.style.fontSize  = "12px";
          if (pool.country)  {
          	  cclub.textContent = atleta.country;
              cclub.style.textAlign = "center";
          };

          tr.appendChild(cclub);
    // Assalti 1-7
    atleta.won = 0;
    for (let i = 0; i < atleta.value.length-2; i++) {
           const cval = document.createElement("td");
      //    if (typeof atleta.value[i] === 'undefined') atleta.value[i] = " ";
               cval.textContent       = atleta.value[i].slice(1);
               if (atleta.value[i][0] === "V") cval.style.color = "green";
               if (atleta.value[i][0] === "D") cval.style.color = "red";
               if (atleta.value[i][0] === "V") atleta.won++;
               if (i === (j)) {cval.textContent = null; cval.style.backgroundColor = "#007bff"};
               tr.appendChild(cval);
    };
    // Separatore
    for (let i = dati.length; i <= 7; i++) {
       separator = document.createElement("th");
       separator.style.border     = "none";
       separator.style.background = "white";
       separator.style.minWidth   = "25px";
       tr.appendChild(separator);
    };
    // Totali Stoccate
    let cts = document.createElement("td");
        cts.textContent     = "";
        if (atleta.value[atleta.value.length - 2]>=0) cts.textContent = atleta.value[atleta.value.length - 2];
        cts.style.textAlign = "right";
        tr.appendChild(cts);
    let ctr = document.createElement("td");
        ctr.style.textAlign = "right";
        ctr.textContent     = "";
        if (atleta.value[atleta.value.length - 1]>=0) ctr.textContent = atleta.value[atleta.value.length - 1];
        ctr.textContent     = atleta.value[atleta.value.length - 1];
        if (atleta.value[atleta.value.length - 1] === "RR" ||
           atleta.value[atleta.value.length - 2] === "AA") ctr.textContent="";

        tr.appendChild(ctr);

    let delta = atleta.value[atleta.value.length - 2] - atleta.value[atleta.value.length - 1];

    let cd    = document.createElement("td");
        cd.style.textAlign = "right";
        cd.textContent     =  delta.toString();
        if (atleta.value[atleta.value.length - 1] === ""    ||
            atleta.value[atleta.value.length - 2] === ""  ) cd.textContent="";
        if (atleta.value[atleta.value.length - 1] === "RR"  ||
            atleta.value[atleta.value.length - 2] === "RR") cd.textContent="";
        if (atleta.value[atleta.value.length - 1] === "AA"  ||
            atleta.value[atleta.value.length - 2] === "AA") cd.textContent="";

        cd.style.color = delta >= 0 ? "green" : "red";
        //   row.style.backgroundColor = (j % 2 === 0) ? "#ffffff" : "#f2f2f2";
        tr.appendChild(cd);
    // Separatore
        separator = document.createElement("th");
        separator.style.background = "white";
        separator.style.border     = "none";
        tr.appendChild(separator);

    // Vittorie
    let aw = document.createElement("td");
        aw.textContent     = atleta.won;
        if (cd.textContent === "") aw.textContent ="";
        tr.appendChild(aw);
    let ap = document.createElement("td");
    let apn = (atleta.won/(atleta.value.length-3))
        ap.textContent      = apn.toFixed(2);
        if (cd.textContent === "") ap.textContent ="";
        ap.style.textAlign   = "right";
        ap.style.fontWeight  = "bold";
        tr.appendChild(ap);
    j++;
    tbody.appendChild(tr);
  });
  // ------------------------------------------------
  // Tab Foot
  // ------------------------------------------------
  const tfoot     = document.createElement('tfoot');
  const footerRow = document.createElement('tr');

  const td1       = document.createElement('td');
  const btn1      = document.createElement("button");
        btn1.classList.add("PoolTab-button");
  const icon1 = document.createElement("i");
        icon1.classList.add("fa-solid", "fa-list");
        icon1.style.fontSize = "18px"; // esempio dimensione personalizzata
        icon1.style.marginTop = '5px';
        icon1.style.width     = '24px';
        icon1.style.height    = '24px';
        icon1.style.objectFit = 'contain';


        btn1.appendChild(icon1);
        btn1.title  = "Details";
        btn1.onclick = () => {
          console.log('CLICK sx!');
          // setupContainer(PoolTab);
           const container = document.getElementById('Container-' + PoolTab.id);
           if (container) container.style.display = 'flex';
           BoutTab(detail, PoolTab,referees);
        };
        td1.colSpan = 2;
        td1.appendChild(btn1);

        footerRow.appendChild(td1);

  const td2   = document.createElement('td');
  const btn2  = document.createElement("button");
        btn2.classList.add("PoolTab-button");

  const icon2 = document.createElement('img');
        icon2.src             = 'images/referee02white.png';
        icon2.alt             = 'referee';
        icon2.style.width     = '24px';
        icon2.style.height    = '24px';
        icon2.style.objectFit = 'contain';
        btn2.title            = "Referee";
        btn2.appendChild(icon2);





btn2.onclick = () => {
  console.log("562" + referees);

  // 💥 FORZA IL CONTAINER A ESSERE VISIBILE
  const container = document.getElementById('Container-' + PoolTab.id);
  if (container) container.style.display = 'flex';

  RefereeTab(PoolTab, referees);
};


        td2.style.textAlign = "right";
        td2.colSpan = 16;
        td2.appendChild(btn2);
        footerRow.appendChild(td2);

  tfoot.appendChild(footerRow);


 // ------------------------------------------------
 // Close Tab
 // ------------------------------------------------
   PoolTab.appendChild(thead);
   PoolTab.appendChild(tbody);
   PoolTab.appendChild(tfoot);

  // Costruisci la struttura contenitore attorno alla tabella
  const { container, leftContainer, rightContainer } = createPoolTabWrapper(PoolTab);

} // End Function showPool

function main(){}

// --------------------------------
//             MAIN
// --------------------------------
TitleBar("22-07-2025",title.,"xxx") 

// Crea un contenitore per il contenuto principale
const content = document.createElement("div");
content.className = "title-content";
 document.body.appendChild(content);

    const p = document.createElement("p");
    p.textContent = "Pools";
    p.className = "FFTabHeaderTitle";
    content.appendChild(p);


showPool(dati3.pool,dati3.details,dati3.datapool,dati3.referees);
//showPool(dati2.pool,dati2.details,dati2.datapool);
//showPool(datib,detaila,poolb);
//showPool(datic,detaila,poolc);
//showPool(datid,detaila,poold);
//showPool(datie,detaila,poola);
//showPool(datix,detaila,poola);

