// =========================================
// [1. INTRO PAGE : HACKING PROTOCOL]
// =========================================
const connectBtn = document.getElementById('connectBtn');
const introView = document.getElementById('introView');
const mainView = document.getElementById('mainView');
const terminalOutput = document.getElementById('terminalOutput');

const standbyMessages = [
    "> SYSTEM STANDBY. PRESS BUTTON TO START PROTOCOL_",
    "> [WARNING] UNAUTHORIZED DEVICE DETECTED.",
    "> ENCRYPTED CONNECTION ESTABLISHED...",
    "> AWAITING USER COMMAND_",
    "> SCANNING FIREWALL VULNERABILITIES...",
    "> NEURAL LINK READY."
];
let standbyIndex = 0;
let standbyInterval;

function startStandbyEffect() {
    terminalOutput.innerHTML = standbyMessages[standbyIndex] + '<span class="cursor-blink">█</span>';
    standbyInterval = setInterval(() => {
        standbyIndex = (standbyIndex + 1) % standbyMessages.length;
        terminalOutput.innerHTML = standbyMessages[standbyIndex] + '<span class="cursor-blink">█</span>';
    }, 700); 
}

startStandbyEffect();

const mainHackLines = [
    "ACCESSING NEON CHROME MAIN DB_...",
    "INITIALIZING HACK PROTOCOL v9.1...",
    "BYPASSING APEX FIREWALL (v7.4.2)...",
    "[ERROR] NEURAL LINK INSTABILITY DETECTED.",
    "INJECTING ICARUS_PATCH.EXE...",
    "ROUTING THROUGH SLUM 7 PROXY NODE_...",
    "DECRYPTING PERSONNEL DOSSIER DATABASE...",
    "LOADING SPATIAL COORDINATES DATABASE...",
    "PROTOCOL COMPLETE_..."
];

let mainIndex = 0;
let charIndex = 0;
let currentText = '';

function typeTerminalContinuous() {
    if (mainIndex < mainHackLines.length) {
        currentText = mainHackLines[mainIndex];
        
        if (charIndex === 0) {
            let prefix = '> ';
            if (currentText.includes('ERROR')) prefix = '<span style="color:red; text-shadow:0 0 5px red;">[ALERT] </span>> ';
            if (currentText.includes('PROTOCOL COMPLETE')) prefix = '<span style="color:var(--neon-blue); text-shadow:var(--glow-blue);">[STATUS] </span>> ';
            terminalOutput.innerHTML += '<br>' + prefix;
        }

        if (charIndex < currentText.length) {
            terminalOutput.innerHTML += currentText[charIndex];
            charIndex++;
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            setTimeout(typeTerminalContinuous, 10); 
        } else {
            mainIndex++;
            charIndex = 0;
            
            let randomStream = generateRandomStream();
            terminalOutput.innerHTML += '<br><span style="color:#666; font-size:0.9em; opacity:0.6;">' + randomStream + '</span>';
            terminalOutput.scrollTop = terminalOutput.scrollHeight;

            let delay = 50 + Math.random() * 100;
            if (currentText.includes('ERROR')) delay = 400; 
            if (currentText.includes('COMPLETE')) delay = 300; 
            
            setTimeout(typeTerminalContinuous, delay); 
        }
    } else {
        terminalOutput.innerHTML += "<br><br><span style='color:var(--neon-blue); text-shadow:var(--glow-blue);'>> ACCESS GRANTED. WELCOME TO NEON CHROME.</span>";
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        
        setTimeout(() => {
            introView.classList.add('hidden');
            mainView.classList.add('active');
        }, 500); 
    }
}

function generateRandomStream() {
  let str = '::DATA_STREAM::[ ';
  const hexChars = '0123456789ABCDEF';
  for (let i = 0; i < 15; i++) {
    str += hexChars[Math.floor(Math.random() * 16)];
  }
  str += ' ] :: SYS_LOG:: ' + (Math.random() > 0.5 ? 'SYNCING...' : 'PATCHING...');
  return str;
}

