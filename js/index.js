// TODO:
//   - add images to imgs/
//   - add image urls to json
//   - finish card draw logic
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

window.onload = (event) => {
  const mApp = document.getElementById('my-app');
  const mStartButton = document.getElementById('my-start-button');
  const mAppOverlay = document.getElementById('my-app-overlay');
  const mTextOverlay = document.getElementById('my-text-overlay');

  const mDailyRandom = dailyRandom(getId() + dayOfYear());
  const mCard = CARDS[Math.floor(CARDS.length * mDailyRandom)];

  console.log(mCard);

  mStartButton.addEventListener('click', (event) => {
    setTimeout(() => mStartButton.style.opacity = 0, 0);
    setTimeout(() => mStartButton.style.zIndex = -100, 250);
    setTimeout(() => mAppOverlay.style.opacity = 1, 300);
    // change card url
    setTimeout(() => mAppOverlay.style.opacity = 0, 670);
    setTimeout(() => mTextOverlay.style.opacity = 1, 1350);
    // set text
    // fade text in
  });
};
