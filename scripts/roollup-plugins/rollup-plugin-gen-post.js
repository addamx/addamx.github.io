export default (options = {}) => {
  // const dir = options.dir;
  // const filter = createFilter(options.include ?? [], options.exclude ?? []);
  // return {
  //   name: 'rollup-plugin-gen-post', // this name will show up in warnings and errors
  //   buildStart() {
  //     const watch = (src) => {
  //       const filesToWatch = fs.readdirSync(src);

  //       for (let file of filesToWatch) {
  //         const fullPath = path.join(src, file);
  //         const stats = fs.statSync(fullPath);

  //         if (!filter(fullPath)) continue;

  //         if (stats.isFile()) {
  //           // this.addWatchFile(fullPath);
  //         } else if (stats.isDirectory()) {
  //           watch(fullPath);
  //         }
  //       }
  //     };

  //     watch(dir);
  //   }
  // }
}