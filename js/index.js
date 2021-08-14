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
  const mcon = document.getElementById('my-app');
  const mstart = document.getElementById('my-start-button');
  const mDailyRandom = dailyRandom(getId() + dayOfYear());
  
  console.log(CARDS[Math.floor(CARDS.length * mDailyRandom)]);

  mcon.style.backgroundColor = 'bisque';

  mstart.addEventListener('click', (event) => {
    mcon.style.backgroundColor = (mcon.style.backgroundColor === 'bisque') ? 'coral' : 'bisque';
  });
};