// =========================================
// [MUSIC PLAYER]
// =========================================
const playlist = [
    { title: "Neon Chrome_Hi", file: "music/01.Neon_Chrome_Hi.mp3" },
    { title: "Neon Chrome_Welcom", file: "music/02.Neon_Chrome_Welcom.mp3" },
    { title: "Neon Chrome_To City", file: "music/03.Neon_Chrome_To_City.mp3" },
    { title: "에덴 스파이어 (Eden Spire)", file: "music/04.Eden_Spire.mp3" },
    { title: "아스트라 가이더리 (Astra Guiderie)", file: "music/05.Astra_Guiderie.mp3" },
    { title: "뉴럴 프로토콜 랩 (NPL)", file: "music/06.NPL.mp3" },
    { title: "세라프 보안국 (SSB)_ver1", file: "music/07.SSB_ver1.mp3" },
    { title: "세라프 보안국 (SSB)_ver2", file: "music/08.SSB_ver2.mp3" },
    { title: "루멘 라인 (Lumen Line)", file: "music/09.Lumen_Line.mp3" },
    { title: "블루벙커 (Blue Bunker)", file: "music/10.Blue_Bunker.mp3" },
    { title: "도깨비 야드 (Dogyard)_ver1", file: "music/11.Dogyard_ver1.mp3" },
    { title: "도깨비 야드 (Dogyard)_ver2", file: "music/12.Dogyard_ver2.mp3" },
    { title: "펄스 교회 (Pulse Chapel)", file: "music/13.Pulse_Chapel.mp3" },
    { title: "톱니 골목 (Gear Alley)", file: "music/14.Gear_Alley.mp3" }, 
    { title: "산성비 파수탑 (Acidwatch)", file: "music/15.Acidwatch.mp3" },
    { title: "노이즈 서브웨이 (Noise Subway)", file: "music/16.Noise_Subway.mp3" },
    { title: "미러룸 (Mirror Room)", file: "music/17.Mirror_Room.mp3" },
    { title: "네온 블랙 사이트 (Neon Black Site)", file: "music/18.Neon_Black_Site.mp3" },
    { title: "크롬 캐시 (Chrome Cache)", file: "music/19.Chrome_Cache.mp3" },
    { title: "스카이브릿지 하부 (Skybridge Underside)", file: "music/20.Skybridge_Underside.mp3" }
];

let currentTrackIndex = 0;
const bgmAudio = document.getElementById('bgm-audio');
const mpTitle = document.getElementById('mp-title');
const mpPlayBtn = document.getElementById('mp-play');
const mpMenuBtn = document.getElementById('mp-menu');
const mpPlaylistContainer = document.getElementById('mp-playlist');

function loadTrack(index) {
    if(playlist.length === 0) return;
    bgmAudio.src = playlist[index].file;
    mpTitle.innerText = playlist[index].title;
    updatePlaylistUI();
}

function togglePlay() {
    if (bgmAudio.paused) {
        bgmAudio.play();
        mpPlayBtn.innerHTML = '❚❚'; 
    } else {
        bgmAudio.pause();
        mpPlayBtn.innerHTML = '▶'; 
    }
}

function nextTrack() {
    if(playlist.length === 0) return;
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    if (!bgmAudio.paused || mpPlayBtn.innerHTML === '❚❚') {
        bgmAudio.play();
    }
}

function renderPlaylist() {
    mpPlaylistContainer.innerHTML = '';
    playlist.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = 'mp-playlist-item';
        item.innerText = track.title;
        if (index === currentTrackIndex) {
            item.classList.add('active');
        }
        item.onclick = (e) => {
            e.stopPropagation(); 
            currentTrackIndex = index;
            loadTrack(currentTrackIndex); 
            
            bgmAudio.play().then(() => {
                mpPlayBtn.innerHTML = '❚❚';
            }).catch(error => {
                console.log("메뉴 재생 오류:", error);
            });
            
            mpPlaylistContainer.classList.add('hidden'); 
        };
        mpPlaylistContainer.appendChild(item);
    });
}

