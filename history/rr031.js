

const dati = {
  "01": { pool: [
    ["xx PISTOIA Mariana",6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    ["yy ROSSI Luca",5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
  ]},
  "02": { pool: [
    ["aa BIANCHI Anna",4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
  ]},
  "03": { pool: [] }, // esempio vuoto
  "04": { pool: [] }
};

 

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
  return el;
}

//---------------------------------------------------------------------
//Function createPoolTable
// ---------------------------------------------------------------------
function createPoolTable(id, poolData) {
  const container = createEl("div", { class: "PoolContainer" });

  const table = createEl("table", { id: `Table-${id}`, class: "poolTable" });
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // intestazione
  const trHead = createEl("tr", { class: "PTabH1" });
  trHead.append(
    createEl("th", { class: "PTabH1p", text: `Pool ${id}` }),
    createEl("th", { class: "PTabH1s", text: `Streep ${id} (rosso)`, colspan: 5 }),
    createEl("th", { class: "PTabH1t", text: `time 14:30`, colspan: 4 })
  );
  thead.appendChild(trHead);

  // header righe dati
  const trCols = document.createElement("tr");
  const headerCells = [
    { text: "Athleta", class: "PTabH2CellA" },
    { text: "Rank" }, { text: "Club" },
    { text: "1" }, { text: "2" }, { text: "3" },
    { text: "4" }, { text: "5" }, { text: "6" }, { text: "7" },
    { class: "PTabH2Cempty" },
    { text: "TS" }, { text: "RS" }, { text: "Diff" },
    { class: "PTabH2Cempty" },
    { text: "V" }, { text: "V/M" }
  ];
  headerCells.forEach(c => trCols.appendChild(createEl("th", { class: c.class || "PTabH2Cell", text: c.text || "" })));
  tbody.appendChild(trCols);

  // righe dinamiche dai dati
  poolData.forEach(riga => {
    const tr = document.createElement("tr");
    riga.forEach((cell, i) => {
      if (cell === "") tr.appendChild(createEl("td", { class: "PTabH2Cempty" }));
      else tr.appendChild(createEl("td", { text: cell }));
    });
    tbody.appendChild(tr);
  });

  // pulsanti e extraRow (come prima)
  const trBtns = document.createElement("tr");
  const tdLeft = createEl("td", { colspan: 10 });
  tdLeft.style.border = "none"; tdLeft.style.textAlign = "left";
  const btn1 = createEl("button", { id: `btnToggle1-${id}`, text: "Details" });
  tdLeft.appendChild(btn1);

  const tdEmpty = createEl("td"); tdEmpty.style.border = "none";

  const tdRight = createEl("td", { colspan: 6 });
  tdRight.style.border = "none"; tdRight.style.textAlign = "right";
  const btn2 = createEl("button", { id: `btnToggle2-${id}`, text: "Referees" });
  tdRight.appendChild(btn2);

  trBtns.append(tdLeft, tdEmpty, tdRight);
  tbody.appendChild(trBtns);

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
  Object.keys(dati).forEach(id => {
    root.appendChild(createPoolTable(id, dati[id].pool));
  });
 


});