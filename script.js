const pages = {
    home: '<section class=\"page-section\"><div class=\"hero terminal-frame\"><h1>SUBJECT: GORDON FREEMAN</h1><p class=\"subtitle\">STATUS: RESEARCH ASSOCIATE | POSITION: GAME DEVELOPER</p></div><div class=\"bio-section\"><h3>PERSONNEL BIO</h3><p>Welcome to the Black Mesa Research Facility secure portal.</p></div></section>',
    work: '<section class=\"page-section\"><h2>INDIVIDUAL ASSIGNMENTS</h2><div class=\"work-grid\"><h3>PROJECT: DFS1</h3></div></section>',
    team: '<section class=\"page-section\"><h2>TEAM COLLABORATIONS</h2></section>',
    personal: '<section class=\"page-section\"><h2>PERSONNEL DOSSIER</h2></section>'
};

function loadPage(pageKey) {
    console.log('Attemping to load:', pageKey);
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.innerHTML = pages[pageKey] || '<h1>404: DATA CORRUPTED</h1>';
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById('nav-' + pageKey);
        if (activeBtn) activeBtn.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Black Mesa Terminal Initialized');
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadPage(btn.getAttribute('data-page'));
        });
    });
    loadPage('home');
});
