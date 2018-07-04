import markdown from './markdown';
import liveServer from 'live-server';

(async function() {
  await markdown.watch();

  liveServer.start({ root: './dist' });
})();
