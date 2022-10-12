const fs = require('fs')
const fsPromises = fs.promises;

const traverseDir = async (src, handleFile, deep = true, handleDir) => {
  const entries = await fsPromises.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const curPath = path.join(src, entry.name);
    if (entry.isDirectory()) {
      if (deep) {
        if (handleDir) {
          handleDir(curPath, entry.name);
        }
        traverseDir(curPath, handleFile, deep);
      }
    } else {
      await handleFile(curPath, entry.name);
    }
  }
};

module.exports = {
  traverseDir
}