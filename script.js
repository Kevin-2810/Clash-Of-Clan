
/* ── DATA ── */
const BASE = 'https://static.wikia.nocookie.net/clashofclans/images/';
const troops = [
  {name:'Barbarian',img:'./assets/barbarian.jpg',type:'ground',badge:'Ground Troop',desc:'A fierce warrior with golden hair. Fast, furious, and first into battle — Barbarians overwhelm defenses with sheer numbers and bladed fury.',dps:148,hp:1340,speed:'Fast'},
  {name:'Archer',img:'./assets/archer.webp',type:'ground',badge:'Ground / Ranged',desc:'This lithe and deadly archer prefers to attack from a distance. She can target both ground and air units with rapid-fire arrows.',dps:120,hp:840,speed:'Fast'},
  {name:'Giant',img:'./assets/giant.webp',type:'ground',badge:'Ground Troop',desc:'These big guys may seem all brawn and no brain, but Giants have a soft spot — they HATE defenses! Slow but incredibly tanky.',dps:128,hp:8000,speed:'Slow'},
  {name:'Goblin',img:'./assets/goblin.webp',type:'ground',badge:'Ground Troop',desc:'These pesky little creatures only have eyes for one thing: LOOT! Goblins move super fast and deal double damage to resource buildings.',dps:188,hp:720,speed:'Very Fast'},
  {name:'Wall Breaker',img:'./assets/wallbreaker.webp',type:'ground',badge:'Ground Troop',desc:'These bomb-chucking lunatics are determined to blow up your walls — at the cost of their own lives if necessary!',dps:1200,hp:480,speed:'Fast'},
  {name:'Balloon',img:'./assets/balloon.webp',type:'air',badge:'Air Troop',desc:'Once a slow and peaceful hot air balloon, it\'s now a bomb-laden war machine raining explosions on defenses below.',dps:216,hp:2450,speed:'Slow'},
  {name:'Wizard',img:'./assets/wizard.webp',type:'ground',badge:'Ground / Splash',desc:'The Wizard is a terrifying presence on the battlefield. Don\'t be fooled by his age — he can barbecue your favorite troops!',dps:310,hp:1340,speed:'Medium'},
  {name:'Party Wizard',img:'./assets/djwizard.webp',type:'ground',badge:'Ground / Splash',desc:'The Party Wizard is a festive version of the standard Wizard, known for his dancing and party tricks!',dps:310,hp:1340,speed:'Medium'},
 
  {name:'Dragon',img:'./assets/dragon.webp',type:'air',badge:'Air Troop',desc:'A fearsome flying beast of destruction! Dragons mercilessly torch anything in their path, dealing massive area damage.',dps:192,hp:4200,speed:'Medium'},
  {name:'P.E.K.K.A',img:'./assets/pekka.webp',type:'ground',badge:'Ground Troop',desc:"P.E.K.K.A's armor absorbs even the mightiest of blows. Nobody knows what lies beyond her visor — it is quite a mystery.",dps:800,hp:8100,speed:'Slow'},
  {name:'Healer',img:'./assets/healer.webp',type:'air',badge:'Air / Support',desc:'The Healer is an angelic presence that restores the health of your troops. She targets friendly ground troops in need.',dps:0,hp:3200,speed:'Fast'},
  {name:'Baby Dragon',img:'./assets/babydragon.webp',type:'air',badge:'Air Troop',desc:'The Baby Dragon throws fiery tantrums that deal area damage. Fights best alone — when solo it becomes even more enraged!',dps:156,hp:2100,speed:'Medium'},
  {name:'Electro Dragon',img:'./assets/electrodragon.webp',type:'air',badge:'Air Troop',desc:'The Electro Dragon shoots lightning bolts that deal area damage. Fights best alone — when solo it becomes even more enraged!',dps:156,hp:2100,speed:'Medium'},
  {name:'lava',img:'./assets/lava.webp',type:'air',badge:'Air Troop',desc:'These fiery beasts cant resist chasing after Air Defenses, providing excellent protection for other troops. Once destroyed, they erupt into many smaller, weaker menaces.',dps:136,hp:1900,speed:'Slow'},
  
  {name:'Miner',img:'./assets/miner.webp',type:'ground',badge:'Ground Troop',desc:'The Miner burrows underground and sneaks below walls to ambush defenses. Opponents may try to flee but there is no escaping!',dps:136,hp:1700,speed:'Fast'},
  {name:'Hog Rider',img:'./assets/hogrider.webp',type:'dark',badge:'Dark Elixir',desc:'Fast and fearless, the Hog Rider throws his massive hammer from range. He loves to jump over enemy walls — and his hog loves it too!',dps:196,hp:3500,speed:'Very Fast'},
  {name:'Minion',img:'./assets/minion.webp',type:'dark',badge:'Dark Elixir',desc:'Minions are fast and cheap units that can be deployed in large numbers. They are particularly effective against low-health targets.',dps:264,hp:3200,speed:'Fast'},
  {name:'Golem',img:'./assets/golem.webp',type:'dark',badge:'Dark Elixir',desc:'The Golem is a tough beast that splits into two Golemites upon death. It is the ultimate tank for soaking up massive damage.',dps:84,hp:18000,speed:'Slow'},
  {name:'Valkyrie',img:'./assets/valkyrie.webp',type:'dark',badge:'Dark Elixir',desc:'This fierce female warrior spins through groups of enemies dealing area damage. She loves to clear buildings within walls!',dps:264,hp:3200,speed:'Fast'},
  {name:'Ice Golem',img:'./assets/icegolem.webp',type:'dark',badge:'Dark Elixir',desc:'The Ice Golem is a tough beast that splits into two Ice Golemites upon death. It is the ultimate tank for soaking up massive damage.',dps:84,hp:18000,speed:'Slow'},
  {name:'Witch',img:'./assets/witch.webp',type:'dark',badge:'Dark Elixir',desc:'The Witch summons Skeletons to overwhelm enemies while blasting foes with dark magic. Make them suffer from beyond the grave!',dps:100,hp:1400,speed:'Medium'},
  {name:'Bowler',img:'./assets/bowler.webp',type:'dark',badge:'Dark Elixir',desc:'This big blue fellow loves to bounce his boulders off into the distance. His boulder bounces through its first target to hit another!',dps:128,hp:3600,speed:'Medium'},
 
  {name:'Headhunter',img:'./assets/headhunter.webp',type:'dark',badge:'Dark Elixir',desc:'The Headhunter is a fierce warrior who excels at hunting down and eliminating enemy targets. His ability allows him to become invisible while tracking his prey.',dps:100,hp:1400,speed:'Medium'},
  {name:'Yeti',img:'./assets/yeti.webp',type:'dark',badge:'Dark Elixir',desc:'This massive creature is a formidable opponent, capable of dealing significant damage and withstanding heavy attacks.',dps:128,hp:3600,speed:'Medium'},
  {name:'Barbarian King',img:'./assets/king.jpg',type:'heroes',badge:'Hero',desc:'The Barbarian King is a giant Super Barbarian summoned by building his Altar. He wields the legendary Iron Fist ability in battle.',dps:534,hp:12000,speed:'Fast'},
  {name:'Archer Queen',img:'./assets/queen.webp',type:'heroes',badge:'Hero',desc:'The Archer Queen wields a massive bow of immense power and commands the Royal Cloak ability, turning invisible at will!',dps:428,hp:9800,speed:'Fast'},
  {name:'Grand Warden',img:'./assets/warden.webp',type:'heroes',badge:'Hero',desc:'The Grand Warden watches over his minions from afar. His Eternal Tome ability makes nearby units temporarily invincible.',dps:280,hp:7400,speed:'Medium'},
  {name:'Royal Champion',img:'./assets/champion.webp',type:'heroes',badge:'Hero',desc:'The Royal Champion hurls her spear at defenses from afar, and her ability allows her to seek out and destroy shields and traps!',dps:360,hp:8000,speed:'Fast'},
];