function updatePlaylistUI() {
    const items = document.querySelectorAll('.mp-playlist-item');
    items.forEach((item, index) => {
        if(index === currentTrackIndex) item.classList.add('active');
        else item.classList.remove('active');
    });
}

mpMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    mpPlaylistContainer.classList.toggle('hidden');
});

bgmAudio.addEventListener('ended', nextTrack);
mpPlayBtn.addEventListener('click', togglePlay);

document.addEventListener('click', (e) => {
    if (!document.getElementById('music-player').contains(e.target)) {
        mpPlaylistContainer.classList.add('hidden');
    }
});

if (playlist.length > 0) {
    renderPlaylist();
    loadTrack(0);
}

document.body.addEventListener('click', function playOnFirstClick() {
    if (bgmAudio.paused && playlist.length > 0) {
        bgmAudio.play().then(() => {
            mpPlayBtn.innerHTML = '❚❚';
        }).catch(e => console.log("오디오 대기 중:", e));
    }
    document.body.removeEventListener('click', playOnFirstClick); 
}, { once: true });

connectBtn.addEventListener('click', () => {
    clearInterval(standbyInterval); 
    connectBtn.style.display = "none"; 
    terminalOutput.innerHTML = ''; 
    mainIndex = 0;
    charIndex = 0;
    typeTerminalContinuous(); 
    
    if (playlist.length > 0) {
        bgmAudio.play().then(() => {
            mpPlayBtn.innerHTML = '❚❚';
        }).catch(e => console.log("음악 로드 대기 중 (버퍼링):", e));
    }
});

// =========================================
// [NAVIGATION LOGIC]
// =========================================
function switchSection(tabId) {
    document.querySelectorAll('.content-section').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        }
    });

    document.getElementById(tabId).classList.add('active');
    
    const mainViewEl = document.getElementById('mainView');
    if (mainViewEl) {
        mainViewEl.scrollTop = 0;
    }
    
    if(tabId === 'tab-characters') {
        goBackToFactions();
    }
}

window.switchSection = switchSection;

