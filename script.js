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