const buildings = [
  {img:'./assets/townhall.webp',name:'Town Hall',desc:'Heart of your village',detail:'The most vital building in your village. Upgrade it to unlock new buildings, troops, and defenses. Losing it means losing half your loot!',hp:6800,maxLv:15,type:'Core'},
  {img:'./assets/canon.webp',name:'Cannon',desc:'Single-target ground damage',detail:'A reliable defensive building that fires cannon balls at ground troops. Each upgrade drastically boosts damage and fire rate.',hp:900,maxLv:21,type:'Defense'},
  {img:'./assets/archer-tower.webp',name:'Archer Tower',desc:'Air and ground attacks',detail:'A versatile tower that targets both air and ground enemies simultaneously. One of the most efficient defenses in your base.',hp:720,maxLv:21,type:'Defense'},
  {img:'./assets/mortar.webp',name:'Mortar',desc:'Splash area damage',detail:'Rains explosive shells on enemy troops, dealing devastating area damage. Cannot target air units but excels against ground armies.',hp:700,maxLv:14,type:'Defense'},
  {img:'./assets/air-defence.webp',name:'Air Defense',desc:'Destroys air units',detail:'A powerful beam of energy that disintegrates flying enemies. Your most vital defense against dangerous dragon raids.',hp:800,maxLv:12,type:'Defense'},
  {img:'./assets/eagle.webp',name:'Eagle Artillery',desc:'Devastating long-range weapon',detail:'The Eagle Artillery fires on enemies that reach a set number of deployed troops, dealing massive damage with each devastating shot.',hp:5000,maxLv:6,type:'Defense'},
  {img:'./assets/scattershot.webp',name:'Scattershot',desc:'Catapult for splash damage',detail:'Flings boulders that bounce and deal splash damage across a wide area, effective at shredding both air and ground troops.',hp:4200,maxLv:4,type:'Defense'},
  {img:'./assets/goldmine.webp',name:'Gold Mine',desc:'Produces gold automatically',detail:'Continuously mines gold over time. Upgrade to increase the hourly production rate and maximum storage capacity.',hp:400,maxLv:15,type:'Resource'},
  {img:'./assets/elixircollector.webp',name:'Elixir Collector',desc:'Produces elixir automatically',detail:'Pumps precious elixir from the ground over time. Upgrade to boost hourly production and protect more elixir from raids.',hp:400,maxLv:15,type:'Resource'},
  {img:'./assets/laboratory.webp',name:'Laboratory',desc:'Research troop upgrades',detail:'Research troop and spell upgrades to dramatically increase their power. The key to dominating higher-level opponents in battle.',hp:500,maxLv:15,type:'Research'},
];

