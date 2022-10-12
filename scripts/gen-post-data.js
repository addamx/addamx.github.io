const fs = require('fs')
const fsPromises = fs.promises;
const path = require('path')
const { getPostData } = require('./utils/get-post-data')
const chokidar = require('chokidar');

const watchDir = path.join(process.cwd(), '/docs');

let count = 0;
async function handler(type, filePath) {
  const { list } = await getPostData(watchDir)
  return fsPromises.writeFile(path.join(watchDir, 'siderbar.json'), JSON.stringify(list, null, 4));
}
handler()

chokidar.watch(watchDir, {
  ignoreInitial: true,
  ignored: /(siderbar\.json)|(.vitepress)|(public)/,
}).on('all', handler)
