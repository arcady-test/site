(function(){
  const btn=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav-links');
  if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');});}
  const search=document.querySelector('#resourceSearch');
  if(search){search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();document.querySelectorAll('[data-resource]').forEach(card=>{card.hidden=!card.textContent.toLowerCase().includes(q);});});}
})();


// v17: update active nav item while scrolling the one-page site
(() => {
  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  const setActive = () => {
    const offset = 190;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) {
        current = section.id;
      }
    }
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  document.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('load', setActive);
  setActive();
})();
