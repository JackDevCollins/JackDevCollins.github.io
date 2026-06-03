
const pages = {
    home: `<section class="page-section page-home">
        <div class="status-msg">ACCESSING_SECURE_PORTAL... [SUCCESS]</div>
        <div class="hero terminal-frame glitch-target glitch-active">
            <h1>SUBJECT: JACK COLLINS</h1>
            <p class="subtitle">STATUS: RESEARCHER | SECTOR: C (TESTING)</p>
            <div class="hero-video-bg">
                <video autoplay muted loop playsinline><source src="images/content/hero_compressed.mp4" type="video/mp4"></video>
            </div>
        </div>
        <div class="bio-section terminal-frame glitch-target">
            <h3>PERSONNEL BIO</h3>
            <p>Specialized in immersive systems and technical design. Accessing contact data...</p>
            <p style="margin-top:10px; font-family:monospace; color:var(--terminal-green);">CONTACT: <a href="mailto:JackofallDev@gmail.com" style="color:inherit; text-decoration:none; border-bottom:1px dashed var(--terminal-green);">JackofallDev@gmail.com</a></p>
        </div>
        <div class="links-section">
            <a href=\"https://www.linkedin.com/in/jack-collins-gaming/\" target=\"_blank\" class=\"diegetic-button-static\">LINKEDIN_ENTRY.EXE</a>
            <a href=\"https://github.com/JackDevCollins\" target=\"_blank\" class=\"diegetic-button-static\">GIT_REPOSITORY.EXE</a>
        </div></section>`,
    work: `<section class="page-section page-work">
        <div class="status-msg">ACCESSING_SOLO_ASSIGNMENTS... [DECRYPTING]</div>
        <h2 style="color:var(--blue-accent);">INDIV_STUDIES</h2>
        <div class="work-grid">
            <div class="work-card terminal-frame glitch-target glitch-active">
                <h3>PROJECT: DFS01 OpenXR</h3>
                <div class="media-container" id="dfs1-media"><img src="images/placeholder.png" class="current-media"><div class="media-controls"><button class="diegetic-button-static mini" id="cycle-dfs1">CYCLE_FEED</button></div></div>
                <p>Advanced spatial algorithm implementation and OpenXR integration.</p>
            </div>
        </div></section>`,
    team: `<section class="page-section page-team">
        <div class="status-msg">ACCESSING_JOINT_INITIATIVES... [AUTHORIZED]</div>
        <h2 style="color:var(--terminal-green);">TEAM_COLLABORATIONS</h2>
        <div class="team-sections">
            <div class="team-project terminal-frame glitch-target">
                <h3>PROJECT: Splitter Cell</h3>
                <div class="gallery-container"><div class="gallery-scroll"><img src="images/placeholder.png"><img src="images/placeholder.png"></div></div>
                <p>Collaborative stealth-action mechanics development.</p>
            </div>
            <div class="team-project terminal-frame glitch-target glitch-active">
                <h3>PROJECT: Hamster Ballin</h2>
                <div class="gallery-container"><div class="gallery-scroll"><img src="images/placeholder.png"><img src="images/placeholder.png"></div></div>
                <p>Cooperative development of physics-based locomotion systems.</p>
            </div>
        </div></section>`,
    personal: `<section class="page-section page-personal">
        <div class="status-msg">ACCESSING_PERSONNEL_DOSSIER... [AUTHENTICATED]</div>
        <h2 style=\"color:var(--alert-red);\">PERSONNEL DOSSIER</h2>
        <div class=\"dossier-grid\">
            <div class=\"dossier-left\">
                <div class=\"portrait-container terminal-frame glitch-target glitch-active\">
                    <img src=\"images/content/headshot.jpg\" class=\"portrait\">
                    <div class=\"portrait-overlay\"></div>
                </div>
                <div class=\"info-block terminal-frame glitch-target\">
                    <p><strong>NAME:</strong> JACK COLLINS</p>
                    <p><strong>ID:</strong> FAC-942-JS</p>
                    <p><strong>EMAIL:</strong> <a href="mailto:JackofallDev@gmail.com" style="color:inherit;">JackofallDev@gmail.com</a></p>
                </div>
            </div>
            <div class=\"dossier-right\">
                <div class=\"terminal-frame glitch-target\">
                    <h3>EDUCATION_HISTORY</h3>
                    <div class=\"edu-entry\"><p><strong>SMU GUILDHALL</strong> [2025-2027]</p><p>Master of Science: Game Programming</p></div>
                    <div class=\"edu-entry\" style=\"margin-top:10px;\"><p><strong>UNT</strong> [2020-PRESENT]</p><p>BAAS: Interactive Simulation</p></div>
                </div>
                <div class=\"terminal-frame glitch-target\">
                    <h3>SYSTEM_CAPABILITIES</h3>
                    <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:0.8rem; font-family:monospace;\">
                        <div><p>> UNREAL ENGINE 5/4</p><p>> UNITY ENGINE</p><p>> BLUEPRINTING</p></div>
                        <div><p>> SUBSTANCE SUITE</p><p>> MAYA / 3DS MAX</p><p>> C++ / HOUDINI</p></div>
                    </div>
                </div>
            </div>
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
