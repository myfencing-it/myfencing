// ---------------------------------------------------------------------
// Author: Fabio D Filippone
// History:
// FFD - 06/07/2025 23:13:16 - v.1.0.0
// FFD - 23/07/2025 21:58:47 - v.1.1.3
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// Function TitleBar
// ---------------------------------------------------------------------
function TitleBar(tt) {
t1=tt.category;
t2=tt.title;
t3=tt.date;

   const bar = document.createElement("div");
         bar.className = "title-bar";
   const left = document.createElement("div");
         left.className = "left";
         left.textContent = tt.category;
   const center = document.createElement("div");
         center.className = "center";
         center.textContent = tt.title;
   const right = document.createElement("div");
         right.className = "right";
   const testoPrimaImg = document.createTextNode(tt.date);

   const img = document.createElement("img");
         img.src  = 'images/fencing-logo.png'
         img.alt = "Logo";
         img.style.height = "70px";
         img.style.marginTop = "10px";
         img.style.marginRight = "20px";
         img.style.cursor = "pointer"; // se vuoi che sembri cliccabile
         right.appendChild(img);

         bar.appendChild(left);
         bar.appendChild(center);
         bar.appendChild(right);

   document.body.appendChild(bar);

const content = document.createElement("div");
content.className = "title-content";
document.body.appendChild(content);

const p = document.createElement("p");
p.textContent = "Pools";
p.className = "FFTabHeaderTitle";
content.appendChild(p);

};

// ---------------------------------------------------------------------
// Function CreateTableau
// ---------------------------------------------------------------------
function CreateTableau(numColonne, colonnaIniziale) {
  const headerRow = document.getElementById('headerRow');
  const dataRow = document.getElementById('dataRow');

  // Pulisce eventuali contenuti precedenti
  headerRow.innerHTML = '';
  dataRow.innerHTML = '';

  // Crea intestazioni e celle dati
  for (let i = 0; i < numColonne; i++) {
    const th = document.createElement('th');
    th.textContent = "Col " + i;
    headerRow.appendChild(th);

    const td = document.createElement('td');
    td.textContent = "Dati " + i;
    dataRow.appendChild(td);
  }

  // Scroll automatico alla colonna desiderata
  window.addEventListener('load', () => {
    const table = document.getElementById('tabella');
    const wrapper = document.getElementById('wrapper');
    const cell = table.rows[0].cells[colonnaIniziale];

    if (cell) {
      wrapper.scrollLeft = cell.offsetLeft;
    }
  });
}

  
// --------------------------------
//             MAIN
// --------------------------------
TitleBar(datiTT) 

//  const numColonne = 50;
//  const colonnaIniziale = 10; // <-- Imposta qui la colonna da mostrare all'avvio
//
//  const headerRow = document.getElementById('headerRow');
//  const dataRow = document.getElementById('dataRow');
//
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
//  


// Esempio: crea 50 colonne e parte dalla colonna 9
CreateTableau(50, 9);
