const data = require('./t32');

Object.entries(data.T32).forEach(([matchId, match]) => {
  console.log(`Match ${matchId}`);
  console.log(`  DX: ${match.dx.atleta} (${match.dx.club}) - Punti: ${match.dx.D}`);
  console.log(`  SX: ${match.sx.atleta} (${match.sx.club}) - Punti: ${match.sx.D}`);
  console.log(`  Arbitri:`);
  match.referees.forEach(ref => {
    console.log(`    - ${ref.referee} (${ref.country})`);
  });
  console.log();
});

