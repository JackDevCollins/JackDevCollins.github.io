
const pages = {
    home: `<section class="page-section page-home">
        <div class="bg-video-mosaic">
            <video autoplay muted loop playsinline><source src="images/content/hero_compressed.mp4" type="video/mp4"></video>
            <video autoplay muted loop playsinline><source src="images/content/VFX/Sword attack/Desktop 2023.05.15 - 16.07.50.05.DVR_Trim.mp4" type="video/mp4"></video>
            <video autoplay muted loop playsinline><source src="images/content/VFX/VFX2 Final Warp fx/Desktop 2023.06.05 - 13.46.31.02.DVR_Trim.mp4" type="video/mp4"></video>
            <video autoplay muted loop playsinline><source src="images/content/VFX/Vfx2 1 blood/Desktop 2023.05.31 - 14.30.28.05.DVR_Trim.mp4" type="video/mp4"></video>
            <video autoplay muted loop playsinline><source src="images/content/VFX/VFX2 Project 3 Gideon/Desktop 2023.06.05 - 13.47.00.03.DVR_Trim.mp4" type="video/mp4"></video>
            <video autoplay muted loop playsinline><source src="images/content/VFX/ffx1 final/Desktop 2023.04.25 - 14.12.42.04.DVR_Trim.mp4" type="video/mp4"></video>
        </div>
        <div class="status-container"><div class="status-msg">ACCESSING_SECURE_PORTAL... [SUCCESS]</div></div>
        <div class="hero terminal-frame glitch-target glitch-active">
            <h1 class="scramble-target">SUBJECT: JACK COLLINS</h1>
            <p class="subtitle scramble-target">STATUS: GAME PROGRAMMER</p>
        </div>
        <div class="bio-section terminal-frame glitch-target">
            <h3 class="scramble-target">PERSONNEL BIO</h3>
            <p class="scramble-target">Multi-faceted Game Programmer with four shipped games developed in a professional environment. Specialized in visual effects, custom engine development, level design, UI/UX systems, and physics programming.</p>
            <p style="margin-top:10px; font-family:monospace; color:var(--terminal-green);">CONTACT: <a href="mailto:jackcallstack@outlook.com" class="no-scramble" style="color:inherit; text-decoration:none; border-bottom:1px dashed var(--terminal-green);">jackcallstack@outlook.com</a></p>
        </div>
        <div class="terminal-frame glitch-target">
            <h3 class="scramble-target" style="margin-bottom:10px;">SYSTEM_DIRECTORY</h3>
            <div class="file-tree">
                <div class="tree-header">C:\\PORTFOLIO\\></div>
                <div class="tree-line"><span class="tree-dir">\u251c\u2500\u2500 INDIVIDUAL_WORKS\\</span></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u251c\u2500\u2500</span> <button class="tree-link" onclick="loadPage('work','section-dfs1')">DFS1_OpenXR.exe</button></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u251c\u2500\u2500</span> <button class="tree-link" onclick="loadPage('work','section-netchess')">NetChess3D.exe</button></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u251c\u2500\u2500</span> <button class="tree-link" onclick="loadPage('work','section-doomskater')">DoomSkater.exe</button></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u251c\u2500\u2500</span> <button class="tree-link" onclick="loadPage('work','section-mathvisual')">MathVisualTests.exe</button></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u251c\u2500\u2500 LEVEL_DESIGN\\</span></div>
                <div class="tree-line">\u2502   \u2502   <span class="tree-dir">\u251c\u2500\u2500</span> <button class="tree-link" onclick="loadPage('work','section-forestvalley')">ForestValley.map</button></div>
                <div class="tree-line">\u2502   \u2502   <span class="tree-dir">\u2514\u2500\u2500</span> <button class="tree-link" onclick="loadPage('work','section-deeprock')">dm_deeprock.map</button></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u2514\u2500\u2500 VFX\\</span></div>
                <div class="tree-line">\u2502       <span class="tree-dir">\u2514\u2500\u2500</span> <button class="tree-link" onclick="loadPage('work','section-vfx')">VFX_Reel.fx</button></div>
                <div class="tree-line"><span class="tree-dir">\u251c\u2500\u2500 COLLABORATIONS\\</span></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u251c\u2500\u2500</span> <button class="tree-link" onclick="loadPage('team','section-hamsterballin')">HamsterBallin.exe</button></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u251c\u2500\u2500</span> <button class="tree-link" onclick="loadPage('team','section-splittercell')">SplitterCell.exe</button></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u251c\u2500\u2500</span> <span class="tree-coming-soon">[IN_DEV] BOX-SHOT.exe</span></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u251c\u2500\u2500</span> <button class="tree-link" onclick="loadPage('team','section-dragonninja')">DragonNinjaClan.exe</button></div>
                <div class="tree-line">\u2502   <span class="tree-dir">\u2514\u2500\u2500</span> <button class="tree-link" onclick="loadPage('team','section-knightsofiron')">KnightsOfIron.exe</button></div>
                <div class="tree-line"><span class="tree-dir">\u2514\u2500\u2500 DEVELOPER_INFO\\</span></div>
                <div class="tree-line">    <span class="tree-dir">\u2514\u2500\u2500</span> <button class="tree-link" onclick="loadPage('personal')">Resume_V2.md</button></div>
            </div>
        </div>
        <div class="links-section">
            <a href="https://www.linkedin.com/in/jack-collins-gaming/" target="_blank" class="diegetic-button-static no-scramble">LINKEDIN_ENTRY</a>
            <a href="https://github.com/JackDevCollins" target="_blank" class="diegetic-button-static no-scramble">GIT_REPOSITORY</a>
        </div></section>`,

    work: `<section class="page-section page-work">
        <div class="status-container"><div class="status-msg">ACCESSING_SOLO_ASSIGNMENTS... [DECRYPTING]</div></div>
        <h2 style="color:var(--blue-accent);" class="scramble-target">INDIVIDUAL WORKS</h2>
        <p style="font-family:monospace; font-size:0.75rem; color:#888; margin-bottom:15px;">All technical projects developed in a custom C++ DirectX 11 engine built during studies at SMU Guildhall.</p>

        <div class="work-card terminal-frame glitch-target glitch-active" id="section-dfs1">
            <div class="project-layout-grid">
                <div class="project-media-column">
                    <div class="media-container">
                        <img src="images/content/dfs1_openxr.png" class="current-media">
                    </div>
                </div>
                <div class="project-info-column">
                    <h3 class="scramble-target">PROJECT: OpenXR Testing Environment</h3>
                    <p style="color:var(--blue-accent); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: VR SYSTEMS PROGRAMMER</p>
                    <p class="scramble-target">Integrated the OpenXR VR API into a personal rendering pipeline to test interactions and gameplay concepts. Developed functions to display data and states of active VR devices, enabling ray casting from VR controllers and 3D object manipulation in physical space.</p>
                </div>
            </div>
        </div>

        <div class="work-card terminal-frame glitch-target" id="section-netchess">
            <div class="project-layout-grid">
                <div class="project-media-column">
                    <div class="media-container">
                        <img src="images/content/placeholders/netchess3d.png" class="current-media">
                    </div>
                </div>
                <div class="project-info-column">
                    <h3 class="scramble-target">PROJECT: NetChess 3D</h3>
                    <p style="color:var(--blue-accent); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: NETWORK & GRAPHICS PROGRAMMER</p>
                    <p class="scramble-target">Developed a 3D chess environment enabling players to perform moves through in-game interactions over a simple network multiplayer system. Engineered a vector-based grid system to manage square and piece data. Implemented static mesh loading, run-time customization of chess sets, VR support, and simulated lighting systems with shader-based visual cues to highlight valid moves.</p>
                </div>
            </div>
        </div>

        <div class="work-card terminal-frame glitch-target" id="section-doomskater">
            <div class="project-layout-grid">
                <div class="project-media-column">
                    <div class="media-container">
                        <img src="images/content/placeholders/doomskater.png" class="current-media">
                    </div>
                </div>
                <div class="project-info-column">
                    <h3 class="scramble-target">PROJECT: Doomenstien: Doom Skater</h3>
                    <p style="color:var(--blue-accent); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: GAMEPLAY PROGRAMMER</p>
                    <p class="scramble-target">Created a Doom/Wolfenstein 3D-inspired shooter featuring a 3rd-person skateboard mode. Programmed movement mechanics including ollies, Goomba-stomping, and an additive force control scheme simulating pushing a skateboard. Implemented custom sprites and physics-based weapon knockback to add velocity while skating.</p>
                </div>
            </div>
        </div>

        <div class="work-card terminal-frame glitch-target" id="section-mathvisual">
            <div class="project-layout-grid">
                <div class="project-media-column">
                    <div class="media-container">
                        <img src="images/content/placeholders/mathvisual.png" class="current-media">
                    </div>
                </div>
                <div class="project-info-column">
                    <h3 class="scramble-target">PROJECT: Math Visual Tests 2D & 3D</h3>
                    <p style="color:var(--blue-accent); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: ENGINE & PHYSICS PROGRAMMER</p>
                    <p class="scramble-target">Created visual representations to validate custom-defined math systems within the engine. Built interactive, randomized displays for geometric queries including nearest point on object, overlap detection, and ray casting. Developed complex simulations including a Pachinko-like collision system for testing 2D physics and time-step systems.</p>
                </div>
            </div>
        </div>

        <hr class="section-divider">
        <h2 style="color:var(--blue-accent); margin-top:10px;" class="scramble-target">LEVEL_DESIGN</h2>

        <div class="work-card terminal-frame glitch-target" id="section-forestvalley" style="margin-top:15px;">
            <div class="project-layout-grid">
                <div class="project-media-column">
                    <div class="media-container" id="forestValley-media">
                        <img src="images/content/LD/ForestValley/HighresScreenshot00000.png" class="current-media">
                        <div class="media-controls">
                            <button class="diegetic-button-static mini no-scramble" id="prev-forestValley">PREV_FEED</button>
                            <span id="counter-forestValley" style="font-family:monospace; color:var(--blue-accent); font-size:0.8rem;">1 / 6</span>
                            <button class="diegetic-button-static mini no-scramble" id="next-forestValley">NEXT_FEED</button>
                        </div>
                    </div>
                </div>
                <div class="project-info-column">
                    <h3 class="scramble-target">ENV: Forest Valley</h3>
                    <p style="color:var(--blue-accent); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: ENVIRONMENT ARTIST</p>
                    <p class="scramble-target">A natural environment showcase built in Unreal Engine featuring dense forest landscapes, dynamic lighting, terrain sculpting techniques, and atmospheric volumetric effects.</p>
                </div>
            </div>
        </div>

        <div class="work-card terminal-frame glitch-target" id="section-deeprock" style="margin-top:15px;">
            <div class="project-layout-grid">
                <div class="project-media-column">
                    <div class="media-container" id="deeprock-media">
                        <img src="images/content/LD/dm_deeprock/03i11XynfWPeY3BmtMhsnM.png" class="current-media">
                        <div class="media-controls">
                            <button class="diegetic-button-static mini no-scramble" id="prev-deeprock">PREV_FEED</button>
                            <span id="counter-deeprock" style="font-family:monospace; color:var(--blue-accent); font-size:0.8rem;">1 / 6</span>
                            <button class="diegetic-button-static mini no-scramble" id="next-deeprock">NEXT_FEED</button>
                        </div>
                    </div>
                </div>
                <div class="project-info-column">
                    <h3 class="scramble-target">MAP: DM_Deeprock</h3>
                    <p style="color:var(--blue-accent); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: LEVEL DESIGN & ENV ART | 2019</p>
                    <p class="scramble-target">A deathmatch arena for Unreal Tournament made over the course of 5 months using Unreal Engine. The map is a completely enclosed abandoned mining operation of luminous blue ore that helps illuminate the map. All assets came from Unreal Tournament's default library.</p>
                </div>
            </div>
        </div>

        <hr class="section-divider">
        <h2 style="color:var(--blue-accent); margin-top:10px;" class="scramble-target" id="section-vfx">VISUAL_EFFECTS</h2>

        <div class="vfx-carousel" id="vfx-carousel">
            <div class="vfx-slide active" data-vfx="0">
                <h4>Sword Attack FX</h4>
                <video controls muted loop playsinline preload="metadata"><source src="images/content/VFX/Sword attack/Desktop 2023.05.15 - 16.07.50.05.DVR_Trim.mp4" type="video/mp4"></video>
            </div>
            <div class="vfx-slide" data-vfx="1">
                <h4>Blood FX</h4>
                <video controls muted loop playsinline preload="metadata"><source src="images/content/VFX/Vfx2 1 blood/Desktop 2023.05.31 - 14.30.28.05.DVR_Trim.mp4" type="video/mp4"></video>
            </div>
            <div class="vfx-slide" data-vfx="2">
                <h4>Building Explode FX</h4>
                <video controls muted loop playsinline preload="metadata"><source src="images/content/VFX/Vfx2 project 2 building explode/Desktop 2023.05.15 - 16.49.12.07.DVR_Trim.mp4" type="video/mp4"></video>
            </div>
            <div class="vfx-slide" data-vfx="3">
                <h4>Warp FX</h4>
                <video controls muted loop playsinline preload="metadata"><source src="images/content/VFX/VFX2 Final Warp fx/Desktop 2023.06.05 - 13.46.31.02.DVR_Trim.mp4" type="video/mp4"></video>
            </div>
            <div class="vfx-slide" data-vfx="4">
                <h4>Gideon Character FX</h4>
                <video controls muted loop playsinline preload="metadata"><source src="images/content/VFX/VFX2 Project 3 Gideon/Desktop 2023.06.05 - 13.47.00.03.DVR_Trim.mp4" type="video/mp4"></video>
            </div>
            <div class="vfx-slide" data-vfx="5">
                <h4>Energy Beam FX</h4>
                <video controls muted loop playsinline preload="metadata"><source src="images/content/VFX/ffx1 final/Desktop 2023.04.25 - 14.12.42.04.DVR_Trim.mp4" type="video/mp4"></video>
            </div>
            <div class="vfx-controls">
                <button class="diegetic-button-static mini no-scramble" id="prev-vfx">PREV_FX</button>
                <span id="counter-vfx" style="font-family:monospace; color:var(--blue-accent); font-size:0.8rem;">1 / 6</span>
                <button class="diegetic-button-static mini no-scramble" id="next-vfx">NEXT_FX</button>
            </div>
        </div>
    </section>`,

    team: `<section class="page-section page-team">
        <div class="status-container"><div class="status-msg">ACCESSING_JOINT_INITIATIVES... [AUTHORIZED]</div></div>
        <h2 style="color:var(--terminal-green);" class="scramble-target">COLLABORATIONS</h2>
        <div class="team-sections">

            <div class="team-project terminal-frame glitch-target poster-featured" id="section-hamsterballin">
                <div class="poster-bg" style="background-image:url('images/content/Hamster_Ballin&#39;/WebPoster_280x360.png');"></div>
                <h3 class="scramble-target" style="color:#fff; margin-bottom:5px;">PROJECT: Hamster Ballin'</h3>
                <p style="color:var(--terminal-green); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: HEAD COMMON UI PROGRAMMER | 2026</p>
                <p class="scramble-target" style="margin-bottom:12px;">Led Common UI programming for Unreal Engine 5. Engineered multi-controller input for Common UI (circumventing standard limitations), programmed drop-in-drop-out multiplayer controller assignment, created diegetic menu systems mapping camera movements and character animations to UI interactions, and integrated Steamworks with a custom C++ abstraction layer for Blueprint access. A competitive arcade racer for up to 4 local players.</p>
                <div class="media-trailer-row">
                    <div class="media-container" id="hamsterBallin-media">
                        <img src="images/content/Hamster_Ballin'/WebPoster_280x360.png" class="current-media" style="height:220px;">
                        <div class="media-controls">
                            <button class="diegetic-button-static mini no-scramble" id="prev-hamsterBallin">PREV</button>
                            <span id="counter-hamsterBallin" style="font-family:monospace; color:var(--terminal-green); font-size:0.8rem;">1 / 6</span>
                            <button class="diegetic-button-static mini no-scramble" id="next-hamsterBallin">NEXT</button>
                        </div>
                    </div>
                    <div class="trailer-embed">
                        <iframe src="https://www.youtube.com/embed/ogLB5EIMdcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <a href="https://store.steampowered.com/app/4319370/Hamsterballin/" target="_blank" class="steam-link no-scramble" style="margin-top:12px;">VIEW ON STEAM \u25B8</a>
            </div>

            <div class="team-project terminal-frame glitch-target poster-featured" id="section-splittercell">
                <div class="poster-bg" style="background-image:url('images/content/Splitter_Cell/Game Poster.png');"></div>
                <h3 class="scramble-target" style="color:#fff; margin-bottom:5px;">PROJECT: Splitter Cell</h3>
                <p style="color:var(--terminal-green); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: MULTI-FACETED DEVELOPER</p>
                <p class="scramble-target" style="margin-bottom:12px;">Splitter Cell is a 2D shooter-platformer that takes place inside a human body where the player takes control of a blue amoeba-like creature named 'Marcell'. The player traverses across the body, using their movement and special 'splitting' ability to shoot projectiles at valid surfaces to create platforms to aid their traversal across the level's obstacles and hazards.</p>
                <div class="media-trailer-row">
                    <div class="media-container" id="splitter-media">
                        <img src="images/content/Splitter_Cell/Game Poster.png" class="current-media" style="height:220px;">
                        <div class="media-controls">
                            <button class="diegetic-button-static mini no-scramble" id="prev-splitter">PREV</button>
                            <span id="counter-splitter" style="font-family:monospace; color:var(--terminal-green); font-size:0.8rem;">1 / 3</span>
                            <button class="diegetic-button-static mini no-scramble" id="next-splitter">NEXT</button>
                        </div>
                    </div>
                    <div class="trailer-embed">
                        <iframe src="https://www.youtube.com/embed/vAadoEkUOxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div class="team-project terminal-frame glitch-target coming-soon-project" id="section-boxshot">
                <div class="coming-soon-badge">IN DEVELOPMENT</div>
                <div class="project-layout-grid">
                    <div class="project-media-column">
                        <div class="media-container single-image">
                            <img src="images/content/BoxShot/concept_art.jpg" class="current-media" style="max-height:300px;">
                        </div>
                    </div>
                    <div class="project-info-column">
                        <h3 class="scramble-target">PROJECT: BOX-SHOT</h3>
                        <p style="color:var(--terminal-green); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: GAME PROGRAMMER & UI CONSULTANT | 2026-2027</p>
                        <p class="scramble-target">Currently in development. Developing weapons systems programming in UE5, including complex projectile reactions against diverse surfaces and enemy types. Serving as Common UI consultant and primary developer for the weapon select interface.</p>
                    </div>
                </div>
            </div>

            <div class="team-project terminal-frame glitch-target" id="section-dragonninja">
                <div class="project-layout-grid">
                    <div class="project-media-column">
                        <div class="media-container" id="dragonNinja-media">
                            <img src="images/content/DragonNinjaClan/0YavDF43vambDoRHzZWGlm.png" class="current-media">
                            <div class="media-controls">
                                <button class="diegetic-button-static mini no-scramble" id="prev-dragonNinja">PREV_FEED</button>
                                <span id="counter-dragonNinja" style="font-family:monospace; color:var(--terminal-green); font-size:0.8rem;">1 / 8</span>
                                <button class="diegetic-button-static mini no-scramble" id="next-dragonNinja">NEXT_FEED</button>
                            </div>
                        </div>
                    </div>
                    <div class="project-info-column">
                        <h3 class="scramble-target">PROJECT: Dragon Ninja Clan</h3>
                        <p style="color:var(--terminal-green); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: LEVEL DESIGN & ENV ART | 2018-2019</p>
                        <p class="scramble-target">A 3D side-scrolling beat 'em up where players take back Rock-Town City from the evil White Fang gang. Designed and art-passed two of eight levels in UE4, implemented a spline-bound side-scrolling camera with variable depth and height adjustments, and developed supplementary VFX using UE4 particle systems. First commercially available shipped game.</p>
                        <a href="https://store.steampowered.com/app/1462170/Dragon_Ninja_Clan_Sword_Of_Destiny_Game/" target="_blank" class="steam-link no-scramble">VIEW ON STEAM \u25B8</a>
                    </div>
                </div>
            </div>

            <div class="team-project terminal-frame glitch-target" id="section-knightsofiron">
                <div class="project-layout-grid">
                    <div class="project-media-column">
                        <div class="media-container" id="knightsOfIron-media">
                            <img src="images/content/KnightsofIron/frBmKViMpN9gmWTaV2XCzb.png" class="current-media">
                            <div class="media-controls">
                                <button class="diegetic-button-static mini no-scramble" id="prev-knightsOfIron">PREV_FEED</button>
                                <span id="counter-knightsOfIron" style="font-family:monospace; color:var(--terminal-green); font-size:0.8rem;">1 / 8</span>
                                <button class="diegetic-button-static mini no-scramble" id="next-knightsOfIron">NEXT_FEED</button>
                            </div>
                        </div>
                    </div>
                    <div class="project-info-column">
                        <h3 class="scramble-target">PROJECT: Knights of Iron</h3>
                        <p style="color:var(--terminal-green); font-family:monospace; font-size:0.85rem; margin-bottom:10px;">ROLE: LEVEL DESIGNER & ENV ART | 2018</p>
                        <p class="scramble-target">A mech strategy-lite shooter developed in Unity 5 by a team of ~20 students at Richland College. Features a story, soundtrack, multiple levels and enemy types. Designed and constructed two of twelve total levels, integrated and balanced enemy AI detection volumes, and polished collision systems.</p>
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
                    <p class="scramble-target"><strong>SECTOR:</strong> GAME PROGRAMMER</p>
                    <p class="scramble-target"><strong>SHIPPED:</strong> 4 TITLES</p>
                    <div style="margin-top:15px; display:flex; flex-direction:column; gap:8px;">
                        <a href="./images/content/Documents/Jack_Collins_Resume_V2.md" download class="diegetic-button-static mini no-scramble" style="text-align:center; font-size:0.75rem; display:block;">DOWNLOAD_RAW.MD</a>
                        <a href="./images/content/Documents/JackCollinsGameDevResumeGenericV2.pdf" download class="diegetic-button-static mini no-scramble" style="text-align:center; font-size:0.75rem; display:block;">DOWNLOAD_RESUME.PDF</a>
                    </div>
                </div>
            </div>
            <div class="dossier-right">
                <div class="terminal-frame glitch-target" id="resume-container" style="max-height: 520px; overflow-y: auto; padding-right: 12px;">
                    <h3 class="scramble-target">DECRYPTING_DOSSIER...</h3>
                    <p style="font-family:monospace; font-size:0.8rem;">Connecting to resume database...</p>
                </div>
            </div>
        </div></section>`
};