const leaderboard = [
  {rank:1,name:'NightOwlXD',avatar:'./assets/r1.jpg',trophies:'7,842',th:'TH16'},
  {rank:2,name:'IronChief',avatar:'./assets/r2.jpg',trophies:'7,614',th:'TH16'},
  {rank:3,name:'DragonSlayer',avatar:'./assets/r3.jpg',trophies:'7,502',th:'TH15'},
  {rank:4,name:'StormBringer',avatar:'./assets/r4.jpg',trophies:'7,341',th:'TH15'},
  {rank:5,name:'GoldHunter',avatar:'./assets/r5.jpg',trophies:'7,288',th:'TH15'},
  {rank:6,name:'FireWarden',avatar:'./assets/r6.jpg',trophies:'7,101',th:'TH14'},
  {rank:7,name:'ShadowLord',avatar:'./assets/r7.jpg',trophies:'6,972',th:'TH14'},
];

const upgrades = [
  {name:'Town Hall 15 to 16',costImg:'./assets/coin.webp',cost:'18M Gold',time:'18d 12h',benefit:'+2 Defenses'},
  {name:'Barbarian King Lv.80',costImg:'./assets/DE.webp',cost:'300K DE',time:'12d 0h',benefit:'+200 HP +30 DPS'},
  {name:'Dragon Level 10',costImg:'./assets/E.webp',cost:'14M Elixir',time:'10d 6h',benefit:'+25 DPS +300 HP'},
  {name:'Archer Tower Lv.21',costImg:'./assets/coin.webp',cost:'9.5M Gold',time:'8d 0h',benefit:'+40 DPS'},
  {name:'Lightning Spell Lv.10',costImg:'./assets/E.webp',cost:'6M Elixir',time:'5d 12h',benefit:'+120 Damage'},
];

