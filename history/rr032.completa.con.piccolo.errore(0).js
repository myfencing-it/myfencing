//---------------------------------------------------------------------
//Function helper - Creare elemento con classe/testo
// ---------------------------------------------------------------------
function createEl(tag, options = {}) {
  const el = document.createElement(tag);

  if (options.class) el.className = options.class;
  if (options.text) el.textContent = options.text;
  if (options.colspan) el.colSpan = options.colspan;
  if (options.id) el.id = options.id;
  if (options.html) el.innerHTML = options.html;

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
function createPoolTable(id, poolData,poolDataX) {
  const container = createEl("div", { class: "PoolContainer" });

  //console.log("36 cell ", dati3[id].datapool);
  //console.log("36 poolDataX ", poolDataX.datapool);

  // --------------
  // Tab Header 01
  // --------------
  const { streepnr, streepcolor } = poolDataX.datapool;
  const streep = streepcolor ? streepnr + " (" + streepcolor + ")" : streepnr;

  const table = createEl("table", { id: `Table-${id}`, class: "poolTable" });
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

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
  const colChoice = poolDataX.datapool.column;
  const headerCells = [{ text: "Athleta", class: "PTabH2CellA" },{ text: "Rank" }, { text: colChoice },{ text: "1" }, { text: "2" }, { text: "3" },{ text: "4" }, { text: "5" }, { text: "6" }, { text: "7" },{ class: "PTabH2Cempty" },{ text: "TS" }, { text: "RS" }, { text: "Diff" },{ class: "PTabH2Cempty" },{ text: "V" }, { text: "V/M" }];
  headerCells.forEach(c =>
    trCols.appendChild(createEl("th", { class: c.class || "PTabH2Cell", text: c.text || "" }))
  );
  tbody.appendChild(trCols);

  // --------------
  // Tab Body 03
  // --------------
  poolDataX.pool.forEach((rowpool, index) => {
    const tr = document.createElement("tr");
          tr.appendChild(createEl("td", { text: rowpool.atleta, style: { textAlign: "left" } }));
          tr.appendChild(createEl("td", { text: rowpool.rank.toString() }));
      let colVal = colChoice === "Country" ? rowpool.country :
                   colChoice === "Club"    ? rowpool.club : "";
          tr.appendChild(createEl("td", { text: colVal }));


      let won = 0;
          for (let i = 0; i < rowpool.value.length - 2; i++) {
            let val = rowpool.value[i];
            if (val.startsWith("V")) won++;
            val = val.slice(1);

            if (index === i) {tr.appendChild(createEl("td", { style: { backgroundColor: "#007bff" } }))}
            else {tr.appendChild(createEl("td", { text: val, style: { textAlign: "center" } }))}
            } // end for let i

     // Separatore
     const SpaziVuoti = Math.max(0, 10 - rowpool.value.length);
           for (let i = 0; i < SpaziVuoti; i++) {
               tr.appendChild(createEl("td", { text: "" }));
           };

     // TS RS
     tr.appendChild(createEl("td", { text: rowpool.value[rowpool.value.length - 2].toString() }));
     tr.appendChild(createEl("td", { text: rowpool.value[rowpool.value.length - 1].toString() }));

     // Diff
     let delta = rowpool.value[rowpool.value.length - 2] - rowpool.value[rowpool.value.length - 1];
     let colore = delta < 0 ? "red" : "green";
     tr.appendChild(createEl("td", {text: delta.toString(),style: { color: colore}}));

     // V V/M
     let vm = won / (rowpool.value.length - 2);
     tr.appendChild(createEl("td", { text: won.toString() }));
     tr.appendChild(createEl("td", {text: vm.toFixed(2),style: {fontWeight: "bold", color: "#2c43ab" }}));
     tbody.appendChild(tr);
  });

  // extraRow - pulsanti Details/Referees
  const trBtns = document.createElement("tr");
  const tdLeft = createEl("td", { colspan: 10 });
  tdLeft.style.border = "none";
  tdLeft.style.textAlign = "left";
  const btn1 = createEl("button", { id: `btnToggle1-${id}`, text: "Details" });
  tdLeft.appendChild(btn1);

  const tdEmpty = createEl("td");
  tdEmpty.style.border = "none";

  const tdRight = createEl("td", { colspan: 6 });
  tdRight.style.border = "none";
  tdRight.style.textAlign = "right";
  const btn2 = createEl("button", { id: `btnToggle2-${id}`, text: "Referees" });
  tdRight.appendChild(btn2);

  trBtns.append(tdLeft, tdEmpty, tdRight);
  tbody.appendChild(trBtns);


 // costruzione tabella
  table.append(thead, tbody);
  container.appendChild(table);

  // extra row
  const extraRow = createEl("div", { id: `extraRow-${id}`, class: "extraTables hidden" });
  const extraCol1 = createEl("div", { class: "extraColumn" });
  const extraTable1 = createEl("table", { id: `extraTable1-${id}`, class: "extraTable extraTableLeft hidden" });
  extraTable1.innerHTML = `<tr><td>1</td><td>PISTOIA Mariana</td><td>B'CHIR Nourane</td><td>5</td><td>4</td></tr>`;
  extraCol1.appendChild(extraTable1);

  const extraCol2 = createEl("div", { class: "extraColumn right" });
  const extraTable2 = createEl("table", { id: `extraTable2-${id}`, class: "extraTable extraTableRight hidden" });
  extraTable2.innerHTML = `<tr><td>Referee</td><td>CELLER Pavol1</td></tr>`;
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
}


// ------------------- Creazione tabelle -------------------
document.addEventListener("DOMContentLoaded", () => {
  const root = document.body;
  Object.keys(dati3).forEach(id => {
    root.appendChild(createPoolTable(id, dati[id].pool, dati3[id]));
  });
});