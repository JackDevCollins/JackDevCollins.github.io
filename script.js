
const pages = {
    home: `<section class="page-section page-home">
        <div class="hero terminal-frame">
            <h1>SUBJECT: JACK COLLINS</h1>
            <p class="subtitle">STATUS: RESEARCHER | FACILITY SECTOR: C (TESTING)</p>
            <div class="hero-video-container">
                <video autoplay muted loop playsinline>
                    <source src="images/content/hero_compressed.mp4" type="video/mp4">
                    [SECURE_VIDEO_FEED_OFFLINE]
                </video>
            </div>
        </div>
        <div class="bio-section terminal-frame">
            <h3>PERSONNEL BIO</h3>
            <p>Secure portal accessed. Specialized in immersive systems, technical design, and large-scale interactive environments.</p>
        </div>
        <div class="links-section">
            <a href="https://www.linkedin.com/in/jack-collins-gaming/" target="_blank" class="diegetic-button-static">LINKEDIN_ENTRY.EXE</a>
            <a href="https://github.com/JackDevCollins" target="_blank" class="diegetic-button-static">GIT_REPOSITORY.EXE</a>
        </div></section>`,
    work: `<section class="page-section page-work">
        <h2>TECHNICAL ASSIGNMENTS</h2>
        <div class="work-grid">
            <div class="work-card terminal-frame">
                <h3>PROJECT: DFS1 (Spatial-Alg)</h3>
                <div class="media-container" id="dfs1-media"><img src="images/placeholder.png" class="current-media"><div class="media-controls"><button class="diegetic-button-static mini" id="cycle-dfs1">CYCLE_FEED</button></div></div>
                <div class="description"><p>Project DFS1: Advanced spatial algorithm implementation for non-linear navigation environments.</p></div>
            </div>
            <div class="work-card terminal-frame">
                <h3>PROJECT: HEV-INTERFACE</h3>
                <p>Integration of real-time diagnostics into specialized protective equipment. [ENCRYPTED]</p>
            </div>
        </div></section>`,
    team: `<section class="page-section page-team">
        <h2>COLLABORATIVE PROJECTS</h2>
        <div class="team-sections">
            <div class="team-project terminal-frame">
                <h3>INITIATIVE ALPHA: CORE MATERIALS</h3>
                <div class="gallery-container"><div class="gallery-scroll"><img src="images/placeholder.png"><img src="images/placeholder.png"></div></div>
                <p>Development of containment protocols and high-energy diagnostics in Testing Sector C.</p>
            </div>
        </div></section>`,
    personal: `<section class="page-section page-personal">
        <h2>PERSONNEL DOSSIER</h2>
        <div class="dossier-grid">
            <div class="dossier-left"><img src="images/headshot.jpg" class="portrait terminal-frame"><div class="info-block terminal-frame"><p><strong>NAME:</strong> JACK COLLINS</p><p><strong>ID:</strong> FAC-942-JS</p></div></div>
            <div class="dossier-right"><div class="terminal-frame"><h3>DOCUMENTS</h3><div class="doc-links" style="margin: 15px 0;"><a href="resume.pdf" download class="diegetic-button-static">ACCESS_RESUME.PDF</a></div><p style="color:var(--terminal-green);">Clearance Level 4 Authenticated.</p></div></div>
        </div></section>`
};
function loadPage(p){ 
    const a=document.getElementById("content-area"); if(!a)return; 
    a.innerHTML=pages[p]||"<h1>404</h1>"; 
    document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
    const act=document.getElementById("nav-"+p); if(act)act.classList.add("active");
    if(p==="work"){const c=document.getElementById("cycle-dfs1"); if(c)c.onclick=()=>cycleMedia("dfs1");}
    a.scrollTop=0; 
}
const mediaAssets={dfs1:["images/placeholder.png","images/placeholder2.png"]}; let mediaIndex={dfs1:0};
function cycleMedia(id){ const img=document.querySelector("#"+id+"-media img"); if(!img)return; mediaIndex[id]=(mediaIndex[id]+1)%mediaAssets[id].length; img.src=mediaAssets[id][mediaIndex[id]]; }
document.addEventListener("DOMContentLoaded",()=>{ 
    document.querySelectorAll(".nav-btn").forEach(b=>{ b.addEventListener("click",()=>loadPage(b.getAttribute("data-page"))); }); 
    loadPage("home"); 
});
