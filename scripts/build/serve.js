import markdown from './markdown';
import css from './css';
import js from './js';
import assets from './assets';
import liveServer from 'live-server';
import pAll from 'p-all';

(async function() {
  await pAll([
    async () => await markdown.run(),
    async () => await js.run(),
    async () => await assets.run(),
  ]);
  await css.run();

  markdown.watch();
  css.watch();
  js.watch();
  assets.watch();

  liveServer.start({ root: './dist', port: 8082 });
})();
