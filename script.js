// Teams Data
const teamsData = [
  {
    id: 1,
    name: 'Clash Royale Elite',
    game: 'Clash Royale',
    gameColor: '#3B82F6',
    leader: 'EliteKing',
    leaderTag: 'EliteKing#7891',
    description: 'Wettbewerbsorientiertes Team mit fokus auf Turniere und Ladder-Erfolge. Wir trainieren täglich und unterstützen uns gegenseitig beim Erreichen höherer Trophen.',
    achievement: 'Top 1000 Global',
    members: 42,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 2,
    name: 'CoC Builders',
    game: 'Clash of Clans',
    gameColor: '#DC2626',
    leader: 'BuildMaster',
    leaderTag: 'BuildMaster#4521',
    description: 'Strategisch denkender Clan mit Fokus auf Kriegserfolg und fortgeschrittene Bauplatzierung. Für erfahrene Spieler, die Clan Wars ernst nehmen.',
    achievement: 'Crystal League II',
    members: 58,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 3,
    name: 'Brawl Team Stars',
    game: 'Brawl Stars',
    gameColor: '#F97316',
    leader: 'StarChaser',
    leaderTag: 'StarChaser#1234',
    description: 'Casual und kompetitiv! Wir spielen alle Modi und helfen neuen Spielern, ihre Lieblings-Brawler zu meistern.',
    achievement: 'Gold I',
    members: 35,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 4,
    name: 'E-Sports Champions',
    game: 'E-Sports',
    gameColor: '#FCD34D',
    leader: 'ProLeader',
    leaderTag: 'ProLeader#9876',
    description: 'Unser kompetitives E-Sports-Team: League of Legends, Valorant und mehr. Wir nehmen an Turnieren teil und suchen motivierte Spieler!',
    achievement: 'Regional Champion 2024',
    members: 28,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 5,
    name: 'Minecraft Creative',
    game: 'Minecraft',
    gameColor: '#10B981',
    leader: 'BuilderPro',
    leaderTag: 'BuilderPro#5555',
    description: 'Zusammen erschaffen wir epische Welten! Von Survival bis Creative - hier kann jeder bauen und spielen.',
    achievement: 'Creative Masters',
    members: 67,
    discordLink: 'https://discord.gg/starsunited'
  },
  {
    id: 6,
    name: 'Fortnite Squad',
    game: 'Fortnite',
    gameColor: '#7C3AED',
    leader: 'VictorRoyale',
    leaderTag: 'VictorRoyale#2022',
    description: 'Skill-basiertes Team mit Fokus auf Arena, Turniere und neue Spieler. Trainingseinheiten wöchentlich!',
    achievement: 'Champion League',
    members: 44,
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

  if (!isMobile) {
    setInterval(() => {
      createShootingStar();
    }, 3000 + Math.random() * 4000);
  }
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
