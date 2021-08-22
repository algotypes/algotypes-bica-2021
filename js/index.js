// TODO:
//   - remove empty moments from top video
//   - adjust text style: add font from cards
//   - mobile flex etc

function dayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
}

function dailyRandom(mSeed) {
  const x = Math.sin(mSeed) * 1e4;
  return x - Math.floor(x);
}

function generateId() {
  return Math.floor(Math.random() * 0xdeadbeef);
}

function getId() {
  LSTORAGE.setItem('algotypesId', LSTORAGE.getItem('algotypesId') || generateId());
  return LSTORAGE.getItem('algotypesId');
}

function intToHexString(i) {
  return `0x${i.toString(16).padStart(2, '0').toUpperCase()}`;
}

const LSTORAGE = window.localStorage;
const OVERLAY_TRANSITION_DURATION = 1000;
const READ_PAUSE = 500;
const BEAT_PAUSE = 10;

var CARD_OVERLAY_FADEIN = 0;
var CARD_SET_IMAGE = CARD_OVERLAY_FADEIN + OVERLAY_TRANSITION_DURATION + READ_PAUSE;
var CARD_OVERLAY_FADEOUT = CARD_SET_IMAGE + BEAT_PAUSE;
var INTRO_OVERLAY_FADEIN = CARD_OVERLAY_FADEOUT + OVERLAY_TRANSITION_DURATION + READ_PAUSE;
var INTRO_REMOVE_IMAGE = INTRO_OVERLAY_FADEIN + OVERLAY_TRANSITION_DURATION + READ_PAUSE;
var INTRO_OVERLAY_FADEOUT = INTRO_REMOVE_IMAGE + BEAT_PAUSE;
var MESSAGE_OVERLAY_FADEIN = INTRO_OVERLAY_FADEOUT + OVERLAY_TRANSITION_DURATION + BEAT_PAUSE;
var MESSAGE_REMOVE_IMAGE = MESSAGE_OVERLAY_FADEIN + OVERLAY_TRANSITION_DURATION + READ_PAUSE;
var MESSAGE_OVERLAY_FADEOUT = MESSAGE_REMOVE_IMAGE + BEAT_PAUSE;

function zeroDelays() {
  CARD_OVERLAY_FADEIN =
    CARD_SET_IMAGE =
    CARD_OVERLAY_FADEOUT =
    INTRO_OVERLAY_FADEIN =
    INTRO_REMOVE_IMAGE =
    INTRO_OVERLAY_FADEOUT =
    MESSAGE_OVERLAY_FADEIN =
    MESSAGE_REMOVE_IMAGE =
    MESSAGE_OVERLAY_FADEOUT = 0;
}

function onCardClick(event) {
  document.getElementById(event.target.parentElement.id).style.opacity = .8;

  const allCards = Array.from(document.getElementsByClassName('dynamic'));
  allCards.forEach(c => c.classList.remove('active'));
  allCards.forEach(c => c.removeEventListener('click', onCardClick));

  const mCardIndex = parseInt(LSTORAGE.getItem('algotypesNextCardIndex'));
  const mDailyCard = CARDS[mCardIndex];
  const mCardImageUrl = `imgs/cards/${intToHexString(mDailyCard.number)}.png`;

  const mCardId = event.target.parentElement.id;
  const mIntroId = (mCardId === 'card-left') ? 'card-center' : 'card-left';
  const mMessageId = (mCardId === 'card-right') ? 'card-center' : 'card-right';
  const mCardDiv = document.getElementById(mCardId);
  const mIntroDiv = document.getElementById(mIntroId);
  const mMessageDiv = document.getElementById(mMessageId);

  const mCardText = mCardDiv.querySelector('.text');
  const mIntroText = mIntroDiv.querySelector('.text');
  const mMessageText = mMessageDiv.querySelector('.text');
  const mCardOverlay = mCardDiv.querySelector('.overlay');
  const mIntroOverlay = mIntroDiv.querySelector('.overlay');
  const mMessageOverlay = mMessageDiv.querySelector('.overlay');

  LSTORAGE.setItem('algotypesLastClickedId', mCardId);
  LSTORAGE.setItem('algotypesLastCardIndex', mCardIndex);

  const comeBackTxt = '<br><br><br><br>Volte amanhã para uma nova leitura.';
  const mMessageTxt = `${mDailyCard.message.pt}${comeBackTxt}`.replace('. ', '.<br><br>');
  const mIntroTxt = `${mDailyCard.algorithm.pt}`.replaceAll('. ', '.<br><br>');

  // fade card
  setTimeout(() => mCardOverlay.style.opacity = 1, CARD_OVERLAY_FADEIN);
  setTimeout(() => mCardDiv.style.backgroundImage = `url(${mCardImageUrl})`, CARD_SET_IMAGE);
  setTimeout(() => mCardOverlay.style.opacity = 0, CARD_OVERLAY_FADEOUT);

  // fade intro text
  setTimeout(() => mIntroOverlay.style.opacity = 1, INTRO_OVERLAY_FADEIN);
  setTimeout(() => mIntroDiv.style.backgroundImage = 'none', INTRO_REMOVE_IMAGE);
  setTimeout(() => mIntroText.innerHTML = mIntroTxt, INTRO_REMOVE_IMAGE);
  setTimeout(() => mIntroOverlay.style.opacity = 0, INTRO_OVERLAY_FADEOUT);

  // fade message text
  setTimeout(() => mMessageOverlay.style.opacity = 1, MESSAGE_OVERLAY_FADEIN);
  setTimeout(() => mMessageDiv.style.backgroundImage = 'none', MESSAGE_REMOVE_IMAGE);
  setTimeout(() => mMessageText.innerHTML = mMessageTxt, MESSAGE_REMOVE_IMAGE);
  setTimeout(() => mMessageOverlay.style.opacity = 0, MESSAGE_OVERLAY_FADEOUT);
}

