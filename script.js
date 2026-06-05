
const pages = {
    home: `<section class="page-section page-home">
        <div class="status-container"><div class="status-msg">ACCESSING_SECURE_PORTAL... [SUCCESS]</div></div>
        <div class="hero terminal-frame glitch-target glitch-active">
            <h1 class="scramble-target">SUBJECT: JACK COLLINS</h1>
            <p class="subtitle scramble-target">STATUS: RESEARCHER | SECTOR: C (TESTING)</p>
            <div class="hero-video-bg">
                <video autoplay muted loop playsinline><source src="images/content/hero_compressed.mp4" type="video/mp4"></video>
            </div>
        </div>
        <div class="bio-section terminal-frame glitch-target">
            <h3 class="scramble-target">PERSONNEL BIO</h3>
            <p class="scramble-target">Specialized in immersive systems and technical design. Accessing contact data...</p>
            <p style="margin-top:10px; font-family:monospace; color:var(--terminal-green);">CONTACT: <a href="mailto:JackofallDev@gmail.com" class="no-scramble" style="color:inherit; text-decoration:none; border-bottom:1px dashed var(--terminal-green);">JackofallDev@gmail.com</a></p>
        </div>
        <div class="links-section">
            <a href=\"https://www.linkedin.com/in/jack-collins-gaming/\" target=\"_blank\" class=\"diegetic-button-static no-scramble\">LINKEDIN_ENTRY.EXE</a>
            <a href=\"https://github.com/JackDevCollins\" target=\"_blank\" class=\"diegetic-button-static no-scramble\">GIT_REPOSITORY.EXE</a>
        </div></section>`,
    work: `<section class="page-section page-work">
        <div class="status-container"><div class="status-msg">ACCESSING_SOLO_ASSIGNMENTS... [DECRYPTING]</div></div>
        <h2 style="color:var(--blue-accent);" class="scramble-target">INDIV_STUDIES</h2>
        <div class="work-grid">
            <div class="work-card terminal-frame glitch-target glitch-active">
                <h3 class="scramble-target">PROJECT: DFS01 OpenXR</h3>
                <div class="media-container" id="dfs1-media"><img src="images/placeholder.png" class="current-media"><div class="media-controls"><button class="diegetic-button-static mini no-scramble" id="cycle-dfs1">CYCLE_FEED</button></div></div>
                <p class="scramble-target">Advanced spatial algorithm implementation and OpenXR integration.</p>
            </div>
        </div></section>`,
    team: `<section class="page-section page-team">
        <div class="status-container"><div class="status-msg">ACCESSING_JOINT_INITIATIVES... [AUTHORIZED]</div></div>
        <h2 style="color:var(--terminal-green);" class="scramble-target">TEAM_COLLABORATIONS</h2>
        <div class="team-sections">
            <div class="team-project terminal-frame glitch-target">
                <h3 class="scramble-target">PROJECT: Splitter Cell</h3>
                <div class="gallery-container"><div class="gallery-scroll"><img src="images/placeholder.png"><img src="images/placeholder.png"></div></div>
                <p class="scramble-target">Collaborative stealth-action mechanics development.</p>
            </div>
            <div class="team-project terminal-frame glitch-target glitch-active">
                <h3 class="scramble-target">PROJECT: Hamster Ballin</h2>
                <div class="gallery-container"><div class="gallery-scroll"><img src="images/placeholder.png"><img src="images/placeholder.png"></div></div>
                <p class="scramble-target">Cooperative development of physics-based locomotion systems.</p>
            </div>
        </div></section>`,
    personal: `<section class="page-section page-personal">
        <div class="status-container"><div class="status-msg">ACCESSING_PERSONNEL_DOSSIER... [AUTHENTICATED]</div></div>
        <h2 style=\"color:var(--alert-red);\" class="scramble-target">PERSONNEL DOSSIER</h2>
        <div class=\"dossier-grid\">
            <div class=\"dossier-left\">
                <div class=\"portrait-container terminal-frame glitch-target glitch-active\">
                    <img src=\"images/content/headshot.jpg\" class=\"portrait\">
                </div>
                <div class=\"info-block terminal-frame glitch-target\">
                    <p class="scramble-target"><strong>NAME:</strong> JACK COLLINS</p>
                    <p class="scramble-target"><strong>ID:</strong> FAC-942-JS</p>
                    <p><strong>EMAIL:</strong> <a href="mailto:JackCollStack@outlook.com" class="no-scramble" style="color:inherit;">JackCollStack@outlook.com</a></p>
                </div>
            </div>
            <div class=\"dossier-right\">
                <div class=\"terminal-frame glitch-target\">
                    <h3 class="scramble-target">EDUCATION_HISTORY</h3>
                    <div class=\"edu-entry\"><p class="scramble-target"><strong>SMU GUILDHALL</strong> [2025-2027]</p><p class="scramble-target">Master of Science: Game Programming</p></div>
                </div>
                <div class=\"terminal-frame glitch-target\">
                    <h3 class="scramble-target">SYSTEM_CAPABILITIES</h3>
                    <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:0.8rem; font-family:monospace;\">
                        <div><p class="scramble-target">> UNREAL ENGINE 5/4</p><p class="scramble-target">> BLUEPRINTING</p></div>
                        <div><p class="scramble-target">> SUBSTANCE SUITE</p><p class="scramble-target">> C++ / HOUDINI</p></div>
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

const scrambles = { "o": "0", "O": "0", "s": "$", "S": "$", "a": "@", "A": "@", "e": "3", "E": "3", "i": "1", "I": "1" };
function scrambleText() {
    document.querySelectorAll(".scramble-target:not(.no-scramble)").forEach(el => {
        if (Math.random() > 0.80) {
            const original = el.innerText;
            const scrambled = original.split("").map(char => (scrambles[char] && Math.random() > 0.6) ? scrambles[char] : char).join("");
            el.innerText = scrambled;
            setTimeout(() => { el.innerText = original; }, 150);
        }
    });
}
setInterval(scrambleText, 3000);

const mediaAssets={dfs1:["images/placeholder.png","images/placeholder2.png"]}; let mediaIndex={dfs1:0};
function cycleMedia(id){ const img=document.querySelector("#"+id+"-media img"); if(!img)return; mediaIndex[id]=(mediaIndex[id]+1)%mediaAssets[id].length; img.src=mediaAssets[id][mediaIndex[id]]; }
document.addEventListener("DOMContentLoaded",()=>{ 
    document.querySelectorAll(".nav-btn").forEach(b=>{ b.addEventListener("click",()=>loadPage(b.getAttribute("data-page"))); }); 
    loadPage("home"); 
});
