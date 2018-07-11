import markdown from './markdown';
import css from './css';
import pAll from 'p-all';

(async function() {
  await pAll([async () => await markdown.run(), async () => await css.run()]);
})();
