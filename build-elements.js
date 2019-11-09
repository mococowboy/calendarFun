const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/calendarFun/runtime-es2015.js',
    './dist/calendarFun/polyfills-es2015.js',
    './dist/calendarFun/scripts.js',
    './dist/calendarFun/main-es2015.js',
  ]
  await fs.ensureDir('calendarFun')
  await concat(files, 'calendarFun/calendarFun.js');
  await fs.copyFile('./dist/calendarFun/styles.css', 'calendarFun/styles.css')
  //await fs.copy('./dist/calendarFun/assets/', 'calendarFun/assets/' )

})()
