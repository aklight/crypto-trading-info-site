const { FuseBox } = require('fuse-box');
const { TypeChecker } = require('fuse-box-typechecker');

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js'
});

fuse.dev({ port: 4445, httpServer: false });

fuse
  .bundle('server/bundle')
  .watch('server/**') // watch only server related code.. bugs up atm
  .instructions(' > [server/index.ts]')
  // Execute process right after bundling is completed
  // launch and restart express
  .completed((proc) => proc.start());

const testWatch = TypeChecker({
  tsConfig: './src/tsconfig.json',
  basePath: './',
  name: 'Watch Async'
});

testWatch
  .runPromise('./src')
  .then((res) => {
    if (res) {
      process.exit(1);
    }
  })
  .catch((err) => console.log(err));

fuse
  .bundle('client/app')
  .watch('client/**') // watch only client related code
  .hmr()
  .instructions(' > client/index.ts');

fuse.run();
