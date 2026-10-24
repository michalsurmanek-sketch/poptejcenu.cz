// Shared navigation behavior for PoptejCenu.cz
(()=>{const nav=document.querySelector('#pcNav'),button=document.querySelector('.pc-menu');if(!nav||!button)return;
const path=location.pathname;const active=path.includes('firmy')?'/firmy.html':'/';
nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===active)a.setAttribute('aria-current','page')});
button.addEventListener('click',()=>{const open=nav.classList.toggle('pc-open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Zavřít navigaci':'Otevřít navigaci')});
document.addEventListener('click',e=>{if(!e.target.closest('.pc-header')){nav.classList.remove('pc-open');button.setAttribute('aria-expanded','false')}});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('pc-open');button.setAttribute('aria-expanded','false')}});
})();