// TODO:
//   - finish draw card logic + animation
//   - add texts
//   - 3 cards to choose from
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
  const mStorage = window.localStorage;
  mStorage.setItem('algotypesId', mStorage.getItem('algotypesId') || generateId());
  return mStorage.getItem('algotypesId');
}

function intToHexString(i) {
  return `0x${i.toString(16).padStart(2, '0').toUpperCase()}`;
}

const OVERLAY_TRANSITION_DURATION = 1000;
const BUTTON_TRANSITION_DURATION = 500;
const READ_PAUSE = 500;
const BEAT_PAUSE = 10;

const BUTTON_FADEOUT = 0;
const BUTTON_HIDE = BUTTON_FADEOUT + BUTTON_TRANSITION_DURATION + BEAT_PAUSE;
const APP_OVERLAY_FADEIN = BUTTON_HIDE + BEAT_PAUSE;
const APP_SET_IMAGE = APP_OVERLAY_FADEIN + OVERLAY_TRANSITION_DURATION + READ_PAUSE;
const APP_OVERLAY_FADEOUT = APP_SET_IMAGE + BEAT_PAUSE;
const INTRO_OVERLAY_FADEIN = APP_OVERLAY_FADEOUT + OVERLAY_TRANSITION_DURATION + READ_PAUSE;
const INTRO_REMOVE_IMAGE = INTRO_OVERLAY_FADEIN + OVERLAY_TRANSITION_DURATION + READ_PAUSE;
const INTRO_OVERLAY_FADEOUT = INTRO_REMOVE_IMAGE + BEAT_PAUSE;
const MESSAGE_OVERLAY_FADEIN = INTRO_OVERLAY_FADEOUT + OVERLAY_TRANSITION_DURATION + BEAT_PAUSE;
const MESSAGE_REMOVE_IMAGE = MESSAGE_OVERLAY_FADEIN + OVERLAY_TRANSITION_DURATION + READ_PAUSE;
const MESSAGE_OVERLAY_FADEOUT = MESSAGE_REMOVE_IMAGE + BEAT_PAUSE;

window.onload = (event) => {
  const mApp = document.getElementById('my-app');
  const mIntro = document.getElementById('my-intro');
  const mMessage = document.getElementById('my-message');
  const mStartButton = document.getElementById('my-start-button');
  const mAppOverlay = document.getElementById('my-app-overlay');
  const mIntroOverlay = document.getElementById('my-intro-overlay');
  const mMessageOverlay = document.getElementById('my-message-overlay');
  const mIntroText = document.getElementById('my-intro-text');
  const mMessageText = document.getElementById('my-message-text');

  const mDailyRandom = dailyRandom(getId() + dayOfYear());
  const mCard = CARDS[Math.floor(CARDS.length * mDailyRandom)];
  console.log(mCard);
  const mCardImageUrl = `imgs/cards/${intToHexString(mCard.number)}.png`;

  mStartButton.style.transitionDuration = `${BUTTON_TRANSITION_DURATION / 1000}s`;
  mAppOverlay.style.transitionDuration = `${OVERLAY_TRANSITION_DURATION / 1000}s`;
  mIntroOverlay.style.transitionDuration = `${OVERLAY_TRANSITION_DURATION / 1000}s`;
  mMessageOverlay.style.transitionDuration = `${OVERLAY_TRANSITION_DURATION / 1000}s`;

  mStartButton.addEventListener('click', (event) => {
    // fade button
    setTimeout(() => mStartButton.style.opacity = 0, BUTTON_FADEOUT);
    setTimeout(() => mStartButton.style.zIndex = -100, BUTTON_HIDE);

    // fade card
    setTimeout(() => mAppOverlay.style.opacity = 1, APP_OVERLAY_FADEIN);
    setTimeout(() => mApp.style.backgroundImage = `url(${mCardImageUrl})`, APP_SET_IMAGE);
    setTimeout(() => mAppOverlay.style.opacity = 0, APP_OVERLAY_FADEOUT);

    // fade intro text
    setTimeout(() => mIntroOverlay.style.opacity = 1, INTRO_OVERLAY_FADEIN);
    setTimeout(() => mIntro.style.backgroundImage = 'none', INTRO_REMOVE_IMAGE);
    setTimeout(() => mIntroText.innerHTML = mCard.algorithm.pt, INTRO_REMOVE_IMAGE);
    setTimeout(() => mIntroOverlay.style.opacity = 0, INTRO_OVERLAY_FADEOUT);

    // fade message text
    const fullMessage = `${mCard.message.pt}<p>Volte amanhã para uma nova leitura.</p>`
    setTimeout(() => mMessageOverlay.style.opacity = 1, MESSAGE_OVERLAY_FADEIN);
    setTimeout(() => mMessage.style.backgroundImage = 'none', MESSAGE_REMOVE_IMAGE);
    setTimeout(() => mMessageText.innerHTML = fullMessage, MESSAGE_REMOVE_IMAGE);
    setTimeout(() => mMessageOverlay.style.opacity = 0, MESSAGE_OVERLAY_FADEOUT);
  });
};
