function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

// Default language
setLanguage('en');
