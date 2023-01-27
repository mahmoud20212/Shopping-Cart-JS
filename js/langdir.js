/* Language handling file */
/* ------------------ */
let getLang = localStorage.getItem('lang');
let en = document.getElementById('en');
let ar = document.getElementById('ar');

if(!getLang) {
    localStorage.setItem('lang', 'ltr');
}

if(getLang == 'rtl') {
    changeDir('rtl');
    ar.style.display = 'none';
} else {
    changeDir('ltr');
    en.style.display = 'none';
}

en.addEventListener('click', () => {
    changeDir('ltr');
    ar.style.display = 'block';
    en.style.display = 'none';
});

ar.addEventListener('click', () => {
    changeDir('rtl');
    en.style.display = 'block';
    ar.style.display = 'none';
});

function changeDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('lang', dir);
}