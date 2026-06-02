const pages = {
    home: `
        <section class="page-section">
            <div class="hero terminal-frame">
                <h1>SUBJECT: GORDON FREEMAN</h1>
                <p class="subtitle">STATUS: RESEARCH ASSOCIATE | POSITION: GAME DEVELOPER</p>
                <div class="hero-image-placeholder">
                    [HERO IMAGE: GORDON_IN_HEV_SUIT.JPG]
                </div>
            </div>
            <div class="bio-section">
                <h3>PERSONNEL BIO</h3>
                <p>Welcome to the Black Mesa Research Facility secure portal. I am a Game Developer specializing in immersive systems and technical design. This terminal showcases my recent projects and collaborations within the facility.</p>
            </div>
            <div class="links-section">
                <a href="https://linkedin.com" target="_blank" class="diegetic-button">LINKEDIN_PORTAL.EXE</a>
                <a href="https://github.com" target="_blank" class="diegetic-button">GITHUB_REPOS.EXE</a>
            </div>
        </section>
    `,
    work: `
        <section class="page-section">
            <h2>INDIVIDUAL ASSIGNMENTS</h2>
            <div class="work-grid">
                <div class="work-card terminal-frame">
                    <h3>PROJECT: DFS1</h3>
                    <div class="media-container" id="dfs1-media">
                        <img src="images/placeholder.png" alt="DFS1 Placeholder" class="current-media">
                        <div class="media-controls">
                            <button onclick="cycleMedia(\"dfs1\")" class="diegetic-button mini">CYCLE_MEDIA</button>
                        </div>
                    </div>
                    <div class="description">
                        <p>Classification: Top Secret. Project DFS1 involves the implementation of advanced spatial algorithms. [Detailed description to be provided by user].</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    team: `
        <section class="page-section">
            <h2>TEAM COLLABORATIONS</h2>
            <div class="team-sections">
                <div class="team-project terminal-frame">
                    <h3>ANOMALOUS MATERIALS TEAM</h3>
                    <div class="gallery-container">
                        <div class="gallery-scroll">
                            <img src="images/placeholder.png" alt="Team 1">
                            <img src="images/placeholder.png" alt="Team 1">
                        </div>
                    </div>
                    <p>Cooperative development of resonance cascade containment systems. [Description pending].</p>
                </div>
                <div class="team-project terminal-frame">
                    <h3>LAMBDA COMPLEX INITIATIVE</h3>
                    <div class="gallery-container">
                        <div class="gallery-scroll">
                            <img src="images/placeholder.png" alt="Team 2">
                            <img src="images/placeholder.png" alt="Team 2">
                        </div>
                    </div>
                    <p>Joint effort on portal stabilization and teleportation diagnostics. [Description pending].</p>
                </div>
            </div>
        </section>
    `,
    personal: `
        <section class="page-section">
            <h2>PERSONNEL DOSSIER</h2>
            <div class="dossier-grid">
                <div class="dossier-left">
                    <img src="images/placeholder.png" alt="Gordon Freeman" class="portrait terminal-frame">
                    <div class="info-block">
                        <p><strong>NAME:</strong> JACK COLLINS</p>
                        <p><strong>CLEARANCE:</strong> LEVEL 4</p>
                        <p><strong>DEPT:</strong> GAME DEVELOPMENT</p>
                    </div>
                </div>
                <div class="dossier-right">
                    <h3>DOCUMENTS</h3>
                    <div class="doc-links">
                        <a href="resume.pdf" download class="diegetic-button">DOWNLOAD_RESUME.PDF</a>
                        <a href="coverletter.pdf" download class="diegetic-button">DOWNLOAD_COVER_LETTER.PDF</a>
                    </div>
                    <div class="cover-letter-preview terminal-frame">
                        <p>To the Black Mesa Recruitment Board...</p>
                        <p>[Full cover letter text will be placed here]</p>
                    </div>
                </div>
            </div>
        </section>
    `
};

function loadPage(pageKey) {
    const contentArea = document.getElementById(\"content-area\");
    contentArea.innerHTML = pages[pageKey] || \"<h1>404: DATA CORRUPTED</h1>\";
    
    // Update active state in nav
    document.querySelectorAll(\".nav-btn\").forEach(btn => btn.classList.remove(\"active\"));
    const activeBtn = document.getElementById(\`nav-\${pageKey}\`);
    if (activeBtn) activeBtn.classList.add(\"active\");

    // Scroll to top
    contentArea.scrollTop = 0;
}

// Media cycling logic
const mediaAssets = {
    dfs1: [\"images/placeholder.png\", \"images/placeholder2.png\"]
};
let mediaIndex = { dfs1: 0 };

function cycleMedia(projectId) {
    const container = document.querySelector(\`#\${projectId}-media img\`);
    if (!container) return;
    
    mediaIndex[projectId] = (mediaIndex[projectId] + 1) % mediaAssets[projectId].length;
    container.src = mediaAssets[projectId][mediaIndex[projectId]];
}

// Initialize with home page
window.onload = () => loadPage(\"home\");
