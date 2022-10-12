const fs = require('fs')
const fsPromises = fs.promises;
const path = require('path')

const excludeDirs = ['.vitepress', 'public']
let id = 0;
module.exports = {
  // watch: path.relative(__dirname, cwd + '/docs/.vitepress/**/*.md').replace(/\\/g, '/'),
  async getPostData(rootSrc) {
    const postList = [];
    const postMap = new Map();
    console.log('generate post data');

    const traverseDir = async (src, list, pathPath = '') => {
      const entries = await fsPromises.readdir(src, { withFileTypes: true });
      for (const entry of entries) {
        id++;
        const fileName = entry.name;
        const curPath = path.join(src, fileName);
        if (entry.isDirectory()) {
          if (!excludeDirs.includes(fileName)) {
            const childrenLilst = [];
            const dirItem = {
              // id,
              // type: 'dir',
              collapsible: true,
              collapsed: true,
              text: fileName,
              items:  childrenLilst
            }
            list.push(dirItem)
            postMap.set(id, dirItem)
            await traverseDir(curPath, childrenLilst, pathPath + '/' + fileName);
          }
        } else if (src !== rootSrc) {
          if (fileName.endsWith('.md')) {
            const name = fileName.substring(0, fileName.length - 3);
            const timestamp = Math.floor(fs.statSync(curPath).mtimeMs);
            const postItem = {
              // id,
              // type: 'post',
              text: name,
              // create: timestamp,
              link: pathPath + '/' + name
            };
            list.push(postItem);
            postMap.set(id, postItem)
          }
        }
      }
    };

    await traverseDir(rootSrc, postList)

    postList.sort((a, b) => b.create - a.create);
    // console.log('postList', postList)
    // console.log('postMap', postMap)

    return { list: postList, map: postMap };
  }
}