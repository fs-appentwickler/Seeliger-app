// Die Website funktioniert auch ohne JavaScript. Keine Cookies oder Analyse.
const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
if (toggle && navigation) {
  const mobile = window.matchMedia('(max-width: 760px)');
  const sync = () => {
    toggle.hidden = !mobile.matches;
    navigation.dataset.collapsible = '';
    navigation.hidden = mobile.matches;
    toggle.setAttribute('aria-expanded', String(!navigation.hidden));
  };
  sync();
  mobile.addEventListener('change', sync);
  toggle.addEventListener('click', () => {
    navigation.hidden = !navigation.hidden;
    toggle.setAttribute('aria-expanded', String(!navigation.hidden));
  });
  navigation.addEventListener('click', event => {
    if (mobile.matches && event.target.closest('a')) {
      navigation.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
      navigation.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}
document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Videodatei erst beim bewussten Anklicken des Vorschaubilds laden.
document.querySelectorAll('.video-preview-button[data-video-src]').forEach(button => {
  const container = button.closest('.video-preview');
  const video = container.querySelector('video');
  const message = container.querySelector('.video-message');
  button.addEventListener('click', () => {
    document.querySelectorAll('.app-video').forEach(other => {
      if (other !== video) other.pause();
    });
    if (!video.getAttribute('src')) video.src = button.dataset.videoSrc;
    button.hidden = true;
    video.hidden = false;
    video.focus();
    video.play().catch(() => {
      message.textContent = 'Bitte drücken Sie die Wiedergabetaste im Video.';
      message.hidden = false;
    });
  });
  video.addEventListener('error', () => {
    message.textContent = 'Das Video konnte nicht geladen werden. Bitte versuchen Sie es später erneut.';
    message.hidden = false;
    video.hidden = true;
    button.hidden = false;
  });
  video.addEventListener('playing', () => { message.hidden = true; });
});
