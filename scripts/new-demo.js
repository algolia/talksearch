import chalk from 'chalk';
import _ from 'lodash';
import inquirer from 'inquirer';
import fs from 'fs-extra';

const newDemo = {
  // Open a prompt and wait for the answer
  async prompt(question) {
    const answer = await inquirer.prompt([{ name: 'key', message: question }]);
    return answer.key;
  },
  replaceInFile(filepath, hash) {
    let content = fs.readFileSync(filepath, 'utf-8');
    _.each(hash, (value, key) => {
      content = _.replace(content, `{{${key}}}`, value);
    });
    fs.writeFileSync(filepath, content);
  },
};

(async () => {
  try {
    const conferenceName = await newDemo.prompt('Conference name:');
    const conferenceUrl = await newDemo.prompt('Conference website:');
    const indexName = await newDemo.prompt('Index name:');
    const apiKey = await newDemo.prompt('API key:');

    // Copy sample to new demo
    const destination = `./src/demos/${indexName}/`;
    fs.copySync('./src/demos/_sample', destination);

    await newDemo.replaceInFile(`${destination}/index.md`, {
      conferenceName,
      conferenceUrl,
    });
    await newDemo.replaceInFile(`${destination}/search.js`, {
      indexName,
      apiKey,
    });

    console.info(`Demo available at ./demos/${indexName}`);
  } catch (err) {
    console.info(chalk.red('✘ ERROR:'));
    console.info(err.message);
    process.exit(1); // eslint-disable-line no-process-exit
  }
})();
