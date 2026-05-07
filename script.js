const text = {
    pl: { cennik: "CENNIK" },
    en: { cennik: "PRICE LIST" }
};

function setLang(lang) {
    document.querySelector("#cennik h2").innerText = text[lang].cennik;
}

// COOKIE BANNER
if (!localStorage.getItem('cookieAccepted')) {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="cookie-banner" id="cookie">
             Ta strona używa plików cookie.
             <a href="polityka.html">Dowiedz się więcej</a>
             <button onclick="acceptCookie()">Akceptuję</button>
        </div>
        `);
}

function acceptCookie() {
    localStorage.setItem('cookieAccepted', 'true');
    document.getElementById('cookie').style.display = 'none';
}