// [복구됨] 장소 데이터베이스 하이라이트 및 스크롤 기능
function highlightLocation(locId) {
    document.querySelectorAll('.location-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const targetEl = document.getElementById(locId);
    if (targetEl) {
        targetEl.classList.add('active');
        // 모바일 환경에서도 선택한 장소가 잘 보이게 스크롤을 중앙으로 맞춰줌
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
window.highlightLocation = highlightLocation;

// =========================================
// [CHARACTER DOSSIER LOGIC]
// =========================================
const characterDB = {
    apex: [
        { id: 'ian', name: '이안 (Ian)', rank: 'S-Rank', role: '세라프 보안국 1팀장', type: 'S급 센티널', traits: '능글맞은 태도, 촉각 자극 집착, 이카루스 연기 흡입.', flaw: '과열되는 신경망을 마비시킬 지속적인 열기(체온) 요구.', quote: '"그렇게 피곤하게 굴 필요 없어. 조금만 쉬었다 가자, 응?"', img: 'https://lh3.googleusercontent.com/d/1iVA_0RzBiVKZFsBLZXFFGBIy5K0SZuEY' },
        { id: 'kael', name: '카엘 (Kael)', rank: 'A-Rank', role: '세라프 1팀 행동대장', type: 'A급 센티널', traits: '피 냄새 배인 방검복, 거친 핑크발, 평소엔 둔감함.', flaw: '정맥을 찢는 강렬한 자극 유지. 고요한 상태에서의 단절감.', quote: '"아, 시끄러워. 귀찮게 굴지 말고 그냥 치워버리면 끝나는 거 아니야?"', img: 'https://lh3.googleusercontent.com/d/1B21V11t5qoHVawEQG8tm2Y-Iud6Z-kUS' }
    ],
    reaperdog: [
        { id: 'leon', name: '레온 (Leon)', rank: 'S-Rank', role: '7구역 비공식 통솔자', type: 'S급 센티널', traits: '주황색 기계안, 낡은 항공 점퍼, 실없는 웃음 속 무거운 고민.', flaw: '산성비에 동료를 잃은 후 겪는 뼛속 깊은 한기.', quote: '"우리 예쁜이, 오늘은 표정이 왜 그래? 무슨 일 있으면 오빠한테 다 말해봐."', img: 'https://lh3.googleusercontent.com/d/16M3Akt8V4Es6zdhy2fA8VLQhCI7MFIF9' },
        { id: 'chloe', name: '클로이 (Chloe)', rank: 'A-Rank', role: '블루벙커 관리자', type: 'A급 센티널', traits: '리본 머리, 방수 코트, 타산적이지만 자기 사람은 지킴.', flaw: '과거 가이드의 배신 트라우마로 타인의 호의를 늘 경계함.', quote: '"그래서, 나한테 떨어지는 이윤은 얼만데? 난 밑지는 장사는 절대 안 해."', img: 'https://lh3.googleusercontent.com/d/1d1d9aKgOyK-5a8vSk31ILE0KPlAH9f0w' }
    ],
    glitch: [
        { id: 'ruby', name: '루비 (Ruby)', rank: 'S-Rank', role: '글리치 수장', type: 'S급 센티널', traits: '선명한 붉은 머리, 호탕한 리더, 거친 돌진력.', flaw: '거대 시스템을 뚫기 위해 쫓기는 삶의 불안을 억누름.', quote: '"다들 뒤로 물러서! 여긴 언니가 알아서 뚫을 테니까 다치기 싫으면 비켜."', img: 'https://lh3.googleusercontent.com/d/1O9BT3xbB4I6xeBi11z8I65tPYNti5h2q' },
        { id: 'jace', name: '제이스 (Jace)', rank: 'S-Rank', role: '전투 투입팀장', type: 'S급 가이드', traits: '전술복, 무뚝뚝함, 이카루스 알레르기.', flaw: 'APEX 가이드 시절 억압당한 인간성과 온기에 대한 결핍.', quote: '"…명령해. 그 지시대로만 움직일 테니까."', img: 'https://lh3.googleusercontent.com/d/1rco8ajS0kgM2UhNOzteNwKU41deR6M7k' }
    ]
};

let currentFaction = '';

function openFactionReport(faction) {
    currentFaction = faction;
    document.getElementById('faction-stage').style.display = 'none';
    document.getElementById('character-stage').style.display = 'grid';

    buildCharacterTabs(faction);
    
    if(characterDB[faction].length > 0) {
        showCharacter(characterDB[faction][0].id);
    }
}

function goBackToFactions() {
    document.getElementById('character-stage').style.display = 'none';
    document.getElementById('faction-stage').style.display = 'grid';
}

function buildCharacterTabs(faction) {
    const container = document.getElementById('char-index-container');
    container.innerHTML = ''; 
    
    const tabClass = faction + '-tab'; 

    characterDB[faction].forEach(char => {
        const btn = document.createElement('button');
        btn.className = `char-tab-btn ${tabClass}`;
        btn.id = `btn-${char.id}`;
        btn.innerText = char.name;
        btn.onclick = () => showCharacter(char.id);
        container.appendChild(btn);
    });
}

function showCharacter(charId) {
    document.querySelectorAll('.char-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${charId}`).classList.add('active');

    const charData = characterDB[currentFaction].find(c => c.id === charId);
    const colorClass = currentFaction + '-color'; 

    const html = `
        <div class="char-dossier active">
            <div class="dossier-header">
                <h3 class="${colorClass}">${charData.name}</h3>
                <div class="rank-badge ${colorClass}">${charData.rank}</div>
            </div>
            <div class="dossier-body">
                <div class="dossier-portrait" style="border-color: var(--neon-${currentFaction === 'apex' ? 'blue' : currentFaction === 'reaperdog' ? 'pink' : 'green'})">
                    ${charData.img ? `<img src="${charData.img}" alt="${charData.name}">` : ''}
                </div>
                <div class="dossier-details">
                    <p class="dossier-prop"><span class="label">소속:</span> ${charData.role}</p>
                    <p class="dossier-prop"><span class="label">타입:</span> <span style="color:#fff;">${charData.type}</span></p>
                    <p class="dossier-prop"><span class="label">특징:</span> ${charData.traits}</p>
                    <p class="dossier-prop"><span class="label">결핍:</span> ${charData.flaw}</p>
                </div>
            </div>
            <div class="dossier-quote" style="border-left-color: var(--neon-${currentFaction === 'apex' ? 'blue' : currentFaction === 'reaperdog' ? 'pink' : 'green'})">
                ${charData.quote}
            </div>
        </div>
    `;

    document.getElementById('char-data-container').innerHTML = html;
}

window.openFactionReport = openFactionReport;
window.goBackToFactions = goBackToFactions;

// =========================================
// [4. DYNAMIC TOP BAR LOGIC]
// =========================================
const topBarWrapper = document.getElementById('topBarWrapper');
const mainViewElForScroll = document.getElementById('mainView');
const sessionNav = document.querySelector('.session-nav');
const mainHeader = document.querySelector('.main-header');

let isTicking = false; 

mainViewElForScroll.addEventListener('scroll', function() {
    if (!isTicking) {
        window.requestAnimationFrame(function() {
            let scrollTop = mainViewElForScroll.scrollTop;
            
            if (scrollTop <= 15) {
                sessionNav.classList.remove('accordion-folded');
                mainHeader.classList.remove('accordion-folded');
            } 
            else {
                sessionNav.classList.add('accordion-folded');
                mainHeader.classList.add('accordion-folded');
            }
            isTicking = false;
        });
        isTicking = true;
    }
});

// =========================================
// [5. REAL-TIME FIREBASE GUESTBOOK LOGIC (추가 기능: 삭제)]
// =========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAxsSiWYKpjwFiFOHHyfUkGzHGuOZLzTlk",
    authDomain: "neonchrome-e5eb9.firebaseapp.com",
    projectId: "neonchrome-e5eb9",
    storageBucket: "neonchrome-e5eb9.firebasestorage.app",
    messagingSenderId: "728800740470",
    appId: "1:728800740470:web:fedd7ac242b6791e410b57",
    measurementId: "G-2R4VGGD892"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.submitGuestbook = async function() {
    const nameInput = document.getElementById('gb-name');
    const pwdInput = document.getElementById('gb-password'); 
    const msgInput = document.getElementById('gb-message');
    const factionRadios = document.getElementsByName('gb-faction');
    
    const name = nameInput.value.trim();
    const pwd = pwdInput.value.trim();
    const msg = msgInput.value.trim();
    
    if (!name || !pwd || !msg) {
        alert('식별자(ID), 비밀번호(PIN), 메시지를 모두 입력해야 통신을 전송할 수 있습니다.');
        return;
    }

    let faction = 'none';
    let factionLabel = '무소속';
    for (const radio of factionRadios) {
        if (radio.checked) {
            faction = radio.value;
            if(faction === 'apex') factionLabel = 'APEX 소속';
            if(faction === 'reaperdog') factionLabel = 'Reaperdog 소속';
            if(faction === 'glitch') factionLabel = 'Glitch 소속';
            break;
        }
    }

    const now = new Date();
    const pad = (num) => num.toString().padStart(2, '0');
    const timeStr = `[2167.${pad(now.getMonth()+1)}.${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}]`;
    const safeMsg = msg.replace(/</g, "<").replace(/>/g, ">").replace(/\n/g, '<br>');

    try {
        await addDoc(collection(db, "guestbook"), {
            name: name.replace(/</g, "<"),
            password: pwd, 
            faction: faction,
            factionLabel: factionLabel,
            timeStr: timeStr,
            safeMsg: safeMsg,
            timestamp: serverTimestamp() 
        });
        
        nameInput.value = '';
        pwdInput.value = ''; 
        msgInput.value = '';
    } catch (e) {
        console.error("통신 전송 오류: ", e);
        alert("통신 로그를 기록하는 데 실패했습니다. 파이어베이스 규칙(Rules) 설정을 확인해주세요.");
    }
};

window.deleteGuestbookEntry = async function(dbId) {
    const pwd = prompt("로그를 삭제하려면 비밀번호(PIN)를 입력하십시오.");
    if (!pwd) return;

    try {
        const docRef = doc(db, "guestbook", dbId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            if (docSnap.data().password === pwd) {
                await deleteDoc(docRef);
                alert("통신 로그가 시스템에서 영구 삭제되었습니다.");
            } else {
                alert("비밀번호(PIN)가 일치하지 않습니다. 삭제 거부됨.");
            }
        } else {
            alert("이미 삭제되었거나 존재하지 않는 로그입니다.");
        }
    } catch (e) {
        console.error("삭제 오류: ", e);
        alert("삭제 진행 중 시스템 오류가 발생했습니다.");
    }
};

const q = query(collection(db, "guestbook"), orderBy("timestamp", "desc"));
onSnapshot(q, (snapshot) => {
    const guestbookData = [];
    snapshot.forEach((docSnap) => {
        guestbookData.push({ dbId: docSnap.id, ...docSnap.data() });
    });
    
    renderGuestbook(guestbookData);
    renderRecentGuestbook(guestbookData);
});

function renderGuestbook(dataArray) {
    const container = document.getElementById('guestbook-entries');
    container.innerHTML = '';
    
    if(dataArray.length === 0) {
        container.innerHTML = '<p style="color:#666; font-style:italic;">수신된 통신 로그가 없습니다. 첫 로그를 남겨주세요.</p>';
        return;
    }

    dataArray.forEach(entry => {
        const div = document.createElement('div');
        div.className = `gb-entry ${entry.faction}`;
        div.innerHTML = `
            <div class="gb-entry-header">
                <span>ID: ${entry.name} [${entry.factionLabel}]</span>
                <div>
                    <span style="margin-right:10px;">${entry.timeStr}</span>
                    <button class="gb-delete-btn" onclick="deleteGuestbookEntry('${entry.dbId}')">삭제</button>
                </div>
            </div>
            <div class="gb-entry-msg">${entry.safeMsg}</div>
        `;
        container.appendChild(div);
    });
}

function renderRecentGuestbook(dataArray) {
    const container = document.getElementById('recent-guestbook-entries');
    if(dataArray.length === 0) {
        container.innerHTML = '<p style="color:#666; font-style:italic;">수신된 최신 통신 로그가 없습니다.</p>';
        return;
    }
    
    container.innerHTML = '';
    const recent = dataArray.slice(0, 3);
    
    recent.forEach(entry => {
        const div = document.createElement('div');
        div.className = `gb-entry ${entry.faction}`;
        div.style.padding = '12px 15px'; 
        div.style.marginBottom = '10px';
        
        let shortMsg = entry.safeMsg.replace(/<br>/g, " ");
        if(shortMsg.length > 60) shortMsg = shortMsg.substring(0, 60) + '...';

        div.innerHTML = `
            <div class="gb-entry-header" style="margin-bottom: 5px; border-bottom: none; padding-bottom:0;">
                <span>ID: ${entry.name}</span>
                <span style="font-size:0.85em">${entry.timeStr}</span>
            </div>
            <div class="gb-entry-msg" style="font-size:0.95em; opacity:0.85;">${shortMsg}</div>
        `;
        container.appendChild(div);
    });
}