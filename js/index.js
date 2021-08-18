// TODO:
//   - add text style
//   - pop up for piramides
//   - animations/videos on grid spaces
//     - one spinning pyramid
//     - one video
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
  const fullMessage = `${mDailyCard.message.pt}<p>Volte amanhã para uma nova leitura.</p>`;

  const mCardId = event.target.parentElement.id;
  const mIntroId = (mCardId === 'card-left') ? 'card-center' : 'card-left';
  const mMessageId = (mCardId === 'card-right') ? 'card-center' : 'card-right';
  const mCard = document.getElementById(mCardId);
  const mIntro = document.getElementById(mIntroId);
  const mMessage = document.getElementById(mMessageId);

  const mCardText = mCard.querySelector('.text');
  const mIntroText = mIntro.querySelector('.text');
  const mMessageText = mMessage.querySelector('.text');
  const mCardOverlay = mCard.querySelector('.overlay');
  const mIntroOverlay = mIntro.querySelector('.overlay');
  const mMessageOverlay = mMessage.querySelector('.overlay');

  LSTORAGE.setItem('algotypesLastClickedId', mCardId);
  LSTORAGE.setItem('algotypesLastCardIndex', mCardIndex);

  // fade card
  setTimeout(() => mCardOverlay.style.opacity = 1, CARD_OVERLAY_FADEIN);
  setTimeout(() => mCard.style.backgroundImage = `url(${mCardImageUrl})`, CARD_SET_IMAGE);
  setTimeout(() => mCardOverlay.style.opacity = 0, CARD_OVERLAY_FADEOUT);

  // fade intro text
  setTimeout(() => mIntroOverlay.style.opacity = 1, INTRO_OVERLAY_FADEIN);
  setTimeout(() => mIntro.style.backgroundImage = 'none', INTRO_REMOVE_IMAGE);
  setTimeout(() => mIntroText.innerHTML = mDailyCard.algorithm.pt, INTRO_REMOVE_IMAGE);
  setTimeout(() => mIntroOverlay.style.opacity = 0, INTRO_OVERLAY_FADEOUT);

  // fade message text
  setTimeout(() => mMessageOverlay.style.opacity = 1, MESSAGE_OVERLAY_FADEIN);
  setTimeout(() => mMessage.style.backgroundImage = 'none', MESSAGE_REMOVE_IMAGE);
  setTimeout(() => mMessageText.innerHTML = fullMessage, MESSAGE_REMOVE_IMAGE);
  setTimeout(() => mMessageOverlay.style.opacity = 0, MESSAGE_OVERLAY_FADEOUT);
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
};