// Retro Terminal Audio Synthesizer (Half-Life Console UI SFX)
let audioEnabled = true;
const SoundManager = {
    ctx: null,
    init() {
        if (!this.ctx) { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); }
        if (this.ctx.state === 'suspended') { this.ctx.resume(); }
    },
    playHover() {
        if (!audioEnabled) return;
        try {
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.035);
            gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(); osc.stop(this.ctx.currentTime + 0.035);
        } catch (e) { console.warn(e); }
    },
    playClick() {
        if (!audioEnabled) return;
        try {
            this.init();
            const now = this.ctx.currentTime;
            const osc1 = this.ctx.createOscillator();
            const gain1 = this.ctx.createGain();
            osc1.type = 'sine'; osc1.frequency.setValueAtTime(580, now);
            gain1.gain.setValueAtTime(0.035, now);
            gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
            osc1.connect(gain1); gain1.connect(this.ctx.destination);
            osc1.start(now); osc1.stop(now + 0.03);
            const osc2 = this.ctx.createOscillator();
            const gain2 = this.ctx.createGain();
            osc2.type = 'sine'; osc2.frequency.setValueAtTime(440, now + 0.025);
            gain2.gain.setValueAtTime(0.03, now + 0.025);
            gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
            osc2.connect(gain2); gain2.connect(this.ctx.destination);
            osc2.start(now + 0.025); osc2.stop(now + 0.055);
            const bufferSize = this.ctx.sampleRate * 0.012;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) { data[i] = Math.random() * 2 - 1; }
            const noise = this.ctx.createBufferSource(); noise.buffer = buffer;
            const noiseGain = this.ctx.createGain();
            noiseGain.gain.setValueAtTime(0.012, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.012);
            noise.connect(noiseGain); noiseGain.connect(this.ctx.destination);
            noise.start(now);
        } catch (e) { console.warn(e); }
    },
    playGlitch() {
        if (!audioEnabled) return;
        try {
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(60, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.018, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(); osc.stop(this.ctx.currentTime + 0.15);
        } catch (e) { console.warn(e); }
    }
};

