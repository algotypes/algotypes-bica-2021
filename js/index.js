// TODO:
//   - finish draw card logic + animation
//   - animations/videos on grid spaces
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

window.onload = (event) => {
  const mApp = document.getElementById('my-app');
  const mStartButton = document.getElementById('my-start-button');
  const mAppOverlay = document.getElementById('my-app-overlay');
  const mTextOverlay = document.getElementById('my-text-overlay');

  const mDailyRandom = dailyRandom(getId() + dayOfYear());
  const mCard = CARDS[Math.floor(CARDS.length * mDailyRandom)];
  const mCardImageUrl = `imgs/cards/${intToHexString(mCard.number)}.png`;

  mStartButton.addEventListener('click', (event) => {
    setTimeout(() => mStartButton.style.opacity = 0, 0);
    setTimeout(() => mStartButton.style.zIndex = -100, 270);
    setTimeout(() => mAppOverlay.style.opacity = 1, 400);
    setTimeout(() => mApp.style.backgroundImage = `url(${mCardImageUrl})`, 900);
    setTimeout(() => mAppOverlay.style.opacity = 0, 910);
    setTimeout(() => mTextOverlay.style.opacity = 1, 1350);
    // set text
    // fade text in
  });
};
