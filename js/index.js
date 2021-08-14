window.onload = (event) => {
  const mcon = document.getElementById('my-app');
  mcon.style.backgroundColor = 'bisque';

  mcon.addEventListener('click', (event) => {
    mcon.style.backgroundColor = (mcon.style.backgroundColor === 'bisque') ? 'coral' : 'bisque';
  });
};
