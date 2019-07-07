const { FuseBox } = require('fuse-box');
const { TypeChecker } = require('fuse-box-typechecker');

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js'
});

fuse.dev({ port: 4445, httpServer: true });

const Watch = TypeChecker({
  tsConfig: './src/tsconfig.json',
  basePath: './',
  name: 'Watch Async'
});

Watch.runPromise('./src')
  .then((res) => {
    if (res) {
      // if therea are errors then exit
      process.exit(1);
    }
  })
  .catch((err) => console.log(err));

fuse
  .bundle('server/bundle')
  .watch('server/**') // watch only server related code.. bugs up atm
  .instructions(' > [server/index.ts]')
  // Execute process right after bundling is completed
  // launch and restart express
  .completed((proc) => proc.start());

fuse
  .bundle('client/app')
  .watch('client/**') // watch only client related code
  .hmr()
  .instructions(' > client/index.tsx');

fuse.run();