/* ── RENDER TROOPS ── */
function renderTroops(filter){
  const grid=document.getElementById('troops-grid');
  const list=filter==='all'?troops:troops.filter(t=>t.type===filter);
  grid.innerHTML=list.map(t=>`
    <div class="troop-card" onclick="openModal('${t.name}')">
      <div class="troop-img-wrap">
        <img class="troop-img" src="${t.img}" alt="${t.name}" loading="lazy" onerror="this.src='https://placehold.co/80x80/1e1608/FFD700?text=${encodeURIComponent(t.name[0])}'"/>
      </div>
      <div class="troop-name">${t.name}</div>
      <div class="troop-kind">${t.type==='dark'?'Dark Elixir':t.type.charAt(0).toUpperCase()+t.type.slice(1)}</div>
      <div class="troop-dots"><span class="on"></span><span class="on"></span><span class="on"></span><span></span><span></span></div>
    </div>`).join('');
}
function filterTroops(type,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderTroops(type);
}

/* ── RENDER BUILDINGS ── */
function renderBuildings(){
  const list=document.getElementById('bld-list');
  list.innerHTML=buildings.map((b,i)=>`
    <div class="bld-item ${i===0?'active':''}" onclick="selectBuilding(${i},this)">
      <img class="bld-thumb" src="${b.img}" alt="${b.name}" loading="lazy" onerror="this.src='https://placehold.co/44x44/1e1608/FFD700?text=B'"/>
      <div>
        <div class="bld-name">${b.name}</div>
        <div class="bld-desc-sm">${b.desc}</div>
      </div>
    </div>`).join('');
}
function selectBuilding(i,el){
  document.querySelectorAll('.bld-item').forEach(x=>x.classList.remove('active'));
  el.classList.add('active');
  const b=buildings[i];
  document.getElementById('bld-detail-img').src=b.img;
  document.getElementById('bld-detail-title').textContent=b.name;
  document.getElementById('bld-detail-text').textContent=b.detail;
  document.getElementById('bstat-hp').textContent=b.hp.toLocaleString();
  document.getElementById('bstat-lv').textContent=b.maxLv;
  document.getElementById('bstat-type').textContent=b.type;
}

/* ── RENDER LEADERBOARD ── */
function renderLeaderboard(){
  const medals=['#FFD700','#C0C0C0','#CD7F32'];
  document.getElementById('lboard-body').innerHTML=leaderboard.map(p=>`
    <div class="lboard-row">
      <span class="lb-rank ${p.rank<=3?'g'+p.rank:''}" style="${p.rank<=3?'color:'+medals[p.rank-1]:''}">
        ${p.rank<=3?`<svg width="22" height="22" viewBox="0 0 24 24" fill="${medals[p.rank-1]}"><polygon points="12,2 14.4,9.2 22,9.2 16,13.8 18.4,21 12,16.4 5.6,21 8,13.8 2,9.2 9.6,9.2"/></svg>`:p.rank}
      </span>
      <div class="lb-player">
        <img class="lb-avatar" src="${p.avatar}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/34x34/2c2416/FFD700?text=${p.name[0]}'"/>
        <span class="lb-pname">${p.name}</span>
      </div>
      <span class="lb-trophies">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFD700" style="vertical-align:-2px;margin-right:3px"><path d="M6 2h12v8a6 6 0 01-12 0V2z"/><path d="M6 4H2v3a4 4 0 004 4M18 4h4v3a4 4 0 01-4 4"/><line x1="12" y1="16" x2="12" y2="20" stroke="#FFD700" stroke-width="2"/><path d="M8 20h8" stroke="#FFD700" stroke-width="2" fill="none"/></svg>
        ${p.trophies}
      </span>
      <span class="lb-th">${p.th}</span>
    </div>`).join('');
}

