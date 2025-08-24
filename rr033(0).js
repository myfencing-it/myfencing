//---------------------------------------------------------------------
//Function helper - Creare elemento con classe/testo
// ---------------------------------------------------------------------
function createEl(tag, options = {}) {
  const el = document.createElement(tag);

  if (options.class)   el.className   = options.class;
  if (options.text)    el.textContent = options.text;
  if (options.colspan) el.colSpan     = options.colspan;
  if (options.id)      el.id          = options.id;
  if (options.html)    el.innerHTML   = options.html;

  // Applica lo style se passato
  if (options.style) {
    for (const [key, value] of Object.entries(options.style)) {
      el.style[key] = value;
    }
  }

  return el;
}


//----------------------------------------------------------------------
//Function createPoolTable
// invocazione root.appendChild(createPoolTable(id, dati[id].pool, dati3[id]));
//
// dati[id].pool -> poolData
// dati3[id]     -> poolDataX
//               -> poolDataX.datapool
//               -> poolDataX.pool
//
// ---------------------------------------------------------------------
 
function createPoolTable(id, poolData) {
  const container = createEl("div", { class: "PoolContainer" });

  //console.log("36 cell ", dati3[id].datapool);
  //console.log("36 poolData ", poolData.datapool);

  // --------------
  // Tab Header 01
  // --------------
  const { streepnr, streepcolor } = poolData.datapool;
  const streep = streepcolor ? streepnr + " (" + streepcolor + ")" : streepnr;

  const table = createEl("table", { id: `Table-${id}`, class: "poolTable" });
  const thead = document.createElement("thead");
  const Ptbody = document.createElement("tbody");

  const trHead = createEl("tr", { class: "PTabH1" });
  trHead.append(
    createEl("th", { class: "PTabH1p", text: "Pool "   + id,                 style: { textAlign: "left" } }),
    createEl("th", { class: "PTabH1s", text: "Streep " + streep, colspan: 5, style: { textAlign: "left" } }),
    createEl("th", { class: "PTabH1t", text: "time 14:30",       colspan: 4 })
  );
  thead.appendChild(trHead);

  // --------------
  // Tab Header 02
  // --------------
  const trCols    = document.createElement("tr");
  const colChoice = poolData.datapool.column;
  const headerCells = [{ text: "Athleta", class: "PTabH2CellA" },{ text: "Rank" }, { text: colChoice },{ text: "1" }, { text: "2" }, { text: "3" },{ text: "4" }, { text: "5" }, { text: "6" }, { text: "7" },{ class: "PTabH2Cempty" },{ text: "TS" }, { text: "RS" }, { text: "Diff" },{ class: "PTabH2Cempty" },{ text: "V" }, { text: "V/M" }];
  headerCells.forEach(c =>
    trCols.appendChild(createEl("th", { class: c.class || "PTabH2Cell", text: c.text || "" }))
  );
  Ptbody.appendChild(trCols);

  // --------------
  // Tab Body 03
  // --------------
  poolData.pool.forEach((rowpool, index) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
          td.style.minWidth = "235px";
          td.style.textAlign = "left";
    const flag = document.createElement("span");
          flag.classList.add("fi", `fi-${rowpool.flag.toLowerCase()}`);
          flag.style.marginRight = "6px";
          td.appendChild(flag);
          td.appendChild(document.createTextNode(rowpool.atleta));
          tr.appendChild(td);

          tr.appendChild(createEl("td", { text: rowpool.rank.toString() }));
      let colVal = colChoice === "Country" ? rowpool.country :
                   colChoice === "Club"    ? rowpool.club : "";
          tr.appendChild(createEl("td", { text: colVal, style: { minWidth: "50px", textAlign: "left" } }));

      let won = 0;
          for (let i = 0; i < rowpool.value.length - 2; i++) {
            let val = rowpool.value[i];
            let colore = val.startsWith("V") ? "green" : val.startsWith("D") ? "red" : "black";
            if (val.startsWith("V")) won++;
            val = val.slice(1);

            if (index === i) {tr.appendChild(createEl("td", { style: { backgroundColor: "#007bff" } }))}
            else {
            	tr.appendChild(createEl("td", { text: val, style: { textAlign: "center", color: colore }}));
            };
          } // end for let i

     // Separatore
     const SpaziVuoti = Math.max(0, 10 - rowpool.value.length);
           for (let i = 0; i < SpaziVuoti; i++) {tr.appendChild(createEl("td", { text: "", class: "PTabRCempty" }));};

     // TS RS
     tr.appendChild(createEl("td", { text: rowpool.value[rowpool.value.length - 2].toString() }));
     tr.appendChild(createEl("td", { text: rowpool.value[rowpool.value.length - 1].toString() }));

     // Diff
     let delta  = rowpool.value[rowpool.value.length - 2] - rowpool.value[rowpool.value.length - 1];
     let colore = delta < 0 ? "red" : "green";
     tr.appendChild(createEl("td", {text: delta.toString(),style: { color: colore}}));
     tr.appendChild(createEl("td", { text: "", class: "PTabRCempty" }));
     // V V/M
     let vm = won / (rowpool.value.length - 2);
     tr.appendChild(createEl("td", { text: won.toString() }));
     tr.appendChild(createEl("td", { text: vm.toFixed(2),style: { fontWeight: "bold", color: "#2c43ab" }}));
     Ptbody.appendChild(tr);
  });


  // --------------
  // Tab extraRow - pulsanti Details/Referees 04
  // --------------  
  const trBtns = document.createElement("tr");
  const tdLeft = createEl("td", { colspan: 10 });
  tdLeft.style.border    = "none";
  tdLeft.style.textAlign = "left";
  const btn1 = createEl("button", { id: `btnToggle1-${id}`, text: "Details" });
  tdLeft.appendChild(btn1);

  const tdEmpty = createEl("td");
  tdEmpty.style.border = "none";

  const tdRight = createEl("td", { colspan: 6 });
  tdRight.style.border    = "none";
  tdRight.style.textAlign = "right";
  const btn2 = createEl("button", { id: `btnToggle2-${id}`, text: "Referees" });
  tdRight.appendChild(btn2);

  trBtns.append(tdLeft, tdEmpty, tdRight);
  Ptbody.appendChild(trBtns);

  // costruzione tabella
  table.append(thead, Ptbody);
  container.appendChild(table);

  // -----------------------
  // Tab 01 extra - Details
  // -----------------------
  const extraRow    = createEl("div",   { id: `extraRow-${id}`, class: "extraTables hidden" });
  const extraCol1   = createEl("div",   { class: "extraColumn" });
  const extraTable1 = createEl("table", { id: `extraTable1-${id}`, class: "extraTable extraTableLeft hidden" });

  // creo thead
  const Dthead  = document.createElement("thead");
  const DtrHead = document.createElement("tr");
  const th1 = createEl("th", { text: "#",       class: "DTabH" });
  const th2 = createEl("th", { text: "Athleta", class: "DTabH" });
  const th3 = createEl("th", { text: "Athleta", class: "DTabH" });
  const th4 = createEl("th", { text: "Score",   class: "DTabH", colspan: 2});
  DtrHead.append(th1, th2, th3, th4);
  Dthead.appendChild(DtrHead);
  extraTable1.appendChild(Dthead);
 
  poolData.details.forEach((Val, index) => {
     const [val2, val3] = [Val[2], Val[3]].map(v => Number(v.slice(1)));
     const [clr1, clr2] = val3 > val2 ? ["red", "green"] : ["green", "red"];
     const tr = document.createElement("tr");
           tr.appendChild(createEl("td", { text: index + 1,    style: {                 textAlign: "right"               } }));
           tr.appendChild(createEl("td", { text: Val[0],       style: { width: "200px", textAlign: "left",   color: clr1 } }));
           tr.appendChild(createEl("td", { text: Val[1],       style: { width: "200px", textAlign: "left",   color: clr2 } }));
           tr.appendChild(createEl("td", { text: String(val2), style: { width:  "20px", textAlign: "center", color: clr1 } }));
           tr.appendChild(createEl("td", { text: String(val3), style: { width:  "20px", textAlign: "center", color: clr2 } }));
     extraTable1.appendChild(tr);
  });
  extraCol1.appendChild(extraTable1);
  extraRow.appendChild(extraCol1);

  // -----------------------
  // Tab 02 extra - Referees
  // -----------------------
  const extraCol2   = createEl("div",   { class: "extraColumn right" });
  const extraTable2 = createEl("table", { id: `extraTable2-${id}`, class: "extraTable extraTableRight hidden" });
  const tbody       = document.createElement("tbody");

  poolData.referees.forEach((rowpool, index) => {
     const tr = document.createElement("tr");
           tr.appendChild(createEl("td", { text: rowpool.role, class: "RTabH" })); 
     const td = document.createElement("td");
           td.style.textAlign = "left";
           td.append(Object.assign(document.createElement("span"), {
           className: `fi fi-${rowpool.flag.toLowerCase()}`,
           style: "margin-right:6px;"
           }));
           td.append(document.createTextNode(rowpool.referee));
           tr.appendChild(td);
           tbody.appendChild(tr);
  });

  extraTable2.appendChild(tbody);
  extraCol2.appendChild(extraTable2);
  extraRow.append(extraCol1, extraCol2);
  container.appendChild(extraRow);

  // toggle
  function toggleTable(tableId) {
    const table = document.getElementById(tableId);
    table.classList.toggle("hidden");
    if (!extraTable1.classList.contains("hidden") || !extraTable2.classList.contains("hidden")) {
      extraRow.classList.remove("hidden");
    } else {
      extraRow.classList.add("hidden");
    }
  }
  btn1.addEventListener("click", () => toggleTable(`extraTable1-${id}`));
  btn2.addEventListener("click", () => toggleTable(`extraTable2-${id}`));

  return container;
};

// ------------------- Creazione tabelle -------------------
document.addEventListener("DOMContentLoaded", () => {
  const root = document.body;
  Object.keys(dati).forEach(id => {
    //root.appendChild(createPoolTable(id, dati[id]));
    root.appendChild(createPoolTable(id, dati[id]));    
  });
});
