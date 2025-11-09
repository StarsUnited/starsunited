// Teams Data
const teamsData = [
  {
    id: 1,
    name: 'SILVER STARS',
    game: 'Clash Royale',
    gameColor: '#3B82F6',
    image: "images/SilverStars_frei_ohne_R.png",
    leader: 'SILVER STARS',
    leaderTag: 'SL│',
    description:
      'Mit einst 11 Clans haben wir über 500 Spielern ein Zuhause gegeben und die Top 10 in Deutschland gestürmt. Nach aktuellen Anpassungen konzentrieren wir uns derzeit auf Clanwar, Ladder und Casual-Clans. Du hast die Wahl und mit SILVER STARS die Vielfalt zum Erfolg.',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 2,
    name: 'STROHHÜTE ROYAL',
    game: 'Clash Royale',
    gameColor: '#3B82F6',
    image: "images/Strohhuete_Freigestellt.png",
    leader: 'STROHHÜTE ROYAL',
    leaderTag: 'SHR│',
    description:
      'Ahoi Piraten und willkommen an Bord! *Prost* Hier wird nicht geträumt, hier wollen wir Visionen verwirklichen! So entern wir zuerst eure Herzen und dann die Boote der Anderen.',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 3,
    name: 'PIG’Z & CHICK’Z',
    game: 'Hay Day',
    gameColor: '#10B981',
    image: "images/PigZandChickZ-1.png",
    leader: 'PIG’Z and CHICK’Z',
    leaderTag: 'PAC│',
    description:
      'Egal ob Früchte, Pflanzen, Tiere – unsere Crew ist richtig öko und logisch noch dazu! Lockere Gemeinde, für kleine Bauern bis hin zum „Derby“-Pro! Gegenseitige Hilfe mit Waren und Support. Traktor fahren ohne Führerschein möglich!',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 4,
    name: 'DIE FÜCHSE',
    game: 'Hay Day',
    gameColor: '#10B981',
    image: "images/fuchs.png",
    leader: 'DIE FÜCHSE',
    leaderTag: 'DF│',
    description:
      'Unser Team ist in HayDay schon länger dabei. Im Derby punkten wir mit viel Verstand – als „CHAMPIONS“ sind alle dabei. Hast du Leidenschaft und Biss? Dann werde ein schlauer Fuchs in unserer herzlichen Community!',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 5,
    name: 'UNITED ULTRAS',
    game: 'Brawl Stars',
    gameColor: '#F97316',
    leader: 'UNITED ULTRAS',
    image: "images/UNITEDULTRAS.png",
    leaderTag: 'UϟU│',
    description:
      'Moin Brawler-Freunde! Bei uns findest du deinen Platz – egal ob Anfänger oder fortgeschritten. Das MegaPig wird IMMER voll gemacht. Wer nicht mithält, muss wieder gehen. Melde dich gerne für mehr Infos!',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 6,
    name: 'ROYAL FAMILY',
    game: 'Brawl Stars',
    gameColor: '#F97316',
    leader: 'ROYAL FAMILY',
    image: "images/Royal-Family.png",
    leaderTag: 'RYL│',
    description:
      'Engagement und Loyalität gegenüber unseren 5 Brawl Stars Clubs werden belohnt durch eine aktive Community und stets gefüllte MegaPigs. Egal ob Anfänger oder Profi – hier findet jeder seinen passenden Club!',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 7,
    name: 'JUICY CREW',
    game: 'Clash of Clans',
    gameColor: '#DC2626',
    leader: 'JUICY CREW',
    leaderTag: 'JC│',
    image: "images/Juicy-Crew.png",
    description:
      'Wir sind fruchtig fresh dabei! Für alle unsere „COC“-Spieler organisieren wir saftiges Gameplay, das andere Clans sauer macht. Struktur, CWL-Erfolg und Spaß stehen bei uns ganz oben – werde Teil des Obstkorbs!',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 8,
    name: 'FEY',
    game: 'Clash of Clans',
    gameColor: '#DC2626',
    image: "images/Mammutbaum_fey.png",
    leader: 'FEY',
    leaderTag: 'FEY│',
    description:
      'Tauche ein in die Welt von FEY – wo Leidenschaft für Gaming auf unendliche Energie trifft! Unser Clan wächst stetig und kämpft leidenschaftlich in CWL und Wars. Werde Teil unserer FEY-Familie!',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 9,
    name: 'GET ON OUR LVL',
    game: 'Clash of Clans',
    gameColor: '#DC2626',
    image: "images/GetonourLVL.png",
    leader: 'GET ON OUR LVL',
    leaderTag: 'GOL│',
    description:
      'Bist du bereit für das beste COC-Team? Respekt, Ehre und Teamgeist stehen bei uns ganz oben. Mit klaren Strukturen, schnellen Spenden und CW-Fokus bieten wir das perfekte Umfeld für motivierte Spieler!',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 10,
    name: 'TLS',
    game: 'Squad Busters',
    gameColor: '#7C3AED',
    image: "images/TLS_Logo2.png",
    leader: 'TLS',
    leaderTag: 'TLS│',
    description:
      'Führe eine vielfältige Truppe aus Helden in spannende Gefechte. Mit Können, Planung und Teamwork zerschlägst du rivalisierende Squads. Werde Teil der TLS-Geschichte in Squad Busters!',
    achievement: 'Crystal League II',
    members: 222,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
  id: 11,
  name: 'StarsUnited MC',
  game: 'Minecraft',
  gameColor: '#34D399',
  image: "images/TLS_Logo2.png",
  leader: 'Noch in Arbeit',
  leaderTag: 'COMING│SOON',
  description:
    'Unser Minecraft-Projekt befindet sich aktuell in der Entwicklung! Freue dich auf spannende Welten, Community-Events, Survival-Abenteuer und kreative Projekte. Sei einer der Ersten, der den offiziellen StarsUnited Minecraft-Bereich entdeckt!',
  achievement: 'In Entwicklung',
  members: 0,
  discordLink: 'https://discord.gg/starsunited'
}
];


