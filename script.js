
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
            <p style="margin-top:10px; font-family:monospace; color:var(--terminal-green);">CONTACT: <a href="mailto:jackcallstack@outlook.com" class="no-scramble" style="color:inherit; text-decoration:none; border-bottom:1px dashed var(--terminal-green);">jackcallstack@outlook.com</a></p>
        </div>
        <div class="links-section">
            <a href="https://www.linkedin.com/in/jack-collins-gaming/" target="_blank" class="diegetic-button-static no-scramble">LINKEDIN_ENTRY</a>
            <a href="https://github.com/JackDevCollins" target="_blank" class="diegetic-button-static no-scramble">GIT_REPOSITORY</a>
        </div></section>`,

    work: `<section class="page-section page-work">
        <div class="status-container"><div class="status-msg">ACCESSING_SOLO_ASSIGNMENTS... [DECRYPTING]</div></div>
        <h2 style="color:var(--blue-accent);" class="scramble-target">INDIVIDUAL WORKS</h2>
        <div class="work-grid">
            <div class="work-card terminal-frame glitch-target glitch-active">
                <div class="project-layout-grid">
                    <div class="project-media-column">
                        <div class="media-container" id="dfs1-media">
                            <img src="images/content/dfs1_openxr.png" class="current-media">
                        </div>
                    </div>
                    <div class="project-info-column">
                        <h3 class="scramble-target">PROJECT: DFS1</h3>
                        <p style="color:var(--blue-accent); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: ENGINE & GRAPHICS PROGRAMMER</p>
                        <p class="scramble-target">Advanced spatial algorithm implementation and OpenXR integration built directly inside a custom game engine. Developed real-time stereo viewport rendering pipelines and native OpenXR projection matrix transformations.</p>
                    </div>
                </div>
            </div>
        </div></section>`,

    team: `<section class="page-section page-team">
        <div class="status-container"><div class="status-msg">ACCESSING_JOINT_INITIATIVES... [AUTHORIZED]</div></div>
        <h2 style="color:var(--terminal-green);" class="scramble-target">TEAM_COLLABORATIONS</h2>
        <div class="team-sections">
            <div class="team-project terminal-frame glitch-target">
                <div class="project-layout-grid">
                    <div class="project-media-column">
                        <div class="media-container" id="splitter-media">
                            <img src="images/content/Splitter_Cell/Game Poster.png" class="current-media">
                            <div class="media-controls">
                                <button class="diegetic-button-static mini no-scramble" id="prev-splitter">PREV_FEED</button>
                                <span id="counter-splitter" style="font-family:monospace; color:var(--terminal-green); font-size:0.8rem;">1 / 16</span>
                                <button class="diegetic-button-static mini no-scramble" id="next-splitter">NEXT_FEED</button>
                            </div>
                        </div>
                    </div>
                    <div class="project-info-column">
                        <h3 class="scramble-target">PROJECT: Splitter Cell</h3>
                        <p style="color:var(--terminal-green); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: MULTI-FACETED DEVELOPER</p>
                        <p class="scramble-target">Collaborative stealth-action mechanics development, featuring advanced tactical pathfinding and lighting-based detection systems. Utilized custom shader variables to calculate player exposure indices relative to ambient shadow boundaries.</p>
                    </div>
                </div>
            </div>
            <div class="team-project terminal-frame glitch-target glitch-active">
                <div class="project-layout-grid">
                    <div class="project-media-column">
                        <div class="media-container single-image">
                            <img src="images/content/Hamster_Ballin'/WebPoster_280x360.png" class="current-media" style="max-height:280px;">
                        </div>
                    </div>
                    <div class="project-info-column">
                        <h3 class="scramble-target">PROJECT: Hamster Ballin'</h3>
                        <p style="color:var(--terminal-green); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: UI/UX PROGRAMMER</p>
                        <p class="scramble-target">Cooperative development of physics-based locomotion systems, multiplayer controller management, UI screens, and core QA debug engines. Programmed screen flow architectures and responsive device assignment handlers.</p>
                    </div>
                </div>
            </div>
        </div></section>`,

    personal: `<section class="page-section page-personal">
        <div class="status-container"><div class="status-msg">ACCESSING_PERSONNEL_DOSSIER... [AUTHENTICATED]</div></div>
        <h2 style="color:var(--alert-red);" class="scramble-target">DEVELOPER INFO</h2>
        <div class="dossier-grid">
            <div class="dossier-left">
                <div class="portrait-container terminal-frame glitch-target glitch-active">
                    <img src="images/content/headshot.jpg" class="portrait">
                </div>
                <div class="info-block terminal-frame glitch-target" style="padding: 15px 12px; margin-top: 10px;">
                    <p class="scramble-target"><strong>NAME:</strong> JACK COLLINS</p>
                    <p class="scramble-target"><strong>ID:</strong> FAC-942-JS</p>
                    <p style="font-size:0.8rem; word-break:break-all;"><strong>EMAIL:</strong><br><a href="mailto:jackcallstack@outlook.com" class="no-scramble" style="color:inherit; text-decoration:none; border-bottom:1px dashed var(--alert-red);">jackcallstack@outlook.com</a></p>
                    <p class="scramble-target"><strong>SECTOR:</strong> SOFTWARE DEVELOPER</p>
                    <div style="margin-top:15px; display:flex; flex-direction:column; gap:8px;">
                        <a href="images/content/Documents/jack_collins_resume.md" download class="diegetic-button-static mini no-scramble" style="text-align:center; font-size:0.75rem; display:block;">DOWNLOAD_RAW.MD</a>
                    </div>
                </div>
            </div>
            <div class="dossier-right">
                <div class="terminal-frame glitch-target" id="resume-container" style="max-height: 520px; overflow-y: auto; padding-right: 12px;">
                    <h3 class="scramble-target">DECRYPTING_DOSSIER...</h3>
                    <p style="font-family:monospace; font-size:0.8rem;">Connecting to resume database at /images/content/Documents/jack_collins_resume.md...</p>
                </div>
            </div>
        </div></section>`
};

// Retro Terminal Audio Synthesizer (Half-Life Console UI SFX)
let audioEnabled = true;
const SoundManager = {
    ctx: null,
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },
    playHover() {
        if (!audioEnabled) return;
        try {
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            // Half-Life hover/focus pip: high pitch short sine sweep (1500Hz to 1100Hz)
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1500, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1100, this.ctx.currentTime + 0.035);
            
            gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.035);
        } catch (e) { console.warn(e); }
    },
    playClick() {
        if (!audioEnabled) return;
        try {
            this.init();
            
            const now = this.ctx.currentTime;
            
            // Half-Life click UI Sound: Double mechanical beep/pip with distinct frequencies
            // Pulse 1
            const osc1 = this.ctx.createOscillator();
            const gain1 = this.ctx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(580, now);
            gain1.gain.setValueAtTime(0.035, now);
            gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
            osc1.connect(gain1);
            gain1.connect(this.ctx.destination);
            osc1.start(now);
            osc1.stop(now + 0.03);

            // Pulse 2 (offset by 25ms, lower frequency)
            const osc2 = this.ctx.createOscillator();
            const gain2 = this.ctx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(440, now + 0.025);
            gain2.gain.setValueAtTime(0.03, now + 0.025);
            gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
            osc2.connect(gain2);
            gain2.connect(this.ctx.destination);
            osc2.start(now + 0.025);
            osc2.stop(now + 0.055);
            
            // Quiet mechanical noise click transient
            const bufferSize = this.ctx.sampleRate * 0.012;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;
            const noiseGain = this.ctx.createGain();
            noiseGain.gain.setValueAtTime(0.012, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.012);
            noise.connect(noiseGain);
            noiseGain.connect(this.ctx.destination);
            noise.start(now);
        } catch (e) { console.warn(e); }
    },
    playGlitch() {
        if (!audioEnabled) return;
        try {
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(60, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.018, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.15);
        } catch (e) { console.warn(e); }
    }
};

// Bind sound effects to all interactive elements
function attachSoundEvents(parent = document) {
    parent.querySelectorAll("button, a, .nav-btn, .diegetic-button-static").forEach(el => {
        if (!el.dataset.soundBound) {
            el.dataset.soundBound = "true";
            el.addEventListener("mouseenter", () => SoundManager.playHover());
            el.addEventListener("mousedown", () => SoundManager.playClick());
        }
    });
}

// Media Assets Lists
const mediaAssets = {
    splitter: [
        "images/content/Splitter_Cell/Game Poster.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114430.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114441.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114525.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114541.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114557.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114617.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114719.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114752.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114821.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 114933.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 115005.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 115016.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 115034.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 115053.png",
        "images/content/Splitter_Cell/Screenshot 2025-12-01 115115.png"
    ]
};
let mediaIndex = { splitter: 0 };

function cycleMedia(id, direction = 1) {
    const container = document.getElementById(id + "-media");
    if (!container) return;
    const img = container.querySelector("img");
    if (!img) return;
    
    mediaIndex[id] = (mediaIndex[id] + direction + mediaAssets[id].length) % mediaAssets[id].length;
    img.src = mediaAssets[id][mediaIndex[id]];
    
    const counter = document.getElementById("counter-" + id);
    if (counter) {
        counter.innerText = `${mediaIndex[id] + 1} / ${mediaAssets[id].length}`;
    }
}

// Markdown Parser logic
function parseMarkdown(md) {
    // Strip YAML frontmatter
    let html = md.replace(/^---[\s\S]*?---/, '');
    
    const lines = html.split('\n');
    let parsed = '';
    let inList = false;
    
    for (let line of lines) {
        line = line.trim();
        if (!line) {
            if (inList) { parsed += '</ul>'; inList = false; }
            continue;
        }
        
        if (line === '---') {
            if (inList) { parsed += '</ul>'; inList = false; }
            parsed += '<hr class="dossier-hr">';
            continue;
        }
        
        if (line.startsWith('# ')) {
            if (inList) { parsed += '</ul>'; inList = false; }
            parsed += `<h1 class="dossier-h1">${line.substring(2)}</h1>`;
            continue;
        }
        if (line.startsWith('## ')) {
            if (inList) { parsed += '</ul>'; inList = false; }
            parsed += `<h2 class="dossier-h2">${line.substring(3)}</h2>`;
            continue;
        }
        if (line.startsWith('### ')) {
            if (inList) { parsed += '</ul>'; inList = false; }
            parsed += `<h3 class="dossier-h3">${line.substring(4)}</h3>`;
            continue;
        }
        
        if (line.startsWith('- ') || line.startsWith('* ')) {
            if (!inList) { parsed += '<ul class="dossier-list">'; inList = true; }
            parsed += `<li>${parseInlineMarkdown(line.substring(2))}</li>`;
            continue;
        }
        
        if (inList) { parsed += '</ul>'; inList = false; }
        parsed += `<p class="dossier-p">${parseInlineMarkdown(line)}</p>`;
    }
    if (inList) parsed += '</ul>';
    return parsed;
}

function parseInlineMarkdown(text) {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="dossier-link">$1</a>');
    return text;
}

function loadPage(p) {
    const a = document.getElementById("content-area"); 
    if (!a) return; 
    a.innerHTML = pages[p] || "<h1>404</h1>"; 
    
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    const act = document.getElementById("nav-" + p); 
    if (act) act.classList.add("active");
    
    // Page-specific setup
    if (p === "team") {
        const prev = document.getElementById("prev-splitter");
        const next = document.getElementById("next-splitter");
        if (prev) prev.onclick = () => cycleMedia("splitter", -1);
        if (next) next.onclick = () => cycleMedia("splitter", 1);
    } else if (p === "personal") {
        fetch("images/content/Documents/jack_collins_resume.md")
            .then(res => {
                if (!res.ok) throw new Error("Resume not found");
                return res.text();
            })
            .then(text => {
                const container = document.getElementById("resume-container");
                if (container) container.innerHTML = parseMarkdown(text);
                attachSoundEvents(container);
            })
            .catch(err => {
                const container = document.getElementById("resume-container");
                if (container) container.innerHTML = `<h3 style="color:var(--alert-red);">DOSSIER_ACCESS_DENIED</h3><p style="color:var(--alert-red); font-family:monospace; margin-top:10px;">ERROR: FAILED_TO_DECRYPT_DOSSIER_FILE (${err.message})</p>`;
            });
    }
    
    a.scrollTop = 0; 
    attachSoundEvents(a);
}

// Scramble Animation
const scrambles = { "o": "0", "O": "0", "s": "$", "S": "$", "a": "@", "A": "@", "e": "3", "E": "3", "i": "1", "I": "1" };
function scrambleText() {
    document.querySelectorAll(".scramble-target:not(.no-scramble)").forEach(el => {
        if (Math.random() > 0.85) {
            const original = el.innerText;
            const scrambled = original.split("").map(char => (scrambles[char] && Math.random() > 0.65) ? scrambles[char] : char).join("");
            el.innerText = scrambled;
            setTimeout(() => { el.innerText = original; }, 180);
            
            // Occasional glitch hum sound when text scrambles
            if (Math.random() > 0.96) {
                SoundManager.playGlitch();
            }
        }
    });
}
setInterval(scrambleText, 3000);

document.addEventListener("DOMContentLoaded", () => { 
    // Navigation hooks
    document.querySelectorAll(".nav-btn").forEach(b => { 
        b.addEventListener("click", () => loadPage(b.getAttribute("data-page"))); 
    }); 
    
    // Audio Toggle hook
    const audioBtn = document.getElementById("audio-toggle");
    if (audioBtn) {
        audioBtn.addEventListener("click", () => {
            audioEnabled = !audioEnabled;
            if (audioEnabled) {
                audioBtn.innerText = "SPKR: ON";
                audioBtn.classList.remove("muted");
                SoundManager.playClick();
            } else {
                audioBtn.innerText = "SPKR: OFF";
                audioBtn.classList.add("muted");
            }
        });
    }
    
    attachSoundEvents(document);
    loadPage("home"); 
});
