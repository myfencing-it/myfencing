function ffd0(righe, colonne, numAtleti) {
         numAtleti=510;
   const contentArea = document.getElementById("content-area"); // <--- aggiungi questa riga
   const maxAtleti = Math.pow(2, Math.ceil(Math.log2(numAtleti)));
         console.log ("numAtleti"  + numAtleti);
         console.log ("maxAtleti"  + maxAtleti);

  // Crea l'HTML della tabella
  contentArea.innerHTML = `
    <div id="wrapper" style="overflow-x: auto; max-width: 100%;">
      <table id="tabella" border="0" style="min-width: 800px;">
        <thead><tr id="headerRow"></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  `;

  const headerRow   = document.getElementById('headerRow');
  const tbody       = document.querySelector('#tabella tbody');
  const colonneNomi = [];
  // Intestazione
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
    colonneNomi.push("T" + i);  
    headerRow.appendChild(th);
  };  // end intestazione

  // Righe
  // r         Riga tabella    (0-1535)
  // colIndex  Colonna Tabella (1-9)
  // a         indice assalto  (1-16)
  // ia        indice atleta   (1-256)  

  // RIGHE
  for (let r = 0; r < (maxAtleti*2)-1; r++) {
    let colIndex = 0; // nuovo indice per colonneNomi

    const row = document.createElement('tr');
  
    // COLONNE
    for (let i = maxAtleti; i >= 1; i = i / 2) {
      const td = document.createElement('td');
      let modulo=r % (2 ** (colIndex + 1));
      let fabio  = Math.pow(2, colIndex*2);
      let ia = Math.floor(r/(2 ** (colIndex + 1))) + 1;
      td.textContent = "m =" + modulo + " atleta " + ia;
      if (modulo >   (2 ** colIndex - 1) && modulo <= (2 ** colIndex - 1) + 2 ** (colIndex - 1)) td.style.borderLeft = "3px solid blue";
      if (modulo === (2 ** colIndex - 1)) {
        td.style.color = "blue";
        td.style.borderBottom = "3px solid blue";
      };
      if (modulo <=  (2 ** colIndex - 1)  && modulo >= (2 ** (colIndex - 1))) td.style.borderLeft = "3px solid blue";
      if (modulo !== (2 ** colIndex - 1)) td.textContent = "";
      td.style.fontSize = '12px';
      td.style.height   = '25px';
      row.appendChild(td);
      colIndex++;
    }
    tbody.appendChild(row);
  }

} // end function



