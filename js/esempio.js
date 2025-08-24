document.addEventListener("DOMContentLoaded", () => {
  const thead = document.querySelector(".RankingTable thead");
  const tbody = document.getElementById("ranking-body");

  // === CREA L'INTESTAZIONE ===
  const intestazioni = ["Pos", "Rank", "Athleta", "", "Club", "Club Name", "Points"];
  const headerRow = document.createElement("tr");

  intestazioni.forEach(testo => {
    const th = document.createElement("th");
    th.textContent = testo;

    // Rimuove bordi a destra o sinistra
    if (testo === "Athleta") th.style.borderRight = "none";
    if (testo === "") th.style.borderLeft = "none";

    // Stile base per la sticky header
    th.style.backgroundColor = "#005599";
    th.style.color = "white";
    th.style.border = "1px solid #ccc";
    th.style.height = "25px";
    th.style.fontSize = "14px";
    th.style.textAlign = "center";
    th.style.position = "sticky";
    th.style.top = "0";
    th.style.zIndex = "10";

    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);

  // === CREA IL CORPO TABELLA ===
  for (let i = 0; i < 30; i++) {
    const row = document.createElement("tr");
    const dati = [
      i + 1,
      100 - i,
      `Athlete ${i + 1}`,
      "", // colonna vuota
      `Club ${i % 5}`,
      `Team ${i % 5}`,
      Math.floor(Math.random() * 500)
    ];

    dati.forEach(text => {
      const td = document.createElement("td");
      td.textContent = text;

      td.style.border = "1px solid #ccc";
      td.style.paddingLeft = "5px";
      td.style.paddingRight = "5px";
      td.style.height = "25px";
      td.style.fontSize = "13px";
      td.style.color = "green";
      td.style.textAlign = "center";

      row.appendChild(td);
    });

    tbody.appendChild(row);
  }
});