function attachSoundEvents(parent = document) {
    parent.querySelectorAll("button, a, .nav-btn, .diegetic-button-static, .tree-link, .steam-link").forEach(el => {
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
        "images/content/Splitter_Cell/Screenshot 2025-12-01 115115.png"
    ],
    hamsterBallin: [
        "images/content/Hamster_Ballin'/WebPoster_280x360.png",
        "images/content/Hamster_Ballin'/hb_menu.avif",
        "images/content/Hamster_Ballin'/hb_charselect.avif",
        "images/content/Hamster_Ballin'/hb_gacha.avif",
        "images/content/Hamster_Ballin'/hb_cogwork.avif",
        "images/content/Hamster_Ballin'/hb_roulette.avif"
    ],
    dragonNinja: [
        "images/content/DragonNinjaClan/0YavDF43vambDoRHzZWGlm.png",
        "images/content/DragonNinjaClan/74crIdDuYwQbLSG9h2VKqB.png",
        "images/content/DragonNinjaClan/aHHKtKUANaOg8BJXyABaTR.png",
        "images/content/DragonNinjaClan/fw2qmc54aVEe1C2h4tV0ru.png",
        "images/content/DragonNinjaClan/jcv8Zy4SzljdNLEElSXetb.png",
        "images/content/DragonNinjaClan/lNOL8DCrhwqcwPtf01EDs9.png",
        "images/content/DragonNinjaClan/41zydpnfgZLdj1xPyIuHKp.png",
        "images/content/DragonNinjaClan/dR3murdggaLbE4KDgmsWMx.png"
    ],
    knightsOfIron: [
        "images/content/KnightsofIron/frBmKViMpN9gmWTaV2XCzb.png",
        "images/content/KnightsofIron/3wE3zRdRKIBbFVLrTVKD8L.png",
        "images/content/KnightsofIron/9V4TFY9tMrmcfLcl06ORQS.png",
        "images/content/KnightsofIron/bpma8S6n6OLdLLzmdaXfW6.png",
        "images/content/KnightsofIron/km1KUMtGS3WgmSvpFwJJ7n.png",
        "images/content/KnightsofIron/6r00AIyCw1pc625WVN4JXJ.png",
        "images/content/KnightsofIron/eYt1DcMfw21g86MgF6c6GN.png",
        "images/content/KnightsofIron/dyt8H9yvYDpfdMQTEQHqHi.png"
    ],
    forestValley: [
        "images/content/LD/ForestValley/HighresScreenshot00000.png",
        "images/content/LD/ForestValley/HighresScreenshot00005.png",
        "images/content/LD/ForestValley/HighresScreenshot00010.png",
        "images/content/LD/ForestValley/HighresScreenshot00015.png",
        "images/content/LD/ForestValley/HighresScreenshot00020.png",
        "images/content/LD/ForestValley/HighresScreenshot00025.png"
    ],
    deeprock: [
        "images/content/LD/dm_deeprock/03i11XynfWPeY3BmtMhsnM.png",
        "images/content/LD/dm_deeprock/0gBe6VfQzW3cXEOztHFXpR.png",
        "images/content/LD/dm_deeprock/1bwMtldm3evfbbYg4ohvXE.png",
        "images/content/LD/dm_deeprock/1nn8iFA8eUBcGLiNoeEirJ.png",
        "images/content/LD/dm_deeprock/2OGBlwY8LhIfzTsVwxXbkd.png",
        "images/content/LD/dm_deeprock/6lL86jPM5m9fa1GOoVkeGo.png"
    ]
};
let mediaIndex = { splitter: 0, hamsterBallin: 0, dragonNinja: 0, knightsOfIron: 0, forestValley: 0, deeprock: 0 };

function cycleMedia(id, direction = 1) {
    const container = document.getElementById(id + "-media");
    if (!container) return;
    const img = container.querySelector("img");
    if (!img) return;
    mediaIndex[id] = (mediaIndex[id] + direction + mediaAssets[id].length) % mediaAssets[id].length;
    img.src = mediaAssets[id][mediaIndex[id]];
    const counter = document.getElementById("counter-" + id);
    if (counter) { counter.innerText = `${mediaIndex[id] + 1} / ${mediaAssets[id].length}`; }
}

// VFX Carousel
let vfxIndex = 0;
const vfxTotal = 6;
function cycleVfx(direction) {
    const slides = document.querySelectorAll('.vfx-slide');
    if (!slides.length) return;
    slides[vfxIndex].classList.remove('active');
    vfxIndex = (vfxIndex + direction + vfxTotal) % vfxTotal;
    slides[vfxIndex].classList.add('active');
    const counter = document.getElementById('counter-vfx');
    if (counter) counter.innerText = `${vfxIndex + 1} / ${vfxTotal}`;
}

// Markdown Parser
function parseMarkdown(md) {
    let html = md.replace(/^---[\s\S]*?---/, '');
    const lines = html.split('\n');
    let parsed = '';
    let inList = false;
    for (let line of lines) {
        line = line.trim();
        if (!line) { if (inList) { parsed += '</ul>'; inList = false; } continue; }
        if (line === '---') { if (inList) { parsed += '</ul>'; inList = false; } parsed += '<hr class="dossier-hr">'; continue; }
        if (line.startsWith('# ')) { if (inList) { parsed += '</ul>'; inList = false; } parsed += `<h1 class="dossier-h1">${line.substring(2)}</h1>`; continue; }
        if (line.startsWith('## ')) { if (inList) { parsed += '</ul>'; inList = false; } parsed += `<h2 class="dossier-h2">${line.substring(3)}</h2>`; continue; }
        if (line.startsWith('### ')) { if (inList) { parsed += '</ul>'; inList = false; } parsed += `<h3 class="dossier-h3">${line.substring(4)}</h3>`; continue; }
        if (line.startsWith('- ') || line.startsWith('* ')) { if (!inList) { parsed += '<ul class="dossier-list">'; inList = true; } parsed += `<li>${parseInlineMarkdown(line.substring(2))}</li>`; continue; }
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

function loadPage(p, sectionId) {
    const a = document.getElementById("content-area");
    if (!a) return;
    a.innerHTML = pages[p] || "<h1>404</h1>";
    
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    const act = document.getElementById("nav-" + p);
    if (act) act.classList.add("active");
    
    // Wire up all carousels
    ['splitter', 'hamsterBallin', 'dragonNinja', 'knightsOfIron', 'forestValley', 'deeprock'].forEach(id => {
        const prev = document.getElementById('prev-' + id);
        const next = document.getElementById('next-' + id);
        if (prev) prev.onclick = () => cycleMedia(id, -1);
        if (next) next.onclick = () => cycleMedia(id, 1);
    });

    // Wire up VFX carousel
    const prevVfx = document.getElementById('prev-vfx');
    const nextVfx = document.getElementById('next-vfx');
    if (prevVfx) prevVfx.onclick = () => cycleVfx(-1);
    if (nextVfx) nextVfx.onclick = () => cycleVfx(1);
    vfxIndex = 0;

    Object.keys(mediaIndex).forEach(k => mediaIndex[k] = 0);
    
    if (p === "personal") {
        fetch("./images/content/Documents/Jack_Collins_Resume_V2.md")
            .then(res => { if (!res.ok) throw new Error("Resume not found"); return res.text(); })
            .then(text => { const c = document.getElementById("resume-container"); if (c) c.innerHTML = parseMarkdown(text); attachSoundEvents(c); })
            .catch(err => { const c = document.getElementById("resume-container"); if (c) c.innerHTML = `<h3 style="color:var(--alert-red);">DOSSIER_ACCESS_DENIED</h3><p style="color:var(--alert-red); font-family:monospace; margin-top:10px;">ERROR: ${err.message}</p>`; });
    }
    
    if (sectionId) {
        setTimeout(() => { const el = document.getElementById(sectionId); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    } else { a.scrollTop = 0; }
    
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
            if (Math.random() > 0.96) { SoundManager.playGlitch(); }
        }
    });
}
setInterval(scrambleText, 3000);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-btn").forEach(b => { b.addEventListener("click", () => loadPage(b.getAttribute("data-page"))); });
    const audioBtn = document.getElementById("audio-toggle");
    if (audioBtn) {
        audioBtn.addEventListener("click", () => {
            audioEnabled = !audioEnabled;
            if (audioEnabled) { audioBtn.innerText = "SPKR: ON"; audioBtn.classList.remove("muted"); SoundManager.playClick(); }
            else { audioBtn.innerText = "SPKR: OFF"; audioBtn.classList.add("muted"); }
        });
    }
    attachSoundEvents(document);
    loadPage("home");
});