function populatePyramids() {
  const pyramidTop = document.getElementById('my-pyramid-00');
  const pyramidMid = document.getElementById('my-pyramid-01');
  const pyramidBot = document.getElementById('my-pyramid-02');
  const pyramidViz = document.getElementById('my-pyramid-03');

  const mCardIndex = parseInt(LSTORAGE.getItem('algotypesNextCardIndex'));
  const mDailyCard = CARDS[mCardIndex];
  const mCardHex = `0${mDailyCard.number.toString(16).toUpperCase()}`.slice(-2);

  const mRandomCard = CARDS[Math.floor(Math.random() * CARDS.length)];
  const mRandomCardHex = `0${mRandomCard.number.toString(16).toUpperCase()}`.slice(-2);

  pyramidTop.style.backgroundImage = `url(imgs/pyramids/0x${mCardHex}_A.jpg)`;
  pyramidMid.style.backgroundImage = `url(imgs/pyramids/0x${mRandomCardHex}_A.jpg)`;
  pyramidBot.style.backgroundImage = `url(imgs/pyramids/0x${mCardHex}_B.jpg)`;
  pyramidViz.style.backgroundImage = `url(imgs/pyramids/0x16.jpg)`;

  pyramidTop.setAttribute('href', mDailyCard.link);
  pyramidMid.setAttribute('href', mRandomCard.link);
  pyramidBot.setAttribute('href', mDailyCard.link);

  setTimeout(() => pyramidTop.style.opacity = 1, 0);
  setTimeout(() => pyramidMid.style.opacity = 1, 1000);
  setTimeout(() => pyramidBot.style.opacity = 1, 2000);
  setTimeout(() => pyramidViz.style.opacity = 1, 3000);
}

window.onload = (event) => {
  const allCards = Array.from(document.getElementsByClassName('dynamic'));
  const allOverlay = Array.from(document.getElementsByClassName('overlay'));

  const mDailyRandom = dailyRandom(getId() + dayOfYear());
  const nextCardIndex = Math.floor(CARDS.length * mDailyRandom);
  LSTORAGE.setItem('algotypesNextCardIndex', nextCardIndex);
  const lastCardIndex = parseInt(LSTORAGE.getItem('algotypesLastCardIndex'));

  allCards.forEach(c => c.addEventListener('click', onCardClick));
  allOverlay.forEach(e => e.style.transitionDuration = `${OVERLAY_TRANSITION_DURATION / 1000}s`);

  if (lastCardIndex === nextCardIndex) {
    zeroDelays();
    const lastClickedId = LSTORAGE.getItem('algotypesLastClickedId');
    document.getElementById(lastClickedId).querySelector('.overlay').click();
  } else {
    allCards.forEach(c => c.classList.add('active'));
  }

  populatePyramids();
};
