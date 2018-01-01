const eachSeries = require('async/eachSeries');
const fs = require('fs');
const utm = require('utm');
const knex = require('../server/database');

const lines = fs.readFileSync(__dirname + '/scims.sql', 'utf8').split('\n');

eachSeries(lines, (line, next) => {
  if (!line.includes('\t')) return setImmediate(next);

  const [the_geom, objectid, marktype, marknumber, markstatus, monumenttype, markalias, trigname, trigtype, monumentlocation, mgaeasting, mganorthing, mgazone, gdadate, gdaclass, gdaorder, ahdheight, ahddate, ahdclass, ahdorder, marksymbol, msoid, ausgeoid09, mgacsf, mgacon] = line.split('\t');
  const { latitude, longitude} = utm.toLatLon(mgaeasting, mganorthing, mgazone, null, false);
  
  const row = { 
    mark_type: marktype, 
    mark_number: marknumber, 
    mark_id: marktype + marknumber,
    easting: mgaeasting, 
    northing: mganorthing, 
    zone: mgazone, 
    latitude, 
    longitude,
    created_at: new Date(),
    updated_at: new Date()
  };

  knex('marks').insert(row).then(() => {
    setImmediate(next);
  }).catch(err => {
    setImmediate(() => next(err));
  });
}, (err) => {
  if (err) {
    console.log('Error:', err);
  }
  console.log('👍 Done');
});




