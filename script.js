const pages = {
    home: \
        <section class=\"page-section\">
            <div class=\"hero terminal-frame\">
                <h1>SUBJECT: GORDON FREEMAN</h1>
                <p class=\"subtitle\">STATUS: RESEARCH ASSOCIATE | POSITION: GAME DEVELOPER</p>
                <div class=\"hero-image-placeholder\">
                    [HERO IMAGE: GORDON_IN_HEV_SUIT.JPG]
                </div>
            </div>
            <div class=\"bio-section\">
                <h3>PERSONNEL BIO</h3>
                <p>Welcome to the Black Mesa Research Facility secure portal. I am a Game Developer specializing in immersive systems and technical design. This terminal showcases my recent projects and collaborations within the facility.</p>
            </div>
            <div class=\"links-section\">
                <a href=\"https://linkedin.com\" target=\"_blank\" class=\"diegetic-button-static\">LINKEDIN_PORTAL.EXE</a>
                <a href=\"https://github.com\" target=\"_blank\" class=\"diegetic-button-static\">GITHUB_REPOS.EXE</a>
            </div>
        </section>
    \,
    work: \
        <section class=\"page-section\">
            <h2>INDIVIDUAL ASSIGNMENTS</h2>
            <div class=\"work-grid\">
                <div class=\"work-card terminal-frame\">
                    <h3>PROJECT: DFS1</h3>
                    <div class=\"media-container\" id=\"dfs1-media\">
                        <img src=\"images/placeholder.png\" alt=\"DFS1 Placeholder\" class=\"current-media\">
                        <div class=\"media-controls\">
                            <button class=\"diegetic-button-static mini\" id=\"cycle-dfs1\">CYCLE_MEDIA</button>
                        </div>
                    </div>
                    <div class=\"description\">
                        <p>Classification: Top Secret. Project DFS1 involves the implementation of advanced spatial algorithms. [Detailed description to be provided by user].</p>
                    </div>
                </div>
            </div>
        </section>
    \,
    team: \
        <section class=\"page-section\">
            <h2>TEAM COLLABORATIONS</h2>
            <div class=\"team-sections\">
                <div class=\"team-project terminal-frame\">
                    <h3>ANOMALOUS MATERIALS TEAM</h3>
                    <p>Cooperative development of resonance cascade containment systems. [Description pending].</p>
                </div>
            </div>
        </section>
    \,
    personal: \
        <section class=\"page-section\">
            <h2>PERSONNEL DOSSIER</h2>
            <div class=\"dossier-grid\">
                <div class=\"dossier-left\">
                    <img src=\"images/placeholder.png\" alt=\"Gordon Freeman\" class=\"portrait terminal-frame\">
                    <div class=\"info-block\">
                        <p><strong>NAME:</strong> JACK COLLINS</p>
                        <p><strong>CLEARANCE:</strong> LEVEL 4</p>
                    </div>
                </div>
                <div class=\"dossier-right\">
                    <h3>DOCUMENTS</h3>
                    <div class=\"doc-links\">
                        <a href=\"resume.pdf\" download class=\"diegetic-button-static\">DOWNLOAD_RESUME.PDF</a>
                    </div>
                </div>
            </div>
        </section>
    \
};

function loadPage(pageKey) {
    const contentArea = document.getElementById(\"content-area\");
    if (!contentArea) return;
    contentArea.innerHTML = pages[pageKey] || \"<h1>404: DATA CORRUPTED</h1>\";
    document.querySelectorAll(\".nav-btn\").forEach(btn => btn.classList.remove(\"active\"));
    const activeBtn = document.getElementById(\
av-\\);
    if (activeBtn) activeBtn.classList.add(\"active\");
}

document.addEventListener(\"DOMContentLoaded\", () => {
    document.querySelectorAll(\".nav-btn\").forEach(btn => {
        btn.addEventListener(\"click\", () => {
            loadPage(btn.getAttribute(\"data-page\"));
        });
    });
    loadPage(\"home\");
});
