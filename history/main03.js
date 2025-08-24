// ---------------------------------------------------------------------
// Author: Fabio D Filippone
// History:
// FFD - 06/07/2025 23:13:16 - v.1.0.0
// FFD - 23/07/2025 21:58:47 - v.1.1.3
// ---------------------------------------------------------------------

// --------------------------------
//             MAIN
// --------------------------------
TitleBar(datiTT) 
//TitleBar("13-04-2025","2025 Rovigo 2 prova Gran Prix Kinder Joy of Moving","Fioretto Ragazzi") 

//const content = document.createElement("div");
//content.className = "title-content";
//document.body.appendChild(content);
//
//const p = document.createElement("p");
//p.textContent = "Pools";
//p.className = "FFTabHeaderTitle";
//content.appendChild(p);

for (let i = 1; i <= totalpools; i++) {
  let key = String(i).padStart(2, '0');
  showPool(dati[key].pool,dati[key].details,dati[key].datapool,dati[key].referees);
}



