const path = require('path');
const fs = require('fs');

console.log('starts readFile......');
fs.readFile(path.join(__dirname, 'table.json'), { encoding: 'utf-8' }, (error, contents) => {
  const { shareLocked } = JSON.parse(contents.toString());
  if (error) {
    console.log(error);
    return;
  }
  const result = [];
  shareLocked.forEach((record, index) => {
    result.push({ id: index + 1, ...record });
  });

  console.log('=========================================================================');

  fs.writeFile(path.join(__dirname, 'table.json'), JSON.stringify({ shareLocked: result }), (err) => {
    if (err) {
      console.log(error);
      return;
    }
    console.log('writeFile finished......');
  });
});
