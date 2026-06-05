
const pages = {
        home: `<section class=\"page-section page-home\">
        <div class=\"status-container\"><div class=\"status-msg\">ACCESSING_SECURE_PORTAL... [SUCCESS]</div></div>
        <div class=\"hero glitch-target glitch-active\">
            <div class=\"hero-video-bg\">
                <video autoplay muted loop playsinline><source src=\"images/content/hero_compressed.mp4\" type=\"video/mp4\"></video>
            </div>
            <h1 class=\"scramble-target\">JACK COLLINS</h1>
            <p class=\"subtitle scramble-target\">SUBJECT STATUS: RESEARCHER | SECTOR: C (TESTING)</p>
            <div class=\"bio-section terminal-frame\" style=\"margin-top:40px; background:rgba(0,0,0,0.6); backdrop-filter:blur(5px);\">
                <h3 class=\"scramble-target\" style=\"border-bottom:1px solid var(--lambda-orange); padding-bottom:5px; margin-bottom:10px;\">FACILITY_ARCHIVE_v2.0</h3>
                <p class=\"scramble-target\">Specializing in technical design and immersive systems. Monitoring lambda frequency for anomalies.</p>
                <div class=\"links-section\" style=\"margin-top:20px; display:flex; gap:15px; justify-content:center;\">
                    <a href=\"https://www.linkedin.com/in/jack-collins-gaming/\" target=\"_blank\" class=\"diegetic-button-static no-scramble\">LINKEDIN_ENTRY.EXE</a>
                    <a href=\"https://github.com/JackDevCollins\" target=\"_blank\" class=\"diegetic-button-static no-scramble\">GIT_REPOSITORY.EXE</a>
                </div>
            </div>
        </div>
        <div class=\"process-ticker no-scramble\">
            <div class=\"ticker-content\" id=\"process-log\"></div>
        </div>
    </section>`,
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
        team: `<section class=\"page-section page-team\">
        <div class=\"status-container\"><div class=\"status-msg\">ACCESSING_JOINT_INITIATIVES... [AUTHORIZED]</div></div>
        <h2 style=\"color:var(--terminal-green);\" class=\"scramble-target\">TEAM_COLLABORATIONS</h2>
        <div class=\"team-sections\">
            <div class=\"team-project terminal-frame glitch-target\">
                <h3 class=\"scramble-target\">PROJECT: Splitter Cell</h3>
                <div class=\"gallery-container\" id=\"splitter-gallery\">
                    <div class=\"gallery-scroll\">
                        <img src=\"images/content/Splitter_Cell/Game Poster.png\" title=\"Splitter Cell Poster\">
                        <img src=\"images/content/Splitter_Cell/Screenshot 2025-12-01 114430.png\">
                        <img src=\"images/content/Splitter_Cell/Screenshot 2025-12-01 114441.png\">
                        <img src=\"images/content/Splitter_Cell/Screenshot 2025-12-01 114525.png\">
                    </div>
                </div>
                <p class=\"scramble-target\">Collaborative stealth-action mechanics development. Focused on light-shadow interactions and AI behavior.</p>
            </div>
            <div class=\"team-project terminal-frame glitch-target glitch-active\">
                <h3 class=\"scramble-target\">PROJECT: Hamster Ballin</h2>
                <div class=\"gallery-container\">
                    <div class=\"gallery-scroll\">
                        <img src=\"images/content/Hamster_Ballin/WebPoster_280x360.png\" title=\"Hamster Ballin Poster\">
                    </div>
                </div>
                <p class=\"scramble-target\">Cooperative development of physics-based locomotion systems. Implementing spherical collision and momentum conservation.</p> 
            </div>
        </div></section>`,
        personal: `<section class=\"page-section page-personal\">
        <div class=\"status-container\"><div class=\"status-msg\">ACCESSING_PERSONNEL_DOSSIER... [AUTHENTICATED]</div></div>
        <h2 style=\"color:var(--alert-red);\" class=\"scramble-target\">PERSONNEL DOSSIER</h2>
        <div class=\"dossier-grid\">
            <div class=\"dossier-left\">
                <div class=\"portrait-container terminal-frame glitch-target glitch-active\">
                    <img src=\"images/content/headshot.jpg\" class=\"portrait\">
                </div>
                <div class=\"info-block terminal-frame glitch-target\">
                    <p class=\"scramble-target\"><strong>NAME:</strong> JACK COLLINS</p>
                    <p class=\"scramble-target\"><strong>ID:</strong> FAC-942-JS</p>
                    <p style=\"word-break: break-all;\"><strong>EMAIL:</strong> <a href=\"mailto:JackofallDev@gmail.com\" class=\"no-scramble\" style=\"color:inherit;\">JackofallDev@gmail.com</a></p>
                </div>
            </div>
            <div class=\"dossier-right\">
                <div class=\"terminal-frame glitch-target\">
                    <h3 class=\"scramble-target\">EDUCATION_HISTORY</h3>
                    <div class=\"edu-entry\" style=\"margin-bottom:15px;\">
                        <p class=\"scramble-target\"><strong>SMU GUILDHALL</strong> [Aug 2025 – May 2027]</p>
                        <p class=\"scramble-target\" style=\"font-size:0.85rem; opacity:0.8;\">Master of Science: Computer Games and Programming Skills</p>
                        <p class=\"scramble-target\" style=\"font-size:0.8rem; color:var(--terminal-green);\">Track: C35 Software Development</p>
                    </div>
                    <div class=\"edu-entry\" style=\"margin-bottom:15px;\">
                        <p class=\"scramble-target\"><strong>UNIVERSITY OF NORTH TEXAS</strong> [2020 – Present]</p>
                        <p class=\"scramble-target\" style=\"font-size:0.85rem; opacity:0.8;\">Bachelor of Applied Arts & Sciences</p>
                        <p class=\"scramble-target\" style=\"font-size:0.8rem; color:var(--terminal-green);\">Interactive Simulation & Game Technology</p>
                    </div>
                    <div class=\"edu-entry\">
                        <p class=\"scramble-target\"><strong>RICHLAND COLLEGE</strong> [2017 – 2019]</p>
                        <p class=\"scramble-target\" style=\"font-size:0.85rem; opacity:0.8;\">Associate of Applied Science</p>
                        <p class=\"scramble-target\" style=\"font-size:0.8rem; color:var(--terminal-green);\">Game and Interactive Media Design</p>
                    </div>
                </div>
                <div class=\"terminal-frame glitch-target\">
                    <h3 class=\"scramble-target\">SYSTEM_CAPABILITIES</h3>
                    <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:0.75rem; font-family:monospace; line-height:1.4;\">
                        <div>
                            <p class=\"scramble-target\">> UNREAL ENGINE 5</p>
                            <p class=\"scramble-target\">> UNREAL ENGINE 4</p>
                            <p class=\"scramble-target\">> UNITY</p>
                            <p class=\"scramble-target\">> C++</p>
                            <p class=\"scramble-target\">> BLUEPRINTING</p>
                            <p class=\"scramble-target\">> PROJECT MANAGEMENT</p>
                            <p class=\"scramble-target\">> LEVEL DESIGN</p>
                            <p class=\"scramble-target\">> GAME DESIGN</p>
                            <p class=\"scramble-target\">> HOUDINI</p>
                        </div>
                        <div>
                            <p class=\"scramble-target\">> MAYA</p>
                            <p class=\"scramble-target\">> AUTODESK 3DS MAX</p>
                            <p class=\"scramble-target\">> ZBRUSH</p>
                            <p class=\"scramble-target\">> SUBSTANCE PAINTER</p>
                            <p class=\"scramble-target\">> SUBSTANCE DESIGNER</p>
                            <p class=\"scramble-target\">> ENVIRONMENT ART</p>
                            <p class=\"scramble-target\">> UV MAPPING</p>
                            <p class=\"scramble-target\">> 3D MODELING</p>
                            <p class=\"scramble-target\">> ADOBE PHOTOSHOP</p>
                            <p class=\"scramble-target\">> ADOBE PREMIERE PRO</p>
                            <p class=\"scramble-target\">> AFTER EFFECTS</p>
                        </div>
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

const processMessages = [
    \"RECALIBRATING RESONANCE CASCADE SENSORS...\",
    \"CHECKING HEADCRAB POPULATION DENSITY...\",
    \"OPTIMIZING ORANGE BOX COMPRESSION...\",
    \"MONITORING SECTOR C SECURITY FEEDS...\",
    \"VERIFYING LAMBDA FREQUENCY...\",
    \"INITIATING HEV SUIT DIAGNOSTIC...\",
    \"ANALYZING UNFORESEEN CONSEQUENCES...\",
    \"SCANNING FOR G-MAN COGNITIVE SIGNATURES...\",
    \"UPDATING FACILITY ARCHIVE DATABASE...\",
    \"ROUTING POWER TO ANTI-MASS SPECTROMETER...\"
];

function updateProcessLog() {
    const logEl = document.getElementById(\"process-log\");
    if (!logEl) return;
    logEl.innerText = processMessages.join(\" | \") + \" | \" + processMessages.join(\" | \");
}

const scrambles = { \"o\": \"0\", \"O\": \"0\", \"s\": \"$\", \"S\": \"$\", \"a\": \"@\", \"A\": \"@\", \"e\": \"3\", \"E\": \"3\", \"i\": \"1\", \"I\": \"1\", \"l\": \"1\", \"t\": \"7\", \"g\": \"9\" };
function scrambleText() {
    document.querySelectorAll(\".scramble-target:not(.no-scramble)\").forEach(el => {
        if (Math.random() > 0.85) {
            const original = el.innerText;
            const scrambled = original.split(\"\").map(char => (scrambles[char] && Math.random() > 0.4) ? scrambles[char] : char).join(\"\");
            el.innerText = scrambled;
            setTimeout(() => { el.innerText = original; }, 120);
        }
    });
}
setInterval(scrambleText, 1500);

document.addEventListener(\"DOMContentLoaded\",()=>{
    document.querySelectorAll(\".nav-btn\").forEach(b=>{ b.addEventListener(\"click\",()=> {
        loadPage(b.getAttribute(\"data-page\"));
        if(b.getAttribute(\"data-page\") === \"home\") updateProcessLog();
    }); });
    loadPage(\"home\");
    updateProcessLog();
});





