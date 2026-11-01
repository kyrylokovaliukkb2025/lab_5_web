document.addEventListener('DOMContentLoaded', () => {
    saveSystemInfo();
    renderStorageInfo();
    loadReviews();
    initModal();
    initTheme();
});

function saveSystemInfo() {
    const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        languages: navigator.languages.join(', '),
        cookieEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        hardwareConcurrency: navigator.hardwareConcurrency,
        screen: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    for (const key in info) {
        localStorage.setItem(key, String(info[key]));
    }
}

function renderStorageInfo() {
    const list = document.getElementById('storage-info');
    list.innerHTML = '';

    for (let i = 0 ; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const li = document.createElement('li');
        const b = document.createElement('b');
        b.textContent = key + ': ';
        li.append(b, localStorage.getItem(key));
        list.appendChild(li);
    }
}

async function loadReviews() {
    const status = document.getElementById('reviews-status');
    const list = document.getElementById('reviews-list');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/10/comments`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const comments = await response.json(); 

        status.remove();
        comments.forEach(comment => {         
            const card = document.createElement('article');
            card.className = 'review';  

            const name = document.createElement('h4');
            name.textContent = comment.name;
            const email = document.createElement('a');     
            email.href = `mailto:${comment.email}`;
            email.textContent = comment.email;
            const body = document.createElement('p');
            body.textContent = comment.body;

            card.append(name, email, body);
            list.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading reviews:', error);
        status.textContent = 'Не вдалося завантажити відгуки.';
    }
}

function initModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('modal-close');

    const close = () => {
        modal.classList.add('hidden');
        sessionStorage.setItem('modalClosed', 'true');
    };

    if (sessionStorage.getItem('modalClosed') !== 'true') {
        setTimeout(() => modal.classList.remove('hidden'), 60000);
    }

    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}


function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    document.getElementById('theme-toggle').textContent = theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

function initTheme() {
     const hours = new Date().getHours();
    let theme = hours >= 7 && hours < 21 ? 'light' : 'dark';
    applyTheme(theme);

    document.getElementById('theme-toggle').addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        applyTheme(theme);
    });
}