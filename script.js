
const pages = {
    home: '<h1>GORDON FREEMAN</h1><p>Welcome to Black Mesa Research Facility.</p>',
    work: '<h1>INDIVIDUAL WORK</h1><p>Project DFS1...</p>'
};

function loadPage(pageKey) {
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.innerHTML = pages[pageKey] || '<h1>404</h1>';
        console.log('Page loaded:', pageKey);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadPage(btn.getAttribute('data-page'));
        });
    });
    loadPage('home');
});
