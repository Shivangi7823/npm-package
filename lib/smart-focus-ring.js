function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}

function smartFocusRing() {
  window.addEventListener('keydown', handleFirstTab);
}

module.exports = smartFocusRing;