//function createEventContainer() {
//  const container = document.createElement('div');
//  container.className = 'event-list-container';
//
//  const grid = document.createElement('div');
//  grid.className = 'event-grid';
//  grid.id = 'event-list';
//
//  container.appendChild(grid);
//
//  // Genera gli eventi
//  const html = eventsAA.map(ev => `
//    <div class="event-card">
//      <div class="event-header">
//        <strong>${ev.title}</strong>
//        <span class="event-description">(${ev.description})</span>
//      </div>
//      <small>${ev.date} ⏰ ${ev.time}</small>
//    </div>
//  `).join('');
//
//  grid.innerHTML = html;
//
//  return container;  
//}

function ScheduledRacesList() {
  const container = document.createElement('div');
  container.className = 'event-list-container scrollable-container';  // aggiungo classe per scrollbar

  const grid = document.createElement('div');
  grid.className = 'event-grid list-layout';  // classe aggiuntiva per layout a colonna singola
  grid.id = 'event-list';

  container.appendChild(grid);

  // Genera gli eventi
  const html = eventsAA.map(ev => `
    <div class="event-card">
      <div class="event-header">
        <strong>${ev.title}</strong>
        <span class="event-description">(${ev.description})</span>
      </div>
      <small>${ev.date} ⏰ ${ev.time}</small>
    </div>
  `).join('');

  grid.innerHTML = html;

  return container;  
}
