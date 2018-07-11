import markdown from './markdown';
import css from './css';
import liveServer from 'live-server';
import pAll from 'p-all';

(async function() {
  await pAll([async () => await markdown.run(), async () => await css.run()]);

  markdown.watch();
  css.watch();

  liveServer.start({ root: './dist', port: 8082 });
})();
