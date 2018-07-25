import pify from 'pify';
import _ from 'lodash';
import _glob from 'glob';
import path from 'path';
import liveServer from 'live-server';
import puppeteer from 'puppeteer';
import pEach from 'p-each-series';
const glob = pify(_glob);

(async function() {
  const demos = _.map(await glob('./docs/demos/*/'), filepath =>
    path.basename(filepath)
  );

  liveServer.start({
    root: './docs',
    open: false,
    port: 8082,
  });

  const browser = await puppeteer.launch();

  await pEach(demos, async demo => {
    const page = await browser.newPage();
    page.setViewport({ width: 1600, height: 900 });
    await page.goto(`http://127.0.0.1:8082/demos/${demo}/`);

    // Wait for the whole InstantSearch to load
    let waitForRender = true;
    while (waitForRender) {
      const renderDiv = await page.evaluate(() =>
        document.getElementById('firstRender')
      );
      waitForRender = !renderDiv;
    }

    await page.screenshot({
      path: `./docs/demos/${demo}/og_image.png`,
    });
  });
  await browser.close();
  process.exit(0); // eslint-disable-line no-process-exit
})();
