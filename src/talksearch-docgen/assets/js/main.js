import activateClipboard from './activateClipboard.js';
import alg from 'algolia-frontend-components/javascripts.js';
import './editThisPage.js';

const docSearch = {
  apiKey: '5cb6763f264e31381e18639a1147634c',
  indexName: 'react-instantsearch',
  inputSelector: '#searchbox',
};

/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const header = new alg.communityHeader(docSearch);

const container = document.querySelector('.documentation-container');
const codeSamples = document.querySelectorAll('.code-sample');

activateClipboard(codeSamples);
// eslint-disable-next-line no-console
console.log('Welcome to main page');

const tsInterest = document.getElementById('talksearch-interest');

function convertToBoolean(value) {
  return (value == 'on') ? true : false;
}

function submitToZapier(e) {

  const tsDetails = {
    referrer: window.location.hostname,
    emailAddress: document.getElementById('emailInput').value,
    youtubeUrl: document.getElementById('youtubeUrlInput').value,
    avatarUrl: document.getElementById('avatarUrlInput').value,
    official: convertToBoolean(document.getElementById('officialInput').value)
  }

  fetch('https://hooks.zapier.com/hooks/catch/2876439/zoe69y/',{ 
    method: 'post',
    body: JSON.stringify(tsDetails)
  }).then(function(response){
    console.log('Form Submitted'+response.body);
  });
  
}

tsInterest.addEventListener('submit', submitToZapier)