const defaultStats = {
  members: 500,
  games: 10
};

function createEnhancedStarfield() {
  const starfieldContainer = document.getElementById('starfield');
  if (!starfieldContainer) return;

  const isMobile = window.innerWidth < 768;
  const starCount = isMobile ? 80 : 150;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 2 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = Math.random() * 2 + 2 + 's';
    star.style.opacity = Math.random() * 0.7 + 0.3;

    starfieldContainer.appendChild(star);
  }

 setInterval(() => {
      createShootingStar();
    }, 3000 + Math.random() * 4000);
}

function createShootingStar() {
  const starfieldContainer = document.getElementById('starfield');
  if (!starfieldContainer) return;

  const shootingStar = document.createElement('div');
  shootingStar.className = 'shooting-star';
  shootingStar.style.left = Math.random() * 100 + '%';
  shootingStar.style.top = Math.random() * 50 + '%';
  shootingStar.style.transform = `rotate(${Math.random() * 45 - 22.5}deg)`;

  starfieldContainer.appendChild(shootingStar);

  setTimeout(() => shootingStar.remove(), 2000);
}

async function loadStatistics() {
  try {
    const stats = defaultStats;

    const memberElement = document.getElementById('memberCount');
    const gameElement = document.getElementById('gameCount');

    if (memberElement) memberElement.textContent = stats.members + '+';
    if (gameElement) gameElement.textContent = stats.games + '+';
  } catch (error) {
    console.error('Error loading statistics:', error);
  }
}

function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach((el) => {
    observer.observe(el);
  });

  document.querySelectorAll('.feature-card, .game-card, .benefit-card, .contact-card').forEach((el) => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

function renderTeams(filter = 'all') {
  const teamsGrid = document.getElementById('teamsGrid');
  if (!teamsGrid) return;

  const filteredTeams = filter === 'all'
    ? teamsData
    : teamsData.filter(team => team.game === filter);

  teamsGrid.innerHTML = filteredTeams.map(team => `
    <div class="team-card" style="border-top-color: ${team.gameColor};">
      <div class="team-header">
        <div>
          <div class="team-name">${team.name}</div>
          <div class="team-game-badge" style="background-color: ${team.gameColor}40; color: ${team.gameColor};">
            ${team.game}
          </div>
        </div>

        <img src="${team.image || ''}" alt="" class="team-image" />
      </div>

      <p class="team-description">${team.description}</p>

      <div class="team-info">
        <div class="team-info-item">
          👥 <span><strong>${team.members}</strong> Mitglieder</span>
        </div>
        <div class="team-info-item">
          🏆 <span>${team.achievement}</span>
        </div>
        <div class="team-info-item">
          💬 <span>Kontakt: <strong style="color: #60A5FA;">${team.leaderTag}</strong></span>
        </div>
      </div>

      <div class="team-leader">
        <div class="leader-info">
          <h4>Teamleitung</h4>
          <div class="name">${team.leader}</div>
        </div>
        <a href="${team.discordLink}" target="_blank" rel="noopener noreferrer" class="team-join-btn" style="background-color: ${team.gameColor}20; color: ${team.gameColor}; border-color: ${team.gameColor}40;">
          Beitreten →
        </a>
      </div>
    </div>
  `).join('');

  setupScrollAnimations();
}

function setupTeamFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;

      const teamsGrid = document.getElementById('teamsGrid');
      const cards = teamsGrid.querySelectorAll('.team-card');

      cards.forEach((card) => {
        card.classList.add('hidden');
      });

      setTimeout(() => {
        renderTeams(filter);
      }, 150);
    });
  });
}

function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
}

function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#' && href !== '#home') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

function setupGameCardFlips() {
  const gameCards = document.querySelectorAll('.game-card-flip');

  gameCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.btn-discord')) {
        card.classList.toggle('flipped');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createEnhancedStarfield();
  loadStatistics();
  renderTeams();
  setupTeamFilters();
  setupMobileMenu();
  setupSmoothScroll();
  setupNavbarScroll();
  setupScrollAnimations();
  setupGameCardFlips();

  document.querySelectorAll('section').forEach((section) => {
    const heading = section.querySelector('h2');
    const subtitle = section.querySelector('.section-subtitle');

    if (heading) {
      heading.classList.add('fade-in-up');
    }
    if (subtitle) {
      subtitle.classList.add('fade-in-up');
    }
  });

  setupScrollAnimations();
});

window.addEventListener('resize', () => {
  const starfield = document.getElementById('starfield');
  if (starfield) {
    const wasLarge = starfield.children.length > 100;
    const isLarge = window.innerWidth >= 768;

    if (wasLarge !== isLarge) {
      starfield.innerHTML = '';
      createEnhancedStarfield();
    }
  }
});
