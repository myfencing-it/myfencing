// ---------------------------------------------------------------------
// Function race01.js
// ---------------------------------------------------------------------
function loadRace(id) {
  console.log("race01.js → Funzione loadRace invocata con id:", id);

  const contentArea = document.getElementById('content-area');
  if (!contentArea) {
    console.error('content-area non trovato nel DOM');
    return;
  }

  // Mostra il valore ricevuto a schermo
  contentArea.innerHTML = `
    <h2>Test race01.js</h2>
    <p>ID ricevuto: <strong>${id}</strong></p>
  `;
}

// =====================================================================
//             MAIN
// =====================================================================
function MAIN() {  };

 

const itemMenuHome0 = [
  { name: "Home",         target: "home" },
  { name: "Athleta Ranking",   target: "ranking" }];

const itemMenuHome1 = [
  { name: "Home",              target: "home" },
  { name: "Athleta Ranking",   target: "ranking" },
  { name: "Pools",             target: "pools" },
  { name: "Ranking Pools",     target: "rankingpools" },
  { name: "Tableau",           target: "tableau" },
  { name: "altro",             target: "altro" },  
  { name: "Final Ranking",     target: "finalranking" }
];