/* ── RENDER UPGRADES ── */
function renderUpgrades(){
  document.getElementById('upg-body').innerHTML=upgrades.map(u=>`
    <div class="upg-row">
      <span class="upg-name">${u.name}</span>
      <span class="upg-cost"><img src="${u.costImg}" alt="cost" loading="lazy" onerror="this.remove()"/> ${u.cost}</span>
      <span class="upg-time">${u.time}</span>
      <span class="upg-benefit">${u.benefit}</span>
    </div>`).join('');
}

/* ── MODAL ── */
function openModal(name){
  const t=troops.find(x=>x.name===name);if(!t)return;
  document.getElementById('modal-img').src=t.img;
  document.getElementById('modal-name').textContent=t.name;
  document.getElementById('modal-badge').textContent=t.badge;
  document.getElementById('modal-desc').textContent=t.desc;
  document.getElementById('m-dps').textContent=t.dps||'Support';
  document.getElementById('m-hp').textContent=t.hp.toLocaleString();
  document.getElementById('m-speed').textContent=t.speed;
  document.getElementById('troop-modal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(e){
  if(e&&e.target!==document.getElementById('troop-modal'))return;
  document.getElementById('troop-modal').classList.remove('open');
  document.body.style.overflow='';
}

/* ── PARTICLES ── */
function createParticles(){
  const c=document.getElementById('pContainer');
  for(let i=0;i<20;i++){
    const p=document.createElement('div');
    p.className='particle';
    const s=Math.random()*4+2;
    const cols=['rgba(255,215,0,.8)','rgba(255,180,60,.6)','rgba(255,255,150,.7)','rgba(200,150,50,.5)'];
    p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;bottom:-10px;background:${cols[~~(Math.random()*4)]};animation-duration:${8+Math.random()*12}s;animation-delay:${Math.random()*10}s;`;
    c.appendChild(p);
  }
}

/* ── COUNTERS ── */
function animateCounters(){
  document.querySelectorAll('[data-target]').forEach(el=>{
    const target=parseInt(el.dataset.target);
    const suffix=target>=100?'M+':'+';
    const start=performance.now();
    (function upd(now){
      const t=Math.min((now-start)/2200,1),e=1-Math.pow(1-t,3);
      el.textContent=Math.round(e*target)+suffix;
      if(t<1)requestAnimationFrame(upd);
    })(performance.now());
  });
}

/* ── SCROLL REVEAL ── */
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.1});

/* ── PROGRESS BARS ── */
const progObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      document.getElementById('bar-red').style.width='72%';
      document.getElementById('bar-blue').style.width='85%';
      progObs.disconnect();
    }
  });
},{threshold:.5});

/* ── TIMER ── */
function startTimer(){
  const end=new Date();
  end.setDate(end.getDate()+14);end.setHours(8,43,21);
  function upd(){
    let d=Math.max(0,end-new Date());
    const days=Math.floor(d/86400000);d%=86400000;
    const hrs=Math.floor(d/3600000);d%=3600000;
    const min=Math.floor(d/60000);d%=60000;
    const sec=Math.floor(d/1000);
    document.getElementById('td').textContent=String(days).padStart(2,'0');
    document.getElementById('th').textContent=String(hrs).padStart(2,'0');
    document.getElementById('tm').textContent=String(min).padStart(2,'0');
    document.getElementById('ts').textContent=String(sec).padStart(2,'0');
  }
  upd();setInterval(upd,1000);
}

/* ── NAV HELPERS ── */
function smoothTo(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
function toggleMenu(){
  const ul=document.querySelector('.nav-links');
  ul.style.display=ul.style.display==='flex'?'none':'flex';
  if(ul.style.display==='flex')ul.style.cssText='display:flex;flex-direction:column;position:absolute;top:97px;left:0;right:0;background:rgba(10,8,4,.97);padding:1.2rem 2rem;gap:1rem;border-bottom:2px solid var(--gold-dark);z-index:999;';
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded',()=>{
  renderTroops('all');
  renderBuildings();
  renderLeaderboard();
  renderUpgrades();
  createParticles();
  startTimer();
  animateCounters();
  document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));
  const wp=document.querySelector('.war-prog');if(wp)progObs.observe(wp);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal({})});
});
