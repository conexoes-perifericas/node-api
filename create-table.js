import sql from './db.js';

// sql`DROP TABLE IF EXISTS videos`
//   .then(() => {
//     console.log('Tabela videos apagada')
//   })
//   .then(() => {
//     process.exit(1);
//   })

sql`CREATE TABLE videos (
  id          TEXT PRIMARY KEY,
  title       TEXT,
  description TEXT,
  duration    INTEGER
);`
  .then(() => {
    console.log('Tabela criada')
  })
  .then(() => {
    process.exit(1);
